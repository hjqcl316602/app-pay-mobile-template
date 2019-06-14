
import asyncComponent from './async'

//import Index from '../../pages/index';   
//import Errors from '../../pages/PageError'; 
//import Pay from '../../pages/PagePays';
//import PayStatus from '../../pages/PagePayStatus';
//console.log(async)
const Index = asyncComponent(()=>{ return import('../../pages/index')})
const Errors = asyncComponent(()=>{ return import('../../pages/PageError')})
const Pay = asyncComponent(()=>{ return import('../../pages/PagePays')})
const PayStatus = asyncComponent(()=>{ return import('../../pages/PagePayStatus')})


export  {
  Index,
  Errors ,
  PayStatus,
  Pay
}
