<template>
    <div class="contactPart">
        <div class="item_box">
            <div class="cont_item">
                <svg class="icon_c" aria-hidden="true">
                    <use xlink:href="#icon-mail"></use>
                </svg>
                <p>
                    a15921363438@gmail.com
                </p>
            </div>
            <div class="cont_item">
                 <svg class="icon_c" aria-hidden="true">
                    <use xlink:href="#icon-dianhuazixunhuawuzongheguanlibl"></use>
                </svg>
                <p>
                    15921363438
                </p>
            </div>
            <div class="cont_item">
                <svg class="icon_c" aria-hidden="true">
                    <use xlink:href="#icon-QQ"></use>
                </svg>
                <p>
                    1021300769
                </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
   name:"Contact",
   data() {
      return {
      }
   },
}
</script>

<style>
.contactPart{
    display: flex;
    /* flex-direction: column; */
    justify-content: center;
    align-items: center;
    height: inherit;
}
.item_box{
    display:flex;
    flex-direction: column
}
.cont_item{
    line-height: 50px;
    font-size: 30px;
    display: inline-flex;
    margin:10px 0
}
.icon_c {
    width: 1.5em; height: 1.5em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
    margin-right: 15px
}

</style>
