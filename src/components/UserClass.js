import { Component } from "react";

class UserClass extends Component {
  constructor(props) {
    super(props);
    // console.log("Child Constructor");
  }
  componentDidMount() {
    // console.log("Child Did Mount");
  }
  componentDidUpdate() {
    console.log("Component Did Update");
  }
  render() {
    const { login, avatar_url } = this.props.userInfo;
    // console.log(this.props.userInfo);

    return (
      <div className="border-2 w-72 flex px-4 py-2 justify-evenly rounded-lg">
        <img
          src={avatar_url}
          className="w-[100px] h-[100px] rounded-full"
        />
        <div className="ml-2">
          <h2 className="text-xl font-semibold">{login}</h2>
          <p className="text-md">Full Stack Developer</p>
          <p className="text-sm">Nizamabad</p>
        </div>
      </div>
    );
  }
}

export default UserClass;
