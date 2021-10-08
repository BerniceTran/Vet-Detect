import { Link, useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import './Navbar.css';
import axios from "axios";
import vetdetect from '../images/vetdetect.png';
import Search from "./SearchForm";
import { GiHamburgerMenu } from 'react-icons/gi'

const Navigation = () => {

    const [user, setUser] = useState("");
    const [showLinks, setShowLinks] = useState(false);
    const history = useHistory();

    useEffect(() => {
        axios({
        method: "GET",
        withCredentials: true,
        url: "/api/users",
        // url: "http://localhost:3001/api/users/",
        })
        .then((res) => {
            setUser(res.data);
        });
    }, []);

    const logout = () => {
        axios({
            method: "GET",
            withCredentials: true,
            url: "/logout",
            // url: "http://localhost:3001/logout"
        })

        setUser(null);
        history.push("/");
    }

    return (
        <div className="Navbar">
            <div className="LeftSide">
                <Link to="/"  ><img className="Logo" alt="vetdetect logo" src={vetdetect}/></Link>
            </div>
            <div className="Center">
                <Search />
            </div>
            <div className="RightSide">
                {
                    user ? 
                        <div className="LoggedInNav">
                            <p>{user.firstName}</p> 
                            <button onClick={logout}>Log Out</button>
                        </div>
                    :
                        <div>
                            <div className="NavLinks" id={showLinks ? "hidden" : ""}>    
                                    <Link to="/login" className="NavLink">Log In</Link>
                                    <Link to="/signup" className="NavLink">Sign Up</Link>     
                            </div>
                            <button className="HamButton" onClick={() => setShowLinks(!showLinks)}><GiHamburgerMenu className="Hamburger" /*size={20} color={"#EF5E5E"}*//></button> 
                        </div>
                        
                }
            </div>
        </div>

    );
}
 
export default Navigation;