import React from 'react'
import { is } from 'immutable'
import { strings } from '../js'

export default  Component => {
  return class extends Component{
    constructor(props) {
      super(props)  
      this.state = {
        query:this.props.location ? strings.parseQuery(this.props.location.search) : {},
      } 
    }



    shouldComponentUpdate(nextProps = {}, nextState = {}) {
      const thisProps = this.props || {}, thisState = this.state || {}
      // 如果参数的长度不一致，更新
      if (Object.keys(thisProps).length !== Object.keys(nextProps).length ||
      Object.keys(thisState).length !== Object.keys(nextState).length) {
      return true;
      }
          // 如果参数的值不一致，更新
      const flag1 = Object.keys(nextProps).some(item => !is(thisProps[item], nextProps[item]))
      if (flag1) return true
          // 如果state值不一致，更新
      const flag2 = Object.keys(nextState).some(item => !is(thisState[item], nextState[item]))
      if(flag2) return true
      
       return false;
    }   

    getIn(){
      console.log('getIn')
    }

    componentDidMount() { 
      console.log('mixins-componentDidMount')
       
    }



    render(){
      return (
        <Component {...this.props} {...this.state} > </Component>
      )
    }
  }
}
 