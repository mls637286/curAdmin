<template>
  <div class="wrapper">
    <div class="alarm-container">
      <div class="alarm-header">
        <span class="header_title">未分类警报(97)</span>
        <span class="header_tip">可拖动警报到下方进行警报分类</span>
        <el-button type="primary" icon="el-icon-edit" class="header_btn" v-if="!allowed" @click="hangleEdit">编辑
        </el-button>
        <el-button type="primary" class="header_btn" v-if="allowed" @click="hangleSave">保存</el-button>
        <el-button class="header_btn" v-if="allowed" @click="hangleCancel">取消</el-button>
      </div>
      <div class="edit-drag">
        <ul class="list-group">
          <li class="list-group-item" v-for="(item,index) in categorized" :key="index" :draggable="allowed"
              @dragover="onDragOver"
              @dragend="onDragEnd($event, index)" @dragstart="onDragStart(index)">
            {{ item.name }}
          </li>
        </ul>
      </div>
      <div class="sort-drag">
        <div class="drag-content" v-for="(item,index) in dragList" :key="index" :ref="'dragBox'+index">
          <div class="drag_title">
            <div class="drag-dot" :style="{background:index==0?'rgb(187, 19, 19)':index==1?'rgb(239, 27, 27)':index==2?'rgb(235, 97, 25)':'rgb(255, 192, 0)'}"></div>
            <span :style="{color:index==0?'rgb(187, 19, 19)':index==1?'rgb(239, 27, 27)':index==2?'rgb(235, 97, 25)':'rgb(255, 192, 0)'}">{{item.name}}({{item.account}})</span>
          </div>
          <div class="list-group">
            <div class="list-group-item" v-for="(its,ids) in item.categorized" :key="ids">{{ its.name }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AlarmConfigure',
  data () {
    return {
      draggable: false,
      allowed: false,
      categorized: [
        {
          id: 1,
          name: '异常举升报警'
        },
        {
          id: 2,
          name: '超过阈值速度报警'
        },
        {
          id: 3,
          name: '超过道路限速报警'
        },
        {
          id: 4,
          name: '急加速报警'
        },
        {
          id: 5,
          name: '急转弯报警'
        },
        {
          id: 6,
          name: '急减速报警'
        },
        {
          id: 7,
          name: '急刹车报警'
        },
        {
          id: 8,
          name: '自定义低1触发报警'
        },
        {
          id: 9,
          name: '自定义低2触发报警'
        },
      ],
      dragList: [
        {
          name: '严重报警',
          account: 34,
          categorized: [
            {
              id: 1,
              name: '分段限速报警'
            },
            {
              id: 2,
              name: '区域超速报警'
            },
            {
              id: 3,
              name: '急减速报警'
            },
            {
              id: 4,
              name: '急加速报警'
            },
            {
              id: 5,
              name: '超速报警'
            }
          ]
        },
        {
          name: '中度报警',
          account: 5,
          categorized: [
            {
              id: 1,
              name: '出区域报警'
            },
            {
              id: 2,
              name: '进区域报警'
            },
            {
              id: 3,
              name: '异常驾驶报警'
            },
            {
              id: 4,
              name: '停车超时报警'
            },
            {
              id: 5,
              name: '长时间不定位报警'
            }
          ]
        },
        {
          name: '一般报警',
          account: 14,
          categorized: [
            {
              id: 1,
              name: '终端主电源欠压'
            },
            {
              id: 2,
              name: 'GPS天线开路'
            },
            {
              id: 3,
              name: 'GNCC天线开路'
            },
          ]
        },
        {
          name: '提示报警',
          account: 22,
          categorized: [
            {
              id: 1,
              name: '超速预警'
            },
            {
              id: 2,
              name: '疲劳驾驶预警'
            },
            {
              id: 3,
              name: '超流量预警'
            },
            {
              id: 4,
              name: '驾驶员身份识别'
            }
          ]
        },
      ],
      dragingIndex: null,//被拖拽的对象
      target: null,//目标对象
      layerArray: []
    }
  },
  mounted () {
    this.initDiv()
  },
  methods: {
    hangleEdit () {
      this.allowed = !this.allowed
    },
    hangleSave () {

    },
    hangleCancel () {
      this.allowed = false
    },
    //计算区域的坐标
    initDiv () {
      for (var i = 0; i < this.dragList.length; i++) {
        var divBox = this.$refs['dragBox' + i][0].getBoundingClientRect()
        console.log(this.$refs['dragBox' + i][0].getBoundingClientRect())
        this.layerArray.push({
          left: divBox.left,
          right: divBox.right,
          top: divBox.top,
          bottom: divBox.bottom
        })
      }
    },
    onDragStart (index) {
      console.log(index)
      this.dragingIndex = index
    },
    onDragOver (event) {
      event.preventDefault()
    },
    onDragEnd (event, index) {
      event.preventDefault()
      var screenX = event.layerX
      var screenY = event.layerY
      console.log(index)
      for (var i = 0; i < this.layerArray.length; i++) {
        if (screenX >= this.layerArray[i].left && screenX < this.layerArray[i].right && screenY >= this.layerArray[i].top && screenY < this.layerArray[i].bottom) {
          this.dragList[i].categorized.push(this.categorized[index])
          this.categorized.splice(index, 1)
        }
      }
    },
  }
}
</script>

<style scoped lang="less">
.wrapper {
  width: 100%;
  height: 100%;
  background: #fff;
  font-size: 12px;
}

.alarm-container {
  padding: 15px;
}

.alarm-header {
  display: flex;
  height: 32px;
  line-height: 32px;
  align-items: center;

  .header_title {
    font-size: 14px;
    color: #0c203a;
  }

  .header_tip {
    color: #999;
    margin: 0 10px;
  }

  .header_btn {
    padding: 0 15px;
    height: 32px;
    line-height: 32px;
  }
}

.edit-drag {
  width: 100%;
  height: 150px;
}

.list-group {
  display: block;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  padding: 5px 0;

  .list-group-item {
    padding: 5px 0;
    width: 190px;
    //height: 30px;
    float: left;
    margin: 0 5px 10px 0;
    border: 1px solid #e4e7eb;
    text-align: center !important;
    border-radius: 0 !important;
    background: #ffffff;
  }

  .list-group-item:hover {
    background-color: #f2f9ff;
    border: 1px solid #147adf;
    color: #147adf;
    cursor: pointer;
  }
}

.sort-drag {
  width: 100%;
  height: calc(100% - 197px);
  margin-top: 15px;
  display: flex;
}

.drag-content {
  padding: 5px;
  width: 24.8%;
  margin: 0 10px 0 0;
  background: #f5f6f8;
}
.drag_title{
  display: flex;
  .drag-dot{
    width: 8px;
    height: 8px;
    margin: 6px;
  }
  span{
    font-size: 14px;
  }
}
</style>
