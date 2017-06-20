import React, { Component } from 'react';

import { withGoogleMap, GoogleMap, Marker, GoogleMapLoader, Polyline} from "react-google-maps";
import mapStyles from './googleMap.json';
import styles from'./Map.css';
import PropTypes from 'prop-types';

const GettingStartedGoogleMap = withGoogleMap(props => (
  <GoogleMap
    ref={props.onMapLoad}
    defaultZoom={13}
    center={props.center}
    options={{styles: mapStyles, disableDefaultUI: false, streetViewControl: false}}
  >
  <Polyline options={{strokeColor: '#2e10ff', geodesic: true }} path={props.path} />
  </GoogleMap>
));

class Map extends Component {

  constructor(){
    super();
    this.mapStyles = mapStyles;
  }

  render() {
    return (
        <GettingStartedGoogleMap
          containerElement={
          <div style={{ height: `100%` }} />
          }
          center = {this.props.center}
          path = {this.props.path}
          mapElement={
            <div style={{ height: `100%` }} />
          }
      />
    );
  }
}


Map.propTypes = {
  // You can declare that a prop is a specific JS primitive. By default, these
  // are all optional.
  center: PropTypes.object,
  zoom: PropTypes.number,
  styles: PropTypes.array
}

Map.defaultProps={
    center: {lat: 60.162059, lng: 24.945831},
    zoom: 13,
}

export default Map;