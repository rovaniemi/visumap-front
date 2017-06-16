import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import mapStyles from './googleMap.json';
import styles from'./Map.css';
import PropTypes from 'prop-types';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Map extends Component {

  constructor(){
    super();
      console.log(styles);
      this.mapStyles = mapStyles;
  }

  render() {
    return (
      <GoogleMapReact
        defaultCenter={this.props.center}
        defaultZoom={this.props.zoom}
        options={{styles: this.mapStyles, disableDefaultUI: false}}
      >
        <AnyReactComponent
          lat={59.005413}
          lng={30.337844}
          text={''}
        />
      </GoogleMapReact>
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