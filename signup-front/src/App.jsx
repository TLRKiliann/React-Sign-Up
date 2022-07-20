import React, { useState } from "react";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import "./App.css";


const App = () => {
    const [log, setLog] = useState(false);
    const [sign, setSign] = useState(false);

    const handleLogin = () => {
        setLog(prevLog => !prevLog.log);
        setSign(sign => sign = false);
    };

    const handleSignUp = () => {
        setSign(prevSign => !prevSign.sign);
        setLog(log => log = false);
    };

    return (
        <div className="main--div">

            <div className="btn--bloc">
            
                <button type="button" onClick={handleLogin} className="btn--logsign" id="btn--login">
                    Login
                </button>
                
                <button type="button" onClick={handleSignUp} className="btn--logsign">
                    SignUp
                </button>

            </div>

            <div className="log--sign">

                {!log && !sign &&
                    <div style={{textAlign: "center", marginTop: "15%"}}>
                        <h1>Wellcome !</h1>
                        <h3>Choose Login or SignUp.</h3>
                    </div>}

                {log && <Login />}
                {sign && <SignUp />}
                
            </div>

        </div>
    );
};

export default App;