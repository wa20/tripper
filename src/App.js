import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import "semantic-ui-css/semantic.min.css";
import Home from "../src/pages/Home/homePage";
import Contact from "../src/pages/Contact/contact";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home">
            <Redirect to="/"></Redirect>
          </Route>
          <Route exact path="/contact" component={Contact} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
