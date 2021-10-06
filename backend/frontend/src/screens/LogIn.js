import { useState } from "react";
import axios from 'axios';
import { Redirect } from 'react-router-dom'
import Navbar from '../components/Navbar';
import Footer from "../components/Footer";
import './Login.css';

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
            url: "/login",
            // url: "http://localhost:3001/login",
        }).then((res) => {
            if (res.data === true) setLoggedIn(true);
            console.log(res);
            console.log(res.data.message); 
            setError(res.data.message);
        });
    }

    return (
        <div>
            <Navbar />
            {loggedIn ? 
                <Redirect to={{ pathname: '/'}}/> : 
                <div className="UserPage">
                    <div className="UserContent">
                        <h2>Log In</h2>
                        {error ? <p> {error} </p> : null }
                        <input className="UserInput" placeholder="Email" onChange={e => setEmail(e.target.value)}/>
                        <input className="UserInput" type="password" placeholder="Password" onChange={e => setPassword(e.target.value)}/>
                        <button className="UserButton" onClick={login}><h4>Submit</h4></button>
                    </div>
                </div>
            }
            <Footer />
            {/* <h4>Log In</h4>
            {data ? <p> {data} </p> : null }
            <input placeholder="email" onChange={e => setEmail(e.target.value)}/>
            <input placeholder="password" onChange={e => setPassword(e.target.value)}/>
            <button onClick={login}>Submit</button> */}
        </div>
        
    );
}

export default Login;