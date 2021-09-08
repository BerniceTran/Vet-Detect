import './App.css';
import Home from './Home';
import Login from './LogIn';
import SignUp from './SignUp';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom"

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
        {/* components are rendered based on the URL of the browser */}
        <Route exact path="/"> 
          <Home />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
      </Switch>
        
      </div>

    

    </Router>
  );
}

export default App;
