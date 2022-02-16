import React, { Component } from "react";
import NavBar from "./components/navbar";
import Counters from "./components/counters";
//import "./App.css";

class App extends Component {
  state = {
    counters: [
      //Counters component has its own local state which is compeletly invisible to other states.
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  //The const. is called once and is right place to initialize the property in this class

  constructor(props) {
    super(props);
    console.log("App - Constructor");
    //this.state = this.props.something;
  }

  componentDidMount() {
      console.log('App - Mounted');
  }

  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    //console.log(this.state.counters[0]);
    this.setState({ counters });
  };

  handelReset = () => {
    //Updating The State: To update state we need to add counterID param here
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  handelDelete = (counterId) => {
    //Updating The State: To update state we need to add counterID param here
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters });
  };

  render() {
      console.log('App - Rendered');
    return (
      <React.Fragment>
        <NavBar
          totalcounters={this.state.counters.filter((c) => c.value > 0).length}
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handelReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handelDelete}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
