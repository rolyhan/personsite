<template>
  <!--<quick-menu :menu-count="count"-->
        <!--:icon-class="icons"-->
        <!--:menu-url-list="list">-->
  <!--</quick-menu>-->
  <quick-menu :menu-count=getCount :icon-class=icons :menu-url-list=list :background-color=backgroundColor :color=color :position=position :is-open-new-tab=getIsOpenNewTab @process=print></quick-menu>
</template>
<script>
import Vue from 'vue'
import quickMenu from 'vue-quick-menu'
import 'font-awesome/css/font-awesome.min.css'
import {Neon , Bubbles} from 'vue-canvas-effect';
export default {
  components: {
    quickMenu,
    Neon,
    Bubbles,
  },
  data() {
      return {
        count:4,
        icons:["fa fa-tv","fa fa-building",
               "fa fa-code","fa fa-youtube"],
        // list:["https://www.baidu.com/",
        //     "http://jd.com",
        //     "http://jd.com",
        //     "http://jd.com"],
        list:[{'isLink':false},{'isLink':true,url:"/doo"},{'isLink':true,url:"/foo"},{'isLink':false}],
        backgroundColor:'#0a93f5',
        color:'#eee',
        position:'top-right',
        isOpenNewTab:false,
        import: null,
      }
  },
  components:{
  'quickMenu':quickMenu
},
  computed:{
    getCount(){
      return Number(this.count)
    },
    getIsOpenNewTab(){
      return Boolean(this.isOpenNewTab)
    }
  },
  methods:{
      print(key){
      if(key===3){
        console.log('please send me an email')
      }
      if(key===0){
          window.open('https://www.baidu.com/')
        }
      }
  }
}
</script>
