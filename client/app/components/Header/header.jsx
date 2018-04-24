import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { NavLink } from 'react-router-dom'

import './style.less'

class Header extends React.Component {
  constructor (props, context) {
    super(props, context)
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
    this.state = {
      url: '/'
    }
    this.clickHandle = this.clickHandle.bind(this)
  }
  render () {
    const headerName = [
      ['首页', '/'],
      ['关于我们', '/about'],
      ['工作动态', '/works'],
      ['国际交流', '/international'],
      ['通知公告', '/notice'],
      ['因公出国境', '/outbound'],
      ['学生交流', '/exchange'],
      ['外教外专', '/teacher'],
      ['体验中心', '/experience'],
      ['下载中心', '/files']
    ]
    const aboutName = [
      '部门介绍',
      '机构设置',
      '规章制度'
    ]
    return (
      <div>
        <header>
          <div id='f00'>
            <div className='container'>
              <div className='row'>
                <div className='col-md-9'>
                  <img src='http://wlsyzx.ncu.edu.cn/templets/img/mina_1.png' className='img-responsive' />
                </div>
                <div className='col-md-3 hidden-xs'>
                  <p className='text-right'><a href='http://wlsyzx.ncu.edu.cn/' target='_blank'><small><i className='fa fa-university' aria-hidden='true' /> 南昌大学基础物理实验中心</small></a></p>
                </div>
              </div>
            </div>
          </div>
        </header>
        <nav className='navbar navbar-inverse'>
          <div className='container'>
            <div className='navbar-header'>
              <button type='button' className='navbar-toggle collapsed' data-toggle='collapse' data-target='#navbar' aria-expanded='false' aria-controls='navbar'> <span className='sr-only'>Toggle navigation</span><span className='icon-bar' /><span className='icon-bar' /><span className='icon-bar' /></button>
            </div>
            <div id='navbar' className='collapse navbar-collapse'>
              <ul className='nav navbar-nav'>
                <li onClick={this.clickHandle} className={this.state.url === headerName[0][1] ? 'selected basic-header' : 'basic-header'}>
                  <NavLink to={headerName[0][1]}>
                    <i className='fa fa-home' />{headerName[0][0]}<span className='sr-only'>(current)</span>
                  </NavLink>
                </li>
                <li className={headerName.every(item => { return item[1] !== this.state.url }) ? 'selected basic-header dropdown' : 'basic-header dropdown'}>
                  <a href='#' className='dropdown-toggle' data-toggle='dropdown' role='button' aria-haspopup='true' aria-expanded='false'>{headerName[1][0]} <span className='caret' /></a>
                  <ul className='dropdown-menu'>
                    <li>
                      <NavLink onClick={this.clickHandle} to='/about/sector' >{aboutName.slice(0, 1)}</NavLink>
                    </li>
                    <li role='separator' className='divider' />
                    <li><NavLink onClick={this.clickHandle} to='/about/institution' >{aboutName.slice(1, 2)}</NavLink></li>
                    <li role='separator' className='divider' />
                    <li><NavLink onClick={this.clickHandle} to='/about/rules' >{aboutName.slice(2, 3)}</NavLink></li>
                  </ul>
                </li>
                <li onClick={this.clickHandle} className={this.state.url === headerName[2][1] ? 'selected basic-header' : 'basic-header'}><NavLink to={headerName[2][1]} >{headerName[2][0]}</NavLink></li>
                <li onClick={this.clickHandle} className={this.state.url === headerName[3][1] ? 'selected basic-header' : 'basic-header'}><NavLink to={headerName[3][1]} >{headerName[3][0]}</NavLink></li >
                <li onClick={this.clickHandle} className={this.state.url === headerName[4][1] ? 'selected basic-header' : 'basic-header'}><NavLink to={headerName[4][1]} >{headerName[4][0]}</NavLink></li >
                <li onClick={this.clickHandle} className={this.state.url === headerName[5][1] ? 'selected basic-header' : 'basic-header'}><NavLink to={headerName[5][1]} >{headerName[5][0]}</NavLink></li >
                <li onClick={this.clickHandle} className={this.state.url === headerName[6][1] ? 'selected basic-header' : 'basic-header'}><NavLink to={headerName[6][1]} >{headerName[6][0]}</NavLink></li >
                <li onClick={this.clickHandle} className={this.state.url === headerName[7][1] ? 'selected basic-header' : 'basic-header'}><NavLink to={headerName[7][1]} >{headerName[7][0]}</NavLink></li >
                <li onClick={this.clickHandle} className={this.state.url === headerName[8][1] ? 'selected basic-header' : 'basic-header'}><NavLink to={headerName[8][1]} >{headerName[8][0]}</NavLink></li >
                <li onClick={this.clickHandle} className={this.state.url === headerName[9][1] ? 'selected basic-header' : 'basic-header'}><NavLink to={headerName[9][1]} >{headerName[9][0]}</NavLink></li >
              </ul >
            </div>
          </div>
        </nav>
      </div>
    )
  }
  clickHandle () {
    setTimeout(() => {
      this.setState({
        url: window.location.pathname
      })
    }, 0)
  }
}

// export default Header
module.exports = Header
