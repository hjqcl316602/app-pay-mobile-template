import React,{Component} from 'react';
export default  function Bottom(props){
    let{name} = props
    const sayHi = () => {
        console.log(`Hi ${name}`);
    }
    return (
        <div>

            <h1>Hello, {name}</h1>
            
            <button onClick ={sayHi}>Say Hi</button>
        </div>
    )
}
