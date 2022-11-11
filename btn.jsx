import  React,{ Component } from 'react';
class Button extends Component{
    constructor(props){
        super(props)
        this.state = {count: 0}
    }
    
    btnClick = () => {
        this.setState({count :this.state.count + 1})
        let k = parseInt(this.state.count)
        if (k === 0 ){
        this.setState({ count: 1 })}

        if(k === 10 ){
            this.setState({count:"zero"})
        }
        
        

    }
   
    render(){
        return <div className="btn">
            <label htmlFor="">{this.state.count}</label><br />
            <button onClick={this.btnClick}>Click Me</button>
        </div>
    
}
color(){
let b = this.state.count
if (b === 1){
    this.setState({})
}
}

}

export default Button