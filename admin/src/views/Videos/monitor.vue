<template>
  <div style="width: 100%;height: 100%">
    <div>

    </div>
    <div style="width: 85%;height: 100%">
      <div style="width: 100%;height: 70%">
        <div class="el-col el-col-12" style="height: 100%">
          <video-group></video-group>
        </div>
        <div class="el-col el-col-12" style="height: 100%">
          <AmapGps></AmapGps>
        </div>
      </div>
      <div style="width: 100%;height: 30%;">
        <div class="tabsBar">
          <div class="bar_right">
            <div class="tabsList">
              <span>总数:6126</span>
              <span>视频:5468</span>
              <span>部标:658</span>
              <span>在线:211（在线率： 3.44%）</span>
              <span>行驶:66</span>
              <span>停车:145</span>
              <span>离线:5915</span>
              <span>过期:4991</span>
              <span>从未上线:375</span>
              <span>报警:0</span>
            </div>
            <div class="iconList">
              <span title="导出"><i class="iconfont icon-ios-download-outline"></i></span>
              <span title="设置"><i class="iconfont icon-shezhi"></i></span>
            </div>
          </div>
          <div>
            <el-tabs v-model="activeName" @tab-click="handleClick">
              <el-tab-pane label="位置信息" name="first">
                <Location></Location>
              </el-tab-pane>
              <el-tab-pane label="常规报警" name="second">
                <GeneralAlarm></GeneralAlarm>
              </el-tab-pane>
              <el-tab-pane label="主动安全防控报警" name="third">
                <GeneralAlarm></GeneralAlarm>
              </el-tab-pane>
              <el-tab-pane label="预警" name="fourth">
                <ActiveAlarm></ActiveAlarm>
              </el-tab-pane>
              <el-tab-pane label="图片信息" name="five">
                <Picture></Picture>
              </el-tab-pane>
              <el-tab-pane label="交互信息" name="six">
                <interactive></interactive>
              </el-tab-pane>
            </el-tabs>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VideoGroup from '@/components/video/videoPage'
import AmapGps from '@/components/GPS/amap'
import Location from '@/components/video/Table/location' //位置信息
import GeneralAlarm from '@/components/video/Table/GeneralAlarm' //常规报警
import ActiveAlarm from '@/components/video/Table/ActiveAlarm' //预警
import Picture from '@/components/video/Table/picture'  //图片信息
import interactive from '@/components/video/Table/interactive' //交互信息
export default {
  name: 'monitor',
  components: {
    VideoGroup,
    AmapGps,
    Location,
    GeneralAlarm,
    interactive,
    Picture,
    ActiveAlarm
  },
  data () {
    return {
      activeName: 'first'
    }
  },
  methods: {
    handleClick (tab, event) {
      console.log(tab, event)
    }
  }
}
</script>

<style scoped lang="less">
  .tabsBar{
    font-size: 13px;
    font-weight: 700;
  }
  .bar_right{
    float: right;
    margin-left: 5px;
  }
  .bar_right{
    height: 34px;
    line-height: 34px;
    display: flex;
    align-items: center;
  }
  .tabsList{
    font-size: 13px;
    span{
      display: inline-block;
      padding: 0 10px;
      color: #515a6e;
      font-width: 600;
    }
  }
  .iconList{
    margin-left: 10px;
    margin-right: 10px;
    span{
      margin: 0 5px;
    }
  }
  /deep/.el-tabs--top .el-tabs__item.is-top:nth-child(2){
    padding-left: 20px;
  }
  /deep/.el-tabs__item{
    font-size: 13px;
    height: 34px;
    line-height: 34px;
  }
</style>
