import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return(
    <Router>
      <div>
        <h1>Nikunj</h1>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;