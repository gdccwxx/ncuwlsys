import React from 'react'
import ReactSwipe from 'react-swipe'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './style.less'

class Swiper extends React.Component {
  constructor (props, context) {
    super(props, context)
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
    this.SliderPane = this.SliderPane.bind(this)
    this.paneList = this.paneList.bind(this)
    this.state = {
      imgIndex: 0
    }
  }
  next () {
    this.reactSwipe.next()
  }
  prev () {
    this.reactSwipe.prev()
  }
  getSliderLen () {
    // return this.reactSwipe.getNumSlides()
    // console.log(this.reactSwipe.getNumSlides())
    return this.reactSwipe.getNumSlides()
  }
  movingPane (pos) {
    this.reactSwipe.slide(pos, 500)
  }
  render () {
    let that = this
    const swipeOpt = {
      continuous: true,
      auto: 3000,
      speed: 500,
      callback: function (index, elem) {
        that.setState({
          imgIndex: index
        })
      }
    }
    return (
      <div className='container swiper'>
        <ReactSwipe ref={reactSwipe => this.reactSwipe = reactSwipe} swipeOptions={swipeOpt}>
          {this.SliderPane('www.baidu.com', '../../../static/img/01.jpg', '1')}
          {this.SliderPane('www.baidu.com', '../../../static/img/01.jpg', '2')}
          {this.SliderPane('www.baidu.com', '../../../static/img/01.jpg', '3')}
        </ReactSwipe>
        <div className='swiper-left' onClick={this.prev.bind(this)}><span className='glyphicon glyphicon-chevron-left' aria-hidden='true' /></div>
        <div className='swiper-right' onClick={this.next.bind(this)}><span className='glyphicon glyphicon-chevron-right' aria-hidden='true' /></div>
        {this.paneList(3)}
      </div>
    )
  }
  SliderPane (linkTo, src, title) {
    return (
      <div>
        <a href={linkTo}>
          <img src={src} alt={title} className='img-responsive' />
        </a>
        <div className='carousel-caption'>
          <h3>{title}</h3>
        </div>
      </div>
    )
  }
  paneList (num) {
    return (
      <div className='carousel-caption'>
        {Array.apply(null, Array(num)).map((_, i) => {
          return (
            <span key={i} onClick={this.movingPane.bind(this, i)} className={this.state.imgIndex === i ? 'img-tab tab-active' : 'img-tab'} />
          )
        })}
      </div>
    )
  }
}

module.exports = Swiper
