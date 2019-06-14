import React from 'react'


const MixinsPay = Component => {
  return class extends Component{
    constructor(props) {
      super(props)
       
    }
    
    componentDidMount() { 
    }

    render(){
      return (
        <Component {...this.props} {...this.state} > </Component>
      )
    }
  }
}

export {
  MixinsPay
}