<template>
  <div class="container">
    <div style="height: 100%">
      <el-table
        :data="tableData"
        height="100%"
        width="100%"
        border
        style="width: 100%">
        <el-table-column
          prop="date"
          label="序号"
          width="60">
        </el-table-column>
        <el-table-column
          prop="name"
          label="操作"
          width="600">
          <template slot-scope="scope">
            <div style="display: flex;justify-content: center;align-items: center" class="operate">
              <span><i class="iconfont icon-bofang"></i></span>
              <span><a>上传到服务器</a></span>
              <span><a>取消上传</a></span>
              <span><a>下载到本地</a></span>
            </div>
          </template>
        </el-table-column>
        <el-table-column
          prop="address"
          label="开始时间"
          width="180"
        >
        </el-table-column>
        <el-table-column
          prop="address"
          label="结束时间"
          width="180"
        >
        </el-table-column>
        <el-table-column
          prop="address"
          label="录像类型"
          width="120"
        >
        </el-table-column>
        <el-table-column
          prop="address"
          label="终端设备"
          width="200"
        >
        </el-table-column>
        <el-table-column
          prop="address"
          label="通道"
          width="120"
        >
        </el-table-column>
        <el-table-column
          prop="address"
          label="文件位置"
          width="120"
        >
        </el-table-column>
        <el-table-column
          prop="address"
          label="大小(MB)"
          width="120"
        >
        </el-table-column>
      </el-table>

    </div>
  </div>
</template>

<script>
export default {
  data () {
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
      }]
    }
  }
}
</script>

<style scoped lang="less">
.container {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: #fff;
}
.operate span{
  display: inline-block;
  margin-left: 10px;
  cursor: pointer;
  a{
    color: #2d8cf0;
  }
}
</style>
