import React, { Component }  from 'react'
import { connect } from 'react-redux'
class Index extends Component {
  constructor(props){
    super(props)
    //console.log(props)
  }
  componentWillReceiveProps(props){
    //console.log(props)
  }
  componentDidMount = () =>{ }
  handler = () => () =>{}
  render() {
    return  this.props.children
  }
}

export default connect((state) => {
  return { pay: state.pay }
})(Index)