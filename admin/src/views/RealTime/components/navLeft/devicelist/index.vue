<template>
  <div class="device-list full">
    <div class="live-sider-top">
      <el-card class="box-card" style="height: 100%">
        <div slot="header" class="clearfix">
          <span>车组列表</span>
          <a style="float: right;font-size: 12px;vertical-align: middle;color: #2b85e4;cursor: pointer">取消选择</a>
<!--          <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>-->
        </div>
        <div class="tree-wrapper">
          <div class="tree-wrapper-item">
            <el-tree
              :data="assetsTreeList"
              :props="assetsProps"
              node-key="id"
              :show-checkbox=this.checkFlag
              :default-checked-keys=this.roleAssetsCheckList
            >
                    <span class="custom-tree-node" slot-scope="{ node, data }">
                      <span :dataType="data.type">
                            <i :class="data.checkIcon"></i>
                            <i :class="data.iconSkin"></i>
                    {{ node.label }}
                      </span>
                    </span>
            </el-tree>
          </div>
        </div>
      </el-card>
    </div>
    <div class="device-list-inner">
      <div class="device-search">
        <div class="device-search-wrap">
          <div class="device-search-inner-warp">
            <el-autocomplete clearable style="width: 100%"
                             prefix-icon="el-icon-search"
                             v-model="state"
                             :fetch-suggestions="querySearchAsync"
                             placeholder="请输入内容"
                             @select="handleSelect"
            ></el-autocomplete>
          </div>
          <div style="width: 4px"></div>
          <div class="device-refresh">
            <i class="el-icon-refresh-right" style="font-size: 18px"></i>
          </div>
          <div style="width: 2px"></div>
          <div class="device-add">
            <div title="添加设备" class="full">
              <i class="icon iconfont icon-addfollow" style="font-size: 18px;"></i>
            </div>
          </div>
        </div>
      </div>
      <div class="device-count">
        <div class="device-checkbox">
          <el-checkbox v-model="checked"></el-checkbox>
        </div>
        <div class="device-count-state">
          <div class="ellipsis" v-for="(item,index) in ellipsis" :key="index"
               :class="ellipsisActive==index?'stateActive':''">
            <span>{{ item.title }}</span>
            <span>{{ item.count }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getCurGroup } from '@/api/cur'

export default {
  name: 'index',
  data () {
    return {
      state: '',
      checked: false,
      ellipsis: [
        {
          title: '全部',
          count: '228'
        },
        {
          title: '在线',
          count: '41'
        },
        {
          title: '离线',
          count: '187'
        },
        {
          title: '关注',
          count: '22'
        }
      ],
      ellipsisActive: 0,
      assetsTreeList: [
        {
          'name': '基础',
          'keyCode': 'ATS_BASE_V',
          'type': '1',
          'typeTxt': '添加',
          'function': '0',
          'code': 'D0201001',
          checkIcon: 'el-icon-platform-eleme',
          'dataResourceTree': [{
            'name': '编辑',
            'parentID': 'D0201001',
            'keyCode': 'ATS_BASE_E',
            'type': '2',
            'function': '0',
            'code': 'D0201002',
            'dataResourceTree': [],
            'id': 'D0201002'
          }],
          'id': 'D0201001'
        },
        {
          'name': '位置',
          'keyCode': 'ATS_LOCA_V',
          'type': '1',
          'typeTxt': '添加',
          'function': '0',
          'code': 'D0202001',
          'dataResourceTree': [{
            'name': '编辑',
            'parentID': 'D0202001',
            'keyCode': 'ATS_LOCA_E',
            'type': '2',
            'function': '0',
            'code': 'D0202002',
            'dataResourceTree': [],
            'id': 'D0202002'
          }],
          'id': 'D0202001'
        },
      ],
      assetsProps: {
        children: 'childrenList',
        label: 'name'
      },
      roleAssetsCheckList: [],
      checkFlag: true,
    }
  },
  methods: {
    querySearchAsync () {

    },
    handleSelect () {

    },
    getCurList (id) {
      getCurGroup({ state: id }).then(res => {
        console.log(res)
        this.assetsTreeList = res.data
      })
    }
  },
  mounted () {
    this.getCurList(this.ellipsisActive)
  }
}
</script>

<style scoped lang="less">
.device-list {
  position: relative;
}

.full {
  width: 100%;
  height: 100%;
}
.live-sider-top{
  position: absolute;
  left: 0;
  top: 1px;
  right: 0;
  bottom: 50%;
  border-top: 1px solid #fff;
  .card-head{
    padding: 3px 8px!important;
    line-height: 1;
    border-bottom: 1px solid #e8eaec;
    .g-title{
      font-size: 14px;

    }
  }
}
/deep/.el-card__header{
  padding: 9px 10px;
}
/deep/.el-card__body, .el-main {
  padding: 10px;
}

.device-list-inner {
  position: absolute;
  left: 0;
  top: 50%;
  bottom: 0;
  right: 0;
  border-top: 1px solid #fff;

  .device-search {
    position: relative;
    padding: 10px;

    .device-search-wrap {
      height: 32px;
      width: 100%;
      display: flex;
      flex-direction: row;

      .device-search-inner-warp {
        flex: 1;

        /deep/ .el-input__inner {
          height: 32px;
          line-height: 32px;
        }

        /deep/ .el-input__icon {
          line-height: 32px;
        }
      }

      .device-refresh {
        width: 32px;
        height: 32px;
        line-height: 32px;
        cursor: pointer;
        border: 1px solid #dcdfe6;
        text-align: center;
        border-radius: 5px;
      }

      .device-add {
        width: 32px;
        height: 32px;
        cursor: pointer;
        border: 1px solid #dcdfe6;
        text-align: center;
        border-radius: 5px;
      }
    }
  }

  .device-count {
    position: relative;
    width: 100%;
    height: 40px;

    .device-checkbox {
      position: absolute;
      left: 0;
      top: 0;
      height: 40px;
      width: 30px;
      line-height: 40px;
      background: #f6f6f6;

      /deep/ .el-checkbox {
        padding-left: 10px;
      }
    }

    .device-count-state {
      position: absolute;
      left: 30px;
      top: 0;
      height: 40px;
      right: 0;
      user-select: none;

      .ellipsis {
        float: left;
        width: 24%;
        height: 100%;
        text-align: center;
        line-height: 40px;
        font-size: 12px;
        font-weight: 400;
        color: #000;
        cursor: pointer;
        background-color: #f6f6f6;
        border-left: 2px solid #fff;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      .stateActive {
        color: #1678ff;
        background-color: #f3f8ff;
      }
    }
  }

  //.tree-wrapper {
  //  position: absolute;
  //  left: 0;
  //  top: 100px;
  //  bottom: 0;
  //  right: 0;
  //}
}

.tree-wrapper {
  //position: absolute;
  //left: 0;
  //top: 100px;
  //bottom: 0;
  //right: 0;

  .tree-wrapper-item {
    width: 100%;
    height: 100%;
    overflow-y: auto;
  }
}
</style>
