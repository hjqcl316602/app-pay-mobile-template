import React, { Component } from 'react'
import SockJS from 'sockjs-client'
import Stomp from 'stompjs'

import { connect } from 'react-redux'
import { tools, configs } from '../js'
import { Toast, Loading } from '../components'

import { PayCard, PayWx, PayAli, PayUnion } from './modal'

class Pays extends Component {
  constructor(props) {
    super(props)

  }

  state = {
    connectTimes : 0 ,
    maxConnectTimes : 10 ,
    connetDuration:3000
  }

  componentDidMount() {
    this.createSocket()

    window.addEventListener('online', () => {
      
      this.setState({
        connectTimes:0
      })
      this.createSocket()

    }, false)
    window.addEventListener('offline', () => {
      Toast.warning('网络已断开，请检查网络！')
    }, false)
  }


  createSocket = () => {


    this.setState({
      connectTimes:this.state.connectTimes + 1 
    })

    Loading.show()

     
    let { dispatch, history, match } = this.props
    let { accessToken } = match.params;

    let socket , stompClient;
    try {
      socket = new SockJS(configs['PROD_HTTP'] + '/socket/stomp?accessToken=' + accessToken);

      stompClient = Stomp.over(socket);

      stompClient.connect({ STOMP_USER_ID: '' }, (frame) => {
        stompClient.subscribe('/user/queue/conOrder',(msg)=>{
           try {
             let res = JSON.parse(msg.body);
             this.setMessage(res,()=>{ Loading.close() })
           } catch (error) {
            Toast.warning('请求数据格式有误！')
           }
        })
      }, (error) => {
        console.log(this.state.connectTimes)
        if(this.state.connectTimes == this.state.maxConnectTimes ){
          Loading.close()
          Toast.warning('获取支付信息失败，请检查网络！')
        }else{
          setTimeout(()=>{
            this.createSocket()
          },3000)
        }
        
      })

    } catch (error) {
      Toast.warning('异常，请检查网络！')
    }
  }

  setMessage = (res,success) =>{
    console.log(res)
    let { dispatch, history, match } = this.props

    if (res['status'] == 3) {
      let message = {
        money: res['money'],
        orderSn: res['orderSn'],
        payMode: res['payMode'],
        createTime: res['createTime'],
        payTime: res['payTime'],
        channelOrderId: res['channelOrderId']
      }
      history.replace('/status/success' + tools.strings.stringifyQuery(message))
    }
    if (res['qr']) {
      let message = {
        fee: res['fee'],
        qr: res['qr'] || res['unionpayQrUrl'],
        sn: res['sn'],
        leftTime: res['leftTime'],
        payType: res['channelId']
      }
      dispatch({ type: 'get/qr/message', message });
      this.setTimer()
      //Loading.close()
      success && success()
    }
  }
 
  // 设置过期时间的定时器
  setTimer = () => {
    let { dispatch } = this.props
    this.clearTimer()
    this.leftTimeTimer = setInterval(() => {
      let { leftTime } = this.props.pay.message;

      if (leftTime == 0) {
        this.clearTimer()
      } else {
        dispatch({ type: 'get/qr/message', message: { leftTime: Math.max(0, --leftTime) } });
      }
    }, 1000)

  }

  clearTimer = () => {
    clearInterval(this.leftTimeTimer)
    this.leftTimeTimer = null;
  }

  setTile = (type) => {
    let titles = ['银行卡支付', '微信支付', '支付宝支付', '云闪付支付', '支付平台']
    document.title = titles[type]
  }

  componentWillUnmount() {
    this.clearTimer()
  }

  render() {



    let { message } = this.props.pay
    this.setTile(message.payType - 1 || 4)

    return (
      <div>
        {
          (() => {
            if (message['payType'] == 1) {
              return <PayCard fee={message.fee} qr={message.qr} sn={message.sn} time={message.leftTime * 1000}></PayCard>
            } else if (message['payType'] == 2) {
              return <PayWx fee={message.fee} qr={message.qr} sn={message.sn} time={message.leftTime * 1000}  ></PayWx>
            } else if (message['payType'] == 3) {
              return <PayAli fee={message.fee} qr={message.qr} sn={message.sn} time={message.leftTime * 1000}  ></PayAli>
            } else if (message['payType'] == 4) {
              return <PayUnion fee={message.fee} qr={message.qr} sn={message.sn} time={message.leftTime * 1000}  ></PayUnion>
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