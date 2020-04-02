import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from 'react-redux';
import { store } from './store';
import HomePage from "./containers/HomePageContainer";
import MenuPage from "./containers/MenuPageComtainer";

function App() {
  return (
    <Provider store={store}>
      <div>
      <Router>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/home" component={HomePage} />
            <Route exact path="/menu" component={MenuPage} />
          </Switch>
      </Router>
      </div>
    </Provider>
  );
}

export default App;