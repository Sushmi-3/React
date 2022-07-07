import React, { Component } from 'react'

class Message extends Component {

    constructor(){
        super()
            this.state={
                   message:'State component'
            }
        }
    
changeMessage(){
    this.setState({
        message:'Thanks for clicking!'
    })
}

       render(){
           return( 
           <div>
           <h1>{this.state.message}</h1> 
           <button onClick={()=>this.changeMessage()}>Click Me</button>
           </div>
           )
       }
       
}
export default Message