<template>
  <div id="app">
    <!--<img src="./assets/logo.jpg">-->
   <router-view name="menu"/>
    <router-view name="video"/>
  </div>
</template>

<script>
  import menu from '@/components/menu'
  import video from '@/components/video'
export default {
  name: 'App',
  components:{
    menu,
    video
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
</style>
