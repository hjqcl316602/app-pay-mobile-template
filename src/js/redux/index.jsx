import thunk from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware } from 'redux';

import pay from './pay/reducer'

let reducers = combineReducers({ pay })

let initState = {
  pay: {
    message: {
      fee: '100',
      qr: '',
      sn: '',
    }
  }, 

}

let middleWare = applyMiddleware(thunk); // 接受异步更新state

export default createStore(reducers, initState, middleWare)