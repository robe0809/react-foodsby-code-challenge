import React, { Component } from 'react';
import Restaurants from '../Restaurants/restaurants';

class Dropoffs extends Component {
  render() {
    let DeliveryInfo = this.props.dropoffs.deliveries.map(deliveries => <Restaurants key={deliveries.deliveryId} deliveries={deliveries}/>);

    console.log('info', DeliveryInfo);
    
    return (
      <div className="deliveries">
        <button key={this.props.dropoffs.day}>{this.props.dropoffs.day}</button>
        {DeliveryInfo}
      </div>
    );
  }
}

export default Dropoffs;