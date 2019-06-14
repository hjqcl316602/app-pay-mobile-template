import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { CSSTransition } from 'react-transition-group'
import { doms } from '../../js'

import './index.css';
import Mask from '../mask/index'
import { HashLoader } from 'react-spinners'

class Loading extends Component {
  componentDidMount = () => {
    console.log('Loading')
  }
  handler = () => () => { }
  state = {
    show: false,
    timeout: 300,
    appear: false
  }

  create = (duration, fn) => {
     
    doms.isLock(true)
    this.setState({ show: true })

    // 处理多个loading情况，如果传了duration，则更换duration,否则清除存在的定时器

    if (duration > 0) {

      clearTimeout(this.timer)
      this.timer = null;
      this.timer = setTimeout(fn, duration)
    } else {
      if (this.timer) {
        clearTimeout(this.timer)
        this.timer = null;
      }
    }
  }

  close = (fn) => {
    doms.isLock(false)
    this.setState({ show: false })
    setTimeout(fn, this.state.timeout)
  }



  render() {
    let { show, timeout, appear } = this.state
    console.log(this.state)
    return (
      <CSSTransition in={show} timeout={timeout} appear={appear} classNames='fade' >
        <div>
           
          <div className = 'rc-loading__outer'>
            <HashLoader color = '#fff' size = {60 } > </HashLoader>
          </div> 
         
          {
            // <div className='rc-loading__outer'>
            //   <div className='rc-loading'>
            //     <div className='rc-loading__group' >
            //       <div className='rc-loading__loader one'></div>
            //       <div className='rc-loading__loader two'></div>
            //     </div>
            //     <div className='rc-loading__group' >
            //       <div className='rc-loading__loader tree'></div>
            //       <div className='rc-loading__loader four'></div>
            //     </div>
            //   </div>
            // </div>
          }
        </div>
      </CSSTransition>
    )
  }
}

function createLoading() {
  const div = document.createElement('div')
  document.body.appendChild(div)
  const ref = React.createRef()
  let notification = ReactDOM.render(<Loading ref={ref} />, div) // 需要渲染时间，所以同步那不到

  let isMove = false;
  return
  // return {
  //   show(duration = 0) {
  //     if (ref.current) {
  //       return ref.current.create(duration, this.hide)
  //     }
  //   },
  //   hide() {
  //     return ref.current && ref.current.close(() => {
  //       if (!isMove) {
  //         isMove = ReactDOM.unmountComponentAtNode(div)
  //         document.body.removeChild(div)
  //       }
  //     })
  //   }
  // }

}


export default createLoading()

