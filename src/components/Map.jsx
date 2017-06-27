import React, { Component } from 'react';

import { withGoogleMap, GoogleMap, Marker, GoogleMapLoader, Polyline, Polygon} from "react-google-maps";
import mapStyles from './googleMap.json';
import styles from'./Map.css';
import PropTypes from 'prop-types';

const GoogleMapRender = withGoogleMap(props => (
  <GoogleMap
    ref={props.onMapLoad}
    defaultZoom={13}
    center={props.center}
    options={{styles: mapStyles, disableDefaultUI: false, streetViewControl: false}}
  >
    <Polygon options = {{ strokeOpacity: 0.0, fillColor: '#FF0000', fillOpacity: 0.35}} path={props.circlepath}/>
    <Polyline options = {{strokeColor: '#2e10ff', geodesic: true }} path={props.path}/>
  </GoogleMap>
));

class Map extends Component {

  constructor(){
    super();
    this.mapStyles = mapStyles;
  }

  render() {
    return (
        <GoogleMapRender
          containerElement={
          <div style={{ height: `100%` }} />
          }
          center = {this.props.center}
          path = {this.props.path}
          circlepath = {this.props.circlepath}
          mapElement={
            <div style={{ height: `100%` }} />
          }
      />
    );
  }
}


Map.propTypes = {
  center: PropTypes.object,
  zoom: PropTypes.number,
  styles: PropTypes.array
}

Map.defaultProps={
    center: {lat: 60.162059, lng: 24.945831},
    zoom: 13,
    circlepath: []
}

export default Map;