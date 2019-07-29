import React from 'react';
import Web3 from 'web3';
import assist from 'bnc-assist';
import contract from 'truffle-contract';
import ConvertLib from './ConvertLib.json';
import Web3Contract from './web3-contract';
import logo from './logo.svg';
import './App.css';

const ConvertLibAddress = '0xa122d497fcf0cd1f4c1c0f4138b3d86e73a7d3d5';

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

    const web3Contract = new web3.eth.Contract(
      Web3Contract.abi,
      Web3Contract.address
    );

    let truffleContract = contract(ConvertLib);
    truffleContract.setProvider(web3.currentProvider);
    truffleContract = await truffleContract.at(ConvertLibAddress);

    const web3Decorated = assistInstance.Contract(web3Contract);
    const truffleDecorated = assistInstance.Contract(truffleContract);

    this.setState({ web3Decorated, truffleDecorated });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <button
            onClick={() =>
              this.state.web3Decorated.methods
                .highFive('0x6921144ad2a2923ae11c5652feb3b0d9053d9152')
                .send({ from: window.ethereum.selectedAddress })
            }
          >
            High five web3
          </button>
          <button
            onClick={() =>
              this.state.truffleDecorated.convert.call(5, 5).then(res => {
                alert(res.toString());
              })
            }
          >
            Convert truffle
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
