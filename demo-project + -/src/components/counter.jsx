import React, { Component } from "react";
//First React Component
class Counter extends Component {
  /* state = {
    value: this.props.counter.value,
    In counter Componet, remove local state only relies on props to receive data that this component needs
      This type of component is refered as "Controlled Component"
  }; */

  /*constructor() {
    //  super();
      //this.handleIncrement = this.handleIncrement.bind(this);
      //Binded event handlers to "this"
  */

  /*Handling Event
  handleIncrement = () => {
    this.setState({ value: this.state.value + 1 });
    Binding Event Handlers in constructor ,Adding Arrow function is easier and we don't need to write custom 
    constructor and bind every event handler manually
  }; */

  componentDidUpdate(prevProps, prevState) {
    console.log("prevProps", prevProps);
    console.log("prevState", prevState);
    /*if (prevProps.count.value !== this.props.counter.value) {
       Ajax call and get new data from the server
    } */
  }

  componentWillUnmount() {
    console.log('Counter - Unmount');
  }

  render() {
    return (
      <div>
        {this.props.children}
        <span className={this.getbadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className=" btn btn-secondary btn-sm m-1"
        >
          Increment{" "}
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn0-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }
  //Rendering Classes Dynamically, Rendering List
  getbadgeClasses() {
    let classes = " badge bg-primary m-3-";
    classes += this.props.counter === 0 ? "warning" : "primary";
    return classes;
  }
  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
