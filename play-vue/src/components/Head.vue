<template>
  <section class="head" :class="{'fixed' : isFixed}">
    <div class="logo-nav">
      <div class="logo">
        <img src="@/assets/img/taikang.png" alt="">
        <img src="@/assets/img/yanglao.png" alt="">
        <img src="@/assets/img/zhongjian.png" alt="">
      </div>
      <ul class="nav">
        <li v-for="(v,i) in navList" :key="i" :class="{ 'active' : v.path === currentPath}" @click="nav(v)">{{v.pageName}}
        </li>
      </ul>
    </div>
    <div class="user">
      <img src="@/assets/img/user.png" alt="">
      <div><span class="hello">你好，</span><span class="name">XXXXX</span></div>
      <a class="exit" href="http://service.pension.taikang.com/main/login.jsp">退出</a>
    </div>
  </section>
</template>

<script>
import { reactive, toRefs, watch} from 'vue'
import { useRouter, useRoute } from 'vue-router'
export default {
  setup() {
    const router = useRouter()
    const route = useRoute()
    const state = reactive({
      navList: [
        { pageName: '首页', index: 0, path: '/home' },
        { pageName: '保单查询', index: 1, path: '/policySearch' },
        { pageName: '理赔查询', index: 2, path: '/payForSearch' }
      ],
      currentPath : '/home',
      isFixed:false
    })
    function nav(v) {
      state.currentPath = v.path
      router.push({ path: v.path })
    }
    fixHead()
    function fixHead() {
      window.onscroll = function () {  
          let scrollTop = document.documentElement.scrollTop || document.body.scrollTop; 
          state.isFixed = scrollTop > 60            
        }
    }
    watch(() => route.path,(newValue,oldValue) => {
      state.currentPath = newValue
      console.log(oldValue)
    })
   
    return {
      ...toRefs(state),
      nav,
      fixHead
    }
  }
}
</script>

<style lang="scss" scoped>
.fixed{
  position:fixed;
  z-index:2000;
  top:0;
  left:0;
}
.head {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 60px;
  width: 100%;
  padding-left: 104px;
  padding-right: 140px;
  box-sizing: border-box;
  font-size: 16px;
  color: $normalColor;
  background:#fff;
  transition:top 1s;
  box-shadow: 0 8px 8px 0 rgba(153, 153, 153, 0.18);
  .logo {
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    img {
      margin-right: 20px;
    }
    img:nth-of-type(1){
      height:30px;
    }
    img:nth-of-type(2),img:nth-of-type(3){
      height:20px;
    }
  }
  .nav {
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 100%;
    li {
      margin-right: 6px;
      padding: 4px 8px;
      cursor: pointer;
      white-space: nowrap;
    }
    .active {
      background: #e0e1e4;
      color: #1471d1;
    }
  }
  .logo-nav {
    display: flex;
    flex-direction: row;
  }
  .user {
    display: flex;
    flex-direction: row;
    height: 100%;
    align-items: center;
    white-space: nowrap;
    img {
      width: 30px;
      height: 30px;
      border-radius: 50%;
      margin-right: 10px;
    }  
    .name{
      margin-right:6px;
    }
    .exit{
      padding-left:6px; 
      border-left:1px solid #c5c6c8;
      cursor:pointer;
      line-height:14px;
    }
    .exit:hover{
      color:#0C83DC;
    }
  }
}
</style>
