import React, { Component } from "react";
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from "react-google-maps"

// Mounts Google Maps to project. 
const MyMapComponent = withScriptjs(withGoogleMap((props) =>
    <GoogleMap
        defaultZoom={10}
        defaultCenter={{ lat: 41.881832, lng: -87.623177 }}
    >
{/* shows the markers of results on map*/}
    {props.markers && 
        props.markers
            .filter(marker => marker.isVisible )
            .map((marker, idx) => {
        const venueInfo = props.venues.find(venue =>(venue.id ===marker.id))
    return(
        <Marker 
            key={idx} 
            position={{ lat: marker.lat, lng: marker.lng}} 
            onClick={() => props.handleMarkerClick(marker)}>
            {marker.isOpen && venueInfo.bestPhoto && (
            <InfoWindow>
                <React.Fragment>
                <p>{venueInfo.name}</p>
                <img src={`${venueInfo.bestPhoto.prefix}200x200${venueInfo.bestPhoto.suffix}`}alt="Venue Image"/>
                </React.Fragment>
            </InfoWindow>
            )}
        </Marker>
        )
    })}
    </GoogleMap>
))


export default class Map extends Component {
render() {
    return (<MyMapComponent
    {...this.props}
    isMarkerShown
    googleMapURL="https://maps.googleapis.com/maps/api/js?v=3&key=AIzaSyDswyf0u0pPovvQ3md6sY6hQEarYc3z7cE"
    loadingElement={<div style={{ height: `100%` }} />}
    containerElement={<div style={{ height: `400px` }} />}
    mapElement={<div style={{ height: `100%` }} />}
/>);
}
}