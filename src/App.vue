<template>
  <div id="app">
      <div class="sidebar">
        <Menu></Menu>  
      </div> 
      <div class="main">
          <router-view ></router-view>
      </div>
  </div>
</template>

<script>
import Menu from './components/Menu'
export default {
  name: 'App',
  components:{
    Menu
  }
}
</script>

<style>
*{
  box-sizing: border-box;
  margin:0;
  padding:0
}
ul,li{
  list-style: none
}
#app {
  font-family: "PingFang SC",'微软雅黑 Light', Helvetica, Arial, sans-serif;
  display: flex;
  color: #585858;
  height: 100vh;
  flex-direction:row
}
.sidebar{
  /* float: left; */
  height:inherit;
  width: 20%;
  text-align: center
}
.main{
  /* float: left; */
  /* background:#9f8dd9; */
  height:inherit;  
  width: 80%;
  overflow-x:hidden;
  overflow-y:scroll;
  background-color: #fbfaf0;
}

</style>
