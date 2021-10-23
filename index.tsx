import React, { Component } from 'react';
import { render } from 'react-dom';
import FilterableProductTable from './filterable-product-table/FilterableProductTable';
import Hello from './Hello';
import Tick from './life-cycle/tick';
import './style.css';

interface AppProps {}
interface AppState {
  name: string;
  isShowClick: boolean;
}

class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      name: 'React',
      isShowClick: true,
    };
  }

  render() {
    return (
      <div>
        <Hello name={this.state.name} />
        <p>Start editing to see some magic happen :)</p>

        {/* <FilterableProductTable /> */}
        <button
          onClick={() => {
            this.setState({ isShowClick: !this.state.isShowClick });
          }}
        >
          Tick Trigger
        </button>
        {this.state.isShowClick && <Tick time={new Date()} />}
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
