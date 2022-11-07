<template>
  <div class="monitor-left">
    <div class="monitor-left-center">
      <div class="monitor-tab">
        <div v-for="(item,index) in tabList" :key="index" class="monitor-tab-flex"
             :class="tabIndex==index?'m-tab-active':''">
          <div class="monitor-tab-item">
            <img :src="item.url"/>
            <span>{{ item.title }}</span>
            <div class="tab-active-line" v-if="tabIndex==index"></div>
          </div>
        </div>
      </div>
      <div class="mointor-left-content">
                <Devicelist></Devicelist>
        <!--        <playback></playback>-->
<!--        <MapTrack></MapTrack>-->
      </div>
    </div>
  </div>
</template>

<script>
import Devicelist from '@/views/RealTime/components/navLeft/devicelist'
import playback from '@/views/RealTime/components/navLeft/playback'
import MapTrack from '@/views/RealTime/components/navLeft/track'

export default {
  components: {
    Devicelist,
    playback,
    MapTrack
  },
  data () {
    return {
      tabList: [
        {
          url: require('@/assets/images/icon_curgroup.png'),
          title: '列表'
        },
        {
          url: require('@/assets/images/icon_track.png'),
          title: '轨迹'
        },
        {
          url: require('@/assets/images/icon_video.png'),
          title: '视频'
        },
        {
          url: require('@/assets/images/icon_hf.png'),
          title: '回放'
        },
      ],
      tabIndex: 0
    }
  }
}
</script>

<style scoped lang="less">
.monitor-left {
  position: relative;
  width: 100%;
  height: 100%;
  border-top: 1px solid #e2e3e5;

  .monitor-left-center {
    padding: 5px;

    .monitor-tab {
      cursor: pointer;
      background-color: #fff;
      height: 40px;
      width: 100%;
      display: flex;
      flex-direction: row;

      .monitor-tab-flex {
        flex: 1;

        .monitor-tab-item {
          height: 40px;
          text-align: center;
          line-height: 40px;
          border-top: 1px solid #fff;
          border-right: 1px solid #fff;
          border-left: 1px solid #fff;
          position: relative;

          img {
            vertical-align: middle;
            font-size: 13px;
          }

          span {
            vertical-align: middle;
            font-size: 13px;
            position: relative;
            top: 1;
          }

          .tab-active-line {
            position: absolute;
            bottom: 0;
            left: 50%;
            margin-left: -10px;
            width: 20px;
            height: 1px;
            background-color: #1678ff;
          }
        }
      }
    }
  }
}

.m-tab-active {
  color: #1678ff;
}

.mointor-left-content {
  padding: 5px;
  position: absolute;
  left: 0;
  bottom: 0;
  top: 40px;
  right: 0;
}
</style>
