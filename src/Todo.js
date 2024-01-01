import { Component } from "react";
import "./styles.css";

export class Todo extends Component {
  handleRemove = () => {
    this.props.remove(this.props.index);
  };

  render() {
    const {todo} = this.props;
    return (
      <div className="todo">
        <p>{todo.text}</p>
        <button onClick={this.handleRemove}>x</button>
      </div>
    );
  }
}
