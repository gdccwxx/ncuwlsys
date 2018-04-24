import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from '../containers/Home'
import NotFound from '../containers/NotFound'
import Sector from '../containers/About/Sector'
import Institution from '../containers/About/Institution'
import Rules from '../containers/About/Rules'
import Works from '../containers/Work/Work'
import International from '../containers/International/International'
import Notice from '../containers/Notice/Notice'
import Outbound from '../containers/Outbound/Outbound'
import Exchange from '../containers/Exchange/Exchange'
import Teacher from '../containers/Teacher/Teacher'
import Experience from '../containers/Experience/Experience'
import Files from '../containers/Files/Files'
import Article from '../containers/Article/Article'
class RouterMap extends React.Component {
  render () {
    return (
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/about/sector' component={Sector} />
        <Route exact path='/about/institution' component={Institution} />
        <Route exact path='/about/rules' component={Rules} />
        <Route exact path='/works' component={Works} />
        <Route exact path='/international' component={International} />
        <Route exact path='/notice' component={Notice} />
        <Route exact path='/outbound' component={Outbound} />
        <Route exact path='/exchange' component={Exchange} />
        <Route exact path='/teacher' component={Teacher} />
        <Route exact path='/experience' component={Experience} />
        <Route exact path='/files' component={Files} />
        <Route exact path='/article' component={Article} />
        <Route exact path='*' component={NotFound} />
      </Switch>
    )
  }
}

export default RouterMap
