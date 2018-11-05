import React, {Component} from "react";
import VenueList from "./VenueList";



export default class Sidebar extends Component {
constructor() {
    super();
    this.state = {
        query: ""
    };
}

    searchVenues = () => {}; 
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
        this.props.updateSuperState({markers: Object.assign(this.props.markers, markers)})
    };       


    render() {
        return (<div className="sidebar">
            <input type={"search"} id={"search"} placeholder={"Filter Venues"} onChange={this.handleChange} />


            <VenueList {...this.props} handleListItemClick={this.props.handleListItemClick}/>
        </div>)
    }
}