import { Component } from "react";
import UserClass from "./UserClass";

class About extends Component {
  constructor(props) {
    super(props);
    // console.log("Parent Constructor");
    this.state = {
      userInfo: {
        login: "Dummy",
        avatar_url: "Dummy_URL",
      },
    };
  }

  async componentDidMount() {
    // console.log("Parent Did Mount");
    const data = await fetch("https://api.github.com/users/Srujangupta06");
    const jsonData = await data.json();
    const { login, avatar_url } = jsonData;
    this.setState({
      userInfo: {
        login,
        avatar_url,
      },
    });
  }
  componentWillUnmount(){
    console.log('Component got removed')
  }
  render() {
    // console.log("Parent Render");
    const { userInfo } = this.state;
    return (
      <div className="flex flex-col items-center">
        <h3 className="font-semibold text-xl mb-16 mt-8">About Us Page</h3>
        <UserClass userInfo={userInfo} />
      </div>
    );
  }
}
export default About;
