import { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import HomeSearch from "../components/HomeSearch";
import './Home.css';
import vetdetect from '../images/vetdetect.png';
import bird from '../images/bird.png';
import Footer from "../components/Footer";
import { GiHamburgerMenu } from 'react-icons/gi'

const Home = () => {

    const [user, setUser] = useState("");
    const [showLinks, setShowLinks] = useState(false);
    const history = useHistory();

    useEffect(() => {
        axios({
        method: "GET",
        withCredentials: true,
        url: "/api/users/",
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
        })
        
        setUser(null);
        history.push("/");
    }



    return (
       <div className="Home">
            <header>
                <div className="HomeNav">
                    <div className="LeftSide">
                        <Link to="/" ><img className="Logo" alt="vetdetect logo" src={vetdetect}/></Link>
                    </div>
                    <div className="RightSide">
                    {
                        user ? 
                        <div className="LoggedInNav">
                                <p>{user.firstName}</p> 
                                <button className="LogoutButton" onClick={logout}>Log Out</button>
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
                <div className="Intro">
                    <div className="IntroDescription">
                        <h1 className="IntroHeader">Find local clinics for your </h1>
                        <span className="slider">
                            <div className="mask">
                            <ul>
                                <li className="anim1">
                                    <div className="pet"><h1>dog</h1></div>
                                </li>
                                <li className="anim2">
                                    <div className="pet"><h1>cat</h1></div>
                                </li>
                                <li className="anim3">
                                    <div className="pet"><h1>rabbit</h1></div>
                               
                                </li>
                                <li className="anim4">
                                    <div className="pet"><h1>bird</h1></div>
                                </li>
                                <li className="anim5">
                                    <div className="pet"><h1>snake</h1></div>
                                </li>
                            </ul>
                            </div>
                        </span>
                    </div>
                    <HomeSearch/> 
                </div>
            </header>
            <section>
                <div>
                    <h1>Find care, reviews, and more</h1>
                    <h1>all in one place</h1>
                </div>
                <div>
                    <img src={bird} alt="bird"/>
                    {/* <img src="https://nas-national-prod.s3.amazonaws.com/robin_0.gif" alt="bird"/> */}
                </div>
            </section> 
            <Footer />
        </div>
    );
}
 
export default Home;