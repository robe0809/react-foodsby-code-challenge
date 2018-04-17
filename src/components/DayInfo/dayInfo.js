import React, { Component } from 'react';
import RestaurantInfo from '../RestaurantInfo/restaurantInfo'
import { CardTitle, CardImg } from 'reactstrap';

class DayInfo extends Component {
    render() {
        const {info} = this.props;
        // <div className="CardText">
        // <CardText >Delivery Time: {info.dropoff}</CardText>
        // <CardText >Order By: {info.cutoff}</CardText>
        // </div>
        return (
            <div>
                <CardTitle>{info.restaurantName}</CardTitle>
                <CardImg className="cardImg" height="200" width="200" src={info.logoUrl}/>
                <RestaurantInfo info={info} />
            </div>
        );
        
    }
}

export default DayInfo;