import UserClass from "./UserClass";
import User from "./User"
import React from "react";
class About extends React.Component {
  constructor(props){
    super(props);
    // console.log("parent constructor")
  }
  componentDidMount(){
    // console.log("Component mounted parent is called");
  }
  render(){
    // console.log("parent render");
    return (
      
      <div>
      <h1>About class Component</h1>
      <h2>This is namaste React web series</h2>
      <UserClass name={"Mohit Sharma (class)"} location={"Dehradun class"}/>
    </div>
    );
  }
}
// const About = () => {
//   return (
//     <div>
//       <h1>About</h1>
//       <h2>This is namaste React web series</h2>
//       <UserClass name={"Mohit Sharma (class)"} location={"Dehradun class"}/>
//     </div>
//   );
// };
export default About;
