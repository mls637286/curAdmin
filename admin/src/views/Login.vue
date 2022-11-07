<template>
  <div class="login noselect">
    <div class="login-header noselect">
      <div id="login-logo" class="login-header-logo"></div>
      <div class="login-header-title"><i>车载视频物联平台</i></div>
      <div class="login-header-version"><i>V3.0</i></div>
    </div>
    <div class="login-content noselect">
      <el-form :model="ruleForm" :rules="rules" class="login-form" ref="ruleForm">
        <h2 class="title">账号登录</h2>
        <el-form-item prop="username">
          <el-input v-model="ruleForm.username" clearable placeholder="账号">
            <i slot="prefix" class="el-input__icon iconfont icon-zhanghao"></i>
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input v-model="ruleForm.password" clearable placeholder="密码">
            <i slot="prefix" class="el-input__icon iconfont icon-mima"></i>
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-checkbox v-model="ruleForm.rememberMe">记住密码</el-checkbox>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" round>登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      ruleForm: {
        username: '',
        password: '',
        rememberMe: false
      },
      rules: {
        username: [
          {
            required: true,
            trigger: 'blur',
            message: '请输入您的账号'
          }
        ],
        password: [
          {
            required: true,
            trigger: 'blur',
            message: '请输入您的密码'
          }
        ],
      }
    }
  },
  methods: {
    initCookie () {
      const username = this.tool.getCookie('username')
      const password = this.tool.getCookie('password')
      const rememberMe = this.tool.getCookie('rememberMe')
      this.loginForm = {
        username: username == undefined ? this.loginForm.username : username,
        password: password == undefined ? this.loginForm.password : password,
        rememberMe: rememberMe == undefined ? false : Boolean(rememberMe)
      }
    },
  },
  created () {
    this.initCookie()
  }
}
</script>

<style scoped lang="less">
.login {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-image: url("@/assets/images/login_bg.jpg");
  background-size: cover;

  .login-header {
    margin: 0 20px;
    height: 71px;
    overflow: hidden;

    .login-header-logo {
      margin-top: 16px;
      width: 51px;
      height: 35px;
      background-image: url('@/assets/images/logo_top.png');
      background-size: cover;
      float: left;
    }

    .login-header-title, .login-header-version {
      float: left;
      margin-left: 8px;
      height: 39px;
      color: #fff;
    }

    .login-header-title {
      font-family: myFirstFont;
      margin-top: 16px;
      line-height: 39px;
      font-size: 28px;
    }

    .login-header-version {
      margin-top: 15px;
      padding-top: 12px;
      font-size: 18px;
    }
  }

  .login-content {
    width: 330px;
    height: 300px;
    position: absolute;
    left: 50%;
    top: 50%;
    margin-left: -165px;
    margin-top: -150px;

    .login-form {
      margin: 0 auto 20px auto;
      width: 330px;
      height: 300px;
      border-radius: 3px;
      background-color: #fff;
      padding-top: 10px;

      /deep/ .el-form-item {
        margin: 0 20px 20px;
      }

      /deep/ .el-button {
        width: 100%;
      }
    }
  }
}

.title {
  margin: 0px 50px 30px 50px;
  text-align: center;
  color: #707070;
  font-family: inherit;
  font-weight: 500;
  line-height: 1.1;
}

.noselect {
  user-select: none;
}
</style>
