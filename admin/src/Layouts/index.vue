<template>
  <div class="main">
    <Header></Header>
    <div class="router-view">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Header from './components/header.vue'

export default {
  components: {
    Header
  }
}
</script>

<style lang="less" scoped>
.main {
  position: relative;
  width: 100%;
  height: 100%;
}
.router-view{
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 48px;
  background: #ffffff;
  overflow: hidden;
}
</style>
