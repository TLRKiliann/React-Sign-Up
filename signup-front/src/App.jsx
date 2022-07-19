import React, { Component } from "react";
import axios from "axios";
import "./App.css";


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fullName:"",
            userName:"",
            email:"",
            password:""
        }
        /*this.fullNameChange = this.fullNameChange.bind(this);
        this.userNameChange = this.userNameChange.bind(this);
        this.emailChange = this.emailChange.bind(this);
        this.passwordChange = this.passwordChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);*/
    };

    fullNameChange = (e) => {
        e.preventDefault();
        this.setState({fullName: e.target.value});
    };

    userNameChange = (e) => {
        e.preventDefault();
        this.setState({userName: e.target.value});
    };

    emailChange = (e) => {
        e.preventDefault();
        this.setState({email: e.target.value});
    };

    passwordChange = (e) => {
        e.preventDefault();
        this.setState({password: e.target.value});
    };

    onSubmit = (e) => {
        e.preventDefault();

        const registered = {
            fullName:this.state.fullName,
            userName:this.state.userName,
            email:this.state.email,
            password:this.state.password
        }
        axios.post("http://localhost:4000/app/signup", registered)
            .then(res => console.log(res))
            .catch(err => console.log(err));

        this.setState({
            fullName:"",
            userName:"",
            email:"",
            password:""
        })
    };

    render() {
        return (
            <form onSubmit={(e) => this.onSubmit(e)}>
                <h1>Sign Up</h1>
                <input type="text" value={this.state.fullName}
                    placeholder="fullname" onChange={(e) => this.fullNameChange(e)} />

                <input type="text" value={this.state.userName}
                    placeholder="username" onChange={(e) => this.userNameChange(e)} />

                <input type="email" value={this.state.email}
                    placeholder="e-mail" onChange={(e) => this.emailChange(e)} />

                <input type="password" value={this.state.password}
                    placeholder="password" onChange={(e) => this.passwordChange(e)} />

                <button type="submit">
                    Click
                </button>
            </form>
        )
    }
}

export default App;