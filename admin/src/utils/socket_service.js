export default class SocketService {
  static instance = null

  static get Instance () {
    if (!this.instance) {
      this.instance = new SocketService()
    }
    return this.instance
  }

  ws = null
  //储存回调函数
  callBackMapping = []
  //判断是否连接成功
  connected = false
  //记录重试的次数
  sendRetryCount = 0
  //记录重新连接的次数
  reconnectCount = 0

  connect () {
    if (!window.WebSocket) {
      return console.log('浏览器不支持websocket')
    }
    this.ws = new WebSocket('ws://192.168.0.135:8087/websocket ')
    //连接服务端成功事件
    this.ws.onopen = () => {
      console.log('连接服务端成功')
      this.connected = true
      this.reconnectCount = 0
    }
    //连接服务器失败
    this.ws.onclose = () => {
      console.log('连接服务器失败')
      this.connected = false
      this.reconnectCount++
      setTimeout(() => {
        this.connect()
      }, this.reconnectCount * 500)
    }
    //获取数据
    this.ws.onmessage = (msg) => {
      console.log('从服务器获取数据-------------' + msg.data)
      const recvData = JSON.parse(msg.data)
      const socketType = reduce.socketType
      if (this.callBackMapping[socketType]) {
        const action = recvData.action
        if (action === 'getData') {
          const realData = JSON.parse(recvData.data)
          this.callBackMapping[socketType].call(this, realData)
        }
      }
    }
  }

  //回调函数的注册
  registerCallBack (socketType, callBack) {
    this.callBackMapping[socketType] = callBack
  }

  //取消回调函数
  unRegisterCallBack (socketType) {
    this.callBackMapping[socketType] = null
  }

  send (data) {
    if (this.connected) {
      this.sendRetryCount = 0
      this.ws.send(JSON.stringify(data))
    } else {
      this.sendRetryCount++
      setTimeout(() => {
        this.ws.send(JSON.stringify(data))
      }, this.sendRetryCount * 500)
    }
  }
}
