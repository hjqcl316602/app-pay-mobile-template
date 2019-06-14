import React, { Component } from 'react'
import {   strings} from '../js';

class Status extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    let { params } = this.props.match;
  
    let { search } = this.props.location;
    let query = search ? strings.parseQuery(search) : { } 

    return (
      <div className='rp-fuild rp-bg '>

        {
          params.status === 'fail' ?
            <div className='rp-ratio'>
              <div className='rp-ratio__outer' data-ratio='100%'>
                <div className='rp-ratio__inner rc-flex--center'>
                  <div>
                    <div className='rc-text--center'> <img src={require('../images/icon-pay-fail.png')} alt="" className='rp-img--icon rp-img--status' /> </div>
                    <div className='rc-margin__lg--tp '>
                      <div className='rc-text--center'><span className='rc-text--bold'>支付失败</span> </div>
                      <div className='rc-text--center rc-margin--tp'><span className='rc-text--gray'>请确认支付信息是否正确</span> </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            :
            <div>
              <div className='rp-ratio'>
                <div className='rp-ratio__outer' data-ratio='70%'>
                  <div className='rp-ratio__inner rc-flex--center'>
                    <div>
                      <div className='rc-text--center'> <img src={require('../images/icon-pay-success.png')} alt="" className='rp-img--icon rp-img--status' /> </div>
                      <div className='rc-margin__lg--tp '>
                        <div className='rc-text--center'><span className='rc-text--bold'>支付成功</span> </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className='rc-padding__lg--ad'>
                  {
                    query.fee &&
                    <div className='rc-flex--between-center rc-padding--ud'>
                      <span className="rc-text--lg rc-text--light">充值金额</span>
                      <span className="rc-text--lg">{strings.strMoney(query.fee)}元</span>
                    </div>
                  }
                  {
                    query.payType &&
                    <div className='rc-flex--between-center rc-padding--ud'>
                      <span className="rc-text--lg rc-text--light">充值方式</span>
                      <span className="rc-text--lg">{strings.strPayType(query.payType)}</span>
                    </div>
                  }
                  {
                    query.sn &&
                    <div className='rc-flex--between-center rc-padding--ud'>
                      <span className="rc-text--lg rc-text--light">订单号</span>
                      <span className="rc-text--lg">{ query.sn}</span>
                    </div>
                  } 
                  {
                    query.payTime &&
                    <div className='rc-flex--between-center rc-padding--ud'>
                      <span className="rc-text--lg rc-text--light">支付时间</span>
                      <span className="rc-text--lg">{ query.payTime}</span>
                    </div>
                  } 
                </div>
              </div>
            </div>

        }
      </div>
    )
  }
}

export default Status