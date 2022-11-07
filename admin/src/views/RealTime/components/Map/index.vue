<template>
  <div class="monitor-map">
    <div id="map-container"></div>
  </div>
</template>

<script>
import AMapLoader from '@amap/amap-jsapi-loader'

export default {
  data () {
    return {
      map: null
    }
  },
  methods: {
    initMap () {
      AMapLoader.load({
        key: '3b1588d23999344ea9643d2c5d682796',
        'version': '2.0',
        'plugins': ['AMap.Scale', 'AMap.ToolBar', 'AMap.AutoComplete', 'AMap.PlaceSearch', 'AMap.ControlBar', 'AMap.MouseTool', 'AMap.MapType', 'AMap.HawkEye', 'AMap.MarkerClusterer ', 'AMap.pixel', 'AMap.MarkerCluster', 'AMap.InfoWindow'],           // 需要使用的的插件列表，如比例尺'AMap.Scale'等
      }).then((AMap) => {
        this.map = new AMap.Map('map-container', {
          viewMode: '2D',
          center: [118.118547, 24.475637],//初始化地图中心点
          zoom: 14,//初始化地图层级
          resizeEnable: true
        })
      })
    }
  },
  mounted () {
    this.initMap()
  }
}
</script>

<style scoped lang="less">
.monitor-map {
  position: relative;
  width: 100%;
  height: 100%;
}

#map-container {
  width: 100%;
  height: 100%;
}
</style>
