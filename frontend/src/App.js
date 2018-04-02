import React, { Component } from 'react';
import logo from './images/haedine_logo.png';
import Grid from './SimpleGridComponent';
import './App.css';

class App extends Component {
  renderPosition(security, size) {
    return <Position security={security} size={size} />;
  }
  render() {
    return (
      <div>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Open Risk</h1>
          </header>
        </div>
        <Grid />
      </div>
    );
  }
}

// class TradeList extends Component {
//   renderTrade(trade) {
//     return (
//       <Trade security={trade.security} size={trade.size} />
//     );
//   }
//   render() {
//     return ('hello');
//   }
// }

// class Trade extends Component {
//   render() {
//     return (
//       <div className="trade">
//         {this.props.security} | {this.props.size}
//       </div>
//     );
//   }
// }



class Position extends Component {
  render() {
    return (
      <li>
        {this.props.security} | {this.props.size}
      </li>
    );
  }
}

export default App;
