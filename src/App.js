import React, { Component } from 'react';
import { Row, Button } from 'react-bootstrap';
import StatsBox from './components/StatsBox.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <p></p>
        </div>
        <div className="statsBoxes">
          < Row>
            <StatsBox></StatsBox>
            <StatsBox></StatsBox>
            <StatsBox></StatsBox>
            <StatsBox></StatsBox>
          </Row>
        </div>
      </div>
    );
  }
}

export default App;
