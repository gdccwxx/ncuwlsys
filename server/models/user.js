import { mongoose } from './index'
import { hashPass, hashCompare } from '../middleware/bcrypt'
import { signToken, outToken } from '../middleware/token'

const Schema = mongoose.Schema

const UserSchema = new Schema({
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
    type: String
    // default: GetHmac()
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

// 保存密码
UserSchema.pre('save', async (next) => {
  try {
    const user = this
    if (!user.isModified('password')) return next()
    user.password = hashPass()
    return next()
  } catch (e) {
    return next(e)
  }
})

// 验证密码
UserSchema.methods.comparePassword = async function (password) {
  const isMatch = await bcrypt.compare(password, this.password)
  return isMatch
}

const User = mongoose.model('User', UserSchema)

export default User 