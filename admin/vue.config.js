const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  devServer: {
    open: true,
    proxy: {
      '/api': {
        target: 'http://192.168.0.135:8080', // 服务代理地址，这里的地址会代替axios中设置的baseURL地址
        changeOrigin: true, // 配置接口跨域请求
        pathRewrite: {
          '^/api': '',
        }
      }
    },
    // disableHostCheck: true
  },
})
