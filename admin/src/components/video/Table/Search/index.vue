<template>
  <div class="content">
    <div class="fler">
      <el-autocomplete
        v-model="state"
        :fetch-suggestions="querySearchAsync"
        placeholder="请输入内容"
        @select="handleSelect"
      ></el-autocomplete>
      <el-button>选择报警类型52项</el-button>
      <el-button icon="el-icon-search" circle></el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'search',
  data () {
    return {
      restaurants: [],
      state: '',
      timeout: null
    }
  },
  methods: {
    querySearchAsync (queryString, cb) {

    },
    handleSelect (item) {

    }
  }
}
</script>

<style scoped lang="less">
.fler {
  width: 100%;
  height: 32px;
  display: flex;
  align-items: center;
  padding: 0 10px;
}
</style>
