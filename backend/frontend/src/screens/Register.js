import { useState } from "react";
import axios from 'axios';
import Footer from "../components/Footer";
import Navbar from '../components/Navbar';

const Register = (prop) => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const register = () => {
        axios({
            method: "POST",
            data: {
                firstName: firstName,
                lastName: lastName,
                email: email,
                password: password
            },
            withCredentials: true,
            url: "/register",
        }).then((res) => console.log(res));
    }

    return (
        <div>
            <Navbar />
            <div className="UserPage">
                <div className="UserContent">   
                    <h2>Register</h2>
                    <input className="UserInput" placeholder="First Name" onChange={e => setFirstName(e.target.value)}/>
                    <input className="UserInput" placeholder="Last Name" onChange={e => setLastName(e.target.value)}/>
                    <input className="UserInput" placeholder="Email" onChange={e => setEmail(e.target.value)}/>
                    <input className="UserInput" type="password" placeholder="Password" onChange={e => setPassword(e.target.value)}/>
                    <button className="UserButton" onClick={register}><h4>Submit</h4></button>
                </div>
                
            </div>
            <Footer />
        </div>
        
    );
}

export default Register;