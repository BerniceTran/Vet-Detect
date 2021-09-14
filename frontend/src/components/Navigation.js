import { Link } from "react-router-dom";

const Navigation = () => {
    return (
       <div>
           <Link to="/">VetDetect</Link>
           <Link to="/login">Log In</Link>
           <Link to="/signup">Sign Up</Link>
       </div>
    );
}
 
export default Navigation;