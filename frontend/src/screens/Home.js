import './Home.css';
import Navbar from "../components/Navbar";
import Search from "../components/SearchForm";

const Home = () => {
    return (
       <div className="Home">
           <Navbar />
           <Search />
       </div>
    );
}
 
export default Home;