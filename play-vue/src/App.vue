<template>
  <section id="app">
    <Head></Head>
    <router-view></router-view>
  </section>
</template>

<script>
import Head from "@/components/Head.vue";
export default {
  name: "App",
  components:{
    Head
  }
};
</script>

<style>
#app {
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  height: 100%;
}
</style>
