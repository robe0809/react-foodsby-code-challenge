import React, { Component } from 'react';
import './App.css';
import Data from '../../deliveries-sample.json';
import DayButtons from '../DayButtons/dayButtons';
import Header from '../Header/header';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dropoffs: [],
      days: [],
    }

    this.getDeliveries = this.getDeliveries.bind(this);
  }

  componentWillMount() {
    this.setState({
      dropoffs: Data.dropoffs,
      days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
    })
  }

  getDeliveries (day) {
    const getDay = this.state.dropoffs.filter(today => day === today.day);
    this.setState({ getDay });
  }

  render() {

    return (
      <div>
        <div className="App">
          <Header/>
          <DayButtons todaysDeliveries={this.state.getDay} getDeliveries={this.getDeliveries} days={this.state.days} />
        </div>
      </div>
    );
  }
}

export default App;
