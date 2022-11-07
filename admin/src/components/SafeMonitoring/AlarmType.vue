<template>
  <div class="wrapper">
    <el-dialog
      width="680px"
      class="dialog-mini"
      :title="textMap"
      :visible.sync="dialogFormVisible"
    >
      <div class="modal-main">
        <el-input
          placeholder="请输入内容"
          v-model="input"
          @input="hangleChangeSearch"
          clearable>
        </el-input>
      </div>
      <div class="check-main">
        <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">
          <span>主动安全防控报警类型(总数: 52; 已勾选: 0)</span>
        </el-checkbox>
        <div style="margin: 15px 0;"></div>
        <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
          <el-checkbox v-for="city in cities" :label="city" :key="city">{{ city }}</el-checkbox>
        </el-checkbox-group>
      </div>
      <span slot="footer" class="dialog-footer">
    <el-button @click="dialogFormVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
  </span>
    </el-dialog>
  </div>
</template>

<script>
const cityOptions = ['上海', '北京', '广州', '深圳']
export default {
  name: 'AlarmType',
  data () {
    return {
      textMap: '选择报警类型',
      dialogFormVisible: true,
      input: '',
      checkAll: false,
      checkedCities: [],
      cities: cityOptions,
      isIndeterminate: false
    }
  },
  methods: {
    hangleChangeSearch (val) {
      var array = []
      cityOptions.map(item => {
        console.log(item)
        if (item.indexOf(val) != -1) {
          array.push(item)
        }
      })
      this.cities = array
    },
    handleCheckAllChange (val) {
      this.checkedCities = val ? cityOptions : []
      this.isIndeterminate = false
    },
    handleCheckedCitiesChange (value) {
      let checkedCount = value.length
      this.checkAll = checkedCount === this.cities.length
      this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length
    }
  }
}
</script>

<style scoped lang="less">
  .modal-main{
    width: 300px;
    /deep/.el-input__inner{
      height: 32px;
      line-height: 32px;
    }
  }
  .check-main{
    margin-top: 15px;
    /deep/.el-checkbox{
      width: 33.3%;
      margin-right: 0;
    }
  }
</style>
