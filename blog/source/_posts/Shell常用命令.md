---
title: Shell常用命令
excerpt: 记录常用shell命令
tags:
  - shell
categories:
  - 笔记
index_img: https://img1.baidu.com/it/u=3628738380,3343151747&fm=253&fmt=auto&app=138&f=JPEG?w=899&h=500
abbrlink: cdf8534a
date: 2023-05-20 17:54:33
---
### 查询占用端口的进程,并关闭进程
```shell
#查看端口被占用的进程
lsof -i tcp:10082
kill -9 进程号
```

### 将当天本人的 git  提交记录生成txt文档

```shell
filename="log_$(date +"%Y%m%d").txt"
git log --author=jinguoguang --since=midnight --no-merges --pretty=format:"%s" | sort | uniq >> /Users/zhangshun/shell/$filename

# 查找当天（自午夜以来）由 YourName 提交的 Git 记录。
# 排除合并提交，只保留非合并提交。
# 使用 format 参数输出每一行记录的短 SHA 值和提交说明。
# 使用 sort 和 uniq 命令过滤出相同的记录。
# 将过滤后的记录追加到 /Users/zhangshun/shell/log_当天日期.txt 文件中。
#请将 YourName 替换为你自己的 Git 用户名，并在执行命令前检查文件路径是否正确。
```

