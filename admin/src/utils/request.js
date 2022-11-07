import axios from 'axios'

const instance = axios.create({   // 创建实例
  timeOut: 500
})
instance.interceptors.request.use(  //请求拦截
  (config) => {
    const token = 'eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl91c2VyX2tleSI6ImZmZDVjZDFiLTU0OWItNDgxYS05MjVmLTQ0ODNmYjc2MjU2NSJ9.J6GQLtmuiRmn1z--aP0EzhwELzoRk9Y98435usm0kuF9tVl3V09arZ2pDXBkn5ylOl7d6LbDQcgAMZuJwMDWAQ'
    config.headers['Authorization'] = 'Bearer ' + token // 让每个请求携带自定义token 请根据实际情况自行修改
    return config
  },
  (err) => {
    Promise.reject(err)
  }
)

instance.interceptors.response.use(   //响应拦截
  (res) => {
    return res
  },
  (err) => {
    Promise.reject(err)
  }
)

export default instance

