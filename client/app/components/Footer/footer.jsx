import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './style.less'
class Footer extends React.Component {
  constructor (props, context) {
    super(props, context)
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
  }
  render () {
    return (
      <footer className='footer' >
        <div className='container' >
          <p ><i className='fa fa-copyright' /> { new Date().getFullYear() } 江西中医药大学国际交流合作处、港澳台事务办公室 版权所有</p>
          <p ><small>地址：江西省南昌市湾里区云湾路18号 技术支持：<a className='addr-ncuhome' href='//team.ncuhome.cn' target='_blank' >南昌大学家园工作室</a> </small></p>
        </div>
      </footer>
    )
  }
}

// export default Footer
module.exports = Footer
