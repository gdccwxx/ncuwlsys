import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { withRouter } from 'react-router-dom'

class NotFound extends React.Component {
  constructor (props, context) {
    super(props, context)
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
  }
  render () {
    return (
      <h1>404 not found page</h1>
    )
  }
}

// export default NotFound
module.exports = withRouter(NotFound)
