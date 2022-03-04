import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {  
  Admin,
  Front,
  Adminlogin,
} from "./components";


ReactDOM.render(
  <Router>

    <Switch>
        
        {/* Admin routes */}
        <Route exact path="/login" component={Adminlogin} />
        <Route  path="/admin" component={Admin} />
        <Route path="/" component={Front} /> 


    </Switch>

  </Router>,

  document.getElementById("root")
);