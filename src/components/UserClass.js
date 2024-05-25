import React from "react";
import UserContext from "../utils/UserContext";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "Dummy Name",
        location: "default",
        twitter_username: "dummy",
        avatar_url: "https://avatars.githubusercontent.com/u/108133514?v=4",
      },
    };
    // console.log("Child Conbstructor");
  }
  async componentDidMount() {
    // console.log("Component mounted is called");
    const data = await fetch("https://api.github.com/users/ajcrush");
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
    console.log(json);
  }
  componentDidUpdate(prevProps, prevState) { 
    console.log("yo");
  }
  render() {
    // console.log("Child render");
    const { name, location, twitter_username, avatar_url } =
      this.state.userInfo;
    return (
      <div className="user-card">
        <img src={avatar_url} />
        <div>
          LoggedInUser
          <UserContext.Consumer>
            {(data) => console.log(data)}
          </UserContext.Consumer>
        </div>
        <h2>Name : {name} </h2>
        <h3>Location : {location}</h3>
        <h4>Contact : {twitter_username}</h4>
      </div>
    );
  }
}
export default UserClass;
