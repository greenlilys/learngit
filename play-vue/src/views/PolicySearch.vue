<template>
  <Swiper></Swiper>
  <section class="policy">
    <section class="policy-content">
      <section class="policy-nav">
        <button v-for="(v,i) in navList" :key="i" :class="{'active' : activeIndex === i}"
          @click="nav(v)">{{v.listName}}</button>
      </section>
      <section class="policy-list">
        <div v-for="(v,i) in dataList" :key='i'>
          <div class="user-policy">
            <div class="user-img">
              <img src="@/assets/img/img_3.png" class="img" alt="">
            </div>
            <div class="policy-info">
              <div><span><span class="fontBolder font16">团单号：</span>{{v.num}}</span></div>
              <div>
                <span>投保人：{{v.policy.policyDolder}}</span>
                <span>被保人：{{v.Insured.Insured}}</span>
                <span>受益人：{{v.beneficiary}}</span>
              </div>
              <div>
                <span>性别：{{v.policy.sex}}</span>
                <span>性别：{{v.Insured.sex}}</span>
              </div>
              <div>
                <span>生日：{{v.policy.birthdy}}</span>
                <span>生日：{{v.Insured.birthdy}}</span>
              </div>
              <div>
                <span>证件类型：{{v.policy.cardType}}</span>
                <span>证件类型：{{v.Insured.cardType}}</span>
              </div>
              <div>
                <span>身份证号：{{v.policy.personNum}}</span>
                <span>身份证号：{{v.Insured.personNum}}</span>
              </div>
              <img src="@/assets/img/arrow_down.png" class="arrow-right" :class="{'rotate' : v.isShowList}"
                @click="showCurent(i)">
              <img v-if="v.status === 'effect'" src="@/assets/img/effect.png" class="status">
              <img v-if="v.status === 'noEffect'" src="@/assets/img/no_effect.png" class="status">
            </div>
          </div>
          <div class="insurance-list" v-show="v.isShowList">
            <el-table :data="v.tableData" style="width: 100%" class="insurance">
              <el-table-column prop="name" label="险种名称" width="400px" align="center">
              </el-table-column>
              <el-table-column prop="type" label="缴费方式" align="center" width="100px">
              </el-table-column>
              <el-table-column prop="firstMoney" label="首期保费" align="center" width="150px">
              </el-table-column>
              <el-table-column prop="nextData" label="下期缴费日期" align="center">
              </el-table-column>
              <el-table-column prop="myPolicy" label="保险责任" align="center">
              </el-table-column>
            </el-table>
            <div class="page">
              <el-button size="mini" @click="jumpFirstPage">首页</el-button>
              <el-pagination @current-change="handleCurrentChange" :current-page="page.currentPage"
                :page-size='page.pageSize' background :pager-count="page.pagerCount" layout="prev, pager, next"
                :total="page.total">
              </el-pagination>
              <el-button size="mini" @click="jumpLastPage">尾页</el-button>
              <div class="jump-page">
                <span>跳至</span>
                <el-input v-model="page.currentPage"></el-input>
                <span>页</span>
              </div>
              <el-button size="mini" @click="jumpPage">确定</el-button>
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
          num: '2051017307716',
          beneficiary: '身故受益人（法定）',
          policy: {
            policyDolder: '中国检验认证（集团）有限公司',
            sex: '暂无',
            birthdy: '暂无',
            cardType: '暂无',
            personNum: '暂无'
          },
          Insured: {
            Insured: '齐京安',
            sex: '男',
            birthdy: '1957-09-06',
            cardType: '身份证',
            personNum: '11010119570906****'
          },
          status: 'effect',
          tableData: [{
            name: '泰康附加团体终身特定疾病保险B款',
            type: '年交',
            firstMoney: '￥939.56',
            nextData: '缴费期已结束',
            myPolicy: '终身团体特定疾病保险B款责任'
          }, {
            name: '泰康附加团体终身特定疾病保险A款',
            type: '年交',
            firstMoney: '￥54.04',
            nextData: '缴费期已结束',
            myPolicy: '终身团体特定疾病保险B款责任'
          }, {
            name: '泰康健康有约团体终身重大疾病保险',
            type: '年交',
            firstMoney: '￥28260.00',
            nextData: '缴费期已结束',
            myPolicy: '终身团体特定疾病保险B款责任'
          }],
          isShowList: false
        }
      ],
      navList: [
        { listName: '有效保单', index: 0 },
        { listName: '未生效保单', index: 1 },
        { listName: '无效保单', index: 2 }
      ],
      activeIndex: 0,
      page: {
        currentPage: 1,
        pageSize: 10,
        total: 100,
        pagerCount: 5
      }
    })
    function nav(v) {
      state.activeIndex = v.index
      if (v.index === 2) {
        state.dataList = [
          {
            num: '2051014841373866',
            beneficiary: '身故受益人（法定）',
            policy: {
              policyDolder: '中国检验认证（集团）有限公司',
              sex: '暂无',
              birthdy: '暂无',
              cardType: '暂无',
              personNum: '暂无'
            },
            Insured: {
              Insured: '齐京安',
              sex: '男',
              birthdy: '1957-09-06',
              cardType: '身份证',
              personNum: '11010119570906****'
            },
            status: 'noEffect',
            tableData: [{
              name: '泰康附加疾病医疗团体医疗保险',
              type: '趸交',
              firstMoney: '--',
              nextData: '缴费期已结束',
              myPolicy: '团体医疗保险特约责任'
            }, {
              name: '泰康集团重大疾病保险',
              type: '趸交',
              firstMoney: '--',
              nextData: '缴费期已结束',
              myPolicy: '团体重大疾病保险责任'
            }],
            isShowList: false
          },
          {
            num: '2051013860728766',
            beneficiary: '身故受益人（法定）',
            policy: {
              policyDolder: '中国检验认证（集团）有限公司',
              sex: '暂无',
              birthdy: '暂无',
              cardType: '暂无',
              personNum: '暂无'
            },
            Insured: {
              Insured: '齐京安',
              sex: '男',
              birthdy: '1957-09-06',
              cardType: '身份证',
              personNum: '11010119570906****'
            },
            status: 'noEffect',
            tableData: [{
              name: '泰康团体重大疾病保险',
              type: '趸交',
              firstMoney: '--',
              nextData: '缴费期已结束',
              myPolicy: '团体重大疾病保险责任'
            }, {
              name: '泰康附加疾病医疗团体医疗保险',
              type: '趸交',
              firstMoney: '--',
              nextData: '缴费期已结束',
              myPolicy: '团体医疗保险特约责任'
            }],
            isShowList: false
          }
        ]
        return
      }
      if (v.index === 0) {
        state.dataList = [
          {
            num: '2051017307716',
            beneficiary: '身故受益人（法定）',
            policy: {
              policyDolder: '中国检验认证（集团）有限公司',
              sex: '暂无',
              birthdy: '暂无',
              cardType: '暂无',
              personNum: '暂无'
            },
            Insured: {
              Insured: '齐京安',
              sex: '男',
              birthdy: '1957-09-06',
              cardType: '身份证',
              personNum: '11010119570906****'
            },
            status: 'effect',
            tableData: [{
              name: '泰康附加团体终身特定疾病保险B款',
              type: '年交',
              firstMoney: '￥939.56',
              nextData: '缴费期已结束',
              myPolicy: '终身团体特定疾病保险B款责任'
            }, {
              name: '泰康附加团体终身特定疾病保险A款',
              type: '年交',
              firstMoney: '￥54.04',
              nextData: '缴费期已结束',
              myPolicy: '终身团体特定疾病保险B款责任'
            }, {
              name: '泰康健康有约团体终身重大疾病保险',
              type: '年交',
              firstMoney: '￥28260.00',
              nextData: '缴费期已结束',
              myPolicy: '终身团体特定疾病保险B款责任'
            }],
            isShowList: false
          }
        ]
        return
      }
      if (v.index === 1){
        state.dataList = []
      }
    }
    function showCurent(i) {
      const dataList = state.dataList
      for (let [index, value] of dataList.entries()) {
        value.isShowList = i === index ? !value.isShowList : false
      }
      state.dataList = dataList
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
      jumpPage,
      showCurent
    }
  },
  components: {
    Swiper
  }

})
</script>
<style lang="scss" scoped>
.insurance-list {
  background: #fff;
  .insurance {
    transition: height 0.1s;
  }
  .showHeight {
    height: 0;
  }
  .page {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 40px 0 30px 0;
    .page-btn {
      height: 28px;
    }
    .jump-page {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      margin: 0 10px;
      span {
        white-space: nowrap;
        font-size: 10px;
      }
    }
  }
}

.policy-list {
  > div {
    margin-bottom: 10px;
  }
  .user-policy {
    display: flex;
    flex-direction: row;
    background: #fff;
    .policy-info {
      flex: 1;
      box-sizing: border-box;
      padding-left: 28px;
      padding-right: 40px;
      padding-top: 38px;
      position: relative;
      color: #606266;
      font-size: 14px;
      > div {
        display: flex;
        flex-direction: row;
        margin-top: 8px;
        span {
          width: 33.33%;
        }
      }
      .arrow-right {
        position: absolute;
        z-index: 100;
        right: 72px;
        top: 120px;
        cursor: pointer;
        transition: transform 0.1s;
      }
      .rotate {
        transform: rotate(90deg);
        transform-origin: center center;
      }
      .status {
        position: absolute;
        right: 0;
        top: 0;
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
