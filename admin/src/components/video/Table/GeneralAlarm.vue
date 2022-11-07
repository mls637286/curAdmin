<template>
  <div>
    <SearchInput></SearchInput>
    <el-table
      ref="multipleTable"
      :data="tableData"
      tooltip-effect="dark"
      style="width: 100%"
      @selection-change="handleSelectionChange">
      <el-table-column
        prop="name"
        label="序号"
        width="120">
      </el-table-column>
      <el-table-column
        type="selection"
        width="55">
      </el-table-column>
      <el-table-column
        label="操作"
        width="120">
        <template slot-scope="scope">查看</template>
      </el-table-column>
      <el-table-column
        prop="name"
        label="车牌号"
        width="120">
      </el-table-column>
      <el-table-column
        prop="name"
        label="驾驶员"
        width="120">
      </el-table-column>
      <el-table-column
        prop="name"
        label="所属车组"
        width="120">
      </el-table-column>
      <el-table-column
        prop="name"
        label="速度(km/h)"
        width="120">
      </el-table-column>
      <el-table-column
        prop="name"
        label="报警时间"
        width="120">
      </el-table-column>
      <el-table-column
        prop="name"
        label="平台报警等级"
        width="120">
      </el-table-column>
      <el-table-column
        prop="name"
        label="终端报警级别"
        width="120">
      </el-table-column>
      <el-table-column
        prop="name"
        label="报警"
        width="120">
      </el-table-column>
      <el-table-column
        prop="name"
        label="报警开始时间"
        width="120">
      </el-table-column>
      <el-table-column
        prop="name"
        label="报警结束时间"
        width="120">
      </el-table-column>
      <el-table-column
        prop="name"
        label="高度"
        width="120">
      </el-table-column>
      <el-table-column
        prop="name"
        label="前方车速km/h"
        width="120">
      </el-table-column>
      <el-table-column
        prop="name"
        label="前车距离"
        width="120">
      </el-table-column>
      <el-table-column
        prop="name"
        label="偏离类型"
        width="120">
      </el-table-column>
      <el-table-column
        prop="name"
        label="道路识别标志类型"
        width="120">
      </el-table-column>
      <el-table-column
        prop="name"
        label="道路标志识别数据"
        width="120">
      </el-table-column>
      <el-table-column
        prop="name"
        label="疲劳程度"
        width="120">
      </el-table-column>
      <el-table-column
        prop="address"
        label="位置"
        show-overflow-tooltip>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import SearchInput from "./Search/index"
export default {
  components:{
    SearchInput
  },
  data() {
    return {
      tableData: [{
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
      }],
      multipleSelection: []
    }
  },

  methods: {
    toggleSelection(rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    }
  }
}
</script>
