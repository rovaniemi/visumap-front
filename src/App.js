import React, { Component } from 'react';
import { Row, Col, Container} from 'reactstrap';
import Map from './components/Map.js'
import StatsBox from './components/StatsBox.js'
import Menu from './components/Menu.js'

class App extends Component {
  
  constructor(){
    super();
    this.state = {post: {algorithm:"", sLat:60.162059, sLon:24.945831, gLat:0, gLon:0, city:""}, center:{lat:60.162059, lng:24.945831}}
    
    this.handleMenuUpdate = this.handleMenuUpdate.bind(this);
  }

  handleMenuUpdate(menuValue) {
    console.log(this.state.center)
    var center = {lat: menuValue.sLat, lng: menuValue.sLon}
    this.setState({
      post: menuValue,
      center: center
    });
  }

  render() {
    return (
      <Row>
        <Col md="3" className="menuCol">
          <Menu updateMenu={this.handleMenuUpdate}></Menu>
        </Col>
        <Col md="9" className="msCol">
          <Row className="mapRow">
            <Col md="12" className="msCol">
              <Map center={this.state.center}></Map>
            </Col>
          </Row>
          <Row className="statsBoxRow">
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
