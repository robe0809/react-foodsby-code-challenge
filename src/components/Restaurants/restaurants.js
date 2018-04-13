import React, { Component } from 'react';
import RestaurantOptions from '../RestaurantOptions/restaurantOptions'

class Restaurants extends Component {
    render() {
        return (
        <div className="deliveries">
            {this.props.deliveryInfo.restaurantName}
            <RestaurantOptions key={this.props.deliveryInfo.deliveryId} deliveryInfo={this.props.deliveryInfo}/>
        </div>
        );
    }
}

export default Restaurants;