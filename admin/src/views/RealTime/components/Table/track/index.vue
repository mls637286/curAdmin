<template>
  <div class="tracks-content-wrapper" style="height: 100%">
    <el-tabs v-model="tabIndex" @tab-click="handleClick">
      <el-tab-pane :label="item.label" :name="item.id" v-for="(item,index) in tabList" :key="index"></el-tab-pane>
    </el-tabs>
    <div class="tracks-content-wrapper-inner">
      <div>
        <div class="baseLineChart" ref="baseLineChart"></div>
      </div>
      <div>
        <el-scrollbar>
          <div class="scrollbarTable">
            <div class="track-overall">
              <div class="track-overall-row el-row">
                <div class="track-overall-row-label el-col el-col-4">设备名称</div>
                <div class="track-overall-row-value ellipsis el-col el-col-4">abcd</div>
                <div class="track-overall-row-label el-col el-col-4">最大速度</div>
                <div class="track-overall-row-value ellipsis el-col el-col-4">86.1km/h</div>
                <div class="track-overall-row-label el-col el-col-4">行驶时长</div>
                <div class="track-overall-row-value ellipsis el-col el-col-4">59分</div>
              </div>
              <div class="track-overall-row el-row">
                <div class="track-overall-row-label el-col el-col-4">行驶里程</div>
                <div class="track-overall-row-value ellipsis el-col el-col-4">17.50km</div>
                <div class="track-overall-row-label el-col el-col-4">平均速度</div>
                <div class="track-overall-row-value ellipsis el-col el-col-4">17.56km/h</div>
                <div class="track-overall-row-label el-col el-col-4">停留时长</div>
                <div class="track-overall-row-value ellipsis el-col el-col-4">35分</div>
              </div>
            </div>
            <div class="track-overall-address">
              <div class="track-overall-address-icon">
                <div><img src="@/assets/images/startingPoint.png"
                  width="28"></div>
                <div style="margin-top: 0px;"><img src="@/assets/images/endPoint.png" width="28"></div>
              </div>
              <div class="track-overall-address-content">
                <div style="height: 28px; padding-top: 4px;"><span>2022-11-07 09:18:46</span><span
                  style="padding-left: 10px;">河北省唐山市丰润区G102(京抚线);陆和源贸易有限公司北422米</span></div>
                <div style="padding-top: 10px;"><span>2022-11-07 10:18:34</span><span style="padding-left: 10px;">河北省唐山市丰润区;南王官营村东334米</span>
                </div>
              </div>
            </div>
          </div>
        </el-scrollbar>
      </div>
      <div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tabList: [
        {
          label: '曲线',
          id: '1'
        },
        {
          label: '行程数据',
          id: '2'
        },
        {
          label: '轨迹点',
          id: '3'
        },
      ],
      tabIndex: '1',
      baseLineChart: null
    }
  },
  methods: {
    initEcharts () {
      this.baseLineChart = this.$echarts.init(this.$refs.baseLineChart)
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.initEcharts()
    })
  }
}
</script>

<style scoped lang="less">
.tracks-content-wrapper {
  position: relative;

  /deep/ .el-tabs__nav-wrap {
    padding-left: 15px;
  }
}

.tracks-content-wrapper-inner {
  position: absolute;
  left: 2px;
  right: 0;
  top: 44px;
  bottom: 10px;
}

.tracks-content-wrapper-inner > div {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: #fff;
}

.scrollbarTable {
  .track-overall {
    margin: 4px 0 0 10px;
    width: 620px;
    position: relative;
    border-top: 1px solid #dcdfe6;
    border-left: 1px solid #dcdfe6;
    font-size: 13px;

    .track-overall-row {
      height: 32px;

      .track-overall-row-label, .track-overall-row-value {
        text-align: center;
        border-right: 1px solid #dcdfe6;
        border-bottom: 1px solid #dcdfe6;
        height: 32px;
        line-height: 32px;
      }

      .track-overall-row-label {
        background: #e8eaed;
      }
    }
  }
}

.ellipsis {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.track-overall-address {
  font-size: 13px;
  margin: 10px 0 0 10px;
  display: flex;
  flex-direction: row;
  .track-overall-address-icon {
    width: 40px;
    padding-left: 2px;
  }
  .track-overall-address-content {
    flex: 1;
  }
  .track-overall-address-content>div {
    height: 24px;
  }
}
</style>
