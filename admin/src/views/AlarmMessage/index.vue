<template>
  <div class="container">
    <el-dialog
      width="680px"
      v-el-drag-dialog
      class="dialog-mini"
      :title="textMap"
      :visible.sync="dialogFormVisible"
    >
      <div style="position: relative">
        <el-tabs type="card">
          <el-tab-pane>
            <span slot="label">
              <a title="报警信息"><i class="iconfont icon-Bell"></i></a>
            </span>
              <alarm-message></alarm-message>
          </el-tab-pane>
          <el-tab-pane>
            <span slot="label">
              <a title="实时视频"><i class="iconfont icon-videocamera"></i></a>
            </span>
          </el-tab-pane>
          <el-tab-pane>
            <span slot="label">
              <a title="语音对讲"><i class="iconfont icon-microphone"></i></a>
            </span>
          </el-tab-pane>
          <el-tab-pane>
            <span slot="label">
              <a title="下发消息"><i class="iconfont icon-envelope"></i></a>
            </span>
          </el-tab-pane>
          <el-tab-pane>
            <span slot="label">
              <a title="语音监控"><i class="iconfont icon-headphones"></i></a>
            </span>
          </el-tab-pane>
        </el-tabs>
        <div class="navTitle">
          <span>报警数量</span>
          <span>
            [ <a title="报警数量" style="color:red;cursor:pointer;">10</a> ]
          </span>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import elDragDialog from '@/directive/el-dragDialog'
import AlarmMessage from '@/components/AlarmMessage'
export default {
  components:{
    AlarmMessage
  },
  directives: {  //使用自定义组件
    elDragDialog,
  },
  data () {
    return {
      dialogFormVisible: true,
      textMap: '浙C930RT'
    }
  }
}
</script>

<style scoped lang="less">
.container {
  position: relative;
  width: 100%;
  height: 100%;
}
.navTitle{
  position: absolute;
  left: 15px;
  top: 15px;
  font-weight: bold;
  font-size: 12px;
}






/deep/ .el-dialog__header {
  height: 35px;
  line-height: 35px;
  padding: 0 20px;
  background: #f8f8f8;
}

/deep/ .el-dialog__title {
  font-size: 14px;
  color: #333;
  line-height: 100%;
}

/deep/ .el-dialog__headerbtn {
  right: 11.5px;
  top: 11.5px;
}

/deep/ .el-dialog__body {
  padding: 10px 0 0;
}

/deep/ .el-tabs__nav {
  float: right;
}

/deep/ .el-tabs__item {
  height: 36px;
  padding: 0 10px;
}

/deep/ .el-tabs__item:nth-child(2) {
  padding-left: 10px !important;
}

/deep/ .el-tabs__item:last-child {
  padding-right: 10px !important;
}
</style>
