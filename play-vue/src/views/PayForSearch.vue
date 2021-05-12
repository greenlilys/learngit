<template>
  <Swiper></Swiper>
  <section class="policy">
    <section class="policy-content">
      <section class="policy-nav">
        <div>
          <button v-for="(v,i) in navList" :key="i" :class="{'active' : activeIndex === i}"
            @click="nav(v)">{{v.listName}}</button>
        </div>
        <div class="search">
          <el-input v-model="searchname" class="search-input" placeholder="请输入出险人姓名"></el-input>
          <img src="@/assets/img/search.png" class="search-img" alt="">
        </div>
      </section>
      <section class="policy-list">
        <div class="user-policy" v-for="(v,i) in dataList" :key='i'>
          <div class="user-img">
            <img src="@/assets/img/img_3.png" class="img" alt="">
          </div>
          <div class="for-search">
              <el-descriptions :column="4">
                <el-descriptions-item label="理赔申请号：" :span="4">{{v.num}}</el-descriptions-item>
                <el-descriptions-item label="理赔申请号：">{{v.num}}</el-descriptions-item>
                <el-descriptions-item label="申请人：">{{v.name}}</el-descriptions-item>
                <el-descriptions-item label="收款人账户信息：" :span="1">{{v.accountName}}</el-descriptions-item>
                <el-descriptions-item label="案件信息：">
                  <span class="details" @click="v.showInfo = !v.showInfo">
                    查看详情
                  </span>
                </el-descriptions-item>

                <el-descriptions-item label="出险人：">{{v.outName}}</el-descriptions-item>
                <el-descriptions-item label="申请日期：">{{v.applicationTime}}</el-descriptions-item>
                <el-descriptions-item label="中国银行：" :span='2'>{{v.cardNum}}</el-descriptions-item>

                <el-descriptions-item label="出险日期：" :span='4'>{{v.dangerTime}}</el-descriptions-item>
              </el-descriptions>
              <a class="fontBlue" download
                href="http://service.pension.taikang.com/tkpole/zhongjian/fileDownload/guide-for-java-devs.pdf">查看上传资料</a>
              <img src="@/assets/img/close_case.png" class="status">
              <div class="details-info" v-show="v.showInfo">
                <div class="between">
                  <span><span class="fontBolder">赔案号：</span><span>{{v.num}}</span></span>
                  <span>已支付完成</span>
                </div>
                <div>赔付金额：<span class="fontOrange">{{v.payMoney}}</span></div>
                <div class="steps">
                  <div v-for="(v,i) in statusList" :key="i" class="steps-current">
                    <span></span>
                    <span>{{v.statusName}}</span>
                  </div>
                </div>
                <div><span class="fontBolder">赔案明细</span></div>
                <div><span>保单号：{{v.policyNumber}}</span></div>
                <div class="between">
                  <span>团体医疗保险</span>
                  <span><span>赔付金额：</span><span class="fontOrange">{{v.payMoney}}</span></span>
                </div>
                <div><a class="fontBlue" download
                    href="http://service.pension.taikang.com/tkpole/zhongjian/fileDownload/guide-for-java-devs.pdf">查看赔付详情文件</a>
                </div>
                <img src="@/assets/img/close.png" class="close-icon" @click="v.showInfo = false">
              </div>
          </div>
        </div>
      </section>
    </section>
  </section>
</template>

<script>
import Swiper from "@/components/Swiper.vue";
import { reactive, toRefs } from 'vue'
export default ({
  setup() {
    const state = reactive({
      dataList: [
        {
          num: 5851013295890, name: '齐京安', accountName: '齐京安', outName: '齐京安', 
          applicationTime: '2020-12-30', cardNum: '621790*****2813',
          dangerTime: '2020-12-08', policyNumber: '2051014841373866', payMoney: '￥37.69',
          showInfo:false
        },
        {
          num: 5851013227793, name: '齐京安', accountName: '齐京安', outName: '齐京安', 
          applicationTime: '2020-12-10', cardNum: '621790*****2813',
          dangerTime: '2020-11-27', policyNumber: '2051014841373866', payMoney: '￥637.80',
          showInfo:false
        },
        {
          num: 5851013204391, name: '齐京安', accountName: '齐京安', outName: '齐京安', 
          applicationTime: '2020-12-01', cardNum: '621790*****2813',
          dangerTime: '2020-11-13', policyNumber: '2051014841373866', payMoney: '￥934.62',
          showInfo:false
        }
      ],
      navList: [
        { listName: '处理中', index: 0 },
        { listName: '已完成', index: 1 },
        { listName: '待补充资料', index: 2 },
        { listName: '待提交原件', index: 3 },
        { listName: '已申请', index: 4 }
      ],
      statusList: [
        { statusName: '已申请', index: 0 },
        { statusName: '已受理', index: 1 },
        { statusName: '已结案', index: 2 },
        { statusName: '已给付', index: 3 }
      ],
      activeIndex: 0,
      tableData: [{
        name: '团体医疗保险',
        type: '每半年',
        firstMoney: '100',
        nextData: '2016-05-02',
        myPolicy: '团体医疗保险特约责任'
      }, {
        name: '团体医疗保险',
        type: '每半年',
        firstMoney: '100',
        nextData: '2016-05-02',
        myPolicy: '团体医疗保险特约责任'
      }, {
        name: '团体医疗保险',
        type: '每半年',
        firstMoney: '100',
        nextData: '2016-05-02',
        myPolicy: '团体医疗保险特约责任'
      }],
      searchname: ''
    })
    function nav(v) {
      state.activeIndex = v.index
    }
    function handleCurrentChange() {

    }
    function jumpFirstPage() {

    }
    function jumpLastPage() {

    }
    function jumpPage() {

    }

    return {
      ...toRefs(state),
      nav,
      handleCurrentChange,
      jumpFirstPage,
      jumpLastPage,
      jumpPage
    }
  },
  components: {
    Swiper
  }

})
</script>
<style lang="scss" scoped>
.policy-list {
  margin-bottom: 7px;
  .user-policy {
    display: flex;
    flex-direction: row;
    margin-bottom:10px;
    background:#fff;
    .for-search {
      flex: 1;
      box-sizing: border-box;
      padding-left: 28px;
      padding-right: 50px;
      padding-top: 38px;
      position: relative;
      font-size: 14px;
      .status {
        position: absolute;
        right: 0;
        top: 0;
      }
      .details {
        cursor: pointer;
        color: #297ff6;
      }
      .details-info {
        width: 500px;
        position: absolute;
        z-index:2000;
        top: 106px;
        right: 20px;
        background: #fff;
        box-shadow: 0px 0px 18px 10px rgba(153, 153, 153, 0.15);
        padding: 34px 28px 16px;
        box-sizing: border-box;
        font-size: 14px;
        color: #333;
        display: flex;
        flex-direction: column;
        .close-icon {
          position: absolute;
          width: 12px;
          height: 12px;
          right: 8px;
          top: 8px;
        }
        .between {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
        }
        > div {
          margin-bottom: 8px;
        }
        > div:last-child {
          margin-bottom: 0;
        }
        .steps {
          display: flex;
          flex-direction: row;
          .steps-current {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin: 10px 50px 10px 0;
            span:nth-of-type(1) {
              width: 10px;
              display: block;
              height: 10px;
              border-radius: 20px;
              background: #42a3ec;
              border: solid 3px #a6d4f5;
              position: relative;
            }
            span:nth-of-type(1)::after {
              content: "";
              position: absolute;
              width: 60px;
              height: 1px;
              background: #42a3ec;
              top: 5px;
              right: -70px;
            }

            span:nth-of-type(2) {
              white-space: nowrap;
              margin-top: 4px;
            }
          }
          .steps-current:last-child {
            span:nth-of-type(1)::after {
              content: "";
              position: absolute;
              width: 0px;
              height: 0px;
            }
          }
        }
      }
    }
    .user-img {
      img {
        width: 260px;
        height: 234px;
      }
    }
  }
}
.policy {
  background: #f6f7fb;
  padding-bottom: 300px;
  .policy-content {
    width: 1200px;
    margin: auto;
  }
  .policy-nav {
    padding: 16px 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    .search {
      position: relative;
      .search-img {
        position: absolute;
        width: 14px;
        height: 14px;
        right: 20px;
        top: 13px;
        cursor: pointer;
      }
    }
    button {
      cursor: pointer;
      width: 78px;
      height: 26px;
      background: #d6e8f8;
      font-size: 10px;
      font: fallback;
      color: #42a3ec;
      margin-right: 15px;
      position: relative;
    }
    .active {
      background: #42a3ec;
      color: #fff;
    }
    button::after {
      position: absolute;
      content: "";
      width: 0.5px;
      height: 20px;
      background: #c5c6c8;
      right: -8px;
      top: 3px;
    }
    button:last-child::after {
      position: absolute;
      content: "";
      width: 0;
    }
  }
}
</style>
