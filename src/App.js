import React, { Component } from "react";

class App extends Component {
  state = {
    persons: [
      { id: "asfa1", name: "Max", age: 28 },
      { id: "vasdf1", name: "Manu", age: 29 },
      { id: "asdf11", name: "Stephanie", age: 26 }
    ],
    otherState: "some other value",
    showPersons: false
  };
  render() {
    return (
      <div className="App">
        <h1>hello rahul </h1>
        <p>hello {this.state.otherState}</p>
      </div>
    );
  }
}
export default App;
