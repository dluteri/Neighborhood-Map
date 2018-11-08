/* global google */

import React, { Component } from "react";
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from "react-google-maps"

// Mounts Google Maps to project. 
const MyMapComponent = withScriptjs(withGoogleMap((props) =>
    <GoogleMap
        defaultZoom={12}
        defaultCenter={{ lat: 41.881832, lng: -87.65 }}
    >
{/* shows the markers of results on map*/}
    {props.markers && 
        props.markers
            .filter(marker => marker.isVisible )
            .map((marker, idx) => {
        const venueInfo = props.venues.find(venue =>(venue.id === marker.id))
    return(
        <Marker 
            key={idx} 
            position={{ lat: marker.lat, lng: marker.lng}} 
            onClick={() => props.handleMarkerClick(marker)}
            animation={marker.isOpen ? google.maps.Animation.DROP : null}
            >


            {/* TODO: Add error image if no data/image is available */}
            {marker.isOpen && venueInfo.bestPhoto && ( 
                
            <InfoWindow>
                <React.Fragment>
                <div className="info-window">
                <h4>{venueInfo.name}</h4>
                <p>{venueInfo.location.formattedAddress[0]}</p>
                <p>{venueInfo.location.formattedAddress[1]}</p>
                <img src={`${venueInfo.bestPhoto.prefix}200x200${venueInfo.bestPhoto.suffix}`}
                    alt={`${venueInfo.name}`} />
                <br></br>
                <a href="${venueInfo.contact.formattedPhone}" className="phone">Call: {venueInfo.contact.formattedPhone}</a>
                <br></br>
                <a href="${venueInfo.url}" className="website">Website: {venueInfo.Url}</a>
                <br></br>
                <a href="${venueInfo.url}" className="fourSquare">FourSquare Info: {venueInfo.shortUrl}</a>
                </div>
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
    containerElement={<div style={{ height: `100%`, width: `100%` }} />} 
    mapElement={<div style={{ height: `94%`, marginTop: `3em` }} />}
/>);
}
}