
// import React from 'react'
// import CustomRouter from './CustomRouter'
 
// //import { PayAli,PayWx,PayCard,PayStatus,Pay } from './routers'

// const pay = (location, callback) => {
// 	require.ensure([], function(require) {
// 		const {pay} = require('../pages/PagePays');
// 		document.title = "支付平台";
// 		callback(null, pay);
// 	}, 'pay');
// }
// const ali = (location, callback) => {
// 	require.ensure([], function(require) {
// 		const {ali} = require('../pages/PagePayAli');
// 		document.title = "支付平台";
// 		callback(null, ali);
// 	}, 'ali');
// }

// const checkAuth = (nextState, replace, next)=>{
//     next()
// }

// const Routes = () => (
// 	<Router history={browserHistory}>
		 
// 		<Route path='/' component={pay} onEnter={checkAuth}>
// 			<IndexRoute component={ali}/>
			 
// 		</Route>
// 	</Router>
// );

// export default Routes;


// // class Router extends React.Component {
// //     render() {
// //         return (
// //             <BrowserRouter>
// //                 <Switch>
// //                     <CustomRouter excat path='/' component={Pay} name='支付宝支付'></CustomRouter>
// //                     <CustomRouter excat path='/ali' component={PayAli} name='支付宝支付'></CustomRouter>
// //                     <CustomRouter excat path='/wx' component={PayWx} name='微信支付'></CustomRouter>
// //                     <CustomRouter excat path='/card' component={PayCard} name='银行卡支付'></CustomRouter>
// //                     <CustomRouter excat path='/status' component={PayStatus} name='支付反馈'></CustomRouter> 
// //                 </Switch>
// //             </BrowserRouter>
// //         )
// //     }
// // }

// //export default Router