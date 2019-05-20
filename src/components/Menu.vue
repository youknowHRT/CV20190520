<template>
    <div class="menu">
        <p class="title">Jason's Resume</p>
        <div class="catalogue">       
            <router-link v-for="(item,index) in linkTo" :to="item.path" :key="index">
                <span class="catalogue_tag" :class="active==index?'bthColor':''"
                    @click="btnOnclick(index)">
                    {{item.name}}&nbsp;&nbsp;&nbsp;<small class="small_eng">{{item.nameToEn}}</small>
                </span>
            </router-link>
        </div>
        <div class="iconGroup">
            <a href="mailto:15921363438@163.com">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-E-mail"></use>
                </svg>
            </a>
            <a href="https://www.jianshu.com/u/07869d0bbfa1">
                <svg class="icon" aria-hidden="true" >
                    <use xlink:href="#icon-bokezhuanjia"></use>
                </svg>
            </a>
            <a href="https://github.com/youknowHRT">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-github"></use>
                </svg>
            </a>
            <a href="javascript:;" class="weixin">
                <img src="https://i.loli.net/2019/05/20/5ce2b85327e7b93794.jpg" alt="二维码">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-weixin"></use>
                </svg>
            </a>
        </div>
    </div>
</template>

<script>
export default {
   name:"Menu",
   data() {
      return {
          active:0,
          linkTo:[
            {path:'/aboutme',name:'个人',nameToEn:'About Me'},
            {path:'/portfolio',name:'项目',nameToEn:'Portfolio'},
            {path:'/technology',name:'技能',nameToEn:'Technology Stack'},
            {path:'/contact',name:'联系',nameToEn:'Contact'},
          ]
      }
   },
   methods:{
       btnOnclick(index){
        this.active=index
       }
   }
}
</script>

<style>

.catalogue_tag{
    display: flex;

    padding: 10px 0 10px 30px;
    margin:10px 0 ;
    line-height:24px;
    text-align: left;
    color: #fafafa;
    
    font-size: 18px;
    background-image: linear-gradient(
    to right,
    transparent 50%,
    rgba(233, 30, 99, 0.69) 50%
    );
    background-size: 200%;
    transition: all 0.6s;
}
.catalogue_tag.bthColor{
    color:#F4CD2A
}
.catalogue_tag:hover{
    background-position: -100%;
    color: #4DC3C0
}
.small_eng{
    font-size: 14px;
}

.title{
    font-family:  arial, Helvetica;
    display: block;
    padding: 35px 5px;
    color: #FAFAFA;
    font-size: 30px;
    text-align: center;
    font-weight: 200;
}
.menu{
    background: linear-gradient(135deg, #757e81 0, #222831 100%);
    height: inherit;
    display: flex;
    flex-direction: column;
    /* flex-wrap: wrap */
}

.icon {
    width: 2.5em; height: 2.5em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
    margin: 3px;
}
.iconGroup {
    /* display: inline-flex; */
    margin-top: 150px
}

.weixin{
    position: relative
}
.weixin img {
    position: absolute;
	z-index: 99;
	top: -170px;
	right: 38px;
	width: 120px;
	height: 120px;
	transform: scale(0);
	transform-origin: top right;
	opacity: 0;
	/* border: .3125rem solid #0085ba; */
	border-radius: .25rem;
	transition: all .4s ease-in-out;
}
.weixin:hover img {
	transform: scale(1);
	opacity: 1;
}
</style>
