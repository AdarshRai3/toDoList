import { Component } from "react";
import "./styles.css"
export class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listItem: ""
    };
  }

  handleChange = (e) => {
    this.setState({
      listItem: e.target.value
    });
  };

  handleSubmit = () => {
    this.props.add(this.state.listItem);
    this.setState({ listItem: "" });
  };

  render() {
    const {listItem} = this.state;
    return (
      <div className="form">
        <input
          onChange={this.handleChange}
          value={listItem}
          placeholder="Whats on your mind?"
          required
        />
        <button onClick={this.handleSubmit}>Add</button>
      </div>
    );
  }
}
