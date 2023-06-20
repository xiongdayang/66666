<template>
  <div>
    <router-view />

    <van-tabbar route>
      <van-tabbar-item v-model="active" replace to="/index" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item v-model="active" replace to="/kecheng" icon="search">课程</van-tabbar-item>
      <van-tabbar-item v-model="active" replace to="/yukecheng" icon="search">约课记录</van-tabbar-item>
      <van-tabbar-item v-model="active" replace to="/lianxi" icon="search">练习</van-tabbar-item>
      <van-tabbar-item v-model="active" replace to="/my" icon="search">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: ''
    };
  },

  mounted() { },

  methods: {},
};
</script>

<style lang="scss" scoped></style>