import React from "react";

class FriendList extends React.Component {
  componentDidMount() {
    this.props.getFriends();
  }

  render() {
    return (
      <div>
        <h1>FriendsList</h1>
      </div>
    );
  }
}

export default FriendList;
