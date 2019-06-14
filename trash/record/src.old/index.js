import React from 'react';
import ReactDOM from 'react-dom';
import { Provider} from 'react-redux'
import { Router,Redux } from './js'

// CSS 的导入
import './csses'
 

import * as serviceWorker from './serviceWorker';
ReactDOM.render(
  <Provider store = { Redux }>
    <Router/> 
  </Provider>,
  
  document.getElementById('root'));

//import Router from './pages/study-router-03/router'

//ReactDOM.render(<Router/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
