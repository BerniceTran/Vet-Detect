import { useState } from "react";
import axios from 'axios';
import { set } from "mongoose";

const Login = (prop) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [data, setData] = useState(null);

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
            console.log(res.data.message);
            setData(res.data.message);
        });
    }

    return (
        <div>
            <h4>Log In</h4>
            {data ? <p> {data}</p> : null }
            <input placeholder="email" onChange={e => setEmail(e.target.value)}/>
            <input placeholder="password" onChange={e => setPassword(e.target.value)}/>
            <button onClick={login}>Submit</button>
        </div>
        
    );
}

export default Login;