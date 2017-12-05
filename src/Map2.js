import React, {Component} from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import {PropsRoute} from 'react-router-with-props';



const { compose, withProps } = require("recompose");
const {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  FusionTablesLayer,
} = require("react-google-maps");

const Map2 = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)(props =>
  <GoogleMap
    defaultZoom={11}
    defaultCenter={{ lat: 41.850033, lng: -87.6500523 }}
  >
    <FusionTablesLayer
      url="http://googlemaps.github.io/js-v2-samples/ggeoxml/cta.kml"
      options={{
        query: {
          select: `Geocodable address`,
          from: `1mZ53Z70NsChnBMm-qEYmSDOvLXgrreLTkQUvvg`
        }
      }}
    />
  </GoogleMap>
);

<Map2 />
export default Map2