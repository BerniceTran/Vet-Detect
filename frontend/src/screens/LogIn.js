import { useState } from "react";
import axios from 'axios';
import { Redirect } from 'react-router-dom'

const Login = (prop) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const [loggedIn, setLoggedIn] = useState(false);

    const login = () => {
        axios({
            method: "POST",
            data: {
                //email: email,
                username: email,
                password: password
            },
            withCredentials: true,
            url: "http://localhost:3001/login",
        }).then((res) => {
            if (res.data === true) setLoggedIn(true);
            console.log(res);
            console.log(res.data.message); 
            setError(res.data.message);
        });
    }

    return (
        <div>
            {loggedIn ? 
                <Redirect to={{ pathname: '/'}}/> : 
                <div>
                    <h4>Log In</h4>
                    {error ? <p> {error} </p> : null }
                    <input placeholder="email" onChange={e => setEmail(e.target.value)}/>
                    <input placeholder="password" onChange={e => setPassword(e.target.value)}/>
                    <button onClick={login}>Submit</button>
                </div>
            }
            {/* <h4>Log In</h4>
            {data ? <p> {data} </p> : null }
            <input placeholder="email" onChange={e => setEmail(e.target.value)}/>
            <input placeholder="password" onChange={e => setPassword(e.target.value)}/>
            <button onClick={login}>Submit</button> */}
        </div>
        
    );
}

export default Login;