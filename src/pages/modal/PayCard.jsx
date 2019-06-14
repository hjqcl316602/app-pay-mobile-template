import React, { Component } from 'react'
import { tools } from '../../js'
import CopyToClipboard from 'react-copy-to-clipboard'

import { Toast } from '../../components'
//import { Toast } from 'antd-mobile'

export default class Pay extends Component {
  constructor(props) {
    super(props)
  }

  copy(text) {
    Toast.info(`复制成功！${text}`)
  }

  render() {
    let { fee, sn, qr ,time} = this.props
    let qrs = qr ? qr.split(',') : []

    return (
      <div>
        {
          time == 0 &&
          <div className='rp-pay--mask rc-flex--center'>
            <div >
              <div className='rc-text--center'>
                <span className='rc-text--white rc-text--xl-xxxx'>已过期</span>
              </div>

            </div>
          </div>
        }
        <div className="rp-pay rp-pay--card   rc-flex rc-items--center" >

          <div className="rc-cover--w">
            <div className='rp-pay--inner'>
              <div className='rp-pay--content'>
                <div className="rc-padding--ud rc-padding--ad rc-text--center rc-text--light rc-text--lg rc-border--bm">
                  订单号：{sn}
                </div>
                <div className='rc-padding rc-text--center rc-text--dark rc-text--bold rc-text--xl-xxxx'>
                  ￥ {tools.strings.strMoney(fee)}
                </div>
                <div className="rp-ratio rc-padding__lg">
                  <div>
                    <div className='rc-text--bold  rc-text--light'>银行卡号</div>
                    <CopyToClipboard text={qrs[0]} onCopy={() => this.copy(qrs[0])}>
                      <div className='rc-text--lg rc-text--bold rc-padding__lg--ud rc-text--center'>{qrs[0] || '暂无'}</div>
                    </CopyToClipboard>

                  </div>
                  <div>
                    <div className='rc-text--bold  rc-text--light'>开户行</div>
                    <div className='rc-text--lg rc-text--bold rc-padding__lg--ud rc-text--center'>{qrs[1] || '暂无'}</div>
                  </div>
                  <div>
                    <div className='rc-text--bold  rc-text--light'>真实姓名</div>
                    <CopyToClipboard text={qrs[2]} onCopy={() => this.copy(qrs[2])}>
                      <div className='rc-text--lg rc-text--bold rc-padding__lg--ud rc-text--center'>{qrs[2] || '暂无'}</div>
                    </CopyToClipboard>
                  </div>
                </div>
              </div>
              <div className='rc-padding__lg rp-text--card rc-text--bold rc-text--center'>
                通过银行卡转账支付
            </div>
            </div>
            <div className='rc-padding__lg--ud'>
              <p className='rp-text--wihte-light rc-text--bold rc-text--center'>单击银行卡和真实姓名可复制</p>
            </div>
            <div className='rc-margin__lg--tp'>
              <p className='rp-text--wihte-light rc-text--bold rc-text--center'>过期时间</p>
              <p className='rc-text--white rc-text--bold rc-margin--tp rc-text--center'>{tools.strings.strTime(time)}</p>
            </div>
          </div>
        </div>

      </div>
    )
  }
} 