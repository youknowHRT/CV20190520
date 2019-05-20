<template>
    <div class="technology">
        <h1 class="title">Skill</h1>
        <div class="description">
            <ul class="des_block">
                <li>
                    掌握常用HTML标签，理解语义化标签，DOM结构和操作，熟悉标准DOM事件流。
                    掌握CSS核心概念，如
                    <span class='highlight emphasize'>块级元素</span>和
                    <span class='highlight emphasize'>行内元素</span>、
                    <span class='highlight emphasize'>盒模型</span>、
                    <span class='highlight emphasize'>文档流</span>、
                    <span class='highlight emphasize'>浮动定位</span>、
                    <span class='highlight emphasize'>Flex布局</span>。拥有
                    <span class='highlight emphasize'>像素级</span> 还原设计稿的能力。具有
                    <span class='highlight emphasize'>平均水准之上</span> 的审美，追求设计的优雅。
                </li>
                <li>
                    熟练掌握原生Javascript，掌握重要概念如：
                    <span class='highlight emphasize'>原型</span>，
                    <span class='highlight emphasize'>闭包</span>，
                    <span class='highlight emphasize'>作用域链</span>，
                    <span class='highlight emphasize'>面向对象</span>，
                    <span class='highlight emphasize'>异步流程控制</span>等。
                </li>
                
            </ul>
            <ul class="des_block">
              <li>
                    熟悉Vue框架及相关流行库的使用，<span class='highlight important'>理解重要概念</span>如：生命周期，异步更新，性能优化，虚拟DOM，数据响应式等。
                    能够使用 Vue 全家桶开发项目。
                </li>
                <li>
                    熟悉<span class='highlight emphasize'>HTTP协议</span>及浏览器<span class='highlight emphasize'>渲染原理</span>。
                </li>
                <li>
                    了解<span class='highlight emphasize'>CMD & AMD</span>机制以及<span class='highlight emphasize'>Webpack</span>基本配置。
                </li>
               
                <li>
                    追求风格优雅，整洁的代码。 <span class='highlight emphasize'>无分号，空格缩进</span>拥护者。
                </li>
            </ul>
        </div>
        <div class="technology-tag">
            <div class="techList">
                <div class="tag expert">HTML5</div>
                <div class="tag expert">CSS3</div>
                <div class="tag familiar">SASS</div>
                <div class="tag familiar">JavaScript</div>
            </div>
            <div class="techList">
                <div class="tag expert">Vue</div>
                <div class="tag expert">Canvas</div>
                <div class="tag expert">Bootstrap</div>
                <div class="tag expert">Mock.js</div>
            </div>
            <div class="techList">
                <div class="tag expert">AJAX</div>
                <div class="tag expert">HTTP</div>
                <div class="tag familiar">Webpack</div>
            </div>
            <div class="techList">
                <div class="tag expert">Git</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
   name:"Technology",
   data() {
      return {
      }
   },
}
</script>

<style scoped>
.technology{
  display: flex;
  flex-direction: column
}
.title{
  font-size: 50px;
  font-weight: 200;
  letter-spacing: 0.1em;
  padding-top: 50px;
  line-height: 50px;
  color: #585858
  }
.description {
  display: flex;
  /* justify-content: space-around; */
}
.description .des_block {
  margin: 0 50px;
  -ms-flex-preferred-size: calc(100% - 200px);
  flex-basis: calc(100% - 200px);
  text-align: left;
  padding: 0 1rem;
}
.des_block li {
  list-style: circle;
  margin: 1rem 0;
  line-height: 2rem;
  font-size: 1.1rem;
}
    .highlight {
  font-weight: 400;
  background: #EEEEEE;
  margin: 1em;
  border: 1px solid #cfd8dc;
  border-radius: 3px;
  margin: 0;
}
.highlight.emphasize {
  color: #2196f3;
}

.highlight.important {
  color: #E91E63;
}

/* tag */
.technology-tag {
  margin: 50px auto;
  display: flex;
  flex-direction: column;

}

.technology-tag h1 {
  font-size: 50px;
  color: #252728;
  font-weight: 100;
  margin-top: 0;
  margin-bottom: 55px;
  line-height: 1;
  letter-spacing: 0.1em;
  padding-top: 50px;
}

.technology-tag .techList {
  margin: 15px auto;
}

.techList .tag {
  font-size: 1.2rem;
  background-color: #607d8b;
  color: #FAFAFA;
  border-radius: 3px;
  display: inline-block;
  padding: 2px 8px;
  margin-right: 3px;
  margin-bottom: 3px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 10px,
    rgba(0, 0, 0, 0.23) 0px 3px 10px;
}

.techList .tag.familiar {
  opacity: 0.5;
}
</style>
