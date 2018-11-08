import React, {Component} from "react";
import VenueList from "./VenueList";



export default class Sidebar extends Component {
constructor() {
    super();
    this.state = {
        query: "",
        venues: [],
    };
}

    searchVenues = () => { 
        if (this.state.query.trim() !== "") {
            const venues = this.props.venues.filter(venue => venue.name
                .toLowerCase()
                .includes(this.state.query.toLowerCase()))
            return venues;
        }
        return this.props.venues;
    };


    handleChange = event => {
        this.setState({ query: event.target.value});
        const markers = this.props.venues.map(venue => {
        const isMatched = venue.name.toLowerCase().includes(event.target.value.toLowerCase());
        const marker = this.props.markers.find(marker => marker.id === venue.id);
        if(isMatched) {
            marker.isVisible = true;
        }else{
            marker.isVisible = false;
        }
        return marker; 
    });
        const allMarkers = this.props.markers;
        this.props.updateSuperState({markers: Object.assign(allMarkers, markers)})
    };       


    render() {
        return (<div className="sidebar">
            <input type={"search"} id={"search"} placeholder={"Filter Venues"} onChange={this.handleChange} />


            <VenueList {...this.props} 
                venues={this.searchVenues()}
                handleListItemClick={this.props.handleListItemClick}/>
            <div className="attribution">Mapping info courtesy of Google, Venue info courtesy of FourSquare </div>
        </div>)
    }
}