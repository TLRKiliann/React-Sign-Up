import React from "react";
import axios from "axios";
import "../App.css";


class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email:"",
            password:"",
            success: false
        }
    };

    emailLogin = (e) => {
        e.preventDefault();
        this.setState({email: e.target.value});
    };

    passwordLogin = (e) => {
        e.preventDefault();
        this.setState({password: e.target.value});
    };

    onSubmit = async (e) => {
        e.preventDefault();

        const logedIn = {
            email:this.state.email,
            password:this.state.password
        }
        axios.post("http://localhost:4000/app/login", logedIn)
            .then(res => console.log(res.data))
            .catch(err => console.log(err));

        this.setState({
            email:"",
            password:""
        })
        //this.setState({success: true});
    };

    render() {
        return (
            <form onSubmit={(e) => this.onSubmit(e)}>

                <h1>Login</h1>

                <input type="email" value={this.state.email}
                    placeholder="e-mail" onChange={(e) => this.emailLogin(e)} />

                <input type="password" value={this.state.password}
                    placeholder="password" onChange={(e) => this.passwordLogin(e)} />

                <button type="submit" className="btn--submit">
                    Login
                </button>
                {this.state.success ? (
                    <h4 style={{padding: "5px",
                        background: "lightpink", color: "green"}}
                    >
                        Success Login !
                    </h4>
                ) : (
                    <h4 style={{padding: "5px", 
                        background: "lightpink", color: "red"}}
                    >
                        Not Logged in !
                    </h4>
                )}

            </form>
        )
    }
}

export default Login;

