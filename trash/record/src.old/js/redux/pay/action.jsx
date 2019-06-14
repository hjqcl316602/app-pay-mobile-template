

import {fly,configs,crypt} from '../../js';
import { Toast } from 'antd-mobile'


export const getQr = ( accessToken ) =>{
   

  return function getMessage(dispatch,getState){
    dispatch({ type : 'GET_QR_MESSAGE' , message : { loaded:false  } }  )

    fly.post(configs['PROD_HTTP'] + '/pay/getQr.do',{ accessToken }).then((response)=>{

      let data = response['data'];
      if(data){
        let decrypt = crypt.decrypt(data)
        if(decrypt !=='null' && !!decrypt ){
          let message =  JSON.parse(decrypt) ; 

          if(message['qr']){
            setTimeout(()=>{
              dispatch({ type : 'GET_QR_MESSAGE' , message : { loaded:true  } }  )
            },400)
            dispatch({ type : 'GET_QR' , data : message  })
            dispatch({ type : 'GET_QR_MESSAGE' , message : { status:true  } }  )
          }else{
            getMessage(dispatch,getState)
          } 
         
        }else{
          dispatch({ type : 'GET_QR_MESSAGE' , message : { status:false  } }  )
        }
        
      }else{
        dispatch({ type : 'GET_QR_MESSAGE' , message : { status :false   } }  )
        Toast.info('数据有误!',2.5) 
      }
    }).catch((e)=>{
      setTimeout(()=>{
        dispatch({ type : 'GET_QR_MESSAGE' , message : { loaded:true  } }  )
      },400)
      Toast.fail('请求失败!',2.5) 
    })
  } 
}


export const getStatus = (accessToken) =>{
  return (dispatch,getState) =>{ 
 
    fly.post(configs['PROD_HTTP'] + '/pay/paySuccess.do',{ accessToken }).then((response)=>{

      let data = response['data'];
      dispatch({ type : 'GET_PAY_RESULT' , result : { ...data   } }  ) 
    }).catch((e)=>{
      Toast.fail('请求失败!',2.5) 
    })
  }
}