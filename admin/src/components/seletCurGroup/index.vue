<template>
  <div class="search-content">
    <div class="group_left">
      <el-tree :data="tree_data"
               :props="defaultProps"
               @node-click="handleNodeClick"
               >
         <span class="custom-tree-node" slot-scope="{ node, data }">
          <span>
            <img src="../../assets/images/car.png" alt/>
            {{data.label}}
          </span>
        </span>
      </el-tree>
    </div>
    <div class="group_right">
      <ul>
        <li>
          <span>
            <img src="../../assets/images/car.png"/>
            10354741713
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'selectCurGroup',
  data () {
    return {
      tree_data: [
        {
          label: 'notice-id1',
          children: [
            {
              label: ['卫星名称代号', 'ZOHREH-2'],
            },
            {

              label: ['组织机构', 'IRN'],
            },
            {
              label: ['频率范围', '10950-1450'],
            },
            {
              icon: 'el-icon-top-right',
              label: ['beam名称', ''],
              children: [
                {
                  label: ['name', 'RS49'],
                },
                {
                  label: ['freq_min', '10950'],
                },
                {
                  label: ['freq_max', '14500'],
                },
                {
                  icon: 'src/assets/images/Organization.png',
                  label: ['group(' + '3' + ')', ''],
                  children: [
                    {
                      label: ['10600361', '10950', '11200', '0']
                    },
                    {
                      label: ['10600361', '10950', '11200', '0']
                    },
                    {
                      label: ['10600361', '10950', '11200', '0']
                    }
                  ]
                }
              ]
            },
          ],
        },
      ],
      defaultProps: {
        children: 'children',
        label: 'label',
      }
    }
  },
  methods: {
    handleNodeClick(node,data){
      console.log(node,data)
    }
  }
}
</script>

<style scoped lang="less">
.search-content{
  padding: 6px;
  display: flex;
}
.group_left{
  flex: 0 0 50%;
  max-width: 50%;
  margin-right: 3px;
  height: 400px;
  overflow-y: auto;
  border-right: 1px solid #b0b5b9;
}
.group_right{
  flex: 0 0 50%;
  max-width: 50%;
  height: 400px;
  overflow-y: auto;
  margin-left: 3px;
  ul{
    padding: 5px;
    li{
      margin: 5px;
      height: 20px;
      line-height: 25px;
      cursor: pointer;
    }
  }
}
</style>
