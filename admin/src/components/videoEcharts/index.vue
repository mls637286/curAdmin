<template>
  <div class="videoCompoent">
    <div class="tab_content">
      <div class="time-line-div" :style="{left:'calc(70px + '+leftStyle+')'}" ref="lines"></div>
      <div class="time-line-cont"
           :style="{left:'calc(78px + '+countX+')',top:'calc(-50px + '+topStyle+')',fontSize:'12px'}">{{ pointTime }}
      </div>
      <div class="line" v-for="(item,index) in lineList" :key="index">
        <div class="title">{{ item.name }}</div>
        <div class="time" @mousemove="checkeddetailproduct($event,index)" :ref="'lineRef'+index">
          <div class="cover" :style="{left:it.leftWidth,width:it.endWidth}" v-for="(it,ids) in timeArray"></div>
        </div>
      </div>
      <div class="line period">
        <div class="title"></div>
        <div class="time x-timeline">
          <div class="x-timeline-item" v-for="i in 24"></div>
        </div>
      </div>
      <div class="line point">
        <div class="title"></div>
        <div class="time x-line">
          <div class="x-line-item" v-for="(item,index) in timeList" :key="index">
            <span class="time">{{ item.time }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      lineList: [
        {
          name: '摄像头1'
        },
        // {
        //   name: '摄像头2'
        // },
        // {
        //   name: '摄像头3'
        // },
        // {
        //   name: '摄像头4'
        // },
      ],
      timeList: [
        { time: '00:00' },
        { time: '01:00' },
        { time: '02:00' },
        { time: '03:00' },
        { time: '04:00' },
        { time: '05:00' },
        { time: '06:00' },
        { time: '07:00' },
        { time: '08:00' },
        { time: '09:00' },
        { time: '10:00' },
        { time: '11:00' },
        { time: '12:00' },
        { time: '13:00' },
        { time: '14:00' },
        { time: '15:00' },
        { time: '16:00' },
        { time: '17:00' },
        { time: '18:00' },
        { time: '19:00' },
        { time: '20:00' },
        { time: '21:00' },
        { time: '22:00' },
        { time: '23:00' },
      ],
      leftStyle: '1px', // 线的位置
      topStyle: '0px',//tip高度
      countX: '0px', //tip 宽度
      timeArray: [],
      pointTime: ''
    }
  },
  methods: {
    formatDuring (mss) { //时间戳转换公式
      var hours = parseInt((mss % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      var minutes = parseInt((mss % (1000 * 60 * 60)) / (1000 * 60))
      var seconds = parseInt((mss % (1000 * 60)) / 1000)
      hours = hours < 10 ? ('0' + hours) : hours
      minutes = minutes < 10 ? ('0' + minutes) : minutes
      seconds = seconds < 10 ? ('0' + seconds) : seconds
      return hours + ':' + minutes + ':' + seconds
    },
    checkeddetailproduct (event, index) {
      var width = this.$refs['lineRef' + index][0].offsetWidth
      //鼠标点击的时间点
      var pointTime = this.formatDuring(parseInt(((event.offsetX / width * 3600 * 24) + this.startUnix('2022-10-26')) * 1000))
      this.pointTime = pointTime
      if (event.offsetX + 135 >= width) {
        console.log(1)
        this.countX = (event.offsetX - 140) + 'px'
      } else {
        this.countX = event.offsetX + 'px'
      }
      this.topStyle = event.clientY + 'px'
      this.leftStyle = event.offsetX + 'px'
    },
    startUnix ($date) {
      return (new Date(Date.parse($date.replace(/-/g, '/')))).getTime() / 1000
    },
    endUnix ($date) {
      return new Date().setTime(Date.parse($date.replace(/-/g, '/')) / 1000 + 24 * 60 * 60 - 1)
    },
    //判断width长度及left
    judgeWidth () {
      var data = [{
        'alarmSign': 0,
        'begintime': 1666754242000,
        'channel': 1,
        'codetype': 1,
        'datatype': 0,
        'device': '10315543125',
        'endtime': 1666756800000,
        'fileName': 0,
        'filesize': 504128526,
        'storgetype': 1
      }]
      var startDate = this.startUnix('2022-10-26')
      var endDate = this.endUnix('2022-10-26')
      console.log(startDate, endDate)
      //判断时间
      for (var i = 0; i < data.length; i++) {
        var left = (data[i].begintime / 1000 - startDate) / (endDate - startDate) * 100
        var end = ((data[i].endtime - data[i].begintime) / 1000) / (endDate - startDate) * 100
        console.log(left, end)
        data[i].leftWidth = left + '%'
        data[i].endWidth = end + '%'
      }
      this.timeArray = data
    }
  },
  mounted () {
    this.judgeWidth()
  }
}
</script>
<style lang="less" scoped>
.videoCompoent {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: #fff;
}

.tab_content {
  position: absolute;
  bottom: 0;
  left: 10px;
  top: 10px;
  right: 0;
  padding-right: 10px;
  display: flex;
  flex-flow: wrap;
  flex-direction: column;
  justify-content: flex-end;
}

.time-line-div {
  width: 1px;
  height: calc(100% - 22px);
  position: absolute;
  z-index: 301;
  background: #0071c6;
  color: #0071c6;
  top: 0;
}

.time-line-cont {
  width: 120px;
  height: 20px;
  line-height: 20px;
  text-align: center;
  position: absolute;
  z-index: 301;
  background-color: #0071c6;
  color: #fff;
}

.line {
  width: 100%;
  display: inline-flex;
  flex-wrap: nowrap;
  flex-grow: 1;
  flex-shrink: 1;
}

.title {
  width: 70px;
  z-index: 50;
  display: flex;
  align-items: center;
  justify-content: center;
}

.time {
  width: calc(100% - 70px);
  border-top: 1px solid grey;
  border-right: 1px solid grey;
  border-left: 1px solid grey;
  padding-top: 2px;
  padding-bottom: 2px;
  display: inline-flex;
  align-items: center;
  position: relative;
}

.cover {
  height: calc(100% - 4px);
  background-color: green;
  opacity: .6;
  z-index: -51;
  position: absolute;
}


.period {
  flex-grow: 0;
  flex-shrink: 0;
}

.x-timeline {
  border-top: unset !important;
  border-right: unset !important;
  border-left: unset !important;
}

.x-timeline-item, .x-line-item {
  flex-basis: 4%;
  flex-grow: 1;
  height: 12px;
  line-height: 12px;
  border-right: 1px solid grey;
  border-top: 1px solid grey;
}

.time-line-wrap .content .x-timeline .x-timeline-item:first-child {
  border-left: 1px solid grey;
}

.point {
  height: 22px;
  flex-grow: 0;
  flex-shrink: 0;
}

.x-line {
  border-top: unset !important;
  border-right: unset !important;
  border-left: unset !important;
}

.x-line .x-line-item {
  border: 0;

  .time {
    border: 0;
    font-size: 13px;
    color: grey;
  }
}


.x-line .x-line-item:first-child .time {
  margin-left: 0;
}
</style>
