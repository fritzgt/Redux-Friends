import React from "react";

import { connect } from "react-redux";

import { withRouter } from "react-router-dom";

import { getFriends } from "../actions";

class FriendList extends React.Component {
  componentDidMount() {
    this.props.getFriends();
  }

  render() {
    return (
      <div>
        {this.friends.map(friend => (
          <h3>{friend}</h3>
        ))}
      </div>
    );
  }
}

const mapStateToProps = ({ friends, fetchingFriends }) => ({
  friends,
  fetchingFriends
});

export default withRouter(
  connect(
    mapStateToProps,
    { getFriends }
  )(FriendList)
);
