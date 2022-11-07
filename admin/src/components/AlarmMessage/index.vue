<template>
  <div class="wrapper">
    <el-row :gutter="24" style="border-bottom: 1px solid rgb(204, 204, 204)">
      <el-col :span="10">
        <div class="grid-content">
          <div id="mapContainer" style="height: 200px"></div>
        </div>
      </el-col>
      <el-col :span="14">
        <div class="grid-content bg-purple">
          <div style="font-size: 15px;font-weight: bold;margin-bottom: 10px">
            <span>【DSM】疲劳预警</span>
            <span class="label label-wraming">重要报警</span>
          </div>
          <div class="form-group">
            <div class="form-group-item">
              <span class="form-group-item-label">司机：</span>
              <span>张春喜</span>
            </div>
            <div class="form-group-item form-group-right" style="white-space: nowrap">
              <span class="form-group-item-label">归属：</span>
              <span style="overflow: hidden">永嘉县长顺危险品货物运输有限公司</span>
            </div>
          </div>
          <div class="form-group">
            <div class="form-group-item">
              <span class="form-group-item-label">车速：</span>
              <span>73公里/时</span>
            </div>
            <div class="form-group-item form-group-right" style="white-space: nowrap">
              <span class="form-group-item-label">时间：</span>
              <span style="overflow: hidden">2022-10-27 11:31:27</span>
            </div>
          </div>
          <div class="form-group">
            <div class="form-group-item form-group-right" style="white-space: nowrap">
              <span class="form-group-item-label">位置：</span>
              <span style="overflow: hidden">黄岩区北城街道水浦岙</span>
            </div>
          </div>
        </div>
        <div style="white-space: nowrap;" class="form-group-footer">
          <span class="control-label" style="overflow:hidden;"
          >今日处理：人工 <span>58</span>次; AI通知 <span>0</span>次; 处罚 <span
            id="PunishScore">0</span>分<br>近30分报警：<span>38</span>次; 上次报警：2022-10-27 11:31:11</span>
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="24">
      <el-col :span="24" style="padding-right: 0;padding-left: 0">
        <div class="form">
          <el-form ref="form" :model="form" label-width="60px">
            <el-form-item label="处理方式">
              <el-radio-group v-model="form.resource">
                <el-radio v-for="(item,index) in typeArray" :key="index" name="type"
                          :label="item.label"></el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="处理结果">
              <el-checkbox-group v-model="form.type">
                <el-checkbox v-for="(item,index) in resourceArray" :key="index" name="type"
                             :label="item.label"></el-checkbox>
              </el-checkbox-group>
            </el-form-item>
            <el-form-item>
              <el-input type="textarea" v-model="form.desc" style="height: 110px" class="stretchNone"></el-input>
            </el-form-item>
            <!--            <el-form-item>-->
            <!--              <el-button type="primary" @click="onSubmit">立即创建</el-button>-->
            <!--              <el-button>取消</el-button>-->
            <!--            </el-form-item>-->
          </el-form>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import AMapLoader from '@amap/amap-jsapi-loader'

export default {
  data () {
    return {
      map: null,
      markers: [],
      form: {
        type: ['0'],
        resource: '1',
        desc: '电话通知'
      },
      typeArray: [
        {
          label: '电话通知',
          id: 1
        },
        {
          label: '建议停车',
          id: 2
        },
        {
          label: '警告提醒',
          id: 3
        },
        {
          label: '停车调整',
          id: 4
        },
        {
          label: '停车休息',
          id: 5
        },
        {
          label: '强制停车',
          id: 6
        },
        {
          label: '不考核',
          id: 7
        },
        {
          label: '误报',
          id: 8
        }
      ],
      resourceArray: [
        {
          label: '纳入考核',
          id: 1
        },
        {
          label: '通知车队长',
          id: 2
        },
      ]
    }
  },
  methods: {
    initMap () {
      AMapLoader.load({
        key: '3b1588d23999344ea9643d2c5d682796', // 申请好的Web端开发者Key，首次调用 load 时必填
        version: '2.0', // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
        plugins: ['AMap.AutoComplete', 'AMap.PlaceSearch', 'AMap.Driving', 'AMap.DragRoute'],
      }).then((AMap) => {
        this.map = new AMap.Map('mapContainer', {
          viewMode: '2D', //  是否为3D地图模式
          zoom: 13, // 初始化地图级别
          center: [114.268691, 30.401227], //中心点坐标
          resizeEnable: true,
        })
        this.setMarker([114.268691, 30.401227])
      }).catch(e => {
        console.log(e)
      })
    },
    setMarker (lnglat) {
      this.removeMarker()
      let marker = new AMap.Marker({
        position: lnglat,
      })
      marker.setMap(this.map)
      this.markers.push(marker)
    },
    removeMarker () {
      if (this.markers) {
        this.map.remove(this.markers)
      }
    }
  },
  mounted () {
    this.initMap()
  }
}
</script>

<style scoped lang="less">
.el-row {
  margin-left: 10px !important;
  margin-right: 10px !important;
  padding-bottom: 10px;

}

#mapContainer {
  height: 200px;
  border: 1px solid #ccc;
}

.bg-purple {
  border-bottom: 1px solid rgb(204, 204, 204);
}

.label {
  display: inline;
  padding: 0.2em 0.6em 0.3em;
  font-size: 75%;
  font-weight: 700;
  line-height: 1.6;
  color: #fff;
  text-align: center;
  white-space: nowrap;
  vertical-align: baseline;
  border-radius: 0.25em;
  margin-left: 5px;
}

.label-wraming {
  background: #f0ad4e;
}

.form-group {
  display: flex;
  margin-bottom: 10px;
}

.form-group-item {
  font-size: 12px;
  width: 41.66666667%;
}

.form-group-item-label {
  color: #8B7D6B;
}

.form-group-right {
  width: 58.33333333%;
}

.form-group-footer {
  margin-top: 10px;
  line-height: 22px;

  span {
    font-size: 12px;

    span {
      color: red;
      font-size: 14px;
      font-weight: bold;
    }
  }
}


/deep/ .el-col-10 {
  padding-left: 0 !important;
  padding-right: 0 !important;
}

/deep/ .el-form-item__label {
  font-size: 12px;
  font-weight: bold;
  padding: 3px;
  line-height: 24px;
}

/deep/ .el-form-item {
  margin-bottom: 10px;
}

/deep/ .el-form-item__content {
  line-height: 30px;
  margin-left: 0!important;
}

/deep/ .el-radio-group, /deep/ .el-checkbox-group {
  display: flex;
}

/deep/ .el-radio, /deep/ .el-checkbox {
  width: 12.5%;
  margin-right: 0;
}

/deep/ .el-radio__label, /deep/ .el-checkbox__label {
  padding-left: 5px;
  line-height: 30px;
  font-size: 12px;
}

/deep/ .stretchNone {
  .el-textarea__inner {
    resize: none;
    height: 110px;
    font-size: 9pt;
    color: #000;
    padding: 3px;
  }
}
</style>
