<template>
  <div>
    <el-table
      :data="tableData"
      border
      style="width: 100%">
      <el-table-column
        prop="date"
        label="序号"
        width="60">
      </el-table-column>
      <el-table-column
        prop="date"
        label="操作"
        width="120">
      </el-table-column>
      <el-table-column
        prop="name"
        label="车牌号"
        width="120">
      </el-table-column>
      <el-table-column
        prop="name"
        label="摄像头"
        width="120">
      </el-table-column>
      <el-table-column
        prop="address"
        label="抓怕时间"
        width="160"
      >
      </el-table-column>
      <el-table-column
        prop="address"
        label="状态"
        width="120"
      >
      </el-table-column>
      <el-table-column
        prop="address"
        label="事情类型"
      >
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'picture',
  data() {
    return {
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }]
    }
  }
}
</script>

<style scoped>

</style>
