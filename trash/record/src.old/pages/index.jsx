import React, { Component }  from 'react'

class Index extends Component {
  constructor(props){
    super(props)
  }
  componentDidMount = () =>{ }
  handler = () => () =>{}
  render() {
    return  this.props.children
  }
}

export default Index