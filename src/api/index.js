import ajax from './ajax'


export const getAddress = (latitude, longitude) => ajax({

  url: `/position/${latitude},${longitude}`

})


export const getCategorys = () => ajax({

  url: '/index_category'


})

export const getShops = (latitude, longitude) => ajax({

  url: 'shops',
  params: {
    latitude,
    longitude
  }

})



export const loginWithPassword = (name, pwd, captcha) => ajax({
  url: '/login_pwd',
  method: 'POST',
  data: {
    name,
    pwd,
    captcha
  }
})



export const loginWithPhone = (phone, code) => ajax({
  url: 'login_sms',
  method: 'POST',
  data: {
    phone,
    code
  },
})


export const sendCode = phone => ajax({
  url: '/sendcode',

  params: {
    phone
  }
})


export const autoLogin = () => ajax({

  url: '/auto_login',
  headers: {
    needToken: true

  }

})