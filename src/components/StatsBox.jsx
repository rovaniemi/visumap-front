import React, { Component } from 'react';
import { Col } from 'reactstrap';
import styles from './StatsBox.css'

class StatsBox extends Component {

    constructor(){
        super();
    }

    render() {
        return (
            <Col md="auto">
                <div className="statsBox col-centered">
                    <p className="statsBoxTitle">Astar</p>
                    <p className="statsBoxText">Nodes: 1203</p>
                    <p className="statsBoxText">Processing time: 12ms</p>
                    <p className="statsBoxText">Distance: 1203m</p>
                    <p className="statsBoxText">Shortest-path-nodes: 63</p>
                </div>
            </Col>
        );
    }
}

export default StatsBox;