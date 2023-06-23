---
title: Stream常用技巧
excerpt: Java8 中的 Stream 是一个新添加的 API，主要用于操作集合和数组中的元素。它使得我们可以更加便捷、高效地对集合或数组中的元素进行筛选、映射、过滤、分组等操作，进而生成一个新的集合或数组。
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
     @Test
    public void foreachTese(){
         //遍历用户列表
         System.out.println("---------------输出方法一-----------------");
         users.forEach(item -> System.out.println(item));
         System.out.println("---------------输出方法二-----------------");
         users.forEach(System.out::println);

     }
```

输出：

```
---------------输出方法一-----------------
User(id=81975, name=张帅, gender=男, age=55, department=人事部, salary=4170.00)
User(id=87030, name=李杰, gender=男, age=59, department=人事部, salary=3960.00)
User(id=20693, name=乔姗姗, gender=女, age=32, department=研发部, salary=4450.00)
User(id=36827, name=刘亚飞, gender=女, age=33, department=研发部, salary=2420.00)
User(id=30706, name=杜十娘, gender=女, age=23, department=客服部, salary=4450.00)
User(id=36827, name=刘鹏飞, gender=男, age=20, department=研发部, salary=2420.00)
User(id=30706, name=杜十娘, gender=女, age=18, department=客服部, salary=4450.00)
---------------输出方法二-----------------
User(id=81975, name=张帅, gender=男, age=55, department=人事部, salary=4170.00)
User(id=87030, name=李杰, gender=男, age=59, department=人事部, salary=3960.00)
User(id=20693, name=乔姗姗, gender=女, age=32, department=研发部, salary=4450.00)
User(id=36827, name=刘亚飞, gender=女, age=33, department=研发部, salary=2420.00)
User(id=30706, name=杜十娘, gender=女, age=23, department=客服部, salary=4450.00)
User(id=36827, name=刘鹏飞, gender=男, age=20, department=研发部, salary=2420.00)
User(id=30706, name=杜十娘, gender=女, age=18, department=客服部, salary=4450.00)
```

## 1.2 filter(T -> boolean)

示例:获取用户年龄大于20岁的用户列表。

```java
    @Test
    public void filterTest(){
        //筛选出大于20岁的用户
         List<User> collect = users.stream().filter(item -> item.getAge() > 20).collect(Collectors.toList());
         collect.forEach(System.out::println);
     }
```

输出:

```java
User(id=81975, name=张帅, gender=男, age=55, department=人事部, salary=4170.00)
User(id=87030, name=李杰, gender=男, age=59, department=人事部, salary=3960.00)
User(id=20693, name=乔姗姗, gender=女, age=32, department=研发部, salary=4450.00)
User(id=36827, name=刘亚飞, gender=女, age=33, department=研发部, salary=2420.00)
User(id=30706, name=杜十娘, gender=女, age=23, department=客服部, salary=4450.00)
```

## 1.3 findAny() 和 findFirst()

#### findFirst

示例：查询一个姓刘的用户

```java
 @Test
    public void findAnyTest(){
         User user = users.stream().filter(item -> item.getName().startsWith("刘")).findFirst().orElse(null);
         System.out.println(user);
     }
```

输出:

```
User(id=36827, name=刘亚飞, gender=女, age=33, department=研发部, salary=2420.00)
```



#### findAny

示例：查询一个姓刘的用户

```
 @Test
    public void findAnyTest(){
         User user = users.stream().filter(item -> item.getName().startsWith("刘")).findAny().orElse(null);
         System.out.println(user);
     }
```

输出：

```
User(id=36827, name=刘亚飞, gender=女, age=33, department=研发部, salary=2420.00)
```

注意：findFirst() 和 findAny() 都是获取列表中的第一条数据，但是findAny()操作，返回的元素是不确定的，对于同一个列表多次调用findAny()有可能会返回不同的值。使用findAny()是为了更高效的性能。如果是数据较少，串行地情况下，一般会返回第一个结果，如果是并行（parallelStream并行流）的情况，那就不能确保是第一个。

例如：使用parallelStream并行流，findAny() 返回的就不一定是第一条数据。

```java
//parallelStream方法能生成并行流，使用findAny返回的不一定是第一条数据
 @Test
    public void findAnyTest(){
         User user = users.parallelStream().filter(item -> item.getName().startsWith("刘")).findAny().orElse(null);
         System.out.println(user);
     }

输出:
User(id=36827, name=刘鹏飞, gender=男, age=20, department=研发部, salary=2420.00)
```

## 1.4 map(T -> R) 和 flatMap(T -> Stream)

#### map

使用 map() 将流中的每一个元素 T 映射为 R（类似类型转换）。

使用 flatMap() 将流中的每一个元素 T 映射为一个流，再把每一个流连接成为一个流。

示例:使用 map() 方法获取用户列表中的名称列。

```java
 @Test
 public void mapTest(){
         List<String> nameList = users.stream().map(User::getName).collect(Collectors.toList());
         nameList.forEach(System.out::println);
 }
```

输出：

```
张帅
李杰
乔姗姗
刘亚飞
肖飞
刘鹏飞
杜十娘
```

#### flatMap

示例:使用 flatMap() 将流中的每一个元素连接成为一个流

```java
@Test
public void flatMapTest(){
        List<String> cityList = new ArrayList<String>();
        cityList.add("北京；上海；深圳；");
        cityList.add("浙江；西安；杭州；");

        //分隔城市列表，使用 flatMap() 将流中的每一个元素连接成为一个流。
        cityList = cityList.stream()
                .map(city -> city.split("；"))
                .flatMap(Arrays::stream)
                .collect(Collectors.toList());

        //遍历城市列表
        cityList.forEach(System.out::println);
}
```

输出：

```
北京
上海
深圳
浙江
西安
杭州
```



## 1.5 distinct()

使用 distinct() 方法可以去除重复的数据。

示例：去除列别中重复的部门数据

```java
 @Test
 public void distinctTest(){
        List<String> collect = users.stream().map(User::getDepartment).distinct().collect(Collectors.toList());
        collect.forEach(System.out::println);
 }
```

输出：

```
人事部
研发部
客服部
```



## 1.6 limit(long n) 和 skip(long n)

limit(long n) 方法用于返回前n条数据；skip(long n) 方法用于跳过前n条数据。

示例：跳过第一条数据，取三位员工的信息

```java
@Test
public void limitAndSkip(){
        //跳过第一条数据，取前三位员工
        List<User> collect = users.stream().skip(1).limit(3).collect(Collectors.toList());
        collect.forEach(System.out::println);
}
```

输出：

```
User(id=87030, name=李杰, gender=男, age=59, department=人事部, salary=3960.00)
User(id=20693, name=乔姗姗, gender=女, age=32, department=研发部, salary=4450.00)
User(id=36827, name=刘亚飞, gender=女, age=33, department=研发部, salary=2420.00)
```

# 二、判断方法

## 2.1 anyMatch(T -> boolean)

使用 anyMatch(T -> boolean) 判断流中是否有一个元素匹配给定的 T -> boolean 条件。

示例：查看员工列表中是否包含名叫刘亚飞的员工

```java
@Test
public void anyMatchTest(){
        boolean flag = users.stream().anyMatch(item -> item.getName().equals("刘亚飞"));
        System.out.println(flag);
}
```

输出：

```
true
```

## 2.2 allMatch(T -> boolean)

使用 allMatch(T -> boolean) 判断流中是否所有元素都匹配给定的 T -> boolean 条件。

示例：判断员工薪水是否都大于5000

```java
@Test
public void allMatchTest(){
    boolean flag = users.stream().allMatch(item -> item.getSalary().compareTo(new BigDecimal(5000)) > 0);
    System.out.println(flag);
}
```

输出：

```
false
```

## 2.3 noneMatch(T -> boolean)

使用 noneMatch(T -> boolean) 流中是否没有元素匹配给定的 T -> boolean 条件。

示例：判断员工中没有童工

```java
 @Test
  public void  noneMatchTest(){
        boolean flag = users.stream().noneMatch(item -> item.getAge() < 18);
        System.out.println(flag);
  }
```

输出：

```
true
```

ps:该公司合法经营未使用童工

# 三、统计方法

## 3.1 reduce((T, T) -> T) 和 reduce(T, (T, T) -> T)

使用 reduce((T, T) -> T) 和 reduce(T, (T, T) -> T) 用于组合流中的元素，如求和，求积，求最大值等。

示例：求出最低薪水、最高薪水以及薪水总和

```java
 @Test
 public void reduceTest()
 {
     BigDecimal minSalary = users.stream().map(User::getSalary).reduce(BigDecimal::min).get();
     BigDecimal maxSalary = users.stream().map(User::getSalary).reduce(BigDecimal::max).get();
     BigDecimal sumSalary = users.stream().map(User::getSalary).reduce(BigDecimal::add).get();
     System.out.println("minSalary = " + minSalary);
     System.out.println("maxSalary = " + maxSalary);
     System.out.println("sumSalary = " + sumSalary);
 }
```

输出：

```
minSalary = 2420.00
maxSalary = 4450.00
sumSalary = 26320.00
```



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

示例：根据部门对用户列表进行分组。

```java
@Test
public void groupByTest()
{
    Map < String, List < User >> listMap = users.stream().collect(Collectors.groupingBy(User::getDepartment));
    listMap.forEach((key, Value) - >
    {
        System.out.println(key);
        Value.forEach(System.out::println);
        System.out.println("----------------------------------------------------------------------------");
    });
}
```

输出：

```
研发部
User(id=20693, name=乔姗姗, gender=女, age=32, department=研发部, salary=4450.00)
User(id=36827, name=刘亚飞, gender=女, age=33, department=研发部, salary=2420.00)
User(id=36827, name=刘鹏飞, gender=男, age=20, department=研发部, salary=2420.00)
----------------------------------------------------------------------------
人事部
User(id=81975, name=张帅, gender=男, age=55, department=人事部, salary=4170.00)
User(id=87030, name=李杰, gender=男, age=59, department=人事部, salary=3960.00)
----------------------------------------------------------------------------
客服部
User(id=30706, name=肖飞, gender=女, age=23, department=客服部, salary=4450.00)
User(id=30706, name=杜十娘, gender=女, age=18, department=客服部, salary=4450.00)
----------------------------------------------------------------------------
```



## 5.2 多级分组

groupingBy 可以接受一个第二参数实现多级分组。

示例：根据部门和性别对用户进行分组

```java
@Test
public void groupByTest1()
{
    Map < String, Map < String, List < User >>> collect = users.stream().collect(Collectors.groupingBy(User::getDepartment, Collectors.groupingBy(User::getGender)));
    collect.forEach((key, map) - >
    {
        System.out.println(key + ":");
        map.forEach((key2, user) - >
        {
            System.out.println(key2);
            user.forEach(System.out::println);
        });
        System.out.println("--------------------------------------------------------------");
    });
}
```

输出：

```
研发部:
女
User(id=20693, name=乔姗姗, gender=女, age=32, department=研发部, salary=4450.00)
User(id=36827, name=刘亚飞, gender=女, age=33, department=研发部, salary=2420.00)
男
User(id=36827, name=刘鹏飞, gender=男, age=20, department=研发部, salary=2420.00)
--------------------------------------------------------------
人事部:
男
User(id=81975, name=张帅, gender=男, age=55, department=人事部, salary=4170.00)
User(id=87030, name=李杰, gender=男, age=59, department=人事部, salary=3960.00)
--------------------------------------------------------------
客服部:
女
User(id=30706, name=肖飞, gender=女, age=23, department=客服部, salary=4450.00)
User(id=30706, name=杜十娘, gender=女, age=18, department=客服部, salary=4450.00)
--------------------------------------------------------------
```



## 5.3 分组汇总



# 六、示例





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

【2】https://blog.csdn.net/wangshiqi666/article/details/129378095
