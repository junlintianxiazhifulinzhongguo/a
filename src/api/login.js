import request from '@/utils/request'

export function loginByUsername(username, password) {
  const data = {
    username,
    password
  }
  return request({
    url: '/login/login',
    method: 'post',
    data
  })
}

export function loginByAlipay(){
  let response =request({
      url: '/api/auhRedirect',
      method: 'post'
    })
  console.log(2121,response)
  let { data,status } = response
  let { auth_url,code } = data
  console.log(code)
  console.log(auth_url)
}

export function logout() {
  return request({
    url: '/login/logout',
    method: 'post'
  })
}

export function getUserInfo(token) {
  return request({
    url: '/user/info',
    method: 'get',
    params: { token }
  })
}

