import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import './Navbar.css';
import axios from "axios";

const Navigation = () => {

    const [user, setUser] = useState("");

    useEffect(() => {
        // const fetchData = async () => {
            axios({
            method: "GET",
            withCredentials: true,
            url: "http://localhost:3001/user",
            }).then((res) => {
                setUser(res.data);
            });
        // };
        // fetchData();
    }, []);

    return (
       <div className="Navbar">
           <Link to="/">VetDetect</Link>
            {
                user ? <p>{user.firstName}</p> :
                <div>
                    <Link to="/login">Log In</Link>
                    <Link to="/signup">Sign Up</Link>
                </div>
            }
       </div>
    );
}
 
export default Navigation;