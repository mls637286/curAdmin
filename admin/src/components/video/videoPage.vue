<template>
  <div style="height: 100%">
    <div class="full">
      <div class="inner">
        <div class="inner_ctrl">
          <div class="tv_box">
            <span v-for="(item,index) in aisleList" :key="index" :title="item.title" v-show="item.show"
                  @click="hangleVideoNum(index)">
              <i class="icon" :style="{backgroundPositionX:index*(-20)+'px',backgroundPositionY:'-25px'}"></i>
            </span>
          </div>
        </div>
        <div class="inner_warp">
          <div class="vpm" v-for="i in 16"
               :class="aisleIndex==0?'vpm1':aisleIndex==2?'vpm2':aisleIndex==5?'vpm3':aisleIndex==6?'vpm4':''">
            <div class="player-wraper">
              <video style="width: 100%;height: 100%"
                     autoplay
                     muted
                     :id="'videoElement' + i"
              ></video>
            </div>
            <div class="my_video_control">
              <div class="device-states">
                <span>10512925578 & 1</span>
                <span>CH1 -</span>
                <span>0KB/S</span>
              </div>
              <div class="vidoe-controls">
                <span><i class="iconfont icon-zanting"></i></span>
                <span><i class="iconfont icon-jingyin"></i></span>
                <span><i class="iconfont icon-paizhao"></i></span>
                <span><i class="iconfont icon-quanping"></i></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import flvjs from 'flv.js'

export default {
  name: 'videoPage',
  data () {
    return {
      aisleList: [
        {
          title: '显示第一个通道',
          show: true
        },
        {
          title: '显示第二个通道',
          show: false
        },
        {
          title: '显示第四个通道',
          show: true
        },
        {
          title: '显示第六个个通道',
          show: false
        },
        {
          title: '显示第八个通道',
          show: false
        },
        {
          title: '显示第九个通道',
          show: true
        },
        {
          title: '显示第十六个个通道',
          show: true
        },
        {
          title: '播放所有视频',
          show: true
        },
        {
          title: '停止所有视频',
          show: true
        },
      ],
      aisleIndex: 0,
      url: '',
      flvPlayerList: [],
      flvPlayer: null,
      count: 1
    }
  },
  methods: {
    /** 切换顶部的视频界面选项 **/
    hangleVideoNum (index) {
      console.log(index)
      if (index == 7) {
        console.log('播放所有视频')
        return
      }
      if (index == 8) {
        console.log('暂停所有视频')
      }

      this.aisleIndex = index
    },
    // 点击获取视频播放器
    clickVideoItem () {
      // this.createVideoFlv()

      this.url = this.rtsplist[index].rtsp
      console.log(this.flvPlayerList, 'flvPlayerList')
      if (this.flvPlayerList.length > 3) {
        this.destoryVideo(this.flvPlayerList[0])
        this.flvPlayerList.shift()
      }
      this.createVideo()
      console.log(index)
      this.count > 3 ? (this.count = 1) : this.count++
      console.log(this.count)
    },
    // 创建video播放器
    createVideoFlv () {
      if (flvjs.isSupported()) {
        var videoElement = document.getElementById('videoElement' + this.count)
        this.flvPlayer = flvjs.createPlayer(
          {
            type: 'flv',
            isLive: true,
            hasAudio: false,
            url: this.url
          },
          {
            enableWorker: false, //不启用分离线程
            enableStashBuffer: false, //关闭IO隐藏缓冲区
            reuseRedirectedURL: true, //重用301/302重定向url，用于随后的请求，如查找、重新连接等。
            autoCleanupSourceBuffer: true //自动清除缓存
          })
        this.flvPlayer.attachMediaElement(videoElement)
        if (this.url != null && this.url != '') {
          this.flvPlayer.load()
          this.flvPlayer.play()
        }
      }
      setInterval(function () {
        // console.log(videoElement.buffered,"idididid");
        if (videoElement.buffered.length > 0) {
          const end = videoElement.buffered.end(0) // 视频结尾时间
          const current = videoElement.currentTime //  视频当前时间
          const diff = end - current // 相差时间
          // console.log(diff);
          const diffCritical = 4 // 这里设定了超过4秒以上就进行跳转
          const diffSpeedUp = 1 // 这里设置了超过1秒以上则进行视频加速播放
          const maxPlaybackRate = 4 // 自定义设置允许的最大播放速度
          let playbackRate = 1.0 // 播放速度
          if (diff > diffCritical) {
            //  this.flvPlayer.load();
            // console.log("相差超过4秒，进行跳转");
            videoElement.currentTime = end - 1.5
            playbackRate = Math.max(1, Math.min(diffCritical, 16))
          } else if (diff > diffSpeedUp) {
            // console.log("相差超过1秒，进行加速");
            playbackRate = Math.max(1, Math.min(diff, maxPlaybackRate, 16))
          }
          videoElement.playbackRate = playbackRate
          if (videoElement.paused) {
            videoElement.play()
          }
        }
        //  if (videoElement.buffered.length) {
        //   let end = this.flvPlayer.buffered.end(0);//获取当前buffered值
        //   let diff = end - this.flvPlayer.currentTime;//获取buffered与currentTime的差值
        //   if (diff >= 0.5) {//如果差值大于等于0.5 手动跳帧 这里可根据自身需求来定
        //     this.flvPlayer.currentTime = this.flvPlayer.buffered.end(0);//手动跳帧
        //  }
        // }
      }, 1000)
      this.flvPlayer.on(flvjs.Events.ERROR, (errType, errDetail) => {
        if (this.flvPlayer) {
          this.reloadVideo(this.flvPlayer)
        }
      })
      this.flvPlayerList.push(this.flvPlayer)
    },
    reloadVideo (flvPlayer) {
      this.destoryVideo(flvPlayer)
      this.createVideo()
    },
    // 摧毁播放器
    destoryVideo (flvPlayer) {
      flvPlayer.pause()
      flvPlayer.unload()
      flvPlayer.detachMediaElement()
      flvPlayer.destroy()
      flvPlayer = null
    },
  }
}
</script>

<style scoped lang="less">
.full {
  width: 100%;
  height: 100%;
  position: relative;
  //padding: 0 4px;
}

.inner {
  border: 1px solid #aebac5;

  .inner_ctrl {
    height: 20px;
    width: 100%;
    background: #83a1bd;
    //padding-left: 5px;

    .tv_box {
      height: 100%;
      float: left;

      span {
        height: 22px;
        line-height: 18px;
        display: inline-block;
        padding: 0 5px;
        position: relative;
        //margin-top: 7px;
        .icon {
          width: 14px;
          display: inline-block;
          background: url('@/assets/images/download.png') 0 0 no-repeat;
          height: 14px;
          cursor: pointer;
        }
      }
    }
  }

  .inner_warp {
    position: absolute;
    left: 0;
    right: 0;
    top: 26px;
    bottom: 0;
    overflow: hidden;
    border-top: 1px solid #fff;
    border-left: 1px solid #fff;
  }

  .inner_warp > div {
    border-right: 1px solid #fff;
    border-bottom: 1px solid #fff;
    float: left;
    position: relative;
    box-sizing: border-box;
  }

  .vpm1 {
    width: 100%;
    height: 100%;
  }

  .vpm2 {
    width: 50%;
    height: 50%;
  }

  .vpm3 {
    width: 33.3%;
    height: 33.3%;
  }

  .vpm4 {
    width: 25%;
    height: 25%;
  }

  .player-wraper {
    position: relative;
    width: 100%;
    height: 100%;
    background-image: url('@/assets/images/tv_default.jpg');
    background-size: cover;
    overflow: hidden;
  }


  .my_video_control {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 26px;
    background-color: #83a1bd;
    color: #fff;
  }

  .device-states {
    float: left;
    height: 26px;
    line-height: 26px;
    padding-left: 5px;
    position: absolute;
    left: 0;
    top: 0;
    font-size: 12px;
  }

  .vidoe-controls {
    height: 26px;
    line-height: 26px;
    font-size: 20px;
    position: absolute;
    right: 5px;
    top: 0;
    width: 105px;
    padding-left: 5px;
    background-color: #83a1bd;
    user-select: none;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
}
</style>
