import React, { Component } from 'react'
import { HashLoader } from 'react-spinners'
import { CSSTransition } from 'react-transition-group'

import './index.css'
import Mask from '../mask/index'

class Loading extends Component {
  componentDidMount = () => { }
  handler = () => () => { }
  state = {
    show: true,
    timeout: 500,
    appear: true
  }

  close = (fn) => {
    console.log(this.state)
    this.setState({
      show: false
    })
    setTimeout(() => {
      fn()
    }, this.state.timeout)

  }

  render() {
    let { show, timeout, appear } = this.state
    return (
      <div>
        <CSSTransition in={show} timeout={timeout} appear={appear} classNames='fade' >
          <div>
            <Mask></Mask>
            <div className='rc-loading__outer'>
              <HashLoader color='#fff' size={60} > </HashLoader>
            </div>
          </div>
        </CSSTransition>
      </div>


    )
  }
}

export default Loading