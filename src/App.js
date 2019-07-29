import React from 'react';
import Web3 from 'web3';
import assist from 'bnc-assist';
import { address, abi } from './contract-details';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  async componentDidMount() {
    const web3 = new Web3(window.ethereum);

    const bncAssistConfig = {
      dappId: '15273e72873dba2cd065',
      networkId: 4,
      web3
    };

    const assistInstance = assist.init(bncAssistConfig);

    await assistInstance.onboard();
    const contract = new web3.eth.Contract(abi, address);

    const decorated = assistInstance.Contract(contract);

    this.state = { decorated, web3 };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <button
            onClick={() =>
              this.state.decorated.methods
                .highFive('0x6921144ad2a2923ae11c5652feb3b0d9053d9152')
                .send({ from: window.ethereum.selectedAddress })
            }
          >
            High five
          </button>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
