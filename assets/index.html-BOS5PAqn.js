import{_ as d,c as r,a as e,o as a}from"./app-Ci3CPhDb.js";const h={};function l(i,t){return a(),r("div",null,t[0]||(t[0]=[e('<h1 id="常用快捷键" tabindex="-1"><a class="header-anchor" href="#常用快捷键"><span>常用快捷键</span></a></h1><h2 id="查找" tabindex="-1"><a class="header-anchor" href="#查找"><span>查找</span></a></h2><table><thead><tr><th>快捷键</th><th>功能介绍</th></tr></thead><tbody><tr><td>Ctrl + F</td><td>在当前文件进行文本查找</td></tr><tr><td>Ctrl + R</td><td>在当前文件进行文本替换</td></tr><tr><td>Shift + Ctrl + F</td><td>在整个项目中进行文本查找</td></tr><tr><td>Shift + Ctrl + R</td><td>在整个项目中进行文本替换</td></tr><tr><td>Shift + Shift</td><td>快速搜索</td></tr><tr><td>Ctrl + N</td><td>查找class（在IDE中定位类定义）</td></tr><tr><td>Ctrl + Shift + N</td><td>查找文件（在IDE中打开指定文件）</td></tr><tr><td>Ctrl + Shift + Alt + N</td><td>查找symbol（查找某个方法名或其他符号）</td></tr></tbody></table><h2 id="跳转切换" tabindex="-1"><a class="header-anchor" href="#跳转切换"><span>跳转切换</span></a></h2><table><thead><tr><th>快捷键</th><th>功能介绍</th></tr></thead><tbody><tr><td>Ctrl + E</td><td>打开最近打开过的文件列表</td></tr><tr><td>Ctrl + Tab</td><td>在打开的文件或选项卡之间切换</td></tr><tr><td>Ctrl + Alt + ←/→</td><td>跳转到上一个/下一个光标历史位置</td></tr><tr><td>Alt + ←/→ 方向键</td><td>切换当前窗口或编辑器中的子选项卡或面板</td></tr><tr><td>Ctrl + G</td><td>跳转到指定的行号</td></tr><tr><td>Ctrl + Alt + B(鼠标左键)</td><td>直接跳转到service的具体实现，不需要经过接口方法</td></tr></tbody></table><h2 id="编码相关" tabindex="-1"><a class="header-anchor" href="#编码相关"><span>编码相关</span></a></h2><table><thead><tr><th>快捷键</th><th>功能介绍</th></tr></thead><tbody><tr><td>Ctrl + W</td><td>逐步扩展选区（从光标所在的单词、语句、代码块逐渐扩大选择范围）</td></tr><tr><td>(Shift + Ctrl) + Alt + J</td><td>选中相同文本（在IDE中查找并同时选中所有匹配的文本）</td></tr><tr><td>Ctrl + C / Ctrl + X</td><td>复制 / 剪切选定的内容</td></tr><tr><td>Ctrl + D</td><td>（某些应用中）复制当前行或选中内容到下一行（在IntelliJ IDEA中是重复当前行或选中内容）</td></tr><tr><td>多行选中后 Tab / Shift + Tab</td><td>通常用于缩进（增加或减少）选中行的缩进量</td></tr><tr><td>Ctrl + Y</td><td>删除整行（在某些IDE中，如IntelliJ IDEA）</td></tr><tr><td>滚轮点击变量/方法/类名</td><td>快速导航至变量、方法或类的定义</td></tr><tr><td>Shift + 点击Tab</td><td>关闭当前标签页（在很多浏览器和IDE中适用）</td></tr><tr><td>Ctrl + Z / Ctrl + Shift + Z</td><td>撤销/重做操作</td></tr><tr><td>Ctrl + Shift + Enter</td><td>自动完成当前语句或添加必要的括号、分号等完成当前表达式</td></tr><tr><td>Alt + Enter</td><td>IntelliJ IDEA中的快速修复或意图操作，针对光标所在问题提供解决方案</td></tr><tr><td>Alt + ↑/↓</td><td>在方法间快速跳转（上下移动光标至前一个或后一个方法定义）</td></tr><tr><td>F2</td><td>跳转到下一个编译错误或警告位置</td></tr><tr><td>Alt + Insert</td><td>代码自动生成，例如getter/setter方法、构造函数、toString()等</td></tr><tr><td>Ctrl + Shift + L</td><td>格式化代码</td></tr><tr><td>Shift + F6</td><td>重构并快速修改标识符名（方法名、变量名、文件名、类名等）</td></tr><tr><td>Ctrl + F6</td><td>在IntelliJ IDEA中，快速修改方法签名（改变方法参数等）</td></tr></tbody></table><h2 id="代码阅读相关" tabindex="-1"><a class="header-anchor" href="#代码阅读相关"><span>代码阅读相关</span></a></h2><table><thead><tr><th>快捷键</th><th>功能介绍</th></tr></thead><tbody><tr><td>Ctrl + P</td><td>显示方法参数提示（在某些IDE中显示方法参数信息，如PyCharm）</td></tr><tr><td>Ctrl + Shift + i</td><td>查看快速文档（在IntelliJ IDEA中打开快速JavaDoc或类型信息）</td></tr><tr><td>Alt + F7</td><td>查找用法，在整个项目中搜索并列出所选变量的所有引用位置</td></tr><tr><td>光标在子类接口名，Ctrl + u</td><td>跳转到父类或超类定义</td></tr><tr><td>Alt + F1 + 1，esc</td><td>（未找到确切对应操作，请核实该组合键功能）</td></tr><tr><td>(Shift) + Ctrl + +/-</td><td>折叠或展开代码块（隐藏或显示当前代码段）</td></tr><tr><td>Ctrl + Shift + ←/→</td><td>移动编辑器窗口或IDE面板的分割线</td></tr><tr><td>Ctrl + (Alt) + B</td><td>跳转到方法的定义或实现位置（在源码中直接定位方法的实现细节）</td></tr><tr><td>Ctrl + H</td><td>显示类的继承结构图或者层级关系（类层次结构查看）</td></tr><tr><td>Ctrl + F12</td><td>显示类成员（快速列出类的所有成员变量、方法及内部类等）</td></tr></tbody></table>',9)]))}const o=d(h,[["render",l],["__file","index.html.vue"]]),c=JSON.parse('{"path":"/article/944cettl/","title":"Idea常用快捷键","lang":"zh-CN","frontmatter":{"createTime":"2024/03/02 20:01:09","title":"Idea常用快捷键","categories":["软件工具"],"excerpt":"hudqwhqwuihduiqfhqiurfiuhhhhhhhhhhhhhhhhhhhhhhhhh","author":"king","tags":["快捷键","IDEA"],"permalink":"/article/944cettl/","description":"常用快捷键 查找 跳转切换 编码相关 代码阅读相关","head":[["meta",{"property":"og:url","content":"https://www.zibbo.xyz/article/944cettl/"}],["meta",{"property":"og:site_name","content":"程序员飞鱼"}],["meta",{"property":"og:title","content":"Idea常用快捷键"}],["meta",{"property":"og:description","content":"常用快捷键 查找 跳转切换 编码相关 代码阅读相关"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-09-27T08:52:27.000Z"}],["meta",{"property":"article:author","content":"king"}],["meta",{"property":"article:tag","content":"快捷键"}],["meta",{"property":"article:tag","content":"IDEA"}],["meta",{"property":"article:modified_time","content":"2024-09-27T08:52:27.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Idea常用快捷键\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-09-27T08:52:27.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"king\\"}]}"]]},"headers":[],"readingTime":{"minutes":3.06,"words":919},"git":{"updatedTime":1727427147000,"contributors":[{"name":"jinguoguang","username":"jinguoguang","email":"1264651321@qq.com","commits":3,"avatar":"https://gravatar.com/avatar/7919acd278b3b51446815c1d3fdc82c39b58b863964693935e4f898f57ff5139?d=retro"}]},"autoDesc":true,"filePathRelative":"2.软件工具/IDEA/常用快捷键.md","categoryList":[{"id":"b554ff","sort":2,"name":"软件工具"},{"id":"bd7eb7","sort":10002,"name":"IDEA"}],"bulletin":false}');export{o as comp,c as data};
