


export default function pay(state={},action){
   if(action.type == 'GET_QR'){
    return {...state,data:{ ...state.data,...action.data}}
   }else if(action.type == 'GET_QR_MESSAGE'){
    return {...state,message:{ ...state.message,...action.message}}
   }else if(action.type == 'GET_PAY_RESULT'){
    return {...state,result:{ ...state.result,...action.result }}
   } else{
     return state
   }
} 