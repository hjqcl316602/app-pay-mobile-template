


export default function pay(state={},action){
   if(action.type == 'get/qr/message'){
    return {...state, message:{ ...state.message,...action.message}}
   }else{
     return state
   }
} 