<template>
  <div class="monitor-content">
    <div class="map-and-table full">
      <div class="split-pane">
        <div class="split-pane-container" @mousedown="hangleMouseDown" @mousemove="hangleMouseMove"
             @mouseup="hangleMouseLeave" ref="monitor-container">
          <div class="split-pane-top-area" :style="{height:mapHeight}" v-show="mapShow">
            <div class="trigger-show-bottom" v-show="!clickLastShow" @click="hangleLastDiv"></div>
            <div style="height: 100%">
              <div class="full el-row">
                <div class="el-col-24" style="height: 100%">
                  <video-real-time></video-real-time>
<!--                  <Map></Map>-->
                </div>
              </div>
            </div>
          </div>
          <div class="split-pane-trigger" :style="{top:tops}" v-show="topShow">
            <div class="split-pane-trigger-btn">
              <div v-show="clickFirstShow" @click="hangleFirstDiv"></div>
              <div v-show="clickLastShow" @click="hangleLastDiv"></div>
            </div>
            <div class="split-pane-trigger-wrap" ref="triggerWrap" unselectable="on"></div>
          </div>
          <div class="split-pane-bottom-area" :style="{height: bottomHeight}" ref="rightArea" v-show="bottomShow">
            <div class="trigger-show-top" v-show="!clickFirstShow" @click="hangleFirstDiv"></div>
<!--            <list-table></list-table>-->
            <track-table></track-table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Map from '@/views/RealTime/components/Map'
import listTable from '@/views/RealTime/components/Table/listTable'
import TrackTable from '@/views/RealTime/components/Table/track'
import VideoRealTime from '@/views/RealTime/components/navRight/videoRealTime'
export default {
  components:{
    Map,
    listTable,
    TrackTable,
    VideoRealTime
  },
  data () {
    return {
      mapHeight: '70%',
      tops: '70%',
      bottomHeight: '30%',
      Stretch: false,
      clickFirstShow: true,
      clickLastShow: true,
      mapShow: true,
      topShow: true,
      bottomShow: true
    }
  },
  methods: {
    hangleMouseDown (e) {
      if (e.path[0] == this.$refs['triggerWrap']) {
        console.log(1)
        this.Stretch = true
      } else {
        this.Stretch = false
      }
    },
    hangleMouseMove (e) {
      const Height = this.$refs['monitor-container'].offsetHeight
      var percentage = null
      if (this.Stretch) {
        if (this.getDir(e, this.$refs['triggerWrap']) == 0) {
          percentage = Math.floor(e.offsetY / Height * 10000) / 100
        } else if (this.getDir(e, this.$refs['triggerWrap']) == 2) {
          percentage = Math.floor((e.offsetY + this.$refs['rightArea'].offsetTop) / Height * 10000) / 100
        }
        if (percentage >= 3 && percentage <= 97) {
          this.mapHeight = percentage + '%'
          this.tops = percentage + '%'
          this.bottomHeight = (100 - percentage) + '%'
        }
      }
    },
    hangleMouseLeave (e) {
      this.Stretch = false
    },
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
    },
    hangleFirstDiv () {
      if (this.clickFirstShow) {
        this.clickFirstShow = false
        this.mapShow = false
        this.topShow = false
        this.bottomShow = true
        this.bottomHeight = '100%'
      } else {
        this.clickFirstShow = true
        this.mapShow = true
        this.topShow = true
        this.bottomShow = true
        this.mapHeight = '70%'
        this.tops = '70%'
        this.bottomHeight = '30%'
      }
    },
    hangleLastDiv () {
      debugger
      if (this.clickLastShow) {
        this.clickLastShow = false
        this.mapShow = true
        this.topShow = false
        this.bottomShow = false
        this.mapHeight = '100%'
      } else {
        this.clickLastShow = true
        this.mapShow = true
        this.topShow = true
        this.bottomShow = true
        this.mapHeight = '70%'
        this.tops = '70%'
        this.bottomHeight = '30%'
      }
    }
  }
}
</script>

<style scoped lang="less">
.monitor-content {
  position: relative;
  width: 100%;
  height: 100%;
  background-color: #fff;
  margin-left: 4px;
}

.full {
  position: relative;
  width: 100%;
  height: 100%;
}

.split-pane {
  position: relative;
  height: 100%;
}

.split-pane-container {
  height: 100%;
  width: 100%;
}

.split-pane-top-area {
  width: 100%;
  z-index: 2;
  overflow: hidden;
  padding: 0 4px 4px 4px;
}

.split-pane-trigger {
  transform: translateY(-50%);
  height: 8px;
  width: 100%;
  margin: 1px 0;
  position: absolute;
  z-index: 1;
  background: rgb(255, 255, 255);
  box-shadow: 0 0 4px 0 rgb(28 36 56 / 32%);

  .split-pane-trigger-wrap {
    width: 100%;
    height: 100%;
    cursor: row-resize;
  }

  .split-pane-trigger-btn {
    height: 8px;
    width: 125px;
    position: absolute;
    left: 50%;
    margin-left: -62.5px;

    div {
      cursor: pointer;
      background-size: cover;
      width: 60px;
      height: 8px;
    }

    div:first-child {
      float: left;
      background-image: url("@/assets/images/icon_top.png");
    }

    div:last-child {
      float: right;
      background-image: url("@/assets/images/icon_bottom.png");
    }
  }

  .split-pane-bottom-area {
    width: 100%;
    z-index: 2;
    padding-top: 4px;
  }
}

.trigger-show-bottom {
  position: absolute;
  bottom: 0;
  width: 60px;
  height: 8px;
  left: 50%;
  margin-left: -30px;
  background-image: url("@/assets/images/icon_top.png");
  background-size: cover;
  z-index: 888;
  cursor: pointer;
}

.trigger-show-top {
  position: absolute;
  top: 0;
  width: 60px;
  height: 8px;
  left: 50%;
  margin-left: -30px;
  background-image: url("@/assets/images/icon_bottom.png");
  background-size: cover;
  z-index: 888;
  cursor: pointer;
}
</style>
