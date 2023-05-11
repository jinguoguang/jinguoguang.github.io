---
title: vuepress搭建个人博客教程
excerpt: VuePress 由两部分组成：第一部分是一个极简静态网站生成器 (opens new window)，它包含由 Vue 驱动的主题系统和插件 API，另一个部分是为书写技术文档而优化的默认主题，它的诞生初衷是为了支持 Vue 及其子项目的文档需求。
tags:
  - 博客
  - vuepress
categories:
  - 教程
index_img: https://img1.baidu.com/it/u=2891324737,2702977437&fm=253&fmt=auto&app=138&f=JPEG?w=1000&h=500
abbrlink: 26960e5d
date: 2022-02-01
---




<!-- more -->

## 安装
```sh
npm install vuepress-theme-reco --save-dev

# or

yarn add vuepress-theme-reco
```
## 引用
```sh
// .vuepress/config.js

module.exports = {
  theme: 'reco'
} 
```
## 本地引用
- 下载
在https://github.com/vuepress-reco/vuepress-theme-reco仓库中下载全部文件
- 使用
在.vuepress文件夹下新建theme文件夹，再将packages文件夹下的vuepress-theme-reco文件夹放入theme;
修改.vuepress文件夹下config.js
```
"theme": require.resolve("./theme/vuepress-theme-reco"),
```

## Front Matter
```sh
---
title: 烤鸭的做法
date: '2019-08-08 08:00:00'
sidebar: 'auto'
categories:
 - 烹饪
 - 爱好
tags:
 - 烤
 - 鸭子
keys:
 - '123456'
publish: false
---
```
:::tip
Front Matter配置

title: 文章标题 date: 时间，如('2019-08-08 08:00:00') sidebar: 'auto' categories:文章分类，可以有多个

tags:文章标签,可以有多个

keys：文章加密密码

sticky :是否置顶，sort type: 降序，可以按照 1, 2, 3, ... 来降低置顶文章的排列优先级

public:是否发布
:::
## 优化页面
1.首页背景全屏显示 修改首页的README.md文件
```css
bgImageStyle: {
  height: '95vh',
  background-color: '#D9AFD9',
  background-image: 'linear-gradient(0deg, #D9AFD9 0%, #97D9E1 100%)'
}
```
2.添加鼠标点击特效 修改.vuepress/config.js中的head，如下所示:
```javascript
[
    "script",
    {
      "src": "https://cdn.jsdelivr.net/gh/forthespada/forthespada.github.io@master/plugin/click_heart.js"
    }
  ]
```
3.首页添加向下滑动按钮 在主页的README.md文件最下面添加下列代码（此方法转载自https://blog.csdn.net/qq_41327483/article/details/119103300。）
```html
<style>
.anchor-down {
  display: block;
  margin: 12rem auto 0;
  bottom: 45px;
  width: 20px;
  height: 20px;
  font-size: 34px;
  text-align: center;
  animation: bounce-in 5s 3s infinite;
  position: absolute;
  left: 50%;
  bottom: 30%;
  margin-left: -10px;
  cursor: pointer;
}
@-webkit-keyframes bounce-in{
  0%{transform:translateY(0)}
  20%{transform:translateY(0)}
  50%{transform:translateY(-20px)}
  80%{transform:translateY(0)}
  to{transform:translateY(0)}
}
.anchor-down::before {
  content: "";
  width: 20px;
  height: 20px;
  display: block;
  border-right: 3px solid #fff;
  border-top: 3px solid #fff;
  transform: rotate(135deg);
  position: absolute;
  bottom: 10px;
}
.anchor-down::after {
  content: "";
  width: 20px;
  height: 20px;
  display: block;
  border-right: 3px solid #fff;
  border-top: 3px solid #fff;
  transform: rotate(135deg);
}
</style>

<script>
export default {
  mounted () {
    const ifJanchor = document.getElementById("JanchorDown"); 
    ifJanchor && ifJanchor.parentNode.removeChild(ifJanchor);
    let a = document.createElement('a');
    a.id = 'JanchorDown';
    a.className = 'anchor-down';
    document.getElementsByClassName('hero')[0].append(a);
    let targetA = document.getElementById("JanchorDown");
    targetA.addEventListener('click', e => { // 添加点击事件
      this.scrollFn();
    })
  },

  methods: {
    scrollFn() {
      const windowH = document.getElementsByClassName('hero')[0].clientHeight; // 获取窗口高度
      document.documentElement.scrollTop = windowH; // 滚动条滚动到指定位置
    }
  }
}
</script>
```
4.首页气泡
- 添加依赖
```sh
npm install vue-canvas-effect -D
```
- 修改theme/vuepress-theme-reco/components/HomeBlog/index.vue
```html
<!-- 首页气泡 (在27行添加如下代码)-->
  <component v-if="bubbles"
             :is="bubbles"
             :options="options">
  </component>
```
- 添加data
```javascript
//首页气泡
    data() {
        return {
            recoShow: false,
            currentPage: 1,
            tags: [],
            bubbles: null
        }
    },
```
- 添加mounted
```javascript
 mounted() {
        import('vue-canvas-effect/src/components/bubbles').then(module => {
            this.bubbles = module.default
        })
        this.recoShow = true
        this._setPage(this._getStoragePage())
    },
```
5.修改置顶的样式
- 修改./vuepress/theme/vuepress-theme-reco/NoteAbstractItem.vue
```html
<span v-if="item.frontmatter.sticky"
              class="settop">置顶
</span>
<div class="title">
    <reco-icon v-if="item.frontmatter.keys"
                       icon="reco-lock" />
    <router-link :to="item.path">{{item.title}}</router-link>
</div>
```
- 添加css样式
```css
.settop {
        position: absolute;
        right: 0;
        top: 0;
        background: $accentColor;
        font-size: 0.6rem;
        color: #fff;
        transform: rotateZ(45deg) translateY(-55px);
        padding: 50px 25px 3px;
    }
```
6.修改文章列表title的鼠标hover样式
- 修改./vuepress/theme/vuepress-theme-reco/NoteAbstractItem.vue
```html
<!-- 添加class name 为 hover-underline-animation-->
<div class="title hover-underline-animation">
            <reco-icon v-if="item.frontmatter.keys"
                       icon="reco-lock" />
            <router-link :to="item.path">{{item.title}}</router-link>
</div>
```
- 添加css样式
```css
.hover-underline-animation {
    display: inline-block;
    position: relative;
    color: $accentColor;
}

.hover-underline-animation:after {
    content: '';
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: $accentColor;
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
}

.hover-underline-animation:hover:after {
    transform: scaleX(1);
    transform-origin: bottom left;
}
```
7.首页添加每日诗词
:::tip
今日诗词 API 是一个可以返回一句古诗词名句的接口。它可以通过图片和 JSON 格式调用。今日诗词 API 根据不同地点、时间、节日、季节、天气、景观、城市进行智能推荐。
:::
- 官方文档地址
https://www.jinrishici.com/doc/
- 修改.vuepress/theme/vuepress-theme-reco/components/HomeBlog/index.vue文件
```html
 <ModuleTransition delay="0.08">
                    <p v-if="recoShowModule && $frontmatter.tagline !== null"
                       class="description">
                        {{ $frontmatter.tagline || $description || 'Welcome to your vuePress-theme-reco site' }}
                    </p>
</ModuleTransition>
<!-- 加入如下代码即可 -->
<ModuleTransition delay="0.12">
        <!-- marquee文字滚动标签
        marquee 参数：
                    BGColor：滚动文本框的背景颜色。
                    direction：滚动方向设置.
                        left - 从右向左。默认值。
                        right - 从左向右。
                        up - 向上。
                        down - 向下
                    scrolldelay： 设置每次滚动时的时间间隔（以毫秒为单位）。默认值为 85。 值越大，滚动速度越慢，通常不设置。
                          注意：除非指定 truespeed 值，否则将忽略任何小于 60 的值，并改为使用 60。
                    scrollamount：一次滚动总的时间量，数字越小滚动越慢。
                    behaviour：滚动的方式设置，三种取值：Scroll（循环滚动） lide（单次滚动）、Alternate（来回滚动）。
                    align：文字的对齐方式设置。可选择Middle(居中)、Bottom(居下)还是Top(居上)。
                    width：滚动文本框的宽度，输入一个数值后从后面的单选框选择in Pixels(按像素)或是in Percent(按百分比)。
                    height：滚动文本框的高度，输入一个数值后从后面的单选框选择in Pixels(按像素)或是in Percent(按百分比)。
                    loop：滚动次数。默认值-1，无限次循环
                    hspace、vspace：前后、上下的空行。
                    onMouseOver='this.stop()' 鼠标放上去则暂停
                    onMouseOut='this.start()' 鼠标移开继续滚动
        -->
        <marquee behavior="alternate" loop="2" direction="right" scrollamount="10">
                <img alt="今日诗词"
                    src="https://v2.jinrishici.com/one.svg"
                    style="max-width:100%; display: block; margin: 0 auto;" />
        </marquee>
</ModuleTransition>
```
方式二:
- 安装
```sh
npm -i jinrishici --save
```
- 使用
修改.vuepress/theme/vuepress-theme-reco/components/HomeBlog/index.vue文件
```html
<!-- html部分 -->
<ModuleTransition delay="0.08">
                    <p v-if="recoShowModule && $frontmatter.tagline !== null"
                       class="description">
                        {{ $frontmatter.tagline || $description || 'Welcome to your vuePress-theme-reco site' }}
                    </p>
                </ModuleTransition>
                <ModuleTransition delay="0.12">
                    <!-- <span class="jinrishici-sentence">正在加载今日诗词....</span> -->
                    <marquee >
                        <span>{{word}}</span>
                    </marquee>
</ModuleTransition>
<!-- javascript部分 -->
 data() {
        return {
            word: '正在加载今日诗词....',
        }
    },
    methods: {
        paginationChange(page) {
            setTimeout(() => {
                window.scrollTo(0, this.heroHeight)
            }, 100)
        },
        getPagesByTags(tagInfo) {
            this.$router.push({ path: tagInfo.path })
        },
        loadSentence: function () {
            jinrishici.load(result => {
                this.word = result.data.content
            }, err => {
                console.log("test");
            })
        }
    },
    mounted: function () { this.loadSentence() }
```
8.修改主页背景为随机图片
修改.vuepress/theme/vuepress-theme-reco/components/HomeBlog/index.vue
```javascript
const url = instance.$frontmatter.bgImage
            ? instance.$withBase(instance.$frontmatter.bgImage)
            : require('../../images/bg.jpg')
// 将上面代码修改为以下形式
const url = instance.$frontmatter.bgImage
            ? instance.$withBase(instance.$frontmatter.bgImage)
            : 'https://picsum.photos/1600/900'
```
:::warning
若使用随机背景图片，README.md文件中bgImageStyle配置如下即可
```css
bgImageStyle: {
  height: '95vh',
}
```
:::
9.使用v-view插件对图片进行放大缩小
- 安装
```sh
npm install v-viewer --save
```
- 使用
修改.vuepress/theme/vuepress-theme-reco/enhanceApp.js如下所示
```javascript
/* eslint-disable no-proto */
import postMixin from '@theme/mixins/posts'
import localMixin from '@theme/mixins/locales'
import Vue from 'vue';
import Viewer from 'v-viewer'
import 'viewerjs/dist/viewer.css'
import { interceptRouterError, fixRouterError404 } from '@theme/helpers/other'
import { install } from 'vue-demi'

export default ({
  Vue,
  siteData,
  isServer,
  router
}) => {
  install(Vue)
  Vue.mixin(postMixin)
  Vue.mixin(localMixin)
  // if (!isServer) {
  //   addScriptToHead('//kit.fontawesome.com/51b01de608.js')
  //   registerCodeThemeCss(siteData.themeConfig.codeTheme)
  // }
  Vue.use(Viewer)
  Viewer.setDefaults({
    Options: { 'inline': true, 'button': true, 'navbar': true, 'title': true, 'toolbar': true, 'tooltip': true, 'movable': true, 'zoomable': true, 'rotatable': true, 'scalable': true, 'transition': true, 'fullscreen': true, 'keyboard': true, 'url': 'data-source' }
  })

  interceptRouterError(router)
  fixRouterError404(router)
}
```
修改.vuepress/theme/vuepress-theme-reco/components/Page.vue如下
```html
<!-- session添加v-viewer指令 -->
<section v-show="recoShowModule"
                     v-viewer>
                <div class="page-title">
                    <h1 class="title">{{$page.title}}</h1>
                    <PageInfo :pageInfo="$page"
                              :showAccessNumber="showAccessNumber"></PageInfo>
                </div>
                <Content class="theme-reco-content" />
</section>
```
:::warning
这里需要关闭vuepress内置的@vuepress/plugin-medium-zoom
```javascript
// 只需将 Options 设置成 false 便可禁用该插件
module.exports = {
  plugins: [
    ["@vuepress/plugin-medium-zoom", false] // disabled.
  ]
};
```
更新:
由于本人是将vuepress-theme-reco主题下载到本地进行修改，所以以上方式并不能关闭vuepress/plugin-medium-zoom插件
解决方式:修改.vuepress/theme/vuepress-theme-reco/index.js如下
```
 plugins: [
    '@vuepress-reco/back-to-top',
    '@vuepress-reco/loading-page',
    '@vuepress-reco/pagation',
    '@vuepress-reco/comments',
    '@vuepress/active-header-links',
    // ['@vuepress/medium-zoom', {
    //   selector: '.theme-reco-content :not(a) > img'
    // }],
```
只需要将vuepress/medium-zoom插件注释或者删除即可
:::

## 插件不生效
在config.js中配置的插件未生效，于是本人根据vuepress加载流程,将插件配置放入了vuepress-theme-reco的index.js中，此时插件生效。

## 部署
- nginx配置文件
```
user  nginx;
worker_processes  1;

error_log  /var/log/nginx/error.log warn;
pid        /var/run/nginx.pid;


events {
    worker_connections  1024;
}


http {
	#开启gzip压缩加速
 	gzip on; 
 	#低于1kb的资源不压缩
  	gzip_min_length 1k; 
  	 #压缩级别【1-9】，越大压缩率越高，同时消耗cpu资源也越多，建议设置在4左右。
  	gzip_comp_level 4;
  	#需要压缩哪些响应类型的资源，多个空格隔开。不建议压缩图片
  	gzip_types text/plain application/javascript application/x-javascript text/javascript text/xml text/css application/json;  
  	 #配置禁用gzip条件，支持正则。此处表示ie6及以下不启用gzip（因为ie低版本不支持）
  	gzip_disable "MSIE [1-6]\."; 
  	#是否添加“Vary: Accept-Encoding”响应头
  	gzip_vary on;  

    include       /etc/nginx/mime.types;
    default_type  application/octet-stream;

    log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
                      '$status $body_bytes_sent "$http_referer" '
                      '"$http_user_agent" "$http_x_forwarded_for"';

    access_log  /var/log/nginx/access.log  main;

    sendfile        on;
    #tcp_nopush     on;

    keepalive_timeout  65;
	server {
		listen  80;
		server_name blog;
 
		location /blog_nation {
			root /usr/share/nginx/html/blog_nation/;
			index  index.html index.htm;
		}
		error_page 500 502 503 504 /50x.html;
		location = /50x.html {
			root /usr/share/nginx/html;
		}
	}
}
```
那如何寻找没有添加的 type 呢？我们打开 Chrome 的「开发者工具」，打开自己的网站，对于「Network」中请求自己网站的包，看是否启动 Gzip，如果「Response Headers」显示「Accept-Ranges: bytes」则表示该包没有开启加速，可以将「Content-Type」后面的值填入「gzip_types」并且使用空格隔开。


