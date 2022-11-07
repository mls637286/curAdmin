<template>
  <div style="position: relative">
    <!--    高德地图-->
    <Amap></Amap>
    <!--    查找界面-->
    <div class="select_form">
      <div class="track-search">
        <el-form ref="form" :model="form" label-width="80px">
          <el-form-item label="选择车辆：" prop="curNumber">
            <div class="formItems">
              <el-autocomplete
                v-model="form.curNumber"
                :fetch-suggestions="querySearchAsync"
                placeholder="请输入车牌号"
                @select="handleSelect"
              ></el-autocomplete>
              <div class="img_fa" id="curModel">
                <img src="../../assets/images/serach.jpg" @click="hangleSelectOpen">
                <div class="curModel" v-if="isOpen">
                  <curGroup></curGroup>
                </div>
              </div>
            </div>
          </el-form-item>
          <el-form-item label="选择时间：">
            <ul class="formItems">
              <li v-for="(item,index) in timeLen" :key="index" class="itemLi" :class="index==liIndex?'itemLiActive':''">
                {{ item }}
              </li>
            </ul>
          </el-form-item>
          <el-form-item label="开始时间：" prop="startTime">
            <div style="width: 100%">
              <el-date-picker
                v-model="form.startTime"
                type="datetime"
                placeholder="选择开始时间">
              </el-date-picker>
            </div>
          </el-form-item>
          <el-form-item label="结束时间：" prop="endTime">
            <el-date-picker
              v-model="form.endTime"
              type="datetime"
              placeholder="选择结束时间">
            </el-date-picker>
          </el-form-item>
          <el-form-item label="停车时间：" prop="num">
            <div class="formItems">
              <span style="margin-right: 8px;cursor: default">>=</span>
              <el-input-number v-model="form.num" controls-position="right" @change="handleChange" :min="0"
                               style="flex: 1"></el-input-number>
              <span style="margin-left: 8px;cursor: default">分钟</span>
            </div>
          </el-form-item>
          <el-button type="primary" @click="querySearchCur" style="width: 100%;margin-left: 0">查询</el-button>
        </el-form>
      </div>
      <div style="margin-left: 8px">
        <el-button icon="el-icon-close" circle type="primary" style="padding: 9px"></el-button>
      </div>
    </div>
    <!--底部表格-->
    <div class="footer">
      <div class="map_silder">
        <el-button type="primary" style="padding: 7px 10px">播放</el-button>
        <el-button type="primary" style="padding: 7px 10px">停止</el-button>
        <div class="slider_speed">
          <span class="demonstration">速度</span>
          <el-slider v-model="value1"></el-slider>
        </div>
        <div class="slider_progress">
          <span class="demonstration">进度</span>
          <el-slider v-model="value2"></el-slider>
          <span>50%</span>
        </div>
      </div>
      <div class="footer_bar">
        <div class="footer_box">
          <ul>
            <li v-for="(item,index) in tableNames" :key="index" :class="index==tableNameIndex?'footer_liActive':''">
              {{ item }}
            </li>
          </ul>
          <div class="footer_boxRight">
            <div class="footer_check">
              <span>轨迹详情</span>
              <el-tooltip class="item" effect="dark" content="Top Center 提示文字" placement="top"
                          style="margin: 0 10px">
                <i class="el-icon-warning"></i>
              </el-tooltip>
              <el-checkbox-group v-model="checkedValue" @change="handleCheckedCitiesChange">
                <el-checkbox v-for="(item,index) in checkedCities" :label="item.label" :key="index">
                  {{ item.label }} <span :style="{ background: item.color}" class="checkColorBox"></span>
                </el-checkbox>
              </el-checkbox-group>
              <span style="margin-left: 15px">相对里程：428.7/km</span>
            </div>
            <div style="text-align: right;display: flex">
              <a href="javescript:;" class="footer_check_a">轨迹生成线路</a>
              <a href="javescript:;" class="footer_check_a">导出</a>
              <div class="icon">
                <i class="min-state"></i>
              </div>
            </div>
          </div>
        </div>
        <div>
          <el-table :data="curData" style="width: 100%" :row-class-name="tableRowClassName"  border>
            <el-table-column prop="id" label="序号" width="70"></el-table-column>
            <el-table-column prop="id" label="视频回放" width="100">
              <template slot-scope="scope">
                <a>播放</a>
              </template>
            </el-table-column>
            <el-table-column prop="id" label="车牌号" width="100"></el-table-column>
            <el-table-column prop="id" label="车组" width="150"></el-table-column>
            <el-table-column prop="id" label="时间" width="300"></el-table-column>
            <el-table-column prop="id" label="停车时长" width="120"></el-table-column>
            <el-table-column prop="id" label="速度km/h" width="100"></el-table-column>
            <el-table-column prop="id" label="传感器长度" width="150"></el-table-column>
            <el-table-column prop="id" label="方向" width="80"></el-table-column>
            <el-table-column prop="id" label="里程" width="100"></el-table-column>
            <el-table-column prop="id" label="报警状态" width="120"></el-table-column>
            <el-table-column prop="id" label="部件状态" width="600"></el-table-column>
            <el-table-column prop="id" label="经纬度" width="150"></el-table-column>
            <el-table-column prop="id" label="位置" width="700"></el-table-column>
            <el-table-column prop="id" label="空重载" width="80"></el-table-column>
            <el-table-column prop="id" label="振动传感器" width="100"></el-table-column>
            <el-table-column prop="id" label="相对里程 km" width="120"></el-table-column>
            <el-table-column prop="id" label="1路油量值（升）" width="150"></el-table-column>
            <el-table-column prop="id" label="1路刻度（电阻%）" width="150"></el-table-column>
            <el-table-column prop="id" label="2路油量值（升）" width="150"></el-table-column>
            <el-table-column prop="id" label="2路刻度（电阻%）" width="150"></el-table-column>
            <el-table-column prop="id" label="温度信息" width="300"></el-table-column>
            <el-table-column prop="id" label="自定义传感器状态" width="300"></el-table-column>
          </el-table>
        </div>
      </div>
      <div style="background: #ffffff;padding: 10px 0;display: flex;justify-content: right">
        <el-pagination
          background
          layout="prev, pager, next"
          :total="totalNum"
          :page-size="pagesize"
          @current-change="handleCurrentChange"
        >
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import Amap from '@/components/GPS/amap'
import curGroup from '@/components/seletCurGroup/index'

export default {
  name: 'playBlack',
  components: {
    Amap,
    curGroup
  },
  data () {
    return {
      isOpen: false, //是否打开选择车辆
      timeLen: ['今天', '昨天', '前天'],
      liIndex: 0,
      form: {
        curNumber: '',
        startTime: '',
        endTime: '',
        num: '5'
      },
      value1: '',
      value2: '',
      tableNames: ['轨迹', '停车数据', '不定位数据'],
      tableNameIndex: 0,
      checkedValue: [],
      checkedCities: [
        {
          id: 1,
          label: '严重报警',
          color: 'rgb(167, 23, 33)'
        },
        {
          id: 2,
          label: '中度报警',
          color: 'rgb(254, 0, 0)'
        },
        {
          id: 3,
          label: '一般报警',
          color: ' rgb(255, 102, 0)'
        },
        {
          id: 4,
          label: '提示报警',
          color: 'rgb(252, 192, 0)'
        }
      ],
      curData:[],
      totalNum:100,
      pagesize:10,
      currentPage:1
    }
  },
  methods: {
    handleCheckedCitiesChange(){

    },

    /** 点击触发打开选择车辆界面 **/
    hangleSelectOpen () {
      this.isOpen = true
    },
    /** 获取时间事件 **/
    getTimeData (index) {
      let daySart = new Date(new Date(new Date().toLocaleDateString()).getTime() - 24 * 60 * 60 * 1000 * index)
      let dayEnd = new Date(new Date(new Date().toLocaleDateString()).getTime() + 24 * 60 * 60 * 1000 - 1 - 24 * 60 * 60 * 1000 * index)
      this.form.startTime = daySart
      this.form.endTime = dayEnd
    },
    /** 精确查找车牌号 **/
    querySearchAsync () {

    },
    handleSelect () {

    },
    handleChange () {

    },
    /** 查找汽车数据 **/
    querySearchCur () {
      if (this.form.curNumber == '') {
        this.$message.error('请选择车牌号')
        return
      }
    },
    /** 设置选中表格哪一行高亮 **/
    tableRowClassName({row, rowIndex}){
      if (rowIndex === 1) {
        return 'warning-row';
      } else if (rowIndex === 3) {
        return 'success-row';
      }
      return '';
    },
    handleCurrentChange(val) {
      console.log(val, "456456");
      this.currentPage = val;
    },

  },
  mounted () {
    this.getTimeData(this.liIndex)
  },
  created () {
    document.addEventListener('click', e => {
      let box = document.getElementById('curModel')
      if (!box.contains(e.target)) {
        this.isOpen = false
      }
    })
  }
}
</script>

<style scoped lang="less">
.el-table .warning-row {
  background: oldlace;
}

.el-table .success-row {
  background: #f0f9eb;
}


.select_form {
  position: absolute;
  top: 10px;
  left: 10px;
  display: flex;

  .track-search {
    background: #f8f8f8;
    box-shadow: 0 0 5px grey;
    border-radius: 5px;
    width: 290px;
    padding: 5px 8px;
  }

  .formItems {
    display: flex;
    align-items: center;
    font-size: 12px;
    position: relative;
  }

  .img_fa {
    margin-left: 8px;
    position: relative;

    img {
      width: 24px;
      height: 24px;
      margin-top: 12px;
    }
  }

  .itemLi {
    font-size: 12px;
    padding: 0 5px;
    cursor: pointer;
  }
}

.itemLiActive {
  color: #2d8cf0;
}

.curModel {
  position: absolute;
  left: 0;
  top: 40px;
  min-width: 550px;
  padding: 5px;
  margin-left: -275px;
  background: #ffffff;
  box-shadow: 0 0 5px grey;
  border-radius: 5px;
  z-index: 99;
}

.footer {
  position: absolute;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 999;

  .map_silder {
    background: #ffffff;
    width: 600px;
    display: flex;
    align-items: center;

    .slider_speed {
      display: flex;
      width: 140px;
      font-size: 12px;
      padding-left: 10px;
      align-items: center;
      text-align: center;

      .demonstration {
        margin-right: 10px;
      }
    }

    .slider_progress {
      flex: 1;
      display: flex;
      font-size: 12px;
      align-items: center;

      .demonstration {
        margin-right: 10px;
      }
    }
  }

  .footer_bar {
    width: 100%;
    background: #ffffff;

    .footer_box {
      display: flex;
      align-items: center;
      border: 1px solid #eeeeee;

      ul {
        display: flex;

        li {
          padding: 0 10px;
          cursor: pointer;
          height: 40px;
          line-height: 40px;
          font-size: 14px;
        }
      }

      .footer_boxRight {
        flex: 1;
        display: flex;
        align-items: center;
        height: 40px;
        line-height: 40px;
        font-size: 14px;
        justify-content: space-around;
        .footer_check {
          margin-left: 50px;
          display: flex;
          align-items: center;
            flex: 1;
          .checkColorBox {
            width: 12px;
            height: 12px;
            vertical-align: middle;
            display: inline-block;
          }
        }
        .footer_check_a{
          color:#2b85e4;
          text-decoration: underline;
          margin-right: 5px;
          font-size: 14px;
        }
        .icon{
          height: 39px;
          width: 25px;
          border-left: 1px solid #b6b6b6;
          i{
            width: 18px;
            height: 18px;
            display: inline-block;
            background-repeat: no-repeat;
            vertical-align: middle;
            margin-left: 5px;
            background-size: 100% 100%;
            background-image: url('../../assets/images/minimize.png');
          }
        }
      }
    }
  }

}

.footer_liActive {
  color: #409eff;
  border-bottom: 1px solid #409eff;
}

.slider_speed > div:first-of-type {
  width: calc(100% - 60px);
  margin: 0 12px;
}

.slider_progress > div:first-of-type {
  width: calc(100% - 100px);
  margin: 0 12px;
}

/deep/ .el-form-item__label {
  font-size: 12px;
}

/deep/ .el-date-editor.el-input, .el-date-editor.el-input__inner {
  width: 100%;
}
</style>
