<template>
  <div
    id="baseLineChart"
    ref="baseLineChart"
    :style="{ width: chartWidth, height: chartHeight }"/>
</template>

<script>
export default {
  props: {
    chartData: {
      type: Array,
      default: () => []
    },
    timeX: {
      type: Array,
      default: () => []
    },
    chartName: {
      type: String,
      default: ''
    },
    chartWidth: {
      type: String,
      default: ''
    },
    chartHeight: {
      type: String,
      default: ''
    },
    seriesName: {
      type: Array,
      default: () => []
    },
    chartUnit: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      baseLineChart: null,
      newChartData: {}
    }
  },
  computed: {
    chartOptions () {
      const options = {
        grid: {
          left: '4%',
          bottom: '8%',
          top: '15%',
          right: '0'
        },
        tooltip: {
          trigger: 'axis'
        },
        color: ['#1879BD', '#03B8DF', '#7B879A'],
        legend: {
          show: true,
          right: '0',
          top: '-1%',
          icon: 'circle'
        },
        xAxis: [
          {
            type: 'category',
            axisTick: { show: false },
            data: []
          }
        ],
        yAxis: [
          {
            type: 'value',
            name: '',
            nameTextStyle: {
              padding: [0, 15, 0, 0]
            }
          }
        ],
        series: []
      }
      return options
    }
  },
  watch: {
    chartData: {
      handler (newValue, oldValue) {
        this.newChartData = newValue
        this.initData()
      },
      deep: true
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.initChart()
      if (this.chartData) {
        this.initData()
      }
    })
  },
  methods: {
    initChart () {
      const _this = this
      _this.baseLineChart = _this.$echarts.init(this.$refs.baseLineChart)
      window.addEventListener('resize', function () {
        _this.baseLineChart.resize()
      })
    },
    initData () {
      let sData = []
      if (this.chartData) {
        sData = this.chartData.map((val, index) => {
          return {
            data: val,
            name: this.seriesName[index],
            type: 'line'
          }
        })
        this.chartOptions.series = sData
      }
      this.chartOptions.xAxis[0].data = this.timeX
      this.chartOptions.yAxis[0].name = `单位(${this.chartUnit})`
      this.baseLineChart.setOption(this.chartOptions, true)
    }
  }
}
</script>
