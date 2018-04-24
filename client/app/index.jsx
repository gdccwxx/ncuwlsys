import React from 'react'
import { render } from 'react-dom'
// import { Provider } from 'react-redux'
// import configureStore from './store/configureStore'
import Header from './components/Header/header'
import Footer from './components/Footer/footer'
import { BrowserRouter } from 'react-router-dom'
// 创建 Redux 的 store 对象
// const store = configureStore()

import RouteMap from './router/routeMap'

render(
  // <Provider store={store}>
  <BrowserRouter>
    <div>
      <Header />
      <RouteMap />
      <Footer />
    </div>
  </BrowserRouter>
  ,
  // </Provider>,
  document.getElementById('root')
)
