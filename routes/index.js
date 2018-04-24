const router = require('koa-router')()
const User = require('../models/user')
const base = require('../models/base')
const nodemail = require('../middleware/mail')

router.prefix('/api')

router.get('/', async(ctx, next) => {
  ctx.redirect('http://google.com')
})

//登录
router.post('/login', async ctx => {
  const {userName, passwd} = ctx.request.body

  try{
    const user = await User.findByName(userName)
    const isMatch = await user.comparePassword(passwd)
    if (user.status === 1) {
      if(!isMatch){
        ctx.throw(423, '用户名或密码错误！')
      }
      const token = base.signToke(user)
      
      ctx.body = { 
        code: 200, 
        message: '登录成功!', 
        token: token,
        status: 1
      }
    } else {
      ctx.body = {
        code: 200, 
        message: '账号未激活!',
        status: 0
      }
    }
  }catch(e){
    ctx.throw(e)
  }
})

//注册
router.post('/register', async ctx => {
  const {userName, passwd} = ctx.request.body

  let user = new User({
    user_name: userName,
    password: passwd
  })
  let result = await user.save()
  console.log('result: ', result)
  const users = await User.findByName(userName)
  const token = await base.signToke(users)

  const conts = `
  请点击你链接激活http://127.0.0.1:5000/api/register?user=${users.user_name}&id=${token}
    
  `
  console.log(conts)
  // 发送邮件
  nodemail.mails(conts)

  ctx.body = {
    code: 200,
    message: '注册成功！请检查邮箱',
    status: 1
  }
})

// 激活账号
router.get('/register', async ctx => {
  // const {user, id} = ctx.request.query
  // console.log(ctx.request.body)
  // console.log(ctx.request.query.user)
  const user = await base.isTrueToken(ctx, User, base)
  if (user.userName) {
    const user = await User.activeUser(user.userName)
    ctx.body = {
      code: 200, 
      message: '激活成功!',
      status: 1
    }
  } else {
    // ctx.throw('激活失败')
    ctx.body = {
      code: 200, 
      message: '激活失败!',
      status: 0
    }
  }
})

//获取用户信息
router.post('/userinfo', async ctx => {
  
  const user = await base.checkToken(ctx, User, true)
  ctx.body = {
    code: 200,
    message: '获取用户信息成功！',
    userName: user.user_name,
    token: base.signToke(user)
  }
})

module.exports = router