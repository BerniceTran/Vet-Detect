import './App.css';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from './Home';
import Login from './LogIn';
import SignUp from './SignUp';
import SearchResults from './SearchResults';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
        {/* Routes are used to render components based on the URL of the browser */}
        <Route exact path="/"> 
          <Home />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route path="/search-results">
          <SearchResults />
        </Route>
      </Switch>
        
      </div>

    

    </Router>
  );
}

export default App;
