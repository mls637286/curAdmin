<template>
  <div style="width: 100%;height: 100%">
    <el-tabs v-model="activeName">
      <el-tab-pane label="时间" name="first">
        <videoEcharts></videoEcharts>
      </el-tab-pane>
      <el-tab-pane label="文件" name="second">
        <video-table></video-table>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import videoEcharts from '@/components/videoEcharts'
import videoTable from '@/components/videoEcharts/table'

export default {
  name: 'videoTrack',
  components: {
    videoEcharts,
    videoTable
  },
  data () {
    return {
      activeName: 'first'
    }
  }
}
</script>

<style scoped>
  /deep/.el-tabs__content{
    width: 100%;
    height: 100%;
  }
  #pane-first{
    width: 100%;
    height: 280px;
  }
</style>
