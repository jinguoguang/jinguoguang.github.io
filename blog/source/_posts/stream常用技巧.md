---
title: Stream常用技巧
date:
  '[object Object]': null
excerpt: 摘要
tags:
  - Hexo
  - Fluid
categories:
  - Diary
  - Life
index_img: /img/example.jpg
banner_img: /img/index.jpg
abbrlink: 824ac3d0
---



1.统计符合条件的元素个数

#### 使用stream流筛选出List集合中符合条件的实体对象

注意：使用findFirst()方法返回的是符合条件的第一个元素，使用findAny()方法在多线程并发访问下是符合条件的任意元素

示例:

```java
public static void main(String[] args) {
        List<UserInfo> list = new ArrayList<>();
        UserInfo info1 = new UserInfo("a","11");
        UserInfo info2 = new UserInfo("b","22");
        UserInfo info3 = new UserInfo("c","33");
        list.add(info1);
        list.add(info2);
        list.add(info3);
        list.forEach(System.out::println);
        System.out.println("------------");
        //筛选出符合条件的数据
        UserInfo userInfo = list.stream().filter(s -> s.getUserName().equals("a")).findFirst().orElse(null);
        System.out.println(userInfo);
    }
```

输出:

```java
UserInfo{userName='a', age='11'}
UserInfo{userName='b', age='22'}
UserInfo{userName='c', age='33'}
------------
UserInfo{userName='a', age='11'}

进程已结束,退出代码0
```





Stream操作分类
Stream的操作可以分为两大类：中间操作、终结操作

中间操作可分为：

无状态（Stateless）操作：指元素的处理不受之前元素的影响
有状态（Stateful）操作：指该操作只有拿到所有元素之后才能继续下去
终结操作可分为：

短路（Short-circuiting）操作：指遇到某些符合条件的元素就可以得到最终结果
非短路（Unshort-circuiting）操作：指必须处理完所有元素才能得到最终结果
Stream结合具体操作，大致可分为如下图所示：

![img](https://zibbo-blog.oss-cn-beijing.aliyuncs.com/blog/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3l5MzM5NDUyNjg5,size_16,color_FFFFFF,t_70.png)
