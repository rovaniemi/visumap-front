import React, { Component } from 'react';
import { Col } from 'reactstrap';
import styles from './StatsBox.css'

class StatsBox extends Component {

    constructor(){
        super();
    }

    render() {
        return (
            <Col md="4">
                <div className="statsBox" id="stepOne">
                    <p className="statsBoxTitle">Astar</p>
                    <p className="claimStepText">Get started by entering your claim information in the fields below.</p>
                </div>
            </Col>
        );
    }
}

export default StatsBox;