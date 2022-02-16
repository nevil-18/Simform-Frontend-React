import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    console.log('Counter - Rendered');
    const { onReset, counters, onDelete, onIncrement } = this.props;

    return (
      <div>
        <button
          onClick={onReset}
          className="btn btn-primary btn-sm m-2"
        >
          Reset
        </button>
        {counters.map((counter) => (
          <Counter
            key={counter.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
            counter={counter} // The Counter object is holding the all the data about the counters
          />
          //All this attributes we're setting here are part of props/ The input to the component
          //We cannot access the State bcoz it is local/internal to that component
        ))}
      </div>
    );
  }
}

export default Counters;
