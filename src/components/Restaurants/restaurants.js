import React, { Component } from 'react';
import RestaurantOptions from '../RestaurantOptions/restaurantOptions'

class Restaurants extends Component {
    render() {
        return (
        <div className="deliveries">
            {this.props.deliveries.restaurantName}
            <RestaurantOptions key={this.props.deliveries.deliveryId} deliveries={this.props.deliveries}/>
        </div>
        );
    }
}

export default Restaurants;