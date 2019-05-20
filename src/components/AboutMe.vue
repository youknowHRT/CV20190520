<template>
    <div class="aboutme">
        <div class="top_column"></div>
        <div class="avator">
            <img src="..\assets\avator.jpg" alt="">
        </div>
        <div class="myInfo">
            <span class="name">黄俊彦</span>
            <p>前端，用严谨的代码诠释感性的界面。选择在这条路上笃行，Never Retreat。</p>
            <p>
                <span class="highlight important">教育背景:</span>上海第二工业大学 英语专业 <strong>本科</strong>
            </p>
            <p>
                <span>工作经历:</span>之前从事广告媒介工作，决定转行。目前自学前端技术中
            </p>
            <p>
                <span class="highlight important">求职意向:</span> <strong>前端开发</strong>
            </p>
            <p>在项目开发过程中迸发<strong>高昂的学习热情，拥抱新技术。</strong> </p>
            <p><strong>Stay hungry, Stay foolish</strong></p> 
        </div> 
    </div>
</template>

<script>
export default {
   name:"AboutMe",
   data() {
      return {
      }
   },
}
</script>

<style>
    .aboutme{
        height: inherit;
        display: flex;
        flex-direction: column;
        width: 100%;
    }   
    .top_column{
        height: 110px;
        width: inherit;
        background: #00b7a8
    }
    .avator{
        margin-top: -80px;
        align-self:center
        /* display: flex;
        justify-content: center */
    }
    .avator img{
        height: 175px;
        width: 175px;
        border-radius: 50%
    }
    .myInfo{
        display: inline-flex;
        flex-direction: column;
        margin:0
    }
    .myInfo >span,.myInfo >p{
        display: inline-flex;
        justify-content: center;
        padding-top:15px;
        line-height:30px;
    }
    .myInfo >span:nth-child(1){
        font-size: 40px;
        margin-bottom: 20px;
    }
    .highlight.important {
        color: #E91E63;
    }
    .myInfo strong{
        color: #252728
    }
</style>
