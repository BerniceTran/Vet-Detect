import { Link } from "react-router-dom";
import './Navbar.css';

const Navigation = () => {
    return (
       <div className="Navbar">
           <Link to="/">VetDetect</Link>
           <Link to="/login">Log In</Link>
           <Link to="/signup">Sign Up</Link>
       </div>
    );
}
 
export default Navigation;