import React, { Component } from 'react'
import SockJS from 'sockjs-client'
import Stomp from 'stompjs'

import { connect } from 'react-redux'
import { tools, configs  } from '../js'

import { PayCard ,  PayWx , PayAli , PayUnion  } from './modal'

class Pays extends Component {
  constructor(props) {
    super(props) 
 
  }
 
  componentDidMount() {
    console.log('Init')
    //this.init()

  }

  init = () => {

    console.log(this.props.match.params)
    let {accessToken} = this.props.match.params
    var socket = new SockJS('http://dev.bstchain.com/pay/socket/stomp?accessToken='+accessToken);
    var stompClient = Stomp.over(socket);
    stompClient.connect({ STOMP_USER_ID: '' }, function (frame) {
      console.log("连接成功");
      stompClient.subscribe('/user/queue/conOrder', function (msg) {
        //console.log("test3");
        console.log('订单信息');
        console.log(JSON.parse(msg.body));
      }); 
      stompClient.subscribe('/user/queue/orderChange', function (msg) {
        //console.log("test4" + msg);
        console.log('订单状态');
        console.log(msg.body);
      });


    });
  }


  init2 = _ => {
    let { accessToken, payType } = this.props.match.params;
    let validPayType = ['1', '2', '3', '4']; // 银行卡 微信 支付宝 云闪付
    let isPayType = validPayType.includes(payType.toString());

    let bool = accessToken && isPayType;
    if (bool) {

      this.createSocket()

      //this.props.dispatch(requests.getQr(accessToken))

      ///this.props.dispatch(requests.getStatus(accessToken))

    } else {
      setTimeout(() => {
        this.props.history.push('/status/fail')
      }, 1000)

    }

    this.setIntervalTimePayResult()

    this.setIntervalTimer()
  }

  createSocket = () => {

    console.log(SockJS)
    console.log(Stomp)

    return

    // let socket = new SockJS('');
    // var stompClient = Stomp.over(socket);

    // stompClient.connect('', '', function (frame) {
    //   stompClient.subscribe("/topic/taskNum." + currUserId + "." + taskClassParent, function (message) {
    //     //alert(JSON.parse(message.body));
    //   });
    // });
  }


  setIntervalTimePayResult = () => {
    this.clearIntervalTimerPayResult();
    let { accessToken } = this.props.match.params;

    this.interTimerPayResult = setInterval(() => {

      let { result } = this.props.pay;
      if (result['status'] == 3) {
        this.props.history.push(`/status/success${strings.stringifyQuery(result)}`)
        // this.props.history.push({
        //   pathname:'/status/success',
        //   params:{
        //     status:'success',
        //     sn:'dsdsd',
        //     payType:'2',
        //     fee:'1000'
        //   }
        // })
      } else {
        //this.props.dispatch(requests.getStatus(accessToken))
      }

    }, configs['TIME_PAY_RESULT'])
  }

  clearIntervalTimerPayResult = () => {
    clearInterval(this.interTimerPayResult)
    this.interTimerPayResult = null;
  }

  setIntervalTimer = () => {
    this.clearIntervalTimer();
    this.setState({ time: configs['TIME_VALID'] })
    this.interTimer = setInterval(() => {
      if (this.state.time == 0) {
        this.clearIntervalTimer();
      } else {
        this.setState({ time: this.state.time - 1000 })
      }
    }, 1000)
  }

  clearIntervalTimer = () => {
    clearInterval(this.interTimer)
    this.interTimer = null;
  }




  setTile = (type) => {
    let titles = ['银行卡支付', '微信支付', '支付宝支付', '云闪付支付']
    document.title = titles[type]
  }



  componentWillUnmount() {
    this.clearIntervalTimer();
    this.clearIntervalTimerPayResult()
  }


  render() {

    //this.setTile(this.props.match.params.payType - 1)

    let { pay } = this.props
    let payType = this.props.match.params.payType

    let { time } = this.state;

    //console.log(pay)

    return (
      <div> 
        {


          (() =>{
            if (payType == 1) {
              return <PayCard fee={pay.data.fee} qr={pay.data.qr} sn={pay.data.sn}></PayCard>
            } else if (payType == 2) {
              return <PayWx fee={pay.data.fee} qr={pay.data.qr} sn={pay.data.sn} time={time} reload={() => this.init()}></PayWx>
            } else if (payType == 3) {
              return <PayAli fee={pay.data.fee} qr={pay.data.qr} sn={pay.data.sn} time={time} reload={() => this.init()}></PayAli>
            } else if (payType == 4) {
              return <PayUnion fee={pay.data.fee} qr={pay.data.qr} sn={pay.data.sn} time={time} reload={() => this.init()}></PayUnion>
            }
          })()
        }


      </div>
    )
  }
}

export default connect((state) => {
  return { pay: state.pay }
})(Pays)