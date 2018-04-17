import React, { Component } from 'react';
import DeliveryInfo from '../DeliveryInfo/deliveryInfo';

class DayButtons extends Component {
    constructor(props) {
        super(props);
        this.state={
            isClicked: false,
        };
        this.getDeliveries = this.getDeliveries.bind(this);
    }

    getDeliveries(e) {
        const day = e.target.value;
        const {getDeliveries} = this.props;
        getDeliveries(day);
        this.setState({ isClicked: true });
    }

    render() {
        const days = this.props.days.map(today => 
        <button className="btn btn-raised dayBtn" key={today} onClick={this.getDeliveries} value={today}>{today}</button>)
        return (
            <div>
                <div>
                    {days}
                </div>

                {
                    this.state.isClicked ?

                    <div>
                        <DeliveryInfo todaysDeliveries={this.props.todaysDeliveries}/>
                    </div>

                    : (null)
                }

            </div>
        );
        
    }
}

export default DayButtons;