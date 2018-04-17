import React, { Component } from 'react';
import { CardText } from 'reactstrap';

class RestaurantInfo extends Component {
    render() {
        const {info} = this.props;
        const soldOut = info.soldOut === true ? 
            (
            <div>
                <CardText ><strong>Sold Out</strong></CardText>
                <CardText >This restaurant has hit maximum order capacity which is established to ensure quality</CardText>
            </div> 
            )
            : 
            (
            <div>
                <CardText >Delivery Time: {info.dropoff}</CardText>
                <CardText >Order By: {info.cutoff}</CardText>
            </div>
            );
            
        const sellingOut = info.sellingOut === true && info.soldOut !== true ? <CardText><strong>Hurry only 5 meals left!</strong></CardText> : null;

        return (
            <div className="CardText">
                {soldOut}
                {sellingOut}
            </div>
        );
        
    }
}

export default RestaurantInfo;