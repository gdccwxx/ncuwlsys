import jwt from 'jsonwebtoken'
import { jwt_secret } from '../config'

// 签名
function signToken(id) {
  const token = jwt.sign({
      id: id
    },
    jwt_secret,
    {
      expiresIn: '2h'
    }
  )
  return token
}

// 解签
function outToken(token) {
  const isToken = jwt.verify(token, jwt_secret)
  return isToken
}

export { signToken, outToken }