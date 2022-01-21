import React from "react";
import "./styles.css";

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      inputValue: ""
    };
  }

  listHandler = () => {
    let result = this.state.items.map((item, index) => {
      return (
        <div>
          <li key={index}>{item.value}</li>
          <button
            onClick={() => {
              this.deleteHandler(index);
            }}
          >
            Delete
          </button>
        </div>
      );
    });
    return result;
  };

  addHandler = () => {
    let newItemList = [];
    newItemList = newItemList.concat(this.state.items);
    newItemList.push({
      id: this.state.inputValue,
      value: this.state.inputValue
    });
    this.setState({ items: newItemList, inputValue: "" });
  };

  deleteHandler = (index) => {
    let newItemList = [];
    newItemList = newItemList.concat(this.state.items);
    newItemList.splice(index, 1);
    this.setState({ items: newItemList });
  };

  onchangeHandler = (event) => {
    this.setState({ inputValue: event.target.value });
  };

  render() {
    return (
      <div>
        <input
          value={this.state.inputValue}
          onChange={(event) => this.onchangeHandler(event)}
        />
        <button
          onClick={() => {
            this.addHandler();
          }}
        >
          Add
        </button>
        {this.listHandler()}
      </div>
    );
  }
}

export default TodoList;
