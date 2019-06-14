import React from 'react'
import CustomRouter from './CustomRouter'

import {  Switch ,Redirect,HashRouter   } from 'react-router-dom'
 
import { Pay , Errors , PayStatus } from './routers'


export default class Router extends React.Component{
  render(){
    return (
      <HashRouter>
        <Switch>
          <CustomRouter exact path='/' component={Errors} name='支付平台'></CustomRouter>
          <CustomRouter  path='/pay/:accessToken' component={Pay} name='支付平台'></CustomRouter>
          <CustomRouter  path='/error' component={Errors} name='支付失败'></CustomRouter>
          <CustomRouter  path='/status/:status' component={PayStatus} name='支付反馈'></CustomRouter>
          <Redirect   to={{pathname: '/error'}} /> 
        </Switch>
      </HashRouter>
    )
  }
}

