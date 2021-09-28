import { Link, useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import './Navbar.css';
import axios from "axios";
import vetdetect from '../images/vetdetect.png';
import Search from "../components/SearchForm";

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
                <Link to="/"    ><img className="Logo" alt="vetdetect logo" src={vetdetect}/></Link>
                <Search />
                {
                    user ? 
                        <div className="LoggedInNav">
                            <p>{user.firstName}</p> 
                            <button onClick={logout}>Log Out</button>
                        </div>
                    :
                        <ol className="LoggedOutNav">
                            <li className="NavItem">
                                <Link to="/login" className="Navlink">Log In</Link>
                            </li>
                            <li className="NavItem">
                                <Link to="/signup" className="Navlink">Sign Up</Link> 
                            </li>
                        </ol>
                }
            </div>

    );
}
 
export default Navigation;