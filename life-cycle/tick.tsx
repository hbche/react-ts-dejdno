import React from 'react';

interface TickProps {
  time: Date;
}

interface TickState {
  time: Date;
}

export default class Tick extends React.Component<TickProps> {
  timerID: number;

  constructor(props: TickProps) {
    super(props);
    this.state = {
      time: props.time,
    };
  }

  updateTime = () => {
    this.setState({
      time: new Date(),
    });
  };

  // componentDidMount方法会在组件已经被渲染到DOM中后运行
  componentDidMount() {
    console.log('componentDidMount');
    this.timerID = setInterval(this.updateTime, 1000);
  }

  componentWillUnmount() {
    if (this.timerID) {
      clearInterval(this.timerID);
      console.log('componentWillUnmount');
    }
  }

  render() {
    return <div className="tick">{this.state.time.toLocaleTimeString()}</div>;
  }
}
