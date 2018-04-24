import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { withRouter, Link } from 'react-router-dom'

import './style.less'

class Files extends React.Component {
  constructor (props, context) {
    super(props, context)
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
    this.articlList = this.articlList.bind(this)
  }
  render () {
    return (
      <div id='f04'>
        <div className='container'>
          <ol className='breadcrumb'>
            <li><Link to='/'><i className='fa fa-home' /> 首页</Link></li>
            <li className='active'>关于我们</li>
          </ol>
          <div className='row'>
            <div className='col-md-3'><div className='list-group'>
              <a href='#' className='list-group-item active'>
                <strong>关于我们</strong>
              </a>
              <Link to='/about/sector' className={window.location.pathname === '/about/sector' ? 'list-group-item select' : 'list-group-item'} >部门介绍</Link>
            </div></div>
            <div className='col-md-9'>
              {this.articlList()}
              <nav>
                <ul className='pager'>
                  <li className='previous'><span className='page-turing'><span aria-hidden='true'>←</span> 上一页</span></li>
                  <span className='page-number text-muted'>第3/46页</span>
                  <li className='next'><span className='page-turing'>下一页 <span aria-hidden='true'>→</span></span></li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    )
  }
  articlList () {
    const data = [
      {
        id: 0,
        title: '缝缝补补的两年，小程序的困局出在哪里？',
        createtime: ' 2017-12-11 00:00'
      },
      {
        id: 1,
        title: '缝缝补补的两年，小程序的困局出在哪里？',
        createtime: ' 2017-12-11 00:00'
      },
      {
        id: 2,
        title: '缝缝补补的两年，小程序的困局出在哪里？',
        createtime: ' 2017-12-11 00:00'
      }
    ]
    return (
      <div className='list-group'>
        {
          data.map(item => {
            return (
              <Link to={'/article/' + item.id} key={item.id} className='list-group-item'><i className='fa fa-file-text-o' /> <strong>{item.title}</strong> <small className='text-f'> <i className='fa fa-clock-o fa-fw' /> {item.createtime}</small></Link>
            )
          })
        }
      </div>
    )
  }
}

// export default Work
module.exports = withRouter(Files)
