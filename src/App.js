import React, { Component } from 'react';
import { Row, Col, Container} from 'reactstrap';
import Map from './components/Map.js'
import StatsBox from './components/StatsBox.js'
import Menu from './components/Menu.js'

class App extends Component {
  render() {
    return (
      <Row>
        <Col md="3" className="menuCol">
          <Menu></Menu>
        </Col>
        <Col md="9" className="msCol">
          <Row className="mapRow">
            <Col md="12" className="msCol">
              <Map></Map>
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
