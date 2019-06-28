import React from "react";

import { connect } from "react-redux";

import { withRouter } from "react-router-dom";

import { getFriends } from "../actions";

class FriendList extends React.Component {
  //call the getFriends from actions when the page mounts
  componentDidMount() {
    this.props.getFriends();
  }

  render() {
    return (
      <div>
        <h1>Friend List from API</h1>
        {this.props.friends.map(friend => (
          <h3 key={friend.id}>{friend.name}</h3>
        ))}
      </div>
    );
  }
}
//getting data from redux
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
