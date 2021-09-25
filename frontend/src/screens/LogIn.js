import { useState } from "react";
import axios from 'axios';

const Login = (prop) => {

    const [loginUsername, setLoginUsername] = useState("");
    const [loginPassword, setLoginPassword] = useState("");

    const login = () => {
        axios({
            method: "GET",
            data: {
                username: loginUsername,
                password: loginPassword
            },
            withCredentials: true,
            url: "http://localhost:3001/login",
        }).then((res) => console.log(res));
    }

    return (
        <div>
            <h4>Log In</h4>
            <input placeholder="username" onChange={e => setLoginUsername(e.target.value)}/>
            <input placeholder="password" onChange={e => setLoginPassword(e.target.value)}/>
            <button onClick={login}>Submit</button>
        </div>
        
    );
}

export default Login;