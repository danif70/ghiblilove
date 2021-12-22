import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from './Components/Home'
import LoginRegister from './Components/LoginRegister';
import Films from './Components/Films';
import Characters from './Components/Characters';


function App() {

  return (
    <Router>
      <Switch>
        <Route path="/characters" component={Characters} />
        <Route path="/films" component={Films} />
        <Route path="/home" component={Home} />
        <Route path="/" component={LoginRegister} />
      </Switch>
    </Router>
  );
}

export default App;
