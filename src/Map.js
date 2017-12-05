import React, {Component} from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import {PropsRoute} from 'react-router-with-props';
import MarkerWithLabel from "react-google-maps/lib/components/addons/MarkerWithLabel";

// const FaAnchor = require("react-icons/lib/fa/anchor");
import fetch from "isomorphic-fetch";
import {compose, withProps, withHandlers, withStateHandlers} from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow,
}  from "react-google-maps";
import { MarkerClusterer }  from "react-google-maps/lib/components/addons/MarkerClusterer";

const MapWithAMarkerClusterer = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyCYR42pzWb502pheEn641NNPdQz9whhezU&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div className="bigMap" />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withHandlers({
    onMarkerClustererClick: () => (markerClusterer) => {
      const clickedMarkers = markerClusterer.getMarkers()
      console.log(`Current clicked markers length: ${clickedMarkers.length}`)
      console.log(clickedMarkers)
    },
  }),
  withScriptjs,
  withGoogleMap
)(props =>
  <GoogleMap
    defaultZoom={6}
    defaultCenter={{ lat: 39.7392, lng: -104.9903 }}
  >
    <MarkerClusterer
      onClick={props.onMarkerClustererClick}
      averageCenter
      enableRetinaIcons
      gridSize={60}
    >
      {props.markers.map(marker => (
        <Marker
          key={marker.photo_id}
          position={{ lat: marker.latitude, lng: marker.longitude }}
          onClick={ () => console.log(marker)}>
          {props.isOpen && <InfoWindow onCloseClick={props.onToggleOpen}>
          <p>test</p>
        </InfoWindow>}
        </Marker>
      ))}
    </MarkerClusterer>
  </GoogleMap>
);

export default class Map extends React.PureComponent {
  componentWillMount() {
    this.setState({ markers: [] })
  }

  componentDidMount() {
    const url = [
      // Length issue
      `https://gist.githubusercontent.com`,
      `/farrrr/dfda7dd7fccfec5474d3`,
      `/raw/758852bbc1979f6c4522ab4e92d1c92cba8fb0dc/data.json`
    ].join("")

    fetch(url)
      .then(res => res.json())
      .then(data => {
        this.setState({ markers: data.photos });
      });
  }

  render() {
    return (
      <MapWithAMarkerClusterer markers={this.state.markers} />
    )
  }
}

<Map />