import { Link, useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import './Navbar.css';
import axios from "axios";

const Navigation = () => {

    const [user, setUser] = useState("");
    const history = useHistory();

    useEffect(() => {
        axios({
        method: "GET",
        withCredentials: true,
        url: "http://localhost:3001/api/users/",
        })
        .then((res) => {
            setUser(res.data);
        });
    }, []);

    const logout = () => {
        axios({
            method: "GET",
            withCredentials: true,
            url: "http://localhost:3001/logout"
        })

        setUser(null);
        history.push("/");
    }

    return (
       <div className="Navbar">
           <Link to="/">VetDetect</Link>
            {
                user ? 
                <div>
                    <p>{user.firstName}</p> 
                    <button onClick={logout}>Log Out</button>
                </div> :
                <div>
                    <Link to="/login">Log In</Link>
                    <Link to="/signup">Sign Up</Link>
                </div>
            }
       </div>
    );
}
 
export default Navigation;