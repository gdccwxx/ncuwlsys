const mongoose = require('mongoose')
const config = require('../config')
const bcrypt = require('bcrypt')
const saltRounds = 10
const crypto = require('crypto')

const UserSchema = new mongoose.Schema({
  user_name: {
    type: String,
    required: true,
    unique: true,
    tags: { type: [String], index: true }
  },
  password: {
    type: String,
    required: true
  },
  email: {
    type: String
    // default: user_name + '@email.ncu.edu.cn'
  },
  name: {
    type: String
  },
  status: {
    type: Number,
    default: 0
  },
  app_secret: {
    type: String,
    default: GetHmac()
  },
  create_at: {
    type: Date,
    default: Date.now()
  },
  update_at: {
    type: Date,
    default: Date.now()
  }
})

function GetHmac() {
  const hmac = crypto.createHmac('sha256', config.secret_key)
  hmac.update(Date.now().toString())
  return hmac.digest('hex')
}

UserSchema.pre('save', async function (next) {
  try {
    const user = this
    if (!user.isModified('password')) return next()
    const salt = await bcrypt.genSalt(saltRounds)
    const hash = await bcrypt.hash(this.password, salt)
    user.password = hash
    return next()
  } catch (e) {
    return next(e)
  }
})

UserSchema.methods.comparePassword = async function (password) {
  const isMatch = await bcrypt.compare(password, this.password)
  return isMatch
}

UserSchema.statics.checkToken = async function (token) {
  const secret = GetHmac()
  //console.log('secret', secret)
  const user = await this.findOneAndUpdate({ _id: token.id }, { app_secret: secret })
  if (token.secret == user.app_secret) {
    user.app_secret = secret
    //console.log('user user: ', user)
    return user
  } else {
    throw new Error('token验证未通过！')
  }
}

UserSchema.statics.isToken = async function (token, base) {
  // const secret = GetHmac()
  //console.log('secret', secret)
  const user = await this.findOne({ user_name: token.user })
  const secret = base.signToke(user.app_secret)
  console.log(token)
  console.log(secret)
  if (token.id == secret) {
    // user.app_secret = secret
    //console.log('user user: ', user)
    return user
  } else {
    throw new Error('token验证未通过！')
  }
}

UserSchema.statics.findByName = async function (userName) {
  const user = await this.findOne({
    user_name: userName
  })
  return user
}

UserSchema.statics.activeUser = async function (userName) {
  const user = await this.findOneAndUpdate({ user_name: userName }, { status: 1 })
  return user
}

const User = mongoose.model('User', UserSchema)

module.exports = User