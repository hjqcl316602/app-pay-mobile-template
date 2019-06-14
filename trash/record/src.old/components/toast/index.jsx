import React, { Component }  from 'react' 
import ReactDOM from 'react-dom'
import { CSSTransition } from 'react-transition-group'

import './index.css'

class Toast extends Component {
  componentDidMount = () =>{ }
  handler = () => () =>{
    this.setState({
      show:false
    })
  }
  static defaultProps = {
    message: '请求失败！',
    type:'warning'
  }
  state = {
    show : true ,
    timeout : 300,
    appear : true
  }

  componentDidMount = () =>{ 
    
    let { onClose,duration } = this.props ;

    setTimeout(()=>{
      this.setState({
        show:false
      })

      setTimeout(()=>{
        onClose()             // 处理外层div的移除
      },this.state.timeout)
      
    },duration)
  }

  create = (toast) =>{
    
  }

  render() {
    let { message ,type} = this.props;
     
    let { show , timeout , appear }  = this.state ;
     
    return (
      <CSSTransition in = { show  } timeout = { timeout } appear = { appear } classNames='slidedown' unmountOnExit>
        <div className={`rc-toast rc-toast--${type}`} onClick={ this.handler()}>
          <div className='rc-toast__content'>
            {message}
          </div>
        </div>
      </CSSTransition>
    )
  }
}
  


function createToast(type,message,duration){ 

  const div = document.createElement('div')
  document.body.appendChild(div)
  const ref = React.createRef()
   
  let isMove = false 

  const close = () => {
    if(!isMove){
      ReactDOM.unmountComponentAtNode(div)
      document.body.removeChild(div)
    }
      
  }

  ReactDOM.render(<Toast ref={ref} type = { type} message = { message } duration = { duration } onClose= { close } />, div)       // 需要渲染时间，所以同步那不到
  
   
   
} 


export default {

  info(message = '信息提示！',duration=3000 ){
    return createToast('info' , message , duration )
  },
  warning(message = '警告提示！',duration=3000 ){
    return createToast('warning' , message , duration )
  },
  danger(message = '危险提示！',duration=3000 ){
    return createToast('danger' , message , duration )
  }

} 
