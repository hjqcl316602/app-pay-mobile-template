import React, { Component }  from 'react'
import {  Route,withRouter    } from 'react-router-dom'
  
class EnRoute extends Component {

  constructor(props){
    super(props)
    //console.log(props)
  }

  componentWillMount(){ 
    this.setTile(this.props.title )
  }
  componentWillUpdate(){ 
    this.setTile(this.props.title )
  }
  
  setTile = (title) =>{
    console.log(title)
    document.title = title 

  }

  render() { 
    return (
        <Route {...this.props}></Route>
    )
  }
}

export default withRouter(EnRoute)