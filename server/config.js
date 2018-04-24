export const port = process.env.PORT || 5050
export const connexionString = 'mongodb://localhost:27017/koa-rest'
export const baseApi = 'api'
export const jwt_secret = 'qwerthjklmnbvcxz'

function getErr(e) {
  console.log(e)
  e.code = e.code || 500
  switch(e.code){
    case 11000:
      e.message = '用户名已经存在！'
  }
  return {
    code: e.code,
    message: e.message
  }
}

export { getErr }