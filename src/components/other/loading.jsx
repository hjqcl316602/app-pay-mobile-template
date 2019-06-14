 
import React, { Component }  from 'react'
import './components.css';

class Loading extends Component {
  render() {
    return (
      <div className="loader">
      <span className="loader-block"></span>
      <span className="loader-block"></span>
      <span className="loader-block"></span>
      <span className="loader-block"></span>
      <span className="loader-block"></span>
      <span className="loader-block"></span>
      <span className="loader-block"></span>
      <span className="loader-block"></span>
      <span className="loader-block"></span>
    </div>
    )
  }
}

export default Loading