import qs from 'qs'
import axios from 'axios'
import router from '../router'

const instance = axios.create({

  baseURL: '/api'
})


instance.interceptors.request.use(config => {

  if (config.method.toUpperCase() === 'POST' && config.data instanceof Object) {
    config.data = qs.stringify(config.data)
  }
  // 批量添加token
  let token = localStorage.getItem('token_key')

  // 判断是否需要携带token
  if (config.headers.needToken) {
    if (token) {

      config.headers.authorization = token
    } else {

      throw new Error('没有token,请重新登录')

    }

  }
  // 1. token携带的方式： 1) cookie 2) 请求参数 3) 放在请求头


  return config
})

instance.interceptors.response.use(
  response => response.data,
  error => {
    if (!error.response) {
      alert(error.message)
      router.currentRoute.path !== '/login' && router.replace('/login')
    } else {
      if (error.response.status === 401) {
        alert('token 过期请重新登录')
        router.currentRoute.path !== '/login' && router.replace('/login')

      } else if (error.response.status === 404) {


        alert('请求的资源不存在')
      } else {

        alert('请求失败')
      }






    }

    //  1. 没有token
    // 2. 有token，token过期
    // 3. 请求404
    // 4. 其他



    alert('请求失败')
    return new Promise(() => {})
  }


)



export default instance