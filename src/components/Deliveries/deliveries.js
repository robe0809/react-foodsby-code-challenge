import React, { Component } from 'react';
import Dropoffs from '../Dropoffs/dropoffs'

class Deliveries extends Component {
  render() {
    let foodsbyDeliveries = this.props.dropoffs.map(items => <Dropoffs key={items.day} dropoffs={items} />);
    console.log('deliveries', foodsbyDeliveries);
    
    return (
      <div className="deliveries">
        <header className="App-header">
          <h1 className="App-title">Delivery Schedule</h1>
        </header>
        <div>
        {foodsbyDeliveries}
        </div>
      </div>
    );
  }
}

export default Deliveries;