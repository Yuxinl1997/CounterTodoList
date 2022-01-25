import React from "react";
import "./styles.css";

const Counter = (props) => {
  const { AutoInc } = props;
  const generateButtonText = () => {
    if (AutoInc) {
      return "Stop";
    }
    return "Start";
  };

  return (
    <div>
      Current Count: {props.count}
      <div className="buttonRow">
        <button onClick={props.IncClickhandler}>+</button>
        <button onClick={props.DecClickhandler}>-</button>
      </div>
      <div className="buttonRow">
        <button onClick={props.OddClickhandler}>Increment if Odd</button>
        <button onClick={props.AsyncClickhandler}>Async Increment</button>
      </div>
      <div className="buttonRow">
        <button onClick={props.TimerClickhandler}>
          {generateButtonText()}
        </button>
      </div>
    </div>
  );
};

class CounterSet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      owner: "Cara",
      count: 0,
      AutoInc: false,
      intervalId: ""
    };
  }

  IncClickhandler = () => {
    this.setState({ count: this.state.count + 1 });
  };
  DecClickhandler = () => {
    this.setState({ count: this.state.count - 1 });
  };
  OddClickhandler = () => {
    if (this.state.count % 2 === 1) {
      this.setState({ count: this.state.count + 1 });
    }
    //const {count}
    //? 0:1
  };
  AsyncClickhandler = () => {
    setTimeout(() => {
      this.setState({ count: this.state.count + 1 });
    }, 1000);
  };
  TimerClickhandler = () => {
    this.setState({ AutoInc: !this.state.AutoInc });
    if (!this.state.AutoInc) {
      const intervalId = setInterval(() => {
        this.setState({ count: this.state.count + 1 });
      }, 1000);
      this.setState({ intervalId: intervalId });
    } else {
      clearInterval(this.state.intervalId);
    }
  };
  //根据生命周期 需要终结 否则浪费资源

  render() {
    return (
      <div className="App">
        <Title owner={this.state.owner} />
        <Counter
          count={this.state.count}
          IncClickhandler={this.IncClickhandler}
          DecClickhandler={this.DecClickhandler}
          OddClickhandler={this.OddClickhandler}
          AsyncClickhandler={this.AsyncClickhandler}
          TimerClickhandler={this.TimerClickhandler}
          AutoInc={this.state.AutoInc}
        />
      </div>
    );
  }
}

function Title(props) {
  return <div>{props.owner}'s Counter</div>;
}

export default CounterSet;
