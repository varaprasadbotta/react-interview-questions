import { Component } from "react";

const user = {
  name: "Jane Doe",
  bio: "Frontend developer who loves React and coffee ☕️",
  image: "https://do6gp1uxl3luu.cloudfront.net/question-webp/dummyUser.jpg",
};

class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isBioVisible: false,
    };
  }

  handleToggleButton = () => {
    this.setState((prevState) => ({
      isBioVisible: !prevState.isBioVisible,
    }));
  };
  render() {
    return (
      <div>
        <img src={user.image} />
        <h3>{user.name}</h3>
        <button onClick={this.handleToggleButton}>
          {this.state.isBioVisible ? "Hide Bio" : "Show Bio"}
        </button>
        <p>{this.state.isBioVisible && user.bio}</p>
      </div>
    );
  }
}

export default UserProfile;
