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