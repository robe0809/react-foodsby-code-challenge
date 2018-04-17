import React, { Component } from 'react';
import DayInfo from '../DayInfo/dayInfo'
import { Card } from 'reactstrap';

class DeliveryInfo extends Component {
    render() {
        const {todaysDeliveries} = this.props;
        // filters through deliveries array to take out sat and sunday objects. 
        const weekend = todaysDeliveries[0].deliveries.filter(info => !info.day);
        const standardCard = weekend.map(info => 
            <Card key={info.deliveryId} className="card" inverse>
                <DayInfo info={info}/>
            </Card>
            );
            
        return (
            <div>
                {standardCard}
            </div>
        );
        
    }
}

export default DeliveryInfo;