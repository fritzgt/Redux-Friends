import React from "react";
import "./App.css";
//Importing react router components
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

//importing login page and FriendList
import Login from "./components/Login";
import FriendList from "./components/FriendList";

//importing privateroute
import PrivateRoute from "./components/PrivateRoute";

//wrapping the app with router and added a route to the login
function App() {
  return (
    <Router>
      <div className="App">
        <Link to="/login">Login</Link>
        <br />
        <Link to="/protected">Friends list</Link>
        <h1>Welcome to Friends - Redux App</h1>
        <Route path="/login" component={Login} />
        <PrivateRoute exact path="/protected" component={FriendList} />
      </div>
    </Router>
  );
}

export default App;
