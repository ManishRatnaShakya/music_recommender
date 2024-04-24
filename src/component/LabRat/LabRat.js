import React, {Component} from "react";

class LabRat extends Component{
    state = {
        username:'',
        passowrd:''
    }
    inputHandler=e=>{
        console.log(e.target.value);
        this.setState({
            username:e.target.value
        })
    }
    render() {
        return (
            <div>
                <input type="text" onChange={(e)=>this.inputHandler(e)}/>
                <h1>{this.state.username}</h1>
            </div>
        )
    }
}
export default LabRat;