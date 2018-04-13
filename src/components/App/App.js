import React, { Component } from 'react';
import './App.css';
import Data from '../../deliveries-sample.json'
import Deliveries from '../Deliveries/deliveries'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dropoffs: [],
    }
  }

  
  componentWillMount() {
    this.setState({
      dropoffs: Data.dropoffs,
    })
  }
  
  render() {
    return (
      <div className="App">
        <Deliveries dropoffs={this.state.dropoffs}/>
      </div>
    );
  }
}

export default App;
