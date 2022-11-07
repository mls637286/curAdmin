<template>
  <div class="tables-content-wrapper" style="height: 100%">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane name="1">
        <span slot="label">
          选中列表(2)
        </span>
      </el-tab-pane>
    </el-tabs>
    <div class="tables-content-wrapper-table">
      <div class="item">
        <el-table height="100%"
          :data="curInfoList"
          border
          style="width: 100%">
          <el-table-column
            prop="date"
            label="日期"
            width="180">
          </el-table-column>
          <el-table-column
            prop="name"
            label="姓名"
            width="180">
          </el-table-column>
          <el-table-column
            prop="address"
            label="地址">
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      activeName: '1',
      curInfoList: [{
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-08',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-06',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-07',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }]
    }
  },
  methods:{
    handleClick(){}
  }
}
</script>

<style scoped lang="less">
.tables-content-wrapper {
  position: relative;

  /deep/ .el-tabs__nav-wrap {
    padding-left: 15px;
  }
}

.tables-content-wrapper-table {
  position: absolute;
  top: 42px;
  left: 1px;
  right: 2px;
  bottom: 5px;

  .item {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #fff;
    z-index: 99;
  }
}
</style>
