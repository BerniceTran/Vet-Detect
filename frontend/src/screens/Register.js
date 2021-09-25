import { useState } from "react";
import axios from 'axios';

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
            url: "http://localhost:3001/register",
        }).then((res) => console.log(res));
    }

    return (
        <div>
            <h4>Register</h4>
            <input placeholder="first name" onChange={e => setFirstName(e.target.value)}/>
            <input placeholder="last name" onChange={e => setLastName(e.target.value)}/>
            <input placeholder="email" onChange={e => setEmail(e.target.value)}/>
            <input placeholder="password" onChange={e => setPassword(e.target.value)}/>
            <button onClick={register}>Submit</button>
        </div>
        
    );
}

export default Register;