<template>
  <div style="width: 100%;height: 100%">
    <el-table
      :data="tableData"
      border
      style="width: 100%;height: auto">
      <el-table-column
        prop="date"
        label="序号"
        width="80">
      </el-table-column>
      <el-table-column
        prop="name"
        label="车牌号"
        width="120">
      </el-table-column>
      <el-table-column
        prop="address"
        label="终端号"
        width="120">
      </el-table-column>
      <el-table-column
        prop="date"
        label="车组"
        width="150">
      </el-table-column>
      <el-table-column
        prop="date"
        label="信号时间"
        width="180">
      </el-table-column>
      <el-table-column
        prop="date"
        label="速度"
        width="100">
      </el-table-column>
      <el-table-column
        prop="date"
        label="传感器速度"
        width="120">
      </el-table-column>
      <el-table-column
        prop="date"
        label="行程"
        width="120">
      </el-table-column>
      <el-table-column
        prop="date"
        label="里程(km)"
        width="100">
      </el-table-column>
      <el-table-column
        prop="date"
        label="信号值"
        width="150">
      </el-table-column>
      <el-table-column
        prop="date"
        label="工作时长(分钟)"
        width="150">
      </el-table-column>
      <el-table-item
        prop="date"
        label="1路油量值(升)"
        width="150"
      ></el-table-item>
      <el-table-item
        prop="date"
        label="1路刻度(电阻,%)"
        width="150"
      ></el-table-item>
      <el-table-item
        prop="date"
        label="2路油量值(升)"
        width="150"
      ></el-table-item>
      <el-table-item
        prop="date"
        label="2路刻度(电阻,%)"
        width="150"
      ></el-table-item>
      <el-table-column
        prop="date"
        label="空重载"
        width="100">
      </el-table-column>
      <el-table-column
        prop="date"
        label="胎压"
        width="220">
      </el-table-column>
      <el-table-column
        prop="date"
        label="部件状态"
        width="600">
      </el-table-column>
      <el-table-column
        prop="date"
        label="温度"
        width="100">
      </el-table-column>
      <el-table-column
        prop="date"
        label="载重计量"
        width="100">
      </el-table-column>
      <el-table-column
        prop="date"
        label="地址"
        width="200">
      </el-table-column>
      <el-table-column
        prop="date"
        label="外设名称"
        width="100">
      </el-table-column>
      <el-table-column
        prop="date"
        label="外设刻度"
        width="100">
      </el-table-column>
      <el-table-column
        prop="date"
        label="容积"
        width="100">
      </el-table-column>
      <el-table-column
        prop="date"
        label="湿度"
        width="100">
      </el-table-column>
      <el-table-column
        prop="date"
        label="营运路线"
        width="100">
      </el-table-column>
      <el-table-column
        prop="date"
        label="SIM卡号"
        width="100">
      </el-table-column>
      <el-table-column
        prop="date"
        label="自定义编号"
        width="100">
      </el-table-column>
      <el-table-column
        prop="date"
        label=" 今日行驶里程（平台）"
        width="100">
      </el-table-column>
      <el-table-column
        prop="date"
        label="振动传感器"
        width="100">
      </el-table-column>
      <el-table-column
        prop="date"
        label="终端厂商型号"
        width="100">
      </el-table-column>
      <el-table-column
        prop="date"
        label="自定义信息展示栏"
        width="100">
      </el-table-column>
      <el-table-column
        prop="date"
        label="车辆品牌"
        width="100">
      </el-table-column>
      <el-table-column
        prop="date"
        label="业户"
        width="100">
      </el-table-column>
      <el-table-column
        prop="date"
        label="从业人员"
        width="100">
      </el-table-column>
      <el-table-column
        prop="date"
        label="运营机构"
        width="100">
      </el-table-column>
      <el-table-column
        prop="date"
        label="网络制式"
        width="100">
      </el-table-column>
      <el-table-column
        prop="date"
        label="经度"
        width="100">
      </el-table-column>
      <el-table-column
        prop="date"
        label="纬度"
        width="100">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'location',
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
