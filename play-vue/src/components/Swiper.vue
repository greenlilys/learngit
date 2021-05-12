<template>
  <section class="swiper">
    <el-carousel :interval="5000" height="600px" arrow="always">
      <el-carousel-item v-for="(v,i) in swiperList" :key="i">
        <img :src="v.imgUrl" class="img">
      </el-carousel-item>
    </el-carousel>
    <div class="report">
      <h1>2020年企业福利报告</h1>
      <button @click="navGuarantee">查看</button>
    </div>
  </section>
</template>
<script>

import { reactive, toRefs } from 'vue'
import { useRouter } from 'vue-router'
export default {
  setup() {
    const router = useRouter()
    const state = reactive({
      swiperList: [
        { imgUrl: require('@/assets/img/banner1.png') },
        { imgUrl: require('@/assets/img/banner2.jpg') },
        { imgUrl: require('@/assets/img/banner3.png') }
      ]
    })
    function navGuarantee() {
      router.push({path:'/guarantee'})
    }
    return {
      ...toRefs(state),
      navGuarantee
    }
  }
}
</script>
<style lang="scss" scoped>
.swiper {
  width: 100%;
  position: relative;  
  .img {
    height: 100%;
    width: 100%;
  }
  .report {
    position: absolute;
    z-index:1000;
    top: 50%;
    left:50%;
    transform: translate(-50%,-50%);
    width: 1200px;
    h1 {
      color: #36577f;
      line-height: 120px;
      width: 100%;
      text-align: center;
      background: rgba(255, 255, 255, 0.8);
      font-size:50px;
      color:#36577F;
    }
    button {
      width: 180px;
      height: 60px;
      background: #42a3ec;
      font-size: 28px;
      color: #fff;
      margin-top: 60px;
      margin-left:50%;
      transform: translateX(-50%);
      cursor: pointer;
    }
  }
}
</style>