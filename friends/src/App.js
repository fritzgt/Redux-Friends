import React from "react";
import "./App.css";
//Importing react router components
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

//importing login page
import Login from "./components/Login";

//wrapping the app with router and added a route to the login
function App() {
  return (
    <Router>
      <div className="App">
        <h1>Welcome to Friends - Redux App</h1>
        <Link to="/login">Login</Link>
        <Route path="/login" component={Login} />
      </div>
    </Router>
  );
}

export default App;
