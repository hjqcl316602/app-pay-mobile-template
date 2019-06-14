
import React from 'react'
import ReactDOM from 'react-dom'
import Loading from './loading';

function createLoading() {
  const div = document.createElement('div')
  document.body.appendChild(div)
  const ref = React.createRef()

  let isMove = false
  ReactDOM.render(<Loading ref={ref} />, div)
  return {
    close() {

      if (!isMove) {
        ref.current.close(() => {
          isMove = ReactDOM.unmountComponentAtNode(div)
          document.body.removeChild(div)
        })
      }
    }
  }
}


let createLoadingModal;
export default {
  show() {
    if(!createLoadingModal) createLoadingModal = createLoading();
  },
  close() {
    setTimeout(() => { // 避免太快就闪退，并且可能会出现报错，比如还未渲染成功
      createLoadingModal.close();
      createLoadingModal = null;
    }, 500); 
    
  }
}
