import React from 'react';
import ReactDOM from 'react-dom';

import * as serviceWorker from './serviceWorker';

// CSS 的导入
import './csses'
import { Router,Redux } from './js'
import { Provider} from 'react-redux'


ReactDOM.render(
  <Provider store = { Redux }>
    <Router/> 
  </Provider>,
  document.getElementById('root')); 

serviceWorker.unregister();
