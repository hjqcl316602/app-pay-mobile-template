import React from 'react'
import CustomRouter from './CustomRouter'

import { Switch, Redirect, HashRouter, Route } from 'react-router-dom'

import { Pay, Errors, PayStatus, Index } from './routers'


export default class Router extends React.Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route render={props => (
            <Index {...props}>
              <Switch> 
                <Route exact path="/" component={Errors} />
                <Route path="/pay/:accessToken" component={Pay} />
                <Route path="/status/:status" component={PayStatus} />
                <Route path="/error" component={Errors} />
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
