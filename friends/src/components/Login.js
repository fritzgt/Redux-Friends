import React from "react";

//connecting app
import { connect } from "react-redux";

class Login extends React.Component {
  state = {
    userName: "",
    password: ""
  };

  changeHandler = e => {};

  submitHandler = e => {
    e.preventDefault();
  };

  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <input
          type="text"
          placeholder="User Name"
          value={this.state.userName}
          onChange={this.changeHandler}
        />
        <input
          type="password"
          placeholder="Password"
          value={this.state.password}
          onChange={this.changeHandler}
        />
        <button>Login</button>
      </form>
    );
  }
}

//needs to be completed
export default connect(null)(Login);
