import React, { Component } from "react"

export class TodoCreator extends Component {
    constructor(props) {
        super(props);
        this.state = { newTextItem: "" }
    }
    updateNewText = (event) => {
        this.setState({ newTextItem: event.target.value })
    }
    createNewTodo = () => {
        this.props.callback(this.state.newTextItem)
    }
    render = () =>
        <div className="my-1">
            <input className="form-control" value={this.state.newTextItem} onChange={this.updateNewText}></input>
            <button className="btn btn-primary mt-1" onClick={this.createNewTodo}>
                Add
            </button>
        </div >
}