import React, { Component }  from 'react'
import {  Route,withRouter    } from 'react-router-dom'
  
class CustomRouter extends Component {

  constructor(props){
    super(props)
    //console.log(props)
  }

  componentWillMount(){ 
    this.setTile(this.props.name )
  }
  componentWillUpdate(){ 
    this.setTile(this.props.name )
  }
  
  setTile = (title) =>{
    document.title = title 

  }

  render() { 
    return (
        <Route {...this.props}></Route>
    )
  }
}

export default withRouter(CustomRouter)