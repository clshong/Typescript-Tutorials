enum  MSG{
  '操作成功'=200,
  '密码错误',
  '账号错误',
  '请求异常'
}

// 响应拦截
$http.interceptors.response.use( res =>{
  const code:number = res.data.code
  if(code !== 200){
    MSG[code]
    return Promise.reject(res.data)
  }
  return res.data
},err =>{
  console.log(err);
}
