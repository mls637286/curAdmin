<template>
  <div class="monitor-content">
    <div class="video-back full">
      <div class="video-back-inner">
        <div class="video-back-inner-content">
          <div class="my-video-wrapper full">
            <div class="player-wraper">
              <video></video>
              <div class="player-wraper-mask"></div>
              <div class="video-player-close">
                <i class="el-icon-close"></i>
              </div>
              <div class="state-event-tip">时间已到,暂停播放-ACC 开</div>
            </div>
            <div class="my-video-control" id="video-back-control">
              <div class="device-states" style="cursor: pointer">
                <span>
                  <i class="iconfont icon-bofang"></i>
                </span>
              </div>
              <div class="device-states" style="left: 30px; top: 2.5px;">
                <el-select v-model="speedValue" placeholder="请选择" class="el-select--mini" style="width: 66px">
                  <el-option
                    v-for="item in speedList"
                    :key="item.id"
                    :label="item.lebel"
                    :value="item.id">
                  </el-option>
                </el-select>
              </div>
              <div class="video-progress">
                <div class="video-progress-time">03:55:00</div>
                <div class="video-progress-wrap">
                  <div class="video-progress-current-time">2022-11-05 03:55:14</div>
                  <el-slider v-model="currentTimeProgress" :show-tooltip="false" input-size="small"></el-slider>
                </div>
                <div class="video-progress-time">03:55:00</div>
              </div>
            </div>
          </div>
        </div>
        <div class="video-back-inner-footer">
          <div style="padding: 0 10px">
            <el-tabs v-model="tabIndex" @tab-click="handleClick">
              <el-tab-pane :label="item.title" :name="item.id" v-for="(item,index) in tabsList" :key="index"></el-tab-pane>
            </el-tabs>
          </div>
          <div class="video-back-inner-footer-content">
            <div>
<!--              <video-echarts></video-echarts>-->
            </div>
            <div>
              <video-table></video-table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VideoEcharts from '@/components/videoEcharts'
import VideoTable from '@/components/videoEcharts/table'
export default {
  name: 'videoPlayBack',
  components:{
    VideoEcharts,
    VideoTable
  },
  data () {
    return {
      speedList: [
        {
          lebel: 'x1',
          id: '1'
        },
        {
          lebel: 'x2',
          id: '2'
        },
        {
          lebel: 'x4',
          id: '3'
        },
        {
          lebel: 'x8',
          id: '4'
        },
        {
          lebel: 'x16',
          id: '5'
        },
      ],
      speedValue: '1',
      tabsList: [
        {
          id: "1",
          title: '录像时间'
        },
        {
          id: "2",
          title: '下载任务'
        },
      ],
      tabIndex:"1"
    }
  },
  methods:{
    handleClick(e){
      console.log(e)
    }
  }
}
</script>

<style scoped lang="less">
full {
  position: relative;
  width: 100%;
  height: 100%;
}

.monitor-content {
  position: relative;
  width: 100%;
  height: 100%;
  background-color: #fff;
  margin-left: 4px;

  .video-back-inner {
    position: absolute;
    left: 4px;
    right: 8px;
    top: 2px;
    bottom: 4px;
    .video-back-inner-content {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 250px;
      top: 0;

      .my-video-wrapper {
        width: 100%;
        height: 100%;
        position: relative;
        background-image: url('@/assets/images/tv_default.jpg');
        background-size: cover;
        overflow: hidden;

        .player-wraper {
          position: absolute;
          left: 0;
          right: 0;
          top: 0;
          bottom: 30px;
          overflow: hidden;

          video {
            width: 100%;
            height: 100%;
            object-fit: fill;
          }

          .player-wraper-mask {
            position: absolute;
            left: 0;
            top: 0;
            right: 0;
            bottom: 0;
          }

          .video-player-close {
            position: absolute;
            top: 0;
            right: 2px;
            width: 30px;
            height: 30px;
            font-size: 18px;
            text-align: right;
            cursor: pointer;
            color: #fff;
          }

          .state-event-tip {
            position: absolute;
            left: 2px;
            bottom: 2px;
            background-color: rgba(0, 0, 0, .6);
            color: #fff;
            font-size: 10px;
            z-index: 1111;
          }
        }

        #video-back-control {
          height: 30px;
        }

        .my-video-control {
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          height: 26px;
          background-color: #83a1bd;
          color: #fff;

          .device-states {
            float: left;
            height: 26px;
            line-height: 26px;
            padding-left: 5px;
            position: absolute;
            left: 0;
            top: 0;
            font-size: 12px;

            /deep/ .el-input__inner {
              height: 24px;
              line-height: 24px;
            }

            /deep/ .el-input__icon {
              line-height: 24px;
            }
          }

          .video-progress {
            margin: 0 140px 0 300px;
            display: flex;
            flex-direction: row;

            .video-progress-time {
              width: 80px;
              text-align: center;
              line-height: 30px;
              font-size: 12px;
            }

            .video-progress-wrap {
              cursor: pointer;
              position: relative;
              flex: 1;

              .video-progress-current-time {
                position: fixed;
                z-index: 9999;
                bottom: 303px;
                text-align: center;
                border: 1px solid #738b8f;
                height: 28px;
                line-height: 28px;
                width: 140px;
                background: #f8f1c5;
                border-radius: 5px;
                font-size: 12px;
                color: #000;
              }

              .el-slider__runway {
                margin: 10px 0;
              }
            }
          }
        }
      }
    }
    .video-back-inner-footer{
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      height: 250px;
      .video-back-inner-footer-content{
        position: absolute;
        top: 45px;
        left: 0;
        right: 0;
        bottom: 0;
      }
    }
  }
}

.el-input--mini {
  font-size: 12px;
}
</style>
