


import fly from 'flyio'
import qs from 'qs'
import  {Toast} from '../../components'

fly.config = {
  method:"POST",//请求方法， GET 、POST ...
  headers:{ 'Content-type':'application/x-www-form-urlencoded'},//请求头
  baseURL:"",//请求基地址
  //是否自动将Content-Type为“application/json”的响应数据转化为JSON对象，默认为true
  //parseJson:true,
  timeout:100000,//超时时间,
  responseType:'json' // 响应值是json ，默认是string
}

//添加请求拦截器
fly.interceptors.request.use((request)=>{
    //console.log('request')
       
      //给所有请求添加自定义header
      //request.headers["X-Tag"]="flyio";
      //打印出请求体 
      //终止请求
      //var err=new Error("xxx")
      //err.request=request
      //return Promise.reject(new Error(""))

    //可以显式返回request, 也可以不返回，没有返回值时拦截器中默认返回request
    request.body = qs.stringify(request.body)

    return request;
})

//添加响应拦截器，响应拦截器会在then/catch处理之前执行
fly.interceptors.response.use((response) => {  
        //只将请求结果的data字段返回
        return response.data
    },(err) => {
        //发生网络错误后会走到这里
        if(err.status === 0){
          Toast.danger('网络错误，请检查网络！')
        }else if(err.status && err.status === 1){
          Toast.danger('请求超时，重新加载！')
        }else{
          Toast.danger('未知错误！')
        }
        
    }
)

export default fly 