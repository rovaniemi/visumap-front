import React, { Component } from 'react';
import { Row, Col, Container } from 'reactstrap';
import Map from './components/Map.jsx'
import StatsBox from './components/StatsBox.jsx'
import Menu from './components/Menu.jsx'

class App extends Component {

    constructor() {
        super();
        this.state = { path: [{ lat: 60.162059, lng: 24.945831 }],center: { lat: 60.162059, lng: 24.945831 }, post: {algorithm: "astar", points: [0,0]}};
        this.handleMenuUpdate = this.handleMenuUpdate.bind(this);
    }

    handleMenuUpdate(menuValue) {
        this.apiCall(menuValue);
        this.setState({
            post: menuValue
        });
        var center = this.state.path[0]
        this.setState({
            center: center
        });
    }

    apiCall(post) {
        fetch('/0.1v/shortest/', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                algorithm: post.algorithm,
                points: post.points
            })
        }).then(response => response.json()).then(json => this.setState({ 
            path: json.shortestPath,
            circlepath: json.everyNode
        }));
    }

    render() {
        return ( 
        <Row>
            <Col md = "3" className = "menuCol">
                <Menu updateMenu = { this.handleMenuUpdate }> 
                </Menu> 
            </Col> 
            <Col md = "9" className = "msCol">
                <Row className = "mapRow">
                    <Col md = "12" className = "msCol">
                        <Map center = {this.state.center}
                             path = {this.state.path}
                             circlepath = {this.state.circlepath}> 
                        </Map> 
                    </Col>   
                </Row> 
                <Row className = "statsBoxRow">
                    <StatsBox></StatsBox> 
                    <StatsBox></StatsBox> 
                    <StatsBox></StatsBox> 
                    <StatsBox></StatsBox> 
                </Row> 
            </Col> 
        </Row>
        );
    }
}

export default App;