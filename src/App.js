import React, { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 4
    }
  }
  isEven(val) {
    return val % 2 === 0 ? "Even" : "Odd"
  }
  getClassName(val) {
    return val % 2 === 0 ? "bg-primary text-white text-center p-2 m-1" : "bg-secondary text-white text-center p-2 m-1"
  }
  handleClick = () =>  
    this.setState({count: this.state.count+1})
  render = () =>
    <h4 className={this.getClassName(this.state.count)}>
      <button className="btn btn-info m-2" onClick={this.handleClick}>Click me</button>
      Number of things: {this.isEven(this.state.count)}
    </h4>
}