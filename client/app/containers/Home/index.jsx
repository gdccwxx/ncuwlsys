import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { withRouter, Link } from 'react-router-dom'
import Swiper from './component/Swiper'

import './style.less'
const bigDetail = [
  '工作动态',
  '通知公告',
  '学生交流',
  '外教外专',
  '特色中心',
  '下载中心'
]
const detailForEnglish = [
  '/ NEWS',
  '/ ANNOUNCEMENTS'
]
class Home extends React.Component {
  constructor (props, context) {
    super(props, context)
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
    this.workState = this.workState.bind(this)
    this.noticeState = this.noticeState.bind(this)
    this.newsState = this.newsState.bind(this)
    // this.downLoadFile = this.downLoadFile.bind(this)
  }
  render () {
    return (
      <div>
        <div id='f01' >
          <div className='container'>
            <Swiper />
          </div>
        </div>
        <div id='f02' >
          <div className='container'>
            <div className='row'>
              <div className='col-md-8'>
                <h3>{bigDetail.slice(0, 1)} <small> {detailForEnglish.slice(0, 1)}</small></h3>
                <div className='row'>
                  {this.workState()}
                </div>
                <p><Link to='/works' className='btn btn-default'>更多 <i className='fa fa-angle-double-right' aria-hidden='true' /></Link></p>
              </div>
              <div className='col-md-4 '>
                <h3>{bigDetail.slice(1, 2)} <small> {detailForEnglish.slice(1, 2)}</small></h3>
                {this.noticeState()}
              </div >
            </div >
          </div >
        </div >
        <div id='f03' >
          <div className='container'>
            <div className='row'>
              <div className='col-md-8'>
                <h3>{bigDetail.slice(2, 3)} <small> {detailForEnglish.slice(0, 1)}</small></h3>
                {this.newsState('student')}
                <h3>{bigDetail.slice(3, 4)} <small> {detailForEnglish.slice(0, 1)}</small></h3>
                {this.newsState('outstand')}
              </div >
              <div className='col-md-4 '>
                <h3>{bigDetail.slice(4, 5)} <small> {detailForEnglish.slice(1, 2)}</small></h3>
                <p>
                  <Link to='/experience' className='btn btn-lg btn-block btn-danger card-grid' >
                    <i className='fa fa-heart-o fa-3x  pull-right' /><span className='text-lg'>岐黄国医外国政要体验中心</span>
                    <br />
                    <small>Qihuang TCM Experiencing Center<br />
                      for Foreign Dignitaries
                    </small>
                  </Link>
                </p>
                {/* <h3>{bigDetail.slice(5, 6)} <small> {detailForEnglish.slice(1, 2)}</small></h3>
                <div className='list-group list-grid'>
                  {this.downLoadFile()}
                </div> */}
                {/* <p><Link to='/files' className='btn btn-default'>更多 <i className='fa fa-angle-double-right' aria-hidden='true' /></Link></p> */}
              </div >
            </div >
          </div >
        </div >
      </div >
    )
  }
  workState () {
    const data = [
      {
        id: 0,
        mantles: ['../../static/img/03.jpg'],
        title: '我校4名中医专家赴德国、捷克开展省侨联“亲情中华”慰侨活动',
        abstract: '11月22日至29日，应德国柏林中国妇女联谊会、捷克华人青年联合会邀请，由我校谈勇教授、张工彧副',
        createtime: ' 2017-12-11 00:00'
      },
      {
        id: 1,
        mantles: ['../../static/img/03.jpg'],
        title: '我校4名中医专家赴德国、捷克开展省侨联“亲情中华”慰侨活动',
        abstract: '11月22日至29日，应德国柏林中国妇女联谊会、捷克华人青年联合会邀请，由我校谈勇教授、张工彧副',
        createtime: ' 2017-12-11 00:00'
      }
    ]
    return (
      <div>
        {
          data.map(items => {
            return (
              <div key={items.id} className='col-md-6 news-grid'>
                <p>
                  <Link to={'/article/' + items.id}>
                    <img src={items.mantles[0]} alt='image' className='img-responsive' />
                  </Link>
                </p>
                <p>
                  <Link to={'/article/' + items.id} className='title'>
                    <strong>{items.title}</strong>
                  </Link>
                </p>
                <small><i className='fa fa-clock-o' aria-hidden='true' /> {items.createtime}</small>
                <p>{items.abstract}</p>
              </div>
            )
          })
        }
      </div>
    )
  }
  noticeState () {
    const data = [
      {
        id: 0,
        mantles: ['../../static/img/03.jpg'],
        title: '我校4名中医专家赴德国、捷克开展省侨联“亲情中华”慰侨活动',
        abstract: '11月22日至29日，应德国柏林中国妇女联谊会、捷克华人青年联合会邀请，由我校谈勇教授、张工彧副',
        createtime: ' 2017-12-11 00:00'
      }, {
        id: 1,
        mantles: ['../../static/img/03.jpg'],
        title: '我校4名中医专家赴德国、捷克开展省侨联“亲情中华”慰侨活动',
        abstract: '11月22日至29日，应德国柏林中国妇女联谊会、捷克华人青年联合会邀请，由我校谈勇教授、张工彧副',
        createtime: ' 2017-12-11 00:00'
      }
    ]
    return (
      <div className='notices-grid'>
        {
          data.map(item => {
            return (
              <div key={item.id}>
                <div className='row'>
                  <div className='col-xs-2'>
                    <div className='btn-group-vertical' role='group' aria-label='Vertical button group'>
                      <button type='button' className='btn btn-xs btn-success'><strong>{item.createtime.trim().split(/[-\s]/)[2]}</strong></button>
                      <button type='button' className='btn btn-xs bg-success'>{item.createtime.trim().split('-')[0] + '-' + item.createtime.trim().split('-')[1]}</button>
                    </div>
                  </div>
                  <div className='col-xs-10 notice-link'>
                    <p><Link to={'/article/' + item.id}>{item.title}</Link></p>
                  </div>
                </div>
                <hr />
              </div>
            )
          })
        }
        <p><Link to='/works' className='btn btn-default'>更多 <i className='fa fa-angle-double-right' aria-hidden='true' /></Link></p>
      </div>
    )
  }
  // params @state what kind of url to loading
  newsState (state) {
    const data = [
      {
        id: 0,
        mantles: ['../../static/img/03.jpg'],
        title: '我校4名中医专家赴德国、捷克开展省侨联“亲情中华”慰侨活动'
      },
      {
        id: 1,
        mantles: ['../../static/img/03.jpg'],
        title: '我校4名中医专家赴德国、捷克开展省侨联“亲情中华”慰侨活动'
      },
      {
        id: 2,
        mantles: ['../../static/img/03.jpg'],
        title: '我校4名中医专家赴德国、捷克开展省侨联“亲情中华”慰侨活动'
      }
    ]
    return (
      <div className='panel panel-default'>
        <div className='panel-body'>
          <div className='news'>
            <div className='row'>
              <div className='col-sm-4'>
                <p><Link to={'/article/' + data[0].id}><img src={data[0].mantles[0]} alt='image' className='img-responsive' /></Link></p>
                <p><Link to={'/article/' + data[0].id}><small><strong>{ data[0].title }</strong></small></Link></p>
              </div>
              <div className='col-sm-8 news-fa'>
                {
                  data.map(item => {
                    return (
                      <div key={state + item.id}>
                        <p><Link to={'/article/' + item.id} target='_blank'><i className='fa fa-angle-right' aria-hidden='true' />{ item.title }</Link></p>
                        <hr />
                      </div>
                    )
                  })
                }
              </div>
            </div>
          </div>
        </div >
      </div >
    )
  }
  // downLoadFile () {
  //   const data = [
  //     {
  //       id: 0,
  //       title: '江西中医药大学聘请海外客座教授审批表'
  //     },
  //     {
  //       id: 1,
  //       title: '江西中医药大学聘请海外客座教授审批表'
  //     },
  //     {
  //       id: 2,
  //       title: '江西中医药大学聘请海外客座教授审批表'
  //     }
  //   ]
  //   return (
  //     data.map(item => {
  //       return (
  //         <a key={item.id} to={'/files' + item.id} className='list-group-item' download={'file' + item.id}><i className='fa fa-file-text-o' aria-hidden='true' />{item.title}</a>
  //       )
  //     })
  //   )
  // }
}
// export default Home
export default withRouter(Home)
