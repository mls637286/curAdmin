<template>
  <div class="full el-row">
    <div class="el-col el-col-12" style="height: 100%">
      <Video></Video>
    </div>
    <div class="el-col el-col-12" style="height: 100%">
      <Map></Map>
    </div>
  </div>
</template>

<script>
import Video from '@/components/video/videoPage'
import Map from '@/views/RealTime/components/Map'
export default {
  name: 'videoRealTime',
  components:{
    Video,
    Map
  }
}
</script>

<style scoped lang="less">
  .full{
    position: relative;
    width: 100%;
    height: 100%;
  }
</style>
