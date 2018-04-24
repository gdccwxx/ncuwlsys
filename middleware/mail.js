const nodemailer = require('nodemailer')

const auth = {
  user: 'dongxianlin@vadxq.com',
  pass: 'xaoqdexfesyabbfi' // 授权码，不是密码
}

const mails = (conts) => {
  nodemailer.createTestAccount((err, account) => {
    let transporter = nodemailer.createTransport({
      host: 'smtp.qq.com',
      port: 465,
      secure: true,
      auth: auth
    })

    let mailOptions = {
      from: '"vadxq" <dongxianlin@vadxq.com>', 
      to: 'dongxianlin@vadxq.com', 
      subject: '南昌大学物理教学中心－激活账户',
      text: '南昌大学物理教学中心－激活账户',
      html: conts
    }
    
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return error
      }
      console.log('Message sent: %s', info.messageId)
      logger('Message sent: %s' + info.messageId, 'success')
    })
  })
}

exports.mails = mails