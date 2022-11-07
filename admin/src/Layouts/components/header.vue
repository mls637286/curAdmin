<template>
  <div class="header">
    <div class="logo">
      <img src="@/assets/images/nav_icon_head.png">
      <span>
        <i>车载视频物联平台</i>
      </span>
    </div>
    <div class="header-center">
      <div class="app-header-nav">
        <div v-for="(item,index) in navList" :key="index" :class="navIndex==index?'navActive':''">
          <img :src="item.url"/>
          <span>{{ item.title }}</span>
        </div>
      </div>
    </div>
    <div class="header-functions">
      <div class="functions-user-list">
        <div class="user">
          <div class="user-name">{{ user }}</div>
        </div>
      </div>
      <div class="vertical-line"></div>
      <div class="function-item">
        <el-tooltip content="公共消息" placement="bottom" effect="light">
          <img src="@/assets/images/icon_message.png"/>
        </el-tooltip>
      </div>
      <div class="function-item">
        <el-tooltip content="设置" placement="bottom" effect="light">
          <img src="@/assets/images/icon_setting.png"/>
        </el-tooltip>
      </div>
      <div class="function-item">
        <el-tooltip content="客服" placement="bottom" effect="light">
          <img src="@/assets/images/icon_kf.png"/>
        </el-tooltip>
      </div>
      <div class="function-item">
        <el-tooltip content="全屏" placement="bottom" effect="light">
          <img src="@/assets/images/icon_qp.png"/>
        </el-tooltip>
      </div>
      <div class="function-item">
        <el-tooltip content="退出" placement="bottom" effect="light">
          <img src="@/assets/images/icon_layout.png"/>
        </el-tooltip>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      navList: [
        {
          url: require('@/assets/images/icon_home.png'),
          title: '数据大屏'
        },
        {
          url: require('@/assets/images/icon_real.png'),
          title: '实时监控'
        },
        {
          url: require('@/assets/images/icon_table.png'),
          title: '统计报表'
        },
        {
          url: require('@/assets/images/icon_admin.png'),
          title: '后台管理'
        }
      ],
      navIndex: 1,
      user: 'minigps'
    }
  }
}
</script>
<style scoped lang="less">
.header {
  width: 100%;
  height: 48px;
  //padding: 0 15px 0 0;
  background-image: url("@/assets/images/nav_bg.jpg");
  background-size: 100% 48px;
  display: flex;
  flex-direction: row;

  .logo {
    float: left;
    color: #fff;
    line-height: 48px;
    font-size: 16px;
    align-items: center;
    width: 415px;
    background-image: url("@/assets/images/nav_bg_logo2.png");
    background-size: 100% 48px;
    height: 48px;
    padding-left: 31px;
    display: flex;

    img {
      vertical-align: middle;
      width: 36px;
      height: 36px;
    }

    span {
      width: 300px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      color: #1879ff;
      font-weight: 550;
      text-align: center;
      font-family: myFirstFont;
      font-size: 26px;
      padding-left: 0px;

      i {
        font-style: oblique;
      }
    }
  }

  .header-center {
    flex: 1;
    display: flex;
    justify-content: center;

    .app-header-nav {
      div {
        float: left;
        height: 100%;
        width: 120px;
        cursor: pointer;
        text-align: center;
        line-height: 48px;
        font-size: 15px;

        img {
          vertical-align: middle;
        }

        span {
          vertical-align: middle;
          color: #fff;
        }
      }

      .navActive {
        background-color: rgba(22, 120, 255, .7)
      }
    }
  }
  .header-functions{
    height: 48px;
    padding-right: 10px;
    .functions-user-list{
      float: left;
      cursor: pointer;
      .user{
        margin-top: 13px;
        margin-left: 10px;
        padding-right: 10px;
        .user-name{
          font-size: 16px;
          font-weight: 700;
          color: #fff;
          text-align: center;
        }
      }
    }
    .vertical-line{
      float: left;
      width: 1px;
      height: 30px;
      background-color: #fff;
      padding: 0;
      margin: 10px 10px 0 13px;
    }
    .function-item{
      cursor: pointer;
      float: left;
      height: 48px;
      padding-left: 17px;
      line-height: 48px;
      img{
        vertical-align: middle;
      }
    }
  }
}
</style>
