import React, { Component } from 'react'
import { filters,doms } from '../../js'

import QRcode from 'qrcode.react'

export default class Pay extends Component {
  constructor(props) {
    super(props)
    //console.log(props)
  }
  state = {
    size: 0
  }

  componentDidMount() {
    this.setState({
      size: doms.getOffset(this.refs.qr).width
    })

  }
  render() {
    let { sn, fee, qr, time, reload } = this.props;
    let { size } = this.state;
    return (
      <div>
        {
          time == 0 &&
          <div className='rp-pay--mask rc-flex--center'>
            <div >
              <div className='rc-text--center'>
                <span className='rc-text--white rc-text--xl-xxxx'>已过期</span>
              </div>
              <div className='rc-text--center rc-margin__lg--tp'>
                <span className='rp-text--wihte-light rc-text--bold rc-text--lg'  onClick={ reload } >重新支付</span>
              </div>

            </div>
          </div>
        }


        <div className="rp-pay rp-pay--wx   rc-flex rc-items--center" >

          <div className="rc-cover--w">
            <div className='rp-pay--inner'>
              <div className='rp-pay--content'>
                <div className="rc-padding--ud rc-padding--ad rc-text--center rc-text--light rc-text--lg rc-border--bm">
                  订单号：{sn}
                </div>

                <div className='rc-padding__lg'>
                  <div className=' rc-text--center rc-text--dark rc-text--bold rc-text--xl-xxxx'>
                    ￥ { filters.strMoney(fee)}
                  </div>

                  <div className="rp-ratio rc-margin__lg--tp">
                    <div className="rp-ratio__outer" data-ratio='100%'>
                      <div className="rp-ratio__inner ">
                        <div className="rp-img__inner" ref='qr'>
                          <QRcode value={qr} size={size}> </QRcode>
                        </div>
                      </div>
                      <div className='rp-ratio__inner rp-ratio--up rc-flex--center'>
                        <div className='rp-pay--icon' >
                          <img src={require('../../images/pay-wx.png')} alt="" className='rp-img--icon rp-img--pay' />
                        </div>
                      </div>
                    </div>
                  </div>

                </div>

              </div>
              <div className='rc-padding__lg rp-text--wx rc-text--bold rc-text--center'>
                打开微信[扫一扫]
            </div>
            </div>
            <div className='rc-margin__lg--tp'>
              <p className='rp-text--wihte-light rc-text--bold rc-text--center'>过期时间</p>
              <p className='rc-text--white rc-text--bold rc-margin--tp rc-text--center'>{filters.strTime(time)}</p>
            </div>
          </div>
        </div>
      </div>

    )
  }
} 