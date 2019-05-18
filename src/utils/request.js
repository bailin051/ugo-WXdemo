const baseUrl = 'https://www.zhengzhicheng.cn'
function request (obj) {
  // 封装promise

  let url = baseUrl + obj.url || ''
  let method = obj.method || 'GET'
  let data = obj.data || {}
  return new Promise(function (resolve, rejected) {
    mpvue.request({
      url,
      method,
      data,
      success: function(info) {
        resolve(info.data)
      }
    })
  })
}
export default request
