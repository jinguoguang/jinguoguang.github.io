---
title: Stream常用技巧
excerpt: 摘要
tags:
  - Java
  - Stream
categories:
  - 教程
index_img: >-
  https://img2.baidu.com/it/u=2005414671,3555880494&fm=253&fmt=auto&app=138&f=JPEG?w=450&h=250
abbrlink: ccf67fbd
---

# 一、查询方法

## 1.1 forEach()

示例:

```java

```

输出：

```java

```

## 1.2 filter(T -> boolean)

示例:获取用户为“a”的用户列表。

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
        UserInfo userInfo = list.stream().filter(
          s -> s.getUserName().equals("a"))
          .collect(Collectors.toList());
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

## 1.3 findAny() 和 findFirst()

注意：findFirst() 和 findAny() 都是获取列表中的第一条数据，但是findAny()操作，返回的元素是不确定的，对于同一个列表多次调用findAny()有可能会返回不同的值。使用findAny()是为了更高效的性能。如果是数据较少，串行地情况下，一般会返回第一个结果，如果是并行（parallelStream并行流）的情况，那就不能确保是第一个。

例如：使用parallelStream并行流，findAny() 返回的就不一定是第一条数据。

```java
//parallelStream方法能生成并行流，使用findAny返回的不一定是第一条数据
User user = userList.parallelStream().filter(
  u -> u.getName().startsWith("king"))
  .findAny().orElse(null);
```

## 1.4 map(T -> R) 和 flatMap(T -> Stream)

使用 map() 将流中的每一个元素 T 映射为 R（类似类型转换）。

使用 flatMap() 将流中的每一个元素 T 映射为一个流，再把每一个流连接成为一个流。

示例:使用 map() 方法获取用户列表中的名称列。

```java

```

## 1.5 distinct()

使用 distinct() 方法可以去除重复的数据。

## 1.6 limit(long n) 和 skip(long n)

limit(long n) 方法用于返回前n条数据，skip(long n) 方法用于跳过前n条数据。



# 二、判断方法

## 2.1 anyMatch(T -> boolean)

使用 anyMatch(T -> boolean) 判断流中是否有一个元素匹配给定的 T -> boolean 条件。

## 2.2 allMatch(T -> boolean)

使用 allMatch(T -> boolean) 判断流中是否所有元素都匹配给定的 T -> boolean 条件。

# 三、统计方法

## 3.1 reduce((T, T) -> T) 和 reduce(T, (T, T) -> T)

使用 reduce((T, T) -> T) 和 reduce(T, (T, T) -> T) 用于组合流中的元素，如求和，求积，求最大值等。

## 3.2 mapToInt(T -> int) 、mapToDouble(T -> double) 、mapToLong(T -> long) 

int sumVal = userList.stream().map(User::getAge).reduce(0,Integer::sum)；计算元素总和的方法其中暗含了装箱成本，map(User::getAge) 方法过后流变成了 Stream 类型，而每个 Integer 都要拆箱成一个原始类型再进行 sum 方法求和，这样大大影响了效率。针对这个问题 Java 8 有良心地引入了数值流 IntStream, DoubleStream, LongStream，这种流中的元素都是原始数据类型，分别是 int，double，long。3.3 counting() 和 count()

## 3.3 counting() 和 count()

 使用 counting() 和 count() 可以对列表数据进行统计。

## 3.4 summingInt()、summingLong()、summingDouble()

用于计算总和，需要一个函数参数。

## 3.5 averagingInt()、averagingLong()、averagingDouble()

用于计算平均值。

## 3.6 summarizingInt()、summarizingLong()、summarizingDouble()

这三个方法比较特殊，比如 summarizingInt 会返回 IntSummaryStatistics 类型。

## 3.7 BigDecimal类型的统计

对于资金相关的字段，通常会使用BigDecimal数据类型。

# 四、排序方法

## 4.1 sorted() / sorted((T, T) -> int)

如果流中的元素的类实现了 Comparable 接口，即有自己的排序规则，那么可以直接调用 sorted() 方法对元素进行排序，如 Stream。反之, 需要调用 sorted((T, T) -> int) 实现 Comparator 接口。

# 五、分组方法

## 5.1 groupingBy

使用 groupingBy() 将数据进行分组，最终返回一个 Map 类型。

## 5.2 多级分组

groupingBy 可以接受一个第二参数实现多级分组。

## 5.3 分组汇总



# 六、示例

```
import java.util.Random;
import org.json.JSONObject;

public class RandomJson {

    // 部门列表
    private static final String[] DEPARTMENT_LIST = { "研发部", "市场部", "人事部", "客服部" };
    private static final Random RANDOM = new Random();

    // 生成随机 JSON 数据
    public static JSONObject generateRandomJson() {
        JSONObject userData = new JSONObject();
        int userId = RANDOM.nextInt(90000) + 10000;
        String name = "user" + userId;
        String gender = RANDOM.nextBoolean() ? "男" : "女";
        int age = RANDOM.nextInt(43) + 18;
        String department = DEPARTMENT_LIST[RANDOM.nextInt(DEPARTMENT_LIST.length)];
        double salary = RANDOM.nextDouble() * (30000 - 8000) + 8000;
        userData.put("user_id", userId);
        userData.put("name", name);
        userData.put("gender", gender);
        userData.put("age", age);
        userData.put("department", department);
        userData.put("salary", salary);
        return userData;
    }

    // 测试代码
    public static void main(String[] args) {
        JSONObject userJson = generateRandomJson();
        System.out.println(userJson.toString());
    }
}
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

# 参考

【1】https://blog.csdn.net/yy339452689/article/details/110956119

【2】http://t.csdn.cn/TUoiB
