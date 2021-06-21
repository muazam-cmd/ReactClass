import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import User from "./User";

class App extends Component {
  state = {
    UserData: [
      {
        name: "Muazam Shahid",
        age: "29",
      },
      {
        name: "Abdullah Mujahid",
        age: "22",
      },
      {
        name: "Tooba Shahzad",
        age: "45",
      },
    ],
  };
  render() {
    const updateText = () => {
      console.log("Abdullah");
      this.setState({
        name: (this.state.UserData[0].name = "Abdullah"),
        age: (this.state.UserData[0].age = "42"),
      });
    };

    return (
      <div className="App">
        <button onClick={updateText}>Press Me</button>
        <User
          name={this.state.UserData[0].name}
          age={this.state.UserData[0].age}
        />
        <User
          name={this.state.UserData[1].name}
          age={this.state.UserData[1].age}
        />
        <User
          name={this.state.UserData[2].name}
          age={this.state.UserData[2].age}
        />
      </div>
    );
  }
}

export default App;
