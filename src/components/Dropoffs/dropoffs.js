import React, { Component } from 'react';
import Restaurants from '../Restaurants/restaurants';

class Dropoffs extends Component {
  render() {
    
    let DeliveryInfo = this.props.dropoffs.deliveries.map(deliveries => 
    <Restaurants key={deliveries.deliveryId} deliveryInfo={deliveries}/>);

    console.log('info', DeliveryInfo);

    return (
      <div key={this.props.dropoffs.day} className="dropoffs">
        <button>{this.props.dropoffs.day}</button>
        {DeliveryInfo}    
      </div>
    );
  }
}

export default Dropoffs;