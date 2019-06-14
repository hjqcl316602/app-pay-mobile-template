import React from 'react'
import Route from './enRoute'

import { Switch, Redirect, HashRouter } from 'react-router-dom'

import { Pay, Errors, PayStatus, Index } from './routers'


export default class Router extends React.Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route title='支付平台' render={props => (
            <Index {...props}>
              <Switch> 
                <Route exact path="/" component={Errors} />
                <Route path="/pay/:accessToken" component={Pay} title = "支付类型" />
                <Route path="/status/:status" component={PayStatus} title = "支付反馈" />
                <Route path="/error" component={Errors}  title = "支付错误" />
                <Route render={() => <Redirect to="/error" />} />
              </Switch>
            </Index>
          )}
          />
        </Switch>
      </HashRouter>
    )
  }
}
