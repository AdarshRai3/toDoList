import { Component } from "react";
import "./styles.css";

export class Todo extends Component {
  render() {
    const {todo,remove} = this.props;
    return (
      <div className="todo">
        <p>{todo.text}</p>
        <button onClick={remove}>x</button>
      </div>
    );
  }
}
