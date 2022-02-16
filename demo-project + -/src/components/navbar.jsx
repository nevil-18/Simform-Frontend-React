//mport React, { Component } from "react";

/*Stateless Functional Component so when using this we need to pass props as arguments
short sfc, Refrencing this.props only works in "Class Component", 
And add props as parameters in function and react will pass props as an argument at runtime
*/
const NavBar = (props) => {
  console.log("NavBar - Rendered"); //Yoou can only use Lifecycle Hooks in Class Component

  return (
    <nav className="navbar navbar-light bg-light">
      <a className=" navbar-brand " href="w">
        NavBar
        <span className="badge rounded-pill bg-secondary">
          {props.totalCounters}
        </span>
      </a>
    </nav>
  );
};

export default NavBar;
