<template>
  <div class="monitor-container" ref="monitor-container">
    <div class="split-pane">
      <div class="split-pane-container" @mousedown="hangleMouseDown" @mousemove="hangleMouseMove" @mouseup="hangleMouseLeave">
        <div class="split-pane-left-area" :style="{width:leftWidth}">
          <nav-left></nav-left>
        </div>
        <div class="split-pane-trigger" :style="{left:scrollLeft}" v-if="judgeBlock">
          <div class="split-pane-trigger-btn" @click="hangleScale"></div>
          <div class="split-pane-trigger-wrap" ref="triggerWrap"></div>
        </div>
        <div class="split-pane-right-area" :style="{width: rightWidth}" ref="rightArea">
          <div class="split-pane-right-btn" v-if="!judgeBlock" @click="hangleScale"></div>
          <nav-right></nav-right>
<!--          <video-play-back></video-play-back>-->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavLeft from '@/views/RealTime/components/navLeft'
import NavRight from '@/views/RealTime/components/navRight'
import VideoPlayBack from '@/views/RealTime/components/navRight/videoPlayBack'
export default {
  name: 'Monitor',
  components:{
    NavLeft,
    NavRight,
    VideoPlayBack
  },
  data () {
    return {
      leftWidth: '19.68%',
      rightWidth: '80.32%',
      scrollLeft: '19.68%',
      judgeBlock: true,
      isScale: false,
    }
  },
  methods: {
    hangleScale () {
      if (this.judgeBlock == true) {
        this.judgeBlock = false
      } else {
        this.judgeBlock = true
      }
    },
    hangleMouseDown (e) {
      if (this.$refs['triggerWrap'] == e.path[0]) {
        this.isScale = true
        console.log(e)
      } else {
        this.isScale = false
      }
    },
    hangleMouseMove (e) {
      const ToolWidth = this.$refs['monitor-container'].offsetWidth
      var percentage = null
      if (this.isScale) {
        if (this.getDir(e, this.$refs['triggerWrap']) == 3) {
          percentage = Math.floor(e.offsetX / ToolWidth * 10000) / 100
        } else if (this.getDir(e, this.$refs['triggerWrap']) == 1) {
          percentage = Math.floor((e.offsetX + this.$refs['rightArea'].offsetLeft) / ToolWidth * 10000) / 100
        }
        if (percentage >= 10.41 && percentage <= 36.45) {
          this.leftWidth=percentage+'%'
          this.scrollLeft=percentage+'%'
          this.rightWidth=(100-percentage)+'%'
        }
      }
    },
    hangleMouseLeave(e){
      this.isScale=false
    },
    //判断鼠标滑动的方向
    getDir (ev, ele) {
      var l = ele.getBoundingClientRect().left
      var t = ele.getBoundingClientRect().top
      var w = ele.getBoundingClientRect().width
      var h = ele.getBoundingClientRect().height
      var x = (ev.clientX - l - w / 2) * (w > h ? (h / w) : 1)
      var y = (ev.clientY - t - h / 2) * (h > w ? (w / h) : 1)
      var deg = Math.atan2(y, x) / (Math.PI / 180)
      var d = (Math.round((deg + 180) / 90) + 3) % 4
      return d
      // d的值{上:0,右:1,下:2,左:3}
    }
  }
}
</script>

<style scoped lang="less">
.monitor-container {
  position: relative;
  width: 100%;
  height: 100%;

  .split-pane {
    position: relative;
    height: 100%;

    .split-pane-container {
      width: 100%;
      height: 100%;

      .split-pane-left-area {
        height: 100%;
        float: left;
        z-index: 2;
      }

      .split-pane-trigger {
        position: absolute;
        z-index: 3;
        background: rgb(255, 255, 255);
        width: 8px;
        border-top: 1px solid rgb(226, 227, 229);
        transform: translateX(-50%);
        margin: 0 1px;
        height: 100%;
        box-shadow: 0 0 4px 0 rgb(28 36 56 / 32%);
        .split-pane-trigger-wrap {
          height: 100%;
          cursor: col-resize;
        }
      }

      .split-pane-right-area {
        height: 100%;
        float: left;
        z-index: 2;

        .split-pane-right-btn {
          transform: rotate(180deg);
          left: 0;
        }
      }
    }
  }
}

.split-pane-right-btn, .split-pane-trigger-btn {
  width: 8px;
  position: absolute;
  top: 50%;
  height: 60px;
  margin-top: -30px;
  cursor: pointer;
  background-image: url("@/assets/images/icon_left_arrow.png");
  background-size: cover;
}
</style>
