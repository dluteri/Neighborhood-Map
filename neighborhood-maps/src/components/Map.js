import React, { Component } from "react";
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

// Mounts Google Maps to project. 
const MyMapComponent = withScriptjs(withGoogleMap((props) =>
    <GoogleMap
        defaultZoom={10}
        zoom={props.zoom}
        defaultCenter={{ lat: 41.881832, lng: -87.623177 }}
        center={props.center}
    >
{/* shows the markers of results on map*/}
    {props.markers && 
        props.markers
            .filter(marker => marker.isVisible )
            .map((marker, idx) => (
        <Marker key={idx} position={{ lat: marker.lat, lng: marker.long}} />
    ))}
    </GoogleMap>
))
    

export default class Map extends Component {
render() {
    return <MyMapComponent
    {...this.props}
    isMarkerShown
    googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&keyAIzaSyDswyf0u0pPovvQ3md6sY6hQEarYc3z7cE"
    loadingElement={<div style={{ height: `100%` }} />}
    containerElement={<div style={{ height: `400px` }} />}
    mapElement={<div style={{ height: `100%` }} />}
/>
}
}