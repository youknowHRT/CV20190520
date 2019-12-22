<template>
  <div class="portfolio">
    <h1>Portfolio</h1>

    <section class="work">
      <h5>Vue实现CNode社区</h5>
      <img src="../assets/cnode.png" alt>
      <ul class="portfolio_info">
        <li>
          使用Vue写的CNode社区网站，基本实现了该站的阅读浏览等简单功能。
          主要学习了解了Vue组件的注册使用，router跳转及监测，
          过滤器，父子组件通信，计算属性等技术。
          同时也学习了如何用Axios插件来异步获取数据。
        </li>
        <li>技术栈:Vue CLi + Axios</li>
        <hr>
        <li>
          <a href alt="js"></a>
          <a href alt="vue"></a>
          <span>
            <a href="https://github.com/youknowHRT/cnode">Github</a>
          </span>
          <span>
            <a href="https://youknowhrt.github.io/cnode/dist/index.html#/">Try it</a>
          </span>
        </li>
      </ul>
    </section>
    <section class="work">
      <h5>有赞商城</h5>
      <img src="../assets/youzan.jpg" alt>
      <ul class="portfolio_info">
        <li>
          项目数据的获取、渲染、触底加载；底部导航组件；轮播组件；分类页功能实现；列表页、详情页、购物车的开发；路由配置；地址列表和地址表单的开发；组件的数据通信方式；状态管理
        </li>
        <li>技术站:Yarn + Vue CLi + vue-router + Axios + Vuex</li>
        <li>工具:RAP2 Mock.js</li>
        <hr>
        <li>
          <a href alt="js"></a>
          <a href alt="vue"></a>
          <span>
            <a href="https://github.com/youknowHRT/youzanShoppingMarket">Github</a>
          </span>
          <span>
            <a href="https://youknowhrt.github.io/youzanShoppingMarket/dist/">Try it</a>
          </span>
        </li>
      </ul>
    </section>
    <section class="work">
      <h5>炫彩画板</h5>
      <img src="../assets/scrawl.png" alt>
      <ul class="portfolio_info">
        <li>
          简单实现了一个Canvas画板，并且适配了移动端。
          功能包括涂鸦，橡皮擦，清屏，下载以及多种颜色的切换等。
          有稍微用到一点jQuery来帮助简单获取DOM节点。
        </li>
        <li>技术栈:Canvas + jQuery</li>
        <hr>
        <li>
          <a href alt="js"></a>
          <a href alt="vue"></a>
          <span>
            <a href="https://github.com/youknowHRT/scrawl">Github</a>
          </span>
          <span>
            <a href="https://youknowhrt.github.io/scrawl/index.html">Try it</a>
          </span>
        </li>
      </ul>
    </section>
     <section class="work">
      <h5>刀风定时器-微信小程序</h5>
      <img src="../assets/timer.jpg" alt>
      <ul class="portfolio_info">
        <li>
          使用wxml和wxs制作的定时器小程序。
          <br/>
          比较简单的应用，由一个主页面和计时器倒计时以及主题选择三个页面构成，不涉及登录，点开直接使用。
        </li>
        <li>技术栈:wxml + wxs</li>
        <hr>
        <li>
          <a href alt="js"></a>
          <a href alt="vue"></a>
          <span>
            <a href="https://github.com/youknowHRT/dotaThemeAlarm">Github</a>
          </span>
          <span>
            <a href="https://github.com/youknowHRT/dotaThemeAlarm">Try it</a>
          </span>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  name: "Portfolio",
  data() {
    return {};
  }
};
</script>
    
<style>
.portfolio {
  display: flex;
  flex-flow: column;
  align-items: center;
}
.portfolio h1 {
  font-size: 50px;
  font-weight: 200;
  letter-spacing: 0.1em;
  padding-top: 50px;
  line-height: 50px;
}
.work {
  width: 60%;
  margin: 15px;
  padding: 12px;
  box-shadow: 4px 4px 28px -5px rgba(51, 51, 51, 1);
  border-radius: 4px;
  background: white;
}
.work ul {
  font-size: 14px;
}
.work h5 {
  margin: 15px;
}
.work ul >li{
    margin-bottom: 10px;
}
.work ul > li > span {
  float: right;
  line-height: 30px;
  width: auto;
  padding: 0 11px;
  min-width: 70px;
  height: 32px;
  border-radius: 3px;
  border: 1px solid #d5d6d8;
  margin: 12px 0px 0px 5px;
}
.work ul > li > span > a {
  color: #a5a7aa;
  display: block;
  width: 100%;
  height: 100%;
  font-size: 14px;
  font-weight: bold;
  text-decoration: none;
  text-align: center
}
.work > img {
  width: 100%;
}
</style>
