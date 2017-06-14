import React, { Component } from 'react';
import { Row, Button } from 'react-bootstrap';
import StatsBox from './components/StatsBox.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React</h2>
          <Button></Button>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        < Row>
          <StatsBox></StatsBox>
          <StatsBox></StatsBox>
          <StatsBox></StatsBox>
        </Row>
      </div>
    );
  }
}

export default App;
