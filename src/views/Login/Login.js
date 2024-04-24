import React, {Component} from 'react';
import {Link, Redirect} from "react-router-dom";

class Login extends Component {

    state = {
        id: [],
        user: {
            name: 'Username',
            password: 'Password'
        },
        flag: false
    }

    getUser = () => {
        console.log("login called")
        fetch('http://localhost:4000/request_user?name=' + this.state.user.name.split(" ").join("%20") + '&password=' + this.state.user.password)
            .then(response => response.json())
            .then(response => this.setState({id: response.data}))
            .then(this.redirect)
            .catch(err => console.error(err.toString()))
    }


    redirect = () => {
        console.log(this.state.id)
        const userid = this.state.id;
        console.log(userid)
        if (Array.isArray(userid) && userid.length) {
            sessionStorage.setItem('userid', this.state.id[0].id)
            sessionStorage.setItem('token', true)
            sessionStorage.setItem('username', this.state.id[0].name)
            alert("Login successful")
            this.setState({redirect: "/"});
            window.location.reload(true)
        } else {
            alert("Username and Password doesn't match")
        }
    }

    render() {
        const user = this.state.user;
        if (this.state.redirect) {
            return <Redirect to={this.state.redirect}/>
        }
        return (
            <div className="content" style={{marginTop: '10%'}}>
                <input
                    onChange={e => this.setState({user: {...user, name: e.target.value}})}/><br/><br/>
                <input
                    type="password"
                    onChange={e => this.setState({user: {...user, password: e.target.value}})}/>
                <button onClick={this.getUser}>Login</button>
                <br/><br/>
                <Link to={'/register'}>
                    <div>Register Now!</div>
                </Link>
            </div>
        );
    }
}

export default Login;