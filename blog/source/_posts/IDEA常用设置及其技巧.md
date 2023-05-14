---
title: IDEA常用设置及其技巧
excerpt: IDEA 作为Java开发工具的后起之秀，几乎以碾压之势把其他对手甩在了身后，主要原因还是归功于：好用；虽然有点重，但依旧瑕不掩瑜，内置了非常多的功能，大大提高了日常的开发效率，下面汇总了常用的使用小技巧，学会之后，让你的撸码效率直接起飞...
tags:
  - 开发工具
categories:
  - 生产工具
index_img: https://img0.baidu.com/it/u=3480684146,3936777977&fm=253&fmt=auto&app=138&f=JPEG?w=799&h=500
abbrlink: 4f2f0829
date: 2023-05-14 13:55:19
---

# 一、常用设置

## 1.设置提示词忽略大小写

把这个勾去掉，(有的idea版本是选择选项 选择none即可)

![image-20230514140010097](https://zibbo-blog.oss-cn-beijing.aliyuncs.com/blog/202305141400256.png)

## 2.显示方法分隔符
方便查看方法与方法之间的间隔，在代码不规范的项目中 很好用！

![image-20230514140135967](https://zibbo-blog.oss-cn-beijing.aliyuncs.com/blog/202305141401097.png)

## 3.自动导包、自动移除没用的包

![image-20230514140224885](https://zibbo-blog.oss-cn-beijing.aliyuncs.com/blog/202305141402385.png)

# 二、使用技巧

## 4.预览某个类的代码

例如People类里面的test方法，按`ctrl+shift+a`

例如我们在test类中，有句代码：`People p = new People(); `我们想稍微查看一下People这个类，但是tab已经够多了，`ctrl+alt+b`会打开新的标签，标签多了就混乱了，尤其一堆命名类似的tab,这时候我们可以按`ctrl+shift+i` 实现预览功能，不占tab

![image-20230514140354162](https://zibbo-blog.oss-cn-beijing.aliyuncs.com/blog/202305141403416.png)

# 三、插件推荐