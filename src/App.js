import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import "materialize-css/dist/css/materialize.min.css";
import Navbar from "./Components/Navbar";
import SignUp from "./Components/Screens/SignUp";
import SignIn from "./Components/Screens/SignIn";
import User from "./User";
import Animal from "./Animal";

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
    AnimalData: [
      {
        name: " horse",
        type: " arabian",
        breed: "semi",
        color: "pearl white",
      },
      {
        name: " Cats",
        type: " persian",
        breed: " semi",
        color: "pearl white",
      },
      {
        name: " dog",
        type: " farm",
        breed: "bull",
        color: "white",
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

    const Routing = () => {
      return (
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/">
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
            </Route>

            <Route path="/animals">
              <Animal
                name={this.state.AnimalData[0].name}
                type={this.state.AnimalData[0].type}
                breed={this.state.AnimalData[0].breed}
                color={this.state.AnimalData[0].color}
              />

              <Animal
                name={this.state.AnimalData[1].name}
                type={this.state.AnimalData[1].type}
                breed={this.state.AnimalData[1].breed}
                color={this.state.AnimalData[1].color}
              />
              <Animal
                name={this.state.AnimalData[2].name}
                type={this.state.AnimalData[2].type}
                breed={this.state.AnimalData[2].breed}
                color={this.state.AnimalData[2].color}
              />
            </Route>

            <Route path="/register">
              <SignUp />
            </Route>

            <Route path="/SignIn">
              <SignIn />
            </Route>
          </Switch>
        </Router>
      );
    };

    return (
      <div className="App">
        <Routing />
      </div>
    );
  }
}

export default App;
