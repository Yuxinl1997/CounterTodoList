import { StrictMode } from "react";
import React from "react";
import ReactDOM from "react-dom";

import TodoList from "./TodoList.js";
import CounterSet from "./CounterSet";

const HOC = (Component) => {
  const WithVisible = ({ visible }) => {
    if (!visible) return null;
    return <Component />;
  };
  return WithVisible;
};

const HOCCounter = HOC(CounterSet);
const HOCTodoList = HOC(TodoList);

class ContentContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      encryptedCounter: false,
      encryptedTodoList: false
    };
  }

  render() {
    return (
      //add button to control visibility
      //ex: <button>display counter</button>
      <div>
        <button
          onClick={() => {
            this.setState({ encryptedCounter: !this.state.encryptedCounter });
          }}
        >
          show counter
        </button>
        <button
          onClick={() => {
            this.setState({ encryptedTodoList: !this.state.encryptedTodoList });
          }}
        >
          show TodoList
        </button>
        <HOCCounter visible={this.state.encryptedCounter} />
        <HOCTodoList visible={this.state.encryptedTodoList} />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <ContentContainer />
  </StrictMode>,
  rootElement
);
