---
title: Docker使用手册
excerpt: Docker 是基于Go语言实现的开源容器项目。利用操作系统本身已有的机制和特性，可以实现远超传统虚拟机的轻量级虚拟化（通俗解释：Docker内嵌极小型系统，例如Linux只有5M多，windows也是）。它是内核级的虚拟化。期望达到使项目运行环境“一次封装，到处运行的目的”。
tags:
  - 教程
  - Docker
  - 运维
categories:
  - 运维
index_img: https://img2.baidu.com/it/u=2705144990,3944592429&fm=253&fmt=auto&app=138&f=JPEG?w=634&h=371
abbrlink: 7c29175f
date: 2020-07-03 21:01:37
---
# 一、Docker简介
> Docker 是基于Go语言实现的开源容器项目。利用操作系统本身已有的机制和特性，可以实现远超传统虚拟机的轻量级虚拟化（通俗解释：Docker内嵌极小型系统，例如Linux只有5M多，windows也是）。它是内核级的虚拟化。期望达到使项目运行环境“一次封装，到处运行的目的”。

> 在Docker里面可以设置使用Windows还是Linux系统，默认是用Linux系统，基于Ubuntu的，只有5M多，包含了最基本功能。
> 利用docker创建的运行环境叫做docker容器，容器是通过docker镜像创建的，docker镜像文件可以放在私有仓库中也可以放在共有仓库中。
> 官网地址：https://www.docker.com
DockerFile指令
```DockerFile
FROM		# 基础镜像，依赖于谁
MAINTAINER	# 作者：姓名+邮箱
RUN			# 镜像构建的时候需要运行的命令
ADD			# 添加，可以添加其他镜像
WORKDIR		# 镜像的工作目录
VOLUME		# 挂载的目录
EXPOSE		# 暴露的端口
CMD			# 指定这个容器启动的时候需要运行的命令，最后一个才会生效
ENTRYPOINT	# 指定这个容器启动的时候需要运行的命令，可以追加
ONBUILD		# 当dockerfile被构建的时候触发的指令
COPY		# 类似ADD，讲文件拷贝到镜像中
ENV			# 构建的时候设置环境变量

ARG			# 创建镜像过程中使用的变量
LABEL		# 为生成的镜像添加元数据标签信息
STOPSIGNAL	# 退出的信号值
HEALTHCHECK	# 配置所启动容器如何进行健康检查
SHELL		# 指定默认shell类型
```

# 二、Linux系统中Docker 安装与启动

## 1.安装

### 1.1.下载docker-ce repo

```
curl https://download.docker.com/linux/centos/docker-ce.repo -o /etc/yum.repos.d/docker-ce.repo
```

### 1.2. 安装依赖

```
yum install -y https://download.docker.com/linux/fedora/30/x86_64/stable/Packages/containerd.io-1.2.6-3.3.fc30.x86_64.rpm
```

### 1.3. 安装docker-ce

```
yum install -y docker-ce
```

## 2.启动

### 2.1. 启动命令

```
systemctl start docker
```

### 2.2. 查看Docker状态

```
docker info
```

结果如下:

![image-20211003144315752](https://gitee.com/ambitions-king/picture/raw/master/img/image-20211003144315752.png)

## 3.镜像加速器配置

默认情况下Docker从Docker Hub上下载镜像资源，但速度很慢，可以通过配置国内的镜像加速器来解决。

### 3.1. 使用阿里云镜像

网址：https://www.aliyun.com/

### 3.2. 进入容器镜像服务

![img](https://gitee.com/ambitions-king/picture/raw/master/img/wps57F3.tmp.jpg)

### 3.3.  进入管理控制台

![img](https://gitee.com/ambitions-king/picture/raw/master/img/wpsA606.tmp.jpg)

### 3.4. 进入镜像加速器

![img](https://gitee.com/ambitions-king/picture/raw/master/img/wps5050.tmp.jpg)

### 3.5. 选择对应的OS并配置

![img](https://gitee.com/ambitions-king/picture/raw/master/img/wpsDEF5.tmp.jpg)

### 3.6. 验证镜像加速器是否配置成功

通过docker info命令验证镜像加速器配置，结果如下：

![image-20211003145815941](https://gitee.com/ambitions-king/picture/raw/master/img/image-20211003145815941.png)

# 三、安装redis

## 1.获取redis镜像

```
docker pull redis:6.0.5
```

![image-20211003150145019](https://gitee.com/ambitions-king/picture/raw/master/img/image-20211003150145019.png)

## 2.查看本地镜像

```
docker images
```

![image-20211003150246436](https://gitee.com/ambitions-king/picture/raw/master/img/image-20211003150246436.png)

### 3.从官网获取redis.config配置文件

```
# 进入文件夹
cd /local/docker
wget http://download.redis.io/redis-stable/redis.conf   //下载redis配置文件
vim redis.conf  //修改配置文件
```

> 1.注释bind 127.0.0.1。这里限制redis只能本地访问，注释掉之后使redis可以外部访问；
> 2.protected-mode yes 修改为 protected-mode no。默认yes，开启保护模式，限制仅本地访问，改为no之后使redis可以外部访问；
> 3.daemonize no 。默认no，当前界面将进入redis的命令行界面，exit强制退出或者关闭连接工具(putty,xshell等)都会导致redis进程退出。 改为yes意为以守护进程方式启动，该模式下，redis会在后台运行，并将进程pid号写入至redis.conf选项pidfile设置的文件中，此时redis将一直运行，除非手动kill该进程，如果改为yes会使以配置文件方式启动redis的方式失败。
> 4.requirepass pwd。这里的pwd是自己设置的密码，可以不开启，不开启表示无需密码即可连接。
> 5.databases 16。默认数据库个数16，可以不修改。
> 6.appendonly no。默认 no，表示不开启aof方式持久化，改为appendonly yes表示开启aof，可以不修改该配置。

文件夹如下:

![image-20211003183929810](https://gitee.com/ambitions-king/picture/raw/master/img/image-20211003183929810.png)

### 4. 启动redis

```
docker run \
--name redis \
-p 6379:6379 \
--restart unless-stopped \
-v /local/docker/redis/data:/data \
-v /local/docker/redis/conf/redis.conf:/etc/redis/redis.conf \
-d redis redis-server /etc/redis/redis.conf \
```

### 5. 查看redis运行是否成功

```
#查看redis容器运行
docker ps |grep redis 
#进入redis容器中
docker exec -it redis /bin/bash
#使用redis客户端
redis-cli
#设置密码
config set requirepass 123456
```

![image-20211003220721877](https://gitee.com/ambitions-king/picture/raw/master/img/image-20211003220721877.png)

# 四、安装mysql

## 1. 拉取镜像

```
docker pull mysql:8.0.16
```

## 2. 创建数据目录和配置文件

```
[root@king docker]# mkdir -p mysql
[root@king docker]# cd mysql/
[root@king mysql]# mkdir data
[root@king mysql]# mkdir conf
[root@king mysql]# chmod -R 755 /local/docker/mysql
[root@king mysql]# cd conf/
[root@king conf]# vim my.cnf
```

添加以下内容到上述创建的配置文件中

```shell
[client]

#socket = /usr/mysql/mysqld.sock

default-character-set = utf8mb4

[mysqld]

#pid-file        = /var/run/mysqld/mysqld.pid

#socket          = /var/run/mysqld/mysqld.sock

#datadir         = /var/lib/mysql

#socket = /usr/mysql/mysqld.sock

#pid-file = /usr/mysql/mysqld.pid

datadir = /local/docker/mysql/data

character_set_server = utf8mb4

collation_server = utf8mb4_bin

secure-file-priv= NULL

# Disabling symbolic-links is recommended to prevent assorted security risks

symbolic-links=0

# Custom config should go here

!includedir /etc/mysql/conf.d/

```

## 3.启动创建容器

```
docker run --restart=unless-stopped -d --name mysql \
-v /local/docker/mysql/conf/my.cnf:/etc/mysql/my.cnf \
-v /local/docker/mysql/data:/var/lib/mysql -p 3306:3306 -e MYSQL_ROOT_PASSWORD=123456 mysql:8.0.16
```

查看容器启动情况

```
docker info
```

## 4.修改mysql密码以及可访问主机

- 进入mysql容器内部

```
[root@king conf]# docker exec -it mysql /bin/bash
```

- 连接mysql

  ```
  mysql -uroot -p
  ```

- 使用mysql库

  ```
  use mysql
  ```

- 修改访问主机以及密码等，设置为所有主机可访问

  ```
  ALTER USER 'root'@'%' IDENTIFIED WITH mysql_native_password BY '123456';
  ```

- 刷新

  ```
  flush privileges
  ```


# 五、安装JDK8
## yum安装
```shell
yum install java-1.8.0-openjdk* -y
```
执行过这条命令无需配置，直接可以使用。
## 1.上传文件

将jdk文件上传到/local/upload

## 2.解压压缩包

```
tar zxf jdk-8u311-linux-x64.tar.gz
```

## 3.移动文件

```
mv jdk1.8.0_311 /local/soft/jdk
```

## 4.配置环境变量

> 在linux中/etc/profile此文件为环境变量配置文件。

```
#export PATH USER LOGNAME MAIL HOSTNAME HISTSIZE HISTCONTROL
export JAVA_HOME=/local/soft/jdk
export PATH=$JAVA_HOME/bin:$PATH
```

```
#进入etc文件夹并且编译profile文件
cd /etc && vim profile
```

![image-20211004113003179](https://gitee.com/ambitions-king/picture/raw/master/img/image-20211004113003179.png)

## 5.解析文件

> 不解析，必须通过重启才能生效。只要解析不需要重启了

```
source /etc/profile
```

## 6.查看配置是否成功

```
java -version
```

![image-20211004113221989](https://gitee.com/ambitions-king/picture/raw/master/img/image-20211004113221989.png)

# 六、安装solr

## 1.上传文件

> 上传压缩包solr-8.2.0.tgz到/local/upload中。

## 2.解压

```
[root@king upload]# tar zxf solr-8.2.0.tgz 
```

## 3.移动文件

```
mv solr-8.2.0 /local/soft/solr
```

## 4.Solr常用目录简介

![image-20211004113700431](https://gitee.com/ambitions-king/picture/raw/master/img/image-20211004113700431.png)

> bin目录：可执行文件所在目录。
> dist目录：Solr对外提供的核心、扩展、插件等代码jar文件。
> server目录：Solr搜索应用服务器核心目录。
> server/solr：Solr的索引库所在位置
> server/solr-webapp：Solr的WAR核心应用
> server/etc：Solr的核心配置

## 5.修改启动参数

> 修改启动参数，否则启动时报警告。提示设置SOLR_ULIMIT_CHECKS=false

```
[root@king solr]# cd bin && vim solr.in.sh
```

![img](https://gitee.com/ambitions-king/picture/raw/master/img/wps1976.tmp.jpg)

## 6.启动solr

> Solr内嵌Jetty，直接启动即可。默认监听8983端口。
> Solr默认不推荐root账户启动，如果是root账户启动需要添加-force参数。

```
./solr start -force
```

启动成功如下图所示:

![image-20211004114327791](https://gitee.com/ambitions-king/picture/raw/master/img/image-20211004114327791.png)

==注意:阿里云服务器8983端口放行==

![image-20211004114629744](https://gitee.com/ambitions-king/picture/raw/master/img/image-20211004114629744.png)

## 7.可视化管理界面

> 在浏览器输入ip:8983就可以打开solr可视化管理页面了

![image-20211004114856090](https://gitee.com/ambitions-king/picture/raw/master/img/image-20211004114856090.png)

左侧有5个菜单。分别是：
（1）Dashboard：面板显示Solr的总体信息。
（2）Logging：日志
（3）Core Admin：Solr的核心。类似于数据的Database
（4）Java Perperties：所有Java相关属性。
（5）Thread Dump：线程相关信息。
（6）如果有Core，将显示在此处。

## 8.创建核心(索引库)

==Solr安装完成后默认是没有核心的。需要手动配置。==

**需要在solr/server/solr下新建文件夹，并给定配置文件，否则无法建立。**

### 8.1 新建目录

在 /local/soft/solr/server/solr中新建自定义名称目录。这里我创建了名为blog的目录

```
#进入对应文件夹
[root@king ~]# cd /local/soft/solr/server/solr
#创建blog文件夹
[root@king solr]# mkdir blog
```

### 8.2 复制配置文件

> 在configsets里面包含了_default和sample_techproducts_configs。里面都是配置文件示例。_default属于默认配置，较纯净。sample_techproducts_configs是带有了一些配置示例。

```
[root@king solr]# cp -r configsets/_default/conf/ blog/
```

### 8.3 创建 core

在可视化管理界面填写如下信息

![image-20211004174045581](https://gitee.com/ambitions-king/picture/raw/master/img/image-20211004174045581.png)

最后点击Add Core按钮创建

创建成功结果如下：

![image-20211004174415937](https://gitee.com/ambitions-king/picture/raw/master/img/image-20211004174415937.png)

## 9.安装中文分词器

### 9.1上传文件

上传ik-analyzer-8.2.0.jar到/local/upload文件夹下

### 9.2复制文件

将ik-analyzer-8.2.0.jar文件复制/local/soft/solr/server/solr-webapp/webapp/WEB-INF/lib文件夹下

```shell
[root@king upload]# cp ik-analyzer-8.2.0.jar /local/soft/solr/server/solr-webapp/webapp/WEB-INF/lib/
```

### 9.3修改配置文件

#### 修改managed-schema文件

```shell
[root@king /]# vim /local/soft/solr/server/solr/blog/conf/managed-schema
```

```shell
<fieldType name="text_zh_cn" class="solr.TextField">
            <analyzer>
                    <tokenizer class="org.wltea.analyzer.lucene.IKTokenizerFactory" useSmart="false" conf="ik.conf"/>
                    <filter class="solr.LowerCaseFilterFactory"/>
            </analyzer>
            <analyzer type="query">
                    <tokenizer class="org.wltea.analyzer.lucene.IKTokenizerFactory" useSmart="true" conf="ik.conf"/>
                    <filter class="solr.LowerCaseFilterFactory"/>
            </analyzer>
</fieldType>
<!--自定义字段，类似于设计数据表一样-->
	<!--ID-->
	<!--ID 已经在前面有了-->
	<!--浏览量-->
	<field name="blog_view_count" type="pint" indexed="true" stored="true" required="true" multiValued="false" />
	<!--标题-->
	<field name="blog_title" type="text_zh_cn" indexed="true" stored="true" required="true" multiValued="false" />
	<!--主题-->
	<field name="blog_summary" type="text_zh_cn" indexed="true" stored="true" required="true" multiValued="false" />
	<!--创建时间-->
	<field name="blog_create_time" type="pdate" indexed="true" stored="true" required="true" multiValued="false" />
	<!--标签-->
	<field name="blog_labels" type="pstring" indexed="true" stored="true" required="true" multiValued="false" />
	<!--文章链接-->
	<field name="blog_url" type="pstring" indexed="true" stored="true" required="true" multiValued="false" />
	<!--分类ID-->
	<field name="blog_category_id" type="pstring" indexed="true" stored="true" required="true" multiValued="false" />
	<!--搜索item-->
	<field name="search_item" type="text_zh_cn" indexed="true" stored="true" required="true" multiValued="true" />
	<copyField source="blog_title" dest="search_item"/>
	<copyField source="blog_summary" dest="search_item"/>
	<copyField source="blog_labels" dest="search_item"/>
```

> 排版：Esc 退出编辑状态下：gg=G

![image-20211004220435973](https://gitee.com/ambitions-king/picture/raw/master/img/image-20211004220435973.png)

### 9.4 重启

```
[root@king /]# cd /local/soft/solr/bin/
[root@king bin]# ./solr stop -all
[root@king bin]# ./solr start -force
```

### 9.5 验证

![image-20211004225457462](https://gitee.com/ambitions-king/picture/raw/master/img/image-20211004225457462.png)

![img](https://upload-images.jianshu.io/upload_images/10139744-19785d5c0484474c.jpg)

图片来源于:https://upload-images.jianshu.io/upload_images/10139744-19785d5c0484474c.jpg

### 9.6 删除全部数据

> 1)documents type 选择 XML 
> 2)documents 输入下面语句
>
> ```xml
> <delete><query>*:*</query></delete>
> <commit/>
> ```
>
> 

### 10 使用DockerFile构建solr镜像

#### 10.1 创建solr目录

```sh
mkdir solr
```

#### 10.2 新建docker-compose.yml文件

```yml
version: '3.1'
services:
  solr:
    build: solrWithIKAnalyzer
    restart: always
    container_name: blog_solr
    ports:
      - 8983:8983
```

#### 10.3 将solrWithIKAnalyzer文件夹下的内容全部放入solr文件夹下

solrWithIKAnalyzer文件夹结构如下

![image-20220106095731927](https://gitee.com/jinguoguang/images/raw/master/img/20220106095732.png)

#### 10.4  solrWithIKAnalyzer目录下新建Dockerfile文件

```sh
#新建Dockerfile文件
vim Dockerfile
#填写如下内容
```

```dockerfile
MAINTAINER king
# 创建 Core，切换目录
WORKDIR /opt/solr/server/solr
# 创建目录
RUN mkdir blog_core
# 切换目录
WORKDIR /opt/solr/server/solr/blog_core
# 把这个Core名称添加到配置文件中，这样在前端就可以看到了
RUN echo 'name=blog_core' > core.properties
# 从模版中复制一份出来配置文件出来
RUN cp -r /opt/solr/server/solr/configsets/sample_techproducts_configs/conf/ .
# 进入到容器的lib文件夹
WORKDIR /opt/solr/server/solr-webapp/webapp/WEB-INF/lib
# 中文分词器
RUN cp -r /opt/solr/contrib/analysis-extras/lucene-libs/lucene-analyzers-smartcn-5.5.5.jar .
# 复制两个jar包进去
ADD ik-analyzer-solr5-5.x.jar .
ADD solr-analyzer-ik-5.1.0.jar .
WORKDIR /opt/solr/server/solr-webapp/webapp/WEB-INF
# 复制字典
ADD ext.dic .
ADD stopword.dic .
# 配置扩展字典的配置文件
ADD IKAnalyzer.cfg.xml .
# 增加分词配置
COPY managed-schema /opt/solr/server/solr/blog_core/conf
WORKDIR /opt/solr
```

#### 10.5 在solrWithIKAnalyzer目录下构建

```
docker build -t blog_solr:1.0 .
#注意后面有个小点不要忽视
```

#### 10.6 在solr目录下使用docker-compose启动容器

> Docker Compose是一个用来定义和运行复杂应用的Docker工具。一个使用Docker容器的应用，通常由多个容器组成。使用Docker Compose不再需要使用shell脚本来启动容器。 
> Compose 通过一个配置文件来管理多个Docker容器，在配置文件中，所有的容器通过services来定义，然后使用docker-compose脚本来启动，停止和重启应用，和应用中的服务以及所有依赖服务的容器，非常适合组合使用多个容器进行开发的场景。

##### 安装docker-composr

- 从github上下载docker-compose二进制文件安装


 ```sh
  sudo curl -L https://github.com/docker/compose/releases/download/1.16.1/docker-compose-`uname -s`-`uname -m` -o /usr/local/bin/docker-compose
 ```

  若是github访问太慢，也可以用daocloud下载

```sh
sudo curl -L https://get.daocloud.io/docker/compose/releases/download/1.25.1/docker-compose-`uname -s`-`uname -m` -o /usr/local/bin/docker-compose
```

- 添加可执行权限

 ```sh
  sudo chmod +x /usr/local/bin/docker-compose
 ```

- 测试安装结果

  ```sh
  docker-compose --version
  ```

  

```
#以后台的方式运行容器。不会在终端上打印运行日志
docker-compose up -d
# 停止运行的容器，但不会删除它们。
docker-compose stop
#停止运行的容器，并且会删除已停止的容器以及已创建的所有网络
docker-compose down
```



# 七、minio服务器安装

## 1.安装

### 1.1拉取镜像

```powershell
docker pull minio/minio
```

### 1.2创建并启动容器

```powershell
docker run -d -p 9000:9000 -p 50000:50000 --name minio \
-e "MINIO_ACCESS_KEY=admin" \
-e "MINIO_SECRET_KEY=admin123456" \
-v /local/docker/minio/data:/data \
-v /local/d/minio/config:/root/.minio \
minio/minio server --console-address ":50000" /data
```

### 1.3配置阿里云服务器安全组

![image-20211020210958366](https://gitee.com/ambitions-king/picture/raw/master/img/image-20211020210958366.png)

## 2.登录minio服务器管理控制台

### 2.1创建游客用户

![image-20211020211208054](https://gitee.com/ambitions-king/picture/raw/master/img/image-20211020211208054.png)

![image-20211020211340198](https://gitee.com/ambitions-king/picture/raw/master/img/image-20211020211340198.png)

> 将权限设置为只读

### 2.3创建Bucket

![image-20211020211507476](https://gitee.com/ambitions-king/picture/raw/master/img/image-20211020211507476.png)

### 2.4设置Bucket权限为readwrite

![image-20211020211701191](https://gitee.com/ambitions-king/picture/raw/master/img/image-20211020211701191.png)

![image-20211020211729145](https://gitee.com/ambitions-king/picture/raw/master/img/image-20211020211729145.png)

# 八、MongoDB服务安装

## 1.拉取镜像

```sh
docker pull mongo
```

## 2.创建目录

```
mkdir -p /local/docker/mongo/data
```

## 3.修改目录权限

```sh
chmod 777/local/docker/mongo/data
```

## 4.构建并启动容器

```
docker run -d --name mongodb -v /local/docker/mongo/data:/data/db -p 27017:27017 -e MONGO_INITDB_ROOT_USERNAME=admin -e MONGO_INITDB_ROOT_PASSWORD=admin --privileged=true mongo:latest
```
> 参数说明
> -d 后台运行容器
>
> --name mongodb 运行容器名
>
> -v /mydata/mongodb/datadb:/data/db 挂载目录
>
> -p 27017:27017：将27017映射到外部端口27017 将容器的27017端口映射到主机的27017端口，27017是和宿主机的通信接口，所有docker内部容器的连接使用27017接口，集群配置需连接容器内部27017端口，故最好保持前后端口一致
>
> -e MONGO_INITDB_ROOT_USERNAME=admin 指定用户名
>
> -e MONGO_INITDB_ROOT_PASSWORD=admin 指定密码
>
> --privileged=true 使得容器内的root拥有真正的root权限。否则，container内的root只是外部的一个普通用户权限

## 5.查看mongodb日志

```sh
docker logs mongodb
```

## 6.mongodb随 docker 自启动

```sh
docker update mongodb --restart=always
```

注意：这里的 mongodb是容器的名字，不是镜像的名字。

## 7. 启动|停止|重启

```sh
docker start mongodb

docker stop mongodb

docker restart mongodb
```

注意：这里的 mongodb 是容器的名字，不是镜像的名字。

## 8.进入mongodb (optional)

```sh
docker exec -it mongodb /bin/bash
```



# docker 常用命令

```sh
批量启动容器

docker container start $(docker container ls -a -q) 或 docker start $(docker container ls -a -q) 

批量停止容器

docker container stop $(docker container ls -a -q) 或 docker stop $(docker container ls -a -q) 

批量重启容器

docker container restart $(docker container ls -a -q) 或 docker restart $(docker container ls -a -q) 

批量删除容器

docker container rm $(docker container ls -a -q) 或 docker rm ${docker container ls -a -q}

批量杀死容器

docker container kill $(docker container ls -a -q) 或 docker kill ${docker container ls -a -q}

docker查询所有进程

docker ps -a

docker查询正常运行的进程

docker ps

容器重新命名

docker rename 原容器名称 新容器名称

举例: docker rename blissful_hoover solr
```