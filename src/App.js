import "./App.css";
import Home from './pages/Home';
import Menu from './pages/Menu';
import Reservations from "./pages/Reservations";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/Menu">
            <Menu/>
          </Route>
          <Route path="/Reservations">
           <Reservations/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
