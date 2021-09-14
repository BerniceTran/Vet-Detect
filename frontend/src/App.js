import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from './screens/Home';
import Login from './screens/LogIn';
import SignUp from './screens/SignUp';
import SearchResults from './screens/SearchResults';

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
