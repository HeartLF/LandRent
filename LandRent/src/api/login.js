import request from '@/utils/request.js'
// 登录
export const login = (phone, password) => {
  request({
    url: '/user/login',
    method: 'post',
    data: {
      phone,
      password
    }
  })
}
// 注册
export const register = (phone, password, name, idNumber, verCode) => {
  request({
    url: '/user/register',
    method: 'post',
    data: {
      phone,
      password,
      name,
      idNumber,
      verCode
    }
  })
}
// 手机验证码
export const msgCode = (phone) => {
  request({
    url: '/SMS/send',
    method: 'post',
    data: {
      phone
    }
  })
}

// 找回密码
export const findPwd = (phone, imageCode, verCode, newPwd) => {
  request({
    url: '/user/findPwd',
    method: 'post',
    data: {
      phone,
      imageCode,
      verCode,
      newPwd
    }
  })
}
// 获取验证码
export const verCode = () => {
  request({
    url: '/user/verCode',
    method: 'post'
  })
}
