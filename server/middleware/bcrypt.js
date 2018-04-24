import bcrypt from 'bcrypt'
import ctypto from 'crypto'

// 加密
function hashPass(pass) {
  const salt = await bcrypt.genSalt(10)
  const hash = await bcrypt.hash(pass, salt)
  return hash
}

// 比较passwd
function hashCompare(goin, state) {
  const isMatch = await bcrypt.compare(goin, state)
  return isMatch
}

export { hashPass, hashCompare }