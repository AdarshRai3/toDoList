import { Component } from "react";
import { List } from "./List";
import { Form } from "./Form";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { text: "Do the laundry" },
        { text: "Iron the clothes" },
        { text: "Go for a walk" }
      ]
    };
  }
 
  handleAdd = (text) => {
    this.setState(prevState => ({
      todos: [...prevState.todos, { text }]
    }));
  };
 
  handleRemove = (index) => {
    this.setState(prevState => {
      const todos = [...prevState.todos];
      todos.splice(index, 1);
      return { todos };
    });
  };
  
  render() {
    return (
     <div className="App">
       <span>Todo</span>
       <Form add={this.handleAdd} />
       <List remove={this.handleRemove} todos={this.state.todos} />
     </div>
    );
  }
}
