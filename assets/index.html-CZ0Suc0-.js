import{_ as i,c as a,a as n,o as e}from"./app-Ci3CPhDb.js";const l={};function t(p,s){return e(),a("div",null,s[0]||(s[0]=[n(`<h2 id="一、变量" tabindex="-1"><a class="header-anchor" href="#一、变量"><span>一、变量</span></a></h2><h3 id="_1-声明变量" tabindex="-1"><a class="header-anchor" href="#_1-声明变量"><span>1.声明变量</span></a></h3><p>在Go语言中，变量是通过两种不同的方式创建的：</p><p><strong>（一）使用var关键字</strong>：在Go语言中，变量是使用特定类型的<em>var</em>关键字创建的，该关键字与变量名关联并赋予其初始值。</p><p><strong>语法</strong>：<code>var variable_name type = expression</code></p><div class="hint-container warning"><p class="hint-container-title">注意</p><p>在上述语法中，<em>类型（type）</em> 或*=*表达式可以删除，但不能同时删除变量声明中的两个。</p><p>如果删除了类型，则变量的类型由表达式中的值初始化确定。</p></div><p><strong>示例</strong>：</p><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">//变量的概念</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">package</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;"> main</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">import</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &quot;</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">fmt</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">func</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> main</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">()</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">    //变量声明和初始化</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">    //显式类型</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">    var</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> myvariable1</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 20</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">    var</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> myvariable2</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">nhooo</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">    var</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> myvariable3</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 34.80</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">    // Display the value and the</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">    // type of the variables</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">    fmt</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">Printf</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">myvariable1的值是 : </span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">%d\\n</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> myvariable1</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">    fmt</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">Printf</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">myvariable1的类型是 : </span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">%T\\n</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> myvariable1</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">    fmt</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">Printf</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">myvariable2的值是 : </span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">%s\\n</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> myvariable2</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">    fmt</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">Printf</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">myvariable2的类型是 : </span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">%T\\n</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> myvariable2</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">    fmt</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">Printf</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">myvariable3的值是 : </span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">%f\\n</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> myvariable3</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">    fmt</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">Printf</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">myvariable3的类型是 : </span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">%T\\n</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> myvariable3</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>输出</strong>：</p><div class="language- line-numbers-mode" data-ext="" data-title=""><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>myvariable1的值是 : 20</span></span>
<span class="line"><span>myvariable1的类型是 : int</span></span>
<span class="line"><span>myvariable2的值是 : nhooo</span></span>
<span class="line"><span>myvariable2的类型是 : string</span></span>
<span class="line"><span>myvariable3的值是 : 34.800000</span></span>
<span class="line"><span>myvariable3的类型是 : float64</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>（二）使用短变量声明：使用短变量声明**来声明在函数中声明和初始化的局部变量。</p><p><strong>语法</strong>：<code>variable_name:= expression</code></p><p><strong>注意</strong>：请不要在<code>:=</code>和<code>=</code>之间混淆，因为<code>:=</code>是声明，而 <code>= </code>是赋值。<code>:=</code>只能用在函数体中，不可使用<code>:=</code>定义全局变量。</p><h3 id="_2-多变量量的声明" tabindex="-1"><a class="header-anchor" href="#_2-多变量量的声明"><span>2.多变量量的声明</span></a></h3><p>单行写法</p><div class="language- line-numbers-mode" data-ext="" data-title=""><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>var x,y int =100,l200</span></span>
<span class="line"><span>var a,b,c=100,&quot;Hello  World&quot;,3.14</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>多行写法</p><div class="language- line-numbers-mode" data-ext="" data-title=""><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>var(</span></span>
<span class="line"><span>  a int =100</span></span>
<span class="line"><span>  b string =&quot;Go&quot;</span></span>
<span class="line"><span>  c bool =true</span></span>
<span class="line"><span>)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="二、常量" tabindex="-1"><a class="header-anchor" href="#二、常量"><span>二、常量</span></a></h2><h3 id="_1-声明常量" tabindex="-1"><a class="header-anchor" href="#_1-声明常量"><span>1.声明常量</span></a></h3><p>常量使用 const 关键字来声明。例如：</p><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">const</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> pi</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 3.14159</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"> // 浮点型常量</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">const</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> version</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">v1.0</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"> // 字符串常量</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">const</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> isFinal</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> true</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"> // 布尔型常量</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Go 编译器可以根据初始化表达式的类型自动推断常量的类型。如果省略了类型，则编译器会根据值来决定其类型。除此之外，可以显式指定类型。例如：</p><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">const</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> price</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> int</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 99</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"> // 显式指定类型为 int</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="_2-多变量申明" tabindex="-1"><a class="header-anchor" href="#_2-多变量申明"><span>2.多变量申明</span></a></h3><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">const</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> (</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">    min</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> int</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 0</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">    max</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> int</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 100</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">//或者</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">const</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> (</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">a</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> b</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> c</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 1</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 2</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 3</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"> // 注意这种写法没有类型声明，依赖于值的类型</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container warning"><p class="hint-container-title">注意</p><p>注意事项: 常量不一定要初始化，因为它们不会改变，所以在声明时可以不需要赋值。</p><p>常量可以用于在程序中需要固定值的地方，比如数学常数、版本号等。</p><p>常量的值必须是编译时常量（compile-time constant），即在编译期间就可以确定其值。</p></div>`,27)]))}const k=i(l,[["render",t],["__file","index.html.vue"]]),d=JSON.parse('{"path":"/article/7o025spr/","title":"Go语言学习-常量和变量","lang":"zh-CN","frontmatter":{"title":"Go语言学习-常量和变量","createTime":"2024/10/28 10:34:57","permalink":"/article/7o025spr/","description":"一、变量 1.声明变量 在Go语言中，变量是通过两种不同的方式创建的： （一）使用var关键字：在Go语言中，变量是使用特定类型的var关键字创建的，该关键字与变量名关联并赋予其初始值。 语法：var variable_name type = expression 注意 在上述语法中，类型（type） 或*=*表达式可以删除，但不能同时删除变量声明中的...","head":[["meta",{"property":"og:url","content":"https://www.zibbo.xyz/article/7o025spr/"}],["meta",{"property":"og:site_name","content":"程序员飞鱼"}],["meta",{"property":"og:title","content":"Go语言学习-常量和变量"}],["meta",{"property":"og:description","content":"一、变量 1.声明变量 在Go语言中，变量是通过两种不同的方式创建的： （一）使用var关键字：在Go语言中，变量是使用特定类型的var关键字创建的，该关键字与变量名关联并赋予其初始值。 语法：var variable_name type = expression 注意 在上述语法中，类型（type） 或*=*表达式可以删除，但不能同时删除变量声明中的..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-02-08T08:40:03.000Z"}],["meta",{"property":"article:modified_time","content":"2025-02-08T08:40:03.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Go语言学习-常量和变量\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-02-08T08:40:03.000Z\\",\\"author\\":[]}"]]},"headers":[],"readingTime":{"minutes":2.21,"words":664},"git":{"updatedTime":1739004003000,"contributors":[{"name":"jinguoguang","username":"jinguoguang","email":"1264651321@qq.com","commits":2,"avatar":"https://gravatar.com/avatar/7919acd278b3b51446815c1d3fdc82c39b58b863964693935e4f898f57ff5139?d=retro"}]},"autoDesc":true,"filePathRelative":"1.专业技能/Go/4.Go语言学习-常量和变量.md","categoryList":[{"id":"c3bc05","sort":1,"name":"专业技能"},{"id":"53d34f","sort":10007,"name":"Go"}],"bulletin":false}');export{k as comp,d as data};
