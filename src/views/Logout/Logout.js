import React, {Component} from 'react';
import {Redirect} from "react-router-dom";

class Logout extends Component {

    redirect = () => {
            this.setState({ redirect: "/"});
    }

    render() {
        if(this.state.redirect){
            sessionStorage.clear()
            return <Redirect to={this.state.redirect}/>
        }
        return (
            <></>
        );
    }
}

export default Logout;