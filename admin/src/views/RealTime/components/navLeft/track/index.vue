<template>
  <div class="track-ctrl full">
    <div class="track-ctrl-inner">
      <div class="time-mode">
        <div class="track-ctrl-select-time">
          <div class="track-ctrl-select-time-label">选择设备</div>
          <div class="track-ctrl-select-time-value">
            <el-input
              placeholder="请选择设备"
              prefix-icon="el-icon-search"
              v-model="curNumber" clearable>
            </el-input>
          </div>
        </div>
        <div class="track-ctrl-select-time">
          <div class="track-ctrl-select-time-label">开始时间</div>
          <div class="track-ctrl-select-time-value">
            <el-date-picker style="width: 100%"
                            v-model="startTime"
                            type="datetime"
                            placeholder="选择开始时间">
            </el-date-picker>
          </div>
        </div>
        <div class="track-ctrl-select-time">
          <div class="track-ctrl-select-time-label">结束时间</div>
          <div class="track-ctrl-select-time-value">
            <el-date-picker style="width: 100%"
                            v-model="endTime"
                            type="datetime"
                            placeholder="选择结束时间">
            </el-date-picker>
          </div>
        </div>
        <div class="query-criteria">
          <div class="query-criteria-label">停留时长</div>
          <div class="query-criteria-value el-row" style="margin-left: -4px; margin-right: -4px;">
            <div class="el-col el-col-6" style="padding-left: 0px; padding-right: 4px;">
              <div class="query-criteria-value-item selected">3分钟</div>
            </div>
            <div class="el-col el-col-6" style="padding-left: 4px; padding-right: 4px;">
              <div class="query-criteria-value-item">5分钟</div>
            </div>
            <div class="el-col el-col-6" style="padding-left: 4px; padding-right: 4px;">
              <div class="query-criteria-value-item">30分钟</div>
            </div>
            <div class="el-col el-col-6" style="padding-left: 4px; padding-right: 0px;">
              <div class="query-criteria-value-item">60分钟</div>
            </div>
          </div>
        </div>
        <div class="query-criteria">
          <div class="query-criteria-label">快速时间</div>
          <div class="query-criteria-value el-row" style="margin-left: -4px; margin-right: -4px;">
            <div class="el-col el-col-6" style="padding-left: 0px; padding-right: 4px;">
              <div class="query-criteria-value-item selected">3分钟</div>
            </div>
            <div class="el-col el-col-6" style="padding-left: 4px; padding-right: 4px;">
              <div class="query-criteria-value-item">5分钟</div>
            </div>
            <div class="el-col el-col-6" style="padding-left: 4px; padding-right: 4px;">
              <div class="query-criteria-value-item">30分钟</div>
            </div>
            <div class="el-col el-col-6" style="padding-left: 4px; padding-right: 0px;">
              <div class="query-criteria-value-item">60分钟</div>
            </div>
          </div>
        </div>
        <div class="query-tracks-btn">
          <div class="el-row">
            <div class="el-col el-col-8 el-col-offset-8">
              <button type="button" class="el-button el-button--primary el-button--small is-round"
                      style="width: 100%;"><!----><!----><span>查询</span></button>
            </div>
          </div>
        </div>
      </div>
      <div class="track-ctrl-details">
        <div class="track-ctrl-details-inner">
          <div class="details-inner-header">
            <div class="details-inner-header-item">
              <span class="el-tag el-tag--small el-tag--light">全部(6)</span>
            </div>
            <div class="details-inner-header-item">
              <span class="el-tag el-tag--info el-tag--small el-tag--light">行程(1)</span></div>
            <div class="details-inner-header-item">
              <span class="el-tag el-tag--info el-tag--small el-tag--light">停留点(3)</span>
            </div>
            <div class="details-inner-header-item">
              <span class="el-tag el-tag--info el-tag--small el-tag--light">报警(2)</span></div>
          </div>
          <div class="details-inner-body">
            <el-scrollbar>
              <div class="full">
                <div class="all-details">
                  <div class="all-details-index">
                    <div> 1</div>
                  </div>
                  <div class="all-details-icon"><!---->
                    <img src=""
                         style="width: 16px; height: 16px;"><!----></div>
                  <div style="width: 122px; min-width: 122px;">
                    <div class="ellipsis"> 2022-11-07 07:37:35</div>
                  </div>
                  <div class="all-details-content ellipsis"> 11分</div><!----><!----></div>
                <div class="trips-details">
                  <div class="trips-details-index">
                    <div>
                      <div>1</div>
                    </div>
                  </div>
                  <div class="trips-details-content">
                    <div class="trips-details-info">
                      <div>
                        <div> 9.2km</div>
                        <div>里程</div>
                      </div>
                      <div>
                        <div> 46分</div>
                        <div>行驶时长</div>
                      </div>
                      <div>
                        <div> 54.1km/h</div>
                        <div>最高速度</div>
                      </div>
                      <div>
                        <div> 11.98km/h</div>
                        <div>平均速度</div>
                      </div>
                    </div>
                    <div class="trips-details-time"><span class="trips-details-time-icon start"></span><span
                      title="2022-11-07 07:49:09">2022-11-07 07:49:09</span></div>
                    <div class="trips-details-address">
                      <div title="江苏省扬州市邗江区运河北路辅路;月明苑内,月明东苑内0米" class="ellipsis">
                        江苏省扬州市邗江区运河北路辅路;月明苑内,月明东苑内0米
                      </div>
                    </div>
                    <div class="trips-details-time"><span class="trips-details-time-icon end"></span><span
                      title="2022-11-07 08:35:14">2022-11-07 08:35:14</span></div>
                    <div class="trips-details-address">
                      <div title="江苏省扬州市广陵区南通西路56号;南门新村内" class="ellipsis">
                        江苏省扬州市广陵区南通西路56号;南门新村内
                      </div>
                    </div>
                  </div>
                </div>
                <div class="parking-details">
                  <div class="parking-details-info">
                    <div class="parking-details-info-index">
                      <div>1</div>
                    </div>
                    <div style="flex: 1 1 0%; padding-left: 10px;">2022-11-07 07:37:35</div>
                    <div>11分</div>
                  </div>
                  <div class="parking-details-address">
                    <div title="江苏省扬州市邗江区运河北路辅路;月明苑内,月明东苑内0米" class="ellipsis">
                      江苏省扬州市邗江区运河北路辅路;月明苑内,月明东苑内0米
                    </div>
                  </div>
                </div>
                <div class="alarm-details">
                  <div class="alarm-details-first">
                    <div class="alarm-details-index">
                      <div>1</div>
                    </div>
                    <div style="padding-left: 10px;">2022-11-07 07:48:20</div>
                  </div>
                  <div class="alarm-details-last">
                    <div class="alarm-status">碰撞预警</div>
                  </div>
                </div>
              </div>
            </el-scrollbar>
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
      curNumber: '',
      startTime: '',
      endTime: ''
    }
  }
}
</script>

<style scoped lang="less">
  .full{
    position: relative;
    width: 100%;
    height: 100%;
    .track-ctrl-inner{
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      top: 0;
      overflow-y: auto;
      .time-mode{
        .track-ctrl-select-time{
          margin: 0 10px 10px;
          height: 32px;
          display: flex;
          flex-direction: row;
          .track-ctrl-select-time-label{
            width: 60px;
            font-size: 12px;
            line-height: 32px;
            font-weight: 700;
          }
          .track-ctrl-select-time-value{
            flex: 1;
            /deep/.el-input__inner{
              height: 32px;
              line-height: 32px;
            }
            /deep/.el-input__icon{
              line-height: 32px;
            }
          }
        }
        .query-criteria{
          margin: 10px;
          .query-criteria-label {
            font-size: 12px;
            font-weight: 700;
            width: 160px;
            padding-top: 6px;
            padding-bottom: 6px;
          }
          .query-criteria-value {
            width: 100%;
            height: 25px;
            margin-left: 0!important;
            margin-right: 0!important;
            .query-criteria-value-item{
              text-align: center;
              line-height: 26px;
              height: 100%;
              font-size: 12px;
              width: 100%;
              border-radius: 5px;
              background-color: #fafafa;
              color: #000;
              cursor: pointer;
            }
            .selected{
              background-color: #ecf5ff;
              color: #2680ff;
            }
          }
        }
        .query-tracks-btn{
          padding-top: 4px;
          text-align: center;
        }
      }
      .track-ctrl-details{
        position: absolute;
        left: 10px;
        bottom: 14px;
        right: 10px;
        top: 310px;
        .track-ctrl-details-inner{
          width: 100%;
          height: 100%;
          .details-inner-header{
            height: 30px;
            width: 100%;
            display: flex;
            flex-direction: row;
            .details-inner-header-item{
              flex: 1;
              margin-right: 8px;
              span{
                width: 100%;
                text-align: center;
                cursor: pointer;
              }
            }
            .details-inner-header-item:last-child{
              margin-right: 0!important;
            }
          }
          .details-inner-body{
            position: absolute;
            left: 0;
            top: 30px;
            right: -10px;
            bottom: 0;
            .all-details{
              overflow: hidden;
              position: relative;
              border: 1px solid #c8d2db;
              border-radius: 4px;
              padding: 8px 10px;
              font-size: 12px;
              margin: 0 10px 6px 0;
              cursor: pointer;
              display: flex;
              flex-direction: row;
              flex-wrap: nowrap;
              .all-details-index {
                width: 20px;
                height: 20px;
                padding-top: 1px;
                div{
                  width: 18px;
                  height: 18px;
                  text-align: center;
                  line-height: 18px;
                  border-radius: 9px;
                  margin: 0 auto;
                  color: #000;
                  font-size: 12px;
                }
              }
              .all-details-icon {
                width: 40px;
                height: 20px;
                line-height: 20px;
                padding: 0 10px;
                text-align: center;
                padding-top: 1px;
              }
              .all-details-content{
                flex: 1;
              }
            }
            .trips-details{
              border: 1px solid #c8d2db;
              margin-bottom: 6px;
              border-radius: 4px;
              cursor: pointer;
              overflow: hidden;
              margin-right: 10px;
              position: relative;
              height: 138px;
              .trips-details-index {
                position: absolute;
                left: 0;
                top: 0;
                bottom: 0;
                width: 30px;
              }
              .trips-details-index>div {
                width: 20px;
                height: 100%;
                background-color: #e7f3ff;
                div {
                  width: 18px;
                  height: 18px;
                  text-align: center;
                  line-height: 18px;
                  border-radius: 9px;
                  margin: -9px auto 0;
                  color: #1678ff;
                  font-size: 12px;
                  position: absolute;
                  top: 50%;
                }
              }
              .trips-details-content {
                position: absolute;
                left: 30px;
                top: 0;
                right: 0;
                font-size: 12px;
                padding: 10px 10px 10px 0;
                .trips-details-info {
                  display: flex;
                  flex-direction: row;
                }
                .trips-details-info>div {
                  flex: 1;
                  text-align: left;
                  .trips-details-info>div>div:first-child {
                    color: #1678ff;
                  }
                }
                .trips-details-time {
                  width: 100%;
                  margin-top: 4px;
                  span{
                    color: #67696b;
                    vertical-align: middle;
                  }
                  .trips-details-time-icon {
                    display: inline-block;
                    height: 20px;
                    width: 14px;
                    background-size: 13px 13px;
                    background-position: 50%;
                    background-repeat: no-repeat;
                    text-align: center;
                    line-height: 20px;
                  }
                  .start{
                    background-image: url("@/assets/images/cur_start.png");
                  }
                  .end{
                    background-image: url("@/assets/images/cur_end.png");
                  }
                  .trips-details-address {
                    width: 100%;
                    div{
                      width: 100%;
                      -webkit-transform-origin-x: 0;
                      -webkit-transform-origin-y: 0;
                      -webkit-transform: scale(.9);
                    }
                  }
                }
              }
            }
            .parking-details {
              margin: 0 10px 6px 0;
              border: 1px solid #c8d2db;
              border-radius: 4px;
              padding: 10px;
              cursor: pointer;
              .parking-details-info {
                display: flex;
                font-size: 12px;
                margin-bottom: 6px;
                .parking-details-info-index {
                  width: 20px;
                  height: 20px;
                }
              }
              .parking-details-address{
                font-size: 12px;
                display: flex;
                div {
                  flex: 1;
                }
              }
            }
            .alarm-details {
              position: relative;
              border: 1px solid #c8d2db;
              border-radius: 4px;
              padding: 10px;
              margin-right: 10px;
              font-size: 12px;
              cursor: pointer;
              margin-bottom: 6px;
              .alarm-details-first {
                display: flex;
                flex-direction: row;
                .alarm-details-index {
                  width: 20px;
                  height: 20px;
                  div{
                    width: 18px;
                    height: 18px;
                    text-align: center;
                    line-height: 18px;
                    border-radius: 9px;
                    margin: 0 auto;
                    background-color: #6ba6f8;
                    color: #fff;
                    font-size: 12px;
                  }
                }
                .alarm-details-last {
                  margin-top: 6px;
                }
              }
            }
          }
        }
      }
    }
  }
  .ellipsis {
    line-height: 20px;
    height: 20px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
</style>
