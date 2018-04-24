module.exports = {
  port: '5000',
  jwt_secret: 'qwertyuiop',
  secret_key: 'qwertyuiop',
  mongodb: 'mongodb://127.0.0.1:27017/jwtdemo',
  getErr: function(e){
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
 
}
