import { Component } from "react";
import { Todo } from "./Todo";
import "./styles.css";

export class List extends Component {
  render() {
    const {remove, todos} = this.props;
    return (
      <div className="list">
        {todos.map((todo, index) => (
          <Todo key={index} index={index} todo={todo} remove={remove} />
        ))}
      </div>
    );
  }
}
