<template>
  <div class="video-back full">
    <div class="video-back-ctrl">
      <div class="video-back-ctrl-form">
        <div class="ctrl-row">
          <div class="ctrl-row-label">请选择设备</div>
          <div class="ctrl-row-input">
            <el-input style="width: 100%"
                      placeholder="请输入车牌号"
                      v-model="Numberplate">
              <i slot="prefix" class="el-input__icon el-icon-search"></i>
            </el-input>
          </div>
        </div>
        <div class="ctrl-row">
          <div class="ctrl-row-label">选择通道</div>
          <div class="ctrl-row-input">
            <el-select v-model="aisle" placeholder="请选择" style="width: 100%">
              <el-option
                v-for="item in aisleList"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </div>
          <div class="ctrl-row">
            <div class="ctrl-row-label">选择日期</div>
            <div class="ctrl-row-input">
<!--              <el-date-picker style="width: 100%"-->
<!--                              v-model="startTime"-->
<!--                              type="datetime"-->
<!--                              placeholder="选择开始时间">-->
<!--              </el-date-picker>-->
              <el-date-picker style="width: 100%"
                v-model="startTime"
                type="date"
                placeholder="选择日期">
              </el-date-picker>
            </div>
          </div>
          <div class="ctrl-row">
            <div class="ctrl-row-label">结束时间</div>
            <div class="ctrl-row-input">
              <el-date-picker style="width: 100%"
                              v-model="endTime"
                              type="date"
                              placeholder="选择结束时间">
              </el-date-picker>
            </div>
          </div>
          <div class="select-label">文件位置</div>
          <div class="el-row">
            <div class="el-col el-col-8" style="padding-left: 5px; padding-right: 5px;"
                 v-for="(item,index) in fileAddress" :key="index">
              <div class="col-button" :class="fileIndex==index?'col-button-active':''">{{ item.title }}</div>
            </div>
          </div>
          <div class="select-label">录像类型</div>
          <div class="el-row">
            <div class="el-col el-col-8" style="padding-left: 5px; padding-right: 5px;" v-for="(item,index) in typeList"
                 :key="index">
              <div class="col-button" :class="typeIndex==index?'col-button-active':''">{{ item.title }}</div>
            </div>
          </div>
          <div style="text-align: center;margin-top: 40px">
            <el-button type="primary" round style="width: 120px">查询</el-button>
          </div>
        </div>
      </div>
    </div>
    <div class="video-back-list">
      <div class="back-records full">
        <div class="back-records-title">
          <b>历史记录</b>
          <span>共有{{ historyCount }}条记录</span>
        </div>
        <div class="back-records-content">
          <el-scrollbar>
            <div class="back-records-content-item">
              <div class="back-records-item-first">
                <div class="back-records-item-first-icon"></div>
                <div class="back-records-item-first-index">1</div>
                <div class="back-records-item-first-time">
                  <span>09:29:05</span>
                  -
                  <span>09:29:15</span>
                </div>
              </div>
              <div class="back-records-item-last">
                <div class="iconStyles time-icon"></div>
                <div style="width: 80px;">10秒</div>
                <div class="iconStyles size-icon"></div>
                <div>4.00M</div>
                <div class="el-tooltip download-icon1 item iconStyles" style="float: right;"></div>
                <div class="el-tooltip download-icon2 item iconStyles" style="float: right;"></div>
              </div>
            </div>
          </el-scrollbar>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      Numberplate: '',//车牌号
      aisle: '1', //通道值
      aisleList: [
        {
          label: '通道1',
          value: '1'
        },
        {
          label: '通道2',
          value: '2'
        },
        {
          label: '通道3',
          value: '3'
        },
        {
          label: '通道4',
          value: '4'
        },
      ],
      startTime: '',
      endTime: '',
      fileAddress: [
        {
          id: 1,
          title: '终端设备'
        },
        {
          id: 2,
          title: '应急存储器'
        },
        {
          id: 3,
          title: '本地磁盘'
        },
      ],
      fileIndex: 0,
      typeList: [
        {
          id: '1',
          title: '全部录像'
        },
        {
          id: '2',
          title: '报警录像'
        },
      ],
      typeIndex: 0,
      historyCount: 0
    }
  },
  methods: {
    getNewDate (index) {
      let daySart = new Date(new Date(new Date().toLocaleDateString()).getTime() - 24 * 60 * 60 * 1000 * index)
      let dayEnd = new Date(new Date(new Date().toLocaleDateString()).getTime() + 24 * 60 * 60 * 1000 - 1 - 24 * 60 * 60 * 1000 * index)
      this.startTime = daySart
      this.endTime = dayEnd
    }
  },
  mounted () {
    this.getNewDate(0)
  }
}
</script>

<style scoped lang="less">
.video-back {
  background: #f6f6f6;
}

.full {
  position: relative;
  width: 100%;
  height: 100%;
}

.video-back-ctrl {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  height: 360px;
  background: #fff;
  padding-top: 5px;
  font-size: 12px;

  .video-back-ctrl-form {
    margin: 0 10px;

    .ctrl-row {
      height: 32px;
      width: 100%;
      margin-bottom: 5px;
      font-size: 12px;

      .ctrl-row-label {
        float: left;
        width: 90px;
        line-height: 32px;
        margin-bottom: 5px;
      }

      .ctrl-row-input {
        //width: 100%;
        height: 100%;
        padding-left: 90px;
        margin-bottom: 5px;

        /deep/ .el-input__inner {
          height: 32px;
          line-height: 32px;
          width: 100%;
        }
      }
    }

    .select-label {
      margin-bottom: 5px;
      font-size: 12px;
    }

    .el-row {
      margin-bottom: 5px;

      .col-button {
        width: 100%;
        height: 28px;
        border-radius: 4px;
        text-align: center;
        line-height: 28px;
        background-color: #fafafa;
        cursor: pointer;
        color: #000;
      }

      .col-button-active {
        background-color: #ecf5ff;
        color: #2680ff;
      }
    }
  }
}

.video-back-list {
  position: absolute;
  left: 0;
  right: 0;
  top: 365px;
  bottom: 0;
  background: #fff;

  .back-records-title {
    height: 40px;
    line-height: 40px;
    font-size: 12px;
    padding: 0 10px;
    border-bottom: 1px solid #f6f6f6;
    border-top: 1px solid #f6f6f6;

    b {
      float: left;
    }

    span {
      float: right;
    }
  }

  .back-records-content {
    position: absolute;
    top: 41px;
    left: 0;
    right: 0;
    bottom: 0;

    .back-records-content-item {
      cursor: pointer;
      width: 100%;
      height: 44px;
      //padding: 0 10px;

      .back-records-item-first {
        height: 20px;
        padding: 2px 0;

        .back-records-item-first-icon {
          width: 16px;
          height: 16px;
          float: left;
          background-image: url("@/assets/images/first_icon.png");
          background-size: 16px 16px;
        }

        .back-records-item-first-index {
          padding-left: 2px;
          float: left;
          height: 16px;
          font-size: 12px;
          text-align: center;
          line-height: 16px;
        }

        .back-records-item-first-time {
          margin-left: 48px;
          font-size: 13px;
          height: 16px;
          line-height: 16px;
          overflow: hidden;
        }
      }

      .back-records-item-last {
        height: 24px;
        width: 100%;
        //padding-left: 48px;

        div {
          float: left;
          font-size: 12px;
          line-height: 24px;
          height: 24px;
          overflow: hidden;
        }

        .iconStyles {
          width: 24px;
          background-size: 16px 16px;
          background-position: 50%;
          background-repeat: no-repeat;
        }

        .time-icon {
          background-image: url("@/assets/images/time_icon.png");
        }

        .size-icon {
          background-image: url("@/assets/images/size_icon.png");
        }

        .download-icon1 {
          background-image: url("@/assets/images/download-icon1.png");
        }

        .download-icon2 {
          background-image: url("@/assets/images/download-icon2.png");
        }
      }
    }
  }
}

/deep/ .is-round {
  padding: 9px 15px;
}

/deep/ .el-input__icon {
  line-height: 32px;
}
</style>
