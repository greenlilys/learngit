<template>
  <Swiper></Swiper>
  <section class="policies">
        <div class="policy">
          <div class="descrip"> <img src="@/assets/img/policy.png" alt=""> <span>已完成的保单</span> </div>
          <div class="number"><span>120</span>笔</div>
        </div>
        <div class="claims">
          <div class="descrip"> <img src="@/assets/img/claims.png" alt=""> <span>已完成的理赔</span> </div>
          <div class="number"><span>60</span>笔</div>
        </div>     
  </section>
  <section class="introduction">
    <h1> <img src="@/assets/img/blueicon.png"><span>公司简介</span></h1>
    <h2>创造价值&nbsp;&nbsp;&nbsp;追求卓越</h2>
    <p>以人为本，制度管理，专业化服务，致力于企业价值与员工价值的共同提升<br />
      实施一流管理，掌握一流技术，培育一流队伍，提供一流服务，打造一流业绩</p>
  </section>
  <section class="imgshow">
    <el-row type="flex" justify="center">
      <el-col :span="18" class="imgs">
        <img src="@/assets/img/img_1.png" alt="">
        <img src="@/assets/img/img_2.png" alt="">
        <img src="@/assets/img/img_3.png" alt="">
      </el-col>
    </el-row>
  </section>
  <section class="bg">
  </section>
</template>

<script>
import Swiper from "@/components/Swiper.vue";
export default ({
  setup() {
  },
  components: {
      Swiper
  }

})
</script>
<style lang="scss" scoped>
.bg {
  transform: translateY(-50%);
  background:url('@/assets/img/bg.png') no-repeat;
  width:100%;
  height:420px;
}

.imgshow {
  position: relative;
  z-index: 1000;
  margin-top: 96px;
  .imgs {
    display: flex;
    flex-direction: row;
    justify-content: center;
    img {
      margin-right: 30px;
      width: 380px;
      height: 334px;
    }
    img:last-child {
      margin-right: 0;
    }
  }
}
.introduction {
  margin-top: 100px;
  p {
    font-size: 16px;
    color: #666;
    line-height: 32px;
    text-align: center;
    margin-top: 8px;
  }
  h2 {
    font-size: 20px;
    color: #000;
    margin-top: 42px;
    font-weight: bolder;
  }
  h2,
  h1 {
    text-align: center;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  h1 {
    img {
      margin-right: 10px;
    }
    span {
      font-size: 18px;
      color: #000;
      border-bottom: 3px solid #00a0e5;
    }
  }
}
.policies {
  width: 100%;
  margin-top: 74px;
  display: flex;
  flex-direction: row;
  justify-content: center;
    .policy,
    .claims {
      width: 574px;
      height: 238px !important;
      border-radius: 20px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      font-size: 30px;
      color: #fff;
    }
    .policy {
      background: #00a0e5;
      margin-right: 40px;
    }
    .claims {
      background: #f39800;
    }
    .descrip {
      display: flex;
      flex-direction: row;
      align-items: center;
      img {
        margin-right: 20px;
      }
    }
    .number {
      margin-top: 30px;
      span {
        font-size: 60px;
        font-weight: bolder;
        padding-right: 16px;
      }
    }
  
}
</style>
