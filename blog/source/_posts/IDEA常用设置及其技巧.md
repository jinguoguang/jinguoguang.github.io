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

## 4.取消tab页单行显示

![image-20230518124544617](https://zibbo-blog.oss-cn-beijing.aliyuncs.com/blog/image-20230518124544617.png)

## 5.双斜杠注释改成紧跟代码头

![image-20230518124742156](https://zibbo-blog.oss-cn-beijing.aliyuncs.com/blog/image-20230518124742156.png)

## 6.创建文件时，自动生成作者和时间信息

![image-20230518125312845](https://zibbo-blog.oss-cn-beijing.aliyuncs.com/blog/image-20230518125312845.png)

## 7.添加背景图片

![image-20230518125103324](https://zibbo-blog.oss-cn-beijing.aliyuncs.com/blog/image-20230518125103324.png)

# 二、常用快捷键

### 一、Search/Replace（查询/替换）

1. Double `⇧` ：查询任何东西
2. `⌘ + F` ：文件内查找
3. `⌘ + R` ：文件内替换
4. `⌘ + ⇧ + F` ：全局查找（根据路径）
5. `⌘ + E` 显示最近打开的文件记录列表
6. `⌘ + ⌥ + ←` / `⌘ + ⌥ + →` ：退回 / 前进到上一个操作的地方
7. `⌘ + ⇧ + ⌫` ：跳转到最后一个编辑的地方
8. `⌘ + ⌥ + B` ：跳转到实现处，在某个调用的方法名上使用会跳到具体的实现处，可以跳过接口
9. `⌘ + U` ：前往当前光标所在方法的父类的方法 / 接口定义
10. `⌘ + F12` ：弹出当前文件结构层，可以在弹出的层上直接输入进行筛选（可用于搜索类中的方法）

### 二、Editing（编辑）

1. `⌃ + I` ：实现方法（实现接口中的方法）
2. `⌘ + /` ：注释/取消注释与行注释
3. `⌘ + ⌥ + /` ：注释/取消注释与块注释
4. `⌃ + ⇧` ：连续向上选中代码块
5. `⌘ + ⌥ + L` ：格式化代码
6. `⌃ + ⌥ + O` ：优化import
7. `⌘ + X` ：剪切当前行或选定的块到剪贴板
8. `⌘ + Z` ：撤销当前操作
9. `⌘ + ⌃ + Z` ：撤销撤销的操作
10. `⌘ + C` ：复制当前行或选定的块到剪贴板
11. `⌘ + V` ：从剪贴板粘贴
12. `⌘ + ⇧ + V` ：从最近复制的的缓冲区中选择粘贴
13. `⌘ + D` ：复制当前行或选定的块
14. `⌘ + ⌫` ：删除当前行或选定的块的行

### 三、Refactoring（重构）

1. `⇧ + F6` ：重命名文件

### 四、Debugging（调试）

1. `F8` ：进入下一步，如果当前行断点是一个方法，则不进入当前方法体内
2. `F7` ：进入下一步，如果当前行断点是一个方法，则进入当前方法体内，如果该方法体还有方法，则不会进入该内嵌的方法中
3. `⇧F7` ：智能步入，断点所在行上有多个方法调用，会弹出进入哪个方法
4. `⇧F8` ：跳出
5. `⌥ + F9` ：运行到光标处，如果光标前有其他断点会进入到该断点
6. `⌥ + F8` ：计算表达式（可以更改变量值使其生效）
7. `⌘ + ⌥ + R` ：恢复程序运行，如果该断点下面代码还有断点则停在下一个断点上
8. `⌘ + F8` ：切换断点（若光标当前行有断点则取消断点，没有则加上断点）
9. `⌘ + ⇧ + F8` ：查看断点信息

### 五、插件：

1. `Command + Shift+ Option + U`: 类继承关系图表
2. `Ctrl + \`: 查找类和方法组合的Controller
3. `Option + S (mac)`: JSON数据快速生成Java实体类

### 六、其他

1. `⇧ + Command + 5` ：截屏

# 三、插件推荐

{% note success %}

提示：安装之后如果没立即生效，IDE重启即可生效。

{% endnote %}

## 1.Chinese Language Pack

idea汉化插件

## 2.Generate all setter

插件描述:该插件作用是可以快速针对已有的model实体对象的属性生产get、set代码，免去开发者在开发过程中get、set属性值时还需要去实体对象中翻查的时间，生成的同时会附带类型默认值。

使用方法:new一个对象然后使用Alt键+Enter(`⌥+Enter`)键即可调出选项。根据所需要选择选项即可。

效果:

![image-20230518135759195](https://zibbo-blog.oss-cn-beijing.aliyuncs.com/blog/image-20230518135759195.png)

# 参考

[1] https://mp.weixin.qq.com/s/UykEJ42d1rf0K5KXMJjwBA

[2]https://mp.weixin.qq.com/s/qjhb968jechggJEKfN-abQ