import React from "react";

//connecting app
import { connect } from "react-redux";

//importing action
import { login } from "../actions";

class Login extends React.Component {
  state = {
    username: "",
    password: ""
  };

  changeHandler = event => {
    console.log(event.target.value);
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  submitHandler = e => {
    e.preventDefault();
    //calling the login func from the actions
    //and passing the state
    //when the action returns with the then
    //with push it to the history
    this.props
      .login(this.state)
      .then(() => this.props.history.push("/FriendsList"));
  };

  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <input
          type="text"
          name="username"
          placeholder="User Name"
          value={this.state.userName}
          onChange={this.changeHandler}
        />
        <input
          type="password"
          name="password"
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
export default connect(
  null,
  { login }
)(Login);
