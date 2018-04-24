import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { Link, withRouter } from 'react-router-dom'
import axios from 'axios'
import { Get } from 'react-axios'
import './style.less'
class Article extends React.Component {
  constructor (props, context) {
    super(props, context)
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
  }
  render () {
    const axiosInstance = axios.create({
      timeout: 2000
    })
    return (
      <div id='f04'>
        <Get url='https://os.ncuos.com/api/go/mainpage/one/article?id=427' instance={axiosInstance}>
          {(error, response, isLoading) => {
            if (error) {
              return (<div>some thing error</div>)
            }
            if (isLoading) {
              return (<div>Loding...</div>)
            }
            if (response) {
              let data = response.data.data
              console.log(data)
              return (
                <div className='container'>
                  <ol className='breadcrumb'>
                    <li><Link to='/'><i className='fa fa-home' /> 首页</Link></li>
                    <li className='active'>{data.title}</li>
                  </ol>
                  <div className='panel panel-default'>
                    <div className='panel-body'>
                      <div className='article'>
                        <h3 className='text-center'>{data.title}</h3>
                        <p className='text-center'><small className='text-f'><i className='fa fa-clock-o fa-fw' />{data.createtime}</small></p>
                        <hr />
                        <div className='text-c' dangerouslySetInnerHTML={{ __html: data.context }} />
                      </div>
                    </div>
                  </div>
                </div>
              )
            }
            return (<div>Loding...</div>)
          }}
        </Get>
      </div>
    )
  }
}

// export default NotFound
module.exports = withRouter(Article)
