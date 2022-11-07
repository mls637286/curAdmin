<template>
  <!-- 百度地图  -->
  <div id="bai-du-map">
    <!-- 技术支持和联系方式  -->

  </div>
</template>

<script>
import AMapLoader from '@amap/amap-jsapi-loader'

// 设置安全密钥
window._AMapSecurityConfig = {
  securityJsCode: '71cb7c7802dbc207fb1d57ed3f1bdaff',
}
export default {
  data () {
    return {
      map: null,
      mouseTool: null,
      overlays: [],
      auto: null,
      placeSearch: null,
      markers: [], //所有的坐标点
      points: [ // 这个数据是小编随便捏的，具体看后端怎么给你值
        {
          id: 123,
          lnglat: [118.118547, 24.475637],
          status: 1
        },
        // 这里的id，是用于做点击标记点做下一步处理的，如果不需要可以删除
        {
          id: 456,
          lnglat: [118.081211, 24.493369],
          status: 1
        },
        {
          lnglat: [118.08885, 24.494072],
          status: 1
        },
        {
          lnglat: [118.09503, 24.48962],
          status: 1
        },
        {
          lnglat: [118.102926, 24.48837],
          status: 1
        },
        {
          lnglat: [118.08679, 24.485402],
          status: 0
        },
        {
          lnglat: [118.081941, 24.485909],
          status: 0
        },
        {
          lnglat: [118.090137, 24.476614],
          status: 0
        },
        {
          lnglat: [118.094171, 24.475598],
          status: 0
        },
        {
          lnglat: [118.089794, 24.472708],
          status: 0
        },
        {
          lnglat: [118.094987, 24.480051],
          status: 0
        },
        {
          lnglat: [118.083614, 24.47802],
          status: 0
        },
        {
          lnglat: [118.09606, 24.48298],
          status: 0
        },
        {
          lnglat: [118.10181, 24.478215],
          status: 0
        },
        {
          lnglat: [118.083829, 24.477864],
          status: 2
        },
        {
          lnglat: [118.137158, 24.451969],
          status: 2
        },
        {
          lnglat: [118.144797, 24.452047],
          status: 2
        },
        {
          lnglat: [118.14351, 24.445562],
          status: 2
        },
        {
          lnglat: [118.114928, 24.446812],
          status: 2
        },
        {
          lnglat: [118.106879, 24.453121],
          status: 2
        },
        {
          lnglat: [118.103618, 24.455934],
          status: 2
        },
        {
          lnglat: [118.114261, 24.457731],
          status: 2
        },
      ],
      mapModule: null,
      flag: true,
      /** 定制轨迹参数 **/
      lineArr: [
        [116.478935, 39.997761],
        [116.478939, 39.997825],
        [116.478912, 39.998549],
        [116.478912, 39.998549],
        [116.478998, 39.998555],
        [116.478998, 39.998555],
        [116.479282, 39.99856],
        [116.479658, 39.998528],
        [116.480151, 39.998453],
        [116.480784, 39.998302],
        [116.480784, 39.998302],
        [116.481149, 39.998184],
        [116.481573, 39.997997],
        [116.481863, 39.997846],
        [116.482072, 39.997718],
        [116.482362, 39.997718],
        [116.483633, 39.998935],
        [116.48367, 39.998968],
        [116.484648, 39.999861]
      ],
      marker: null,
      /** 信息窗口载体 **/
      winInfo: [],
      infoWindow: null
    }
  },
  methods: {
    /** 初始化高德地图插件 **/
    initMap () {
      AMapLoader.load({
        'key': '3b1588d23999344ea9643d2c5d682796',
        'version': '2.0',   // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
        'plugins': ['AMap.Scale', 'AMap.ToolBar', 'AMap.AutoComplete', 'AMap.PlaceSearch', 'AMap.ControlBar', 'AMap.MouseTool', 'AMap.MapType', 'AMap.HawkEye', 'AMap.MarkerClusterer ', 'AMap.pixel', 'AMap.MarkerCluster', 'AMap.InfoWindow'],           // 需要使用的的插件列表，如比例尺'AMap.Scale'等
      }).then((AMap) => {
        // 初始化地图
        this.map = new AMap.Map('bai-du-map', {
          viewMode: '2D',  //  是否为3D地图模式
          center: [118.118547, 24.475637],//初始化地图中心点
          zoom: 14,//初始化地图层级
          resizeEnable: true
        })
        this.map.addControl(new AMap.ToolBar())  //工具条控件集成了缩放、平移、定位等功能按钮在内的组合控件
        this.map.addControl(new AMap.MapType())   // 添加右上角的标准图和卫星图  和路况
        this.map.addControl(new AMap.Scale())  //在
        this.initMarkers()
        // this.initInformation()
      }).catch(e => {
        console.log(e)
      })
    },
    /** 制作多个marker点 **/
    initMarkers () {
      var that = this
      new AMap.MarkerCluster(that.map, that.points, {
        renderClusterMarker: that.renderClusterMarker,// 自定义聚合点样式
        gridSize: that.gridSize, // 设置网格像素大小
        renderMarker: that.renderMarker, // 自定义非聚合点样式
      })
    },
    /** 自定义聚合点样式 **/
    renderClusterMarker (context) {
      let that = this
      let count = that.points.length
      // let count=that.markers.length
      let factor = Math.pow(context.count / count, 1 / 18)
      let div = document.createElement('div')
      let Hue = 180 - factor * 180
      let bgColor = 'hsla(' + Hue + ',100%,40%,0.7)'
      let fontColor = 'hsla(' + Hue + ',100%,90%,1)'
      let borderColor = 'hsla(' + Hue + ',100%,40%,1)'
      let shadowColor = 'hsla(' + Hue + ',100%,90%,1)'
      div.style.backgroundColor = bgColor
      let size = Math.round(30 + Math.pow(context.count / count, 1 / 5) * 20)
      div.style.width = div.style.height = size + 'px'
      div.style.border = 'solid 1px ' + borderColor
      div.style.borderRadius = size / 2 + 'px'
      div.style.boxShadow = '0 0 5px ' + shadowColor
      div.innerHTML = context.count
      div.style.lineHeight = size + 'px'
      div.style.color = fontColor
      div.style.fontSize = '14px'
      div.style.textAlign = 'center'
      context.marker.setOffset(new AMap.Pixel(-size / 2, -size / 2))
      context.marker.setContent(div)

      // 自定义点击事件，这边做的是点击聚合点，以聚合点中心，放大一级
      context.marker.on('click', function (e) {
        console.log(e)
        let curZoom = that.map.getZoom()
        if (curZoom < 20) {
          curZoom += 2
        }
        that.map.setZoomAndCenter(curZoom, e.lnglat)
      })
    },
    // 自定义非聚合点样式
    renderMarker (context) {
      console.log(context.marker)
      var that = this
      var content = ''
      if (context.data[0].status == 0) {
        content = '<div style="width: 40px;height: 40px;">' +
          '<img src="https://v.car900.com/vstatic/images/car/car_kc_offline.png" style="transform:rotate(200deg);float:left;"/>' +
          '<div class="amap-marker-label" style="top: 35px; left: 25px;border: 1px solid #00b06c; color: #00b06c;line-height: 22px;display: inline-flex;padding: unset">' +
          '<div style="background-color: #b0ffcf;padding-left: 3px;padding-right: 3px;">13302416656</div>' +
          '<div style="background-color: #b0ffcf;padding-left: 3px;padding-right: 3px;">0km/h</div>' +
          '</div></div>'
      } else if (context.data[0].status == 1) {
        content = '<div style="width: 40px;height: 40px;">' +
          '<img src="https://v.car900.com/vstatic/images/car/car_kc_stop.png" style="transform:rotate(200deg);float:left;"/>' +
          '<div class="amap-marker-label" style="top: 35px; left: 25px;border: 1px solid #00b06c; color: #00b06c;line-height: 22px;display: inline-flex;padding: unset">' +
          '<div style="background-color: #b0ffcf;padding-left: 3px;padding-right: 3px;">13302416656</div>' +
          '<div style="background-color: #b0ffcf;padding-left: 3px;padding-right: 3px;">0km/h</div>' +
          '</div></div>'
      } else if (context.data[0].status == 2) {
        content = '<div style="width: 40px;height: 40px;">' +
          '<img src="https://v.car900.com/vstatic/images/car/car_kc_alarm.png" style="transform:rotate(200deg);float:left;"/>' +
          '<div class="amap-marker-label" style="top: 35px; left: 25px;border: 1px solid #00b06c; color: #00b06c;line-height: 22px;display: inline-flex;padding: unset">' +
          '<div style="background-color: #b0ffcf;padding-left: 3px;padding-right: 3px;">13302416656</div>' +
          '<div style="background-color: #b0ffcf;padding-left: 3px;padding-right: 3px;">0km/h</div>' +
          '</div></div>'
      }
      // let content = '<div style="background-color: hsla(180, 100%, 50%, 0.3); height: 18px; width: 18px; border: 1px solid hsl(180, 100%, 40%); border-radius: 12px; box-shadow: hsl(180, 100%, 50%) 0px 0px 3px;"></div>';
      let offset = new AMap.Pixel(-9, -9)
      context.marker.setContent(content)
      context.marker.setOffset(offset)
      context.marker.on('click', ev => {

        this.clickInformation(ev, context)
      })
    },
    /** 实例化信息载体窗口 **/
    initInformation () {
      new AMap.InfoWindow({
        isCustom: true, //使用自定义窗体
        content: self.winInfo,
        offset: new AMap.Pixel(15, -35),
      })
      this.map.setFitView()
    },
    /** 实现点击marker点是否打开还是关闭窗体 **/
    clickInformation (e, data) {
      var that = this
      console.log(e)
      console.log(data)
      var content = [
        '<div> ',
        '地址 : 北京市望京阜通东大街方恒国际中心A座16层</div>'
      ]

      // 创建 infoWindow 实例
      that.infoWindow = new AMap.InfoWindow({
        content: content.join('<br>')  //传入 dom 对象，或者 html 字符串
      })
      that.infoWindow.open(that.map, [118.118547, 24.475637])

    },
    /** 关闭全部信息载体窗口 **/
    closeInfowindow () {
      this.infoWindow.close()
    },
    /** 绘制汽车运行轨迹 **/
    initCurTrack () {
      AMapLoader.load({
        key: '7146a693b07ac50b3ec96a431972cbe7', // 申请好的Web端开发者Key，首次调用 load 时必填
        version: '2.0', // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
        plugins: [''] // 需要使用的的插件列表，如比例尺'AMap.Scale'等
      })
        .then((AMap) => {
          this.map = new AMap.Map('bai-du-map', {
            resizeEnable: true,
            center: [116.397428, 39.90923],
            zoom: 17
          })
          this.marker = new AMap.Marker({
            map: this.map,
            position: [116.478935, 39.997761],
            icon: 'https://a.amap.com/jsapi_demos/static/demo-center-v2/car.png',
            offset: new AMap.Pixel(-13, -26)
          })
          const _this = this
          AMap.plugin('AMap.MoveAnimation', function () {
            // 绘制轨迹
            var polyline = new AMap.Polyline({
              map: _this.map,
              path: _this.lineArr,
              showDir: true,
              strokeColor: '#28F', //线颜色
              // strokeOpacity: 1,     //线透明度
              strokeWeight: 6 //线宽
              // strokeStyle: "solid"  //线样式
            })

            var passedPolyline = new AMap.Polyline({
              map: _this.map,
              // path: lineArr,
              strokeColor: '#AF5', //线颜色
              // strokeOpacity: 1,     //线透明度
              strokeWeight: 6 //线宽
              // strokeStyle: "solid"  //线样式
            })

            _this.marker.on('moving', function (e) {
              polyline.setPath(e.passedPath)
            })
            _this.map.setFitView()
            const that = _this
            // 开始动画
            window.startAnimation = function startAnimation () {
              that.marker.moveAlong(that.lineArr, {
                // 每一段的时长
                duration: 500,
                // JSAPI2.0 是否延道路自动设置角度在 moveAlong 里设置
                autoRotation: true
              })
            }
            //  暂停动画
            window.pauseAnimation = function pauseAnimation () {
              that.marker.pauseMove()
            }
            //  继续动画
            window.resumeAnimation = function resumeAnimation () {
              that.marker.resumeMove()
            }
            //  停止动画
            window.stopAnimation = function stopAnimation () {
              that.marker.stopMove()
            }
          })
          /** 设置地图上的点 **/
          for (var i = 0; i < this.lineArr.length; i++) {
            var center = this.lineArr[i]
            var circleMarker = new AMap.CircleMarker({
              center: center,
              radius: 8, //3D视图下，CircleMarker半径不要超过64px 大小
              // strokeColor: "white", // 边框颜色
              strokeWeight: 2,
              // strokeOpacity: 0.5,
              fillColor: '#535455', // 背景色
              fillOpacity: 1, //透明度
              zIndex: 10,
              bubble: true,
              cursor: 'pointer',
              clickable: false,
            })
            circleMarker.setMap(this.map)
          }
          /** 轨迹上点的文字 **/
          for (var i = 0; i < this.lineArr.length; i += 1) {
            var text = new AMap.Text({
              text: i + 1,
              anchor: 'center', // 设置文本标记锚点
              // draggable: true, // 是否可移动文本
              cursor: 'pointer',
              angle: 10,
              style: {
                // padding: ".75rem 1.25rem",
                // "margin-bottom": "1rem",
                // "border-radius": ".25rem",
                'margin-top': '2px',
                'background-color': '#535455',
                opacity: '1',
                // width: "100%",
                'border-width': 0,
                // "box-shadow": "0 2px 6px 0 rgba(114, 124, 245, .5)",
                'text-align': 'center',
                'font-size': '14px',
                color: '#fff',
              },
              position: this.lineArr[i],
            })
            text.setMap(this.map)
          }
          // 每个圆点添加信息窗体
          var infoWindow = new AMap.InfoWindow({ offset: new AMap.Pixel(0, -30) })
          for (var i = 0, marker; i < this.lineArr.length; i++) {
            var marker = new AMap.Marker({
              position: this.lineArr[i],
              map: this.map,
            })
            // marker.content = "我是第" + (i + 1) + "个Marker";
            marker.content = `xxxxx酒店   2020.1.2 1${i + 1}：00：0${i + 1}`
            marker.on('click', function (e) {
              console.log(e)
              infoWindow.setContent(e.target.content)
              infoWindow.open(_this.map, e.target.getPosition())
            })
            marker.emit('click', { target: marker })
          }
        })
        .catch((e) => {
          console.log(e)
        })
    }
  },
  mounted () {
    this.initMap()
    // this.initCurTrack()
  },
}
</script>

<style scoped>
#bai-du-map {
  overflow: hidden;
  width: 100%;
  height:100%;
  margin: 0;
  font-family: "微软雅黑";
}

.amap-marker-label {
  border: 1px solid #00b06c !important;
  background-color: #dcfeea;
  color: #00b06c;
  padding: unset;
  line-height: 22px;
  /* height: 22px; */
  display: inline-flex;
}
</style>
<style>
/*!* 隐藏高德logo  *!*/
/*.amap-logo {*/
/*  display: none !important;*/
/*}*/
/*!* 隐藏高德版权  *!*/
/*.amap-copyright {*/
/*  display: none !important;*/
/*}*/
</style>
