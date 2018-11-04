import React, {Component} from "react";
import VenueList from "./VenueList";



export default class Sidebar extends Component {
    render() {
        return (<div className="sidebar">
            <input type={"search"} id={"search"} placeholder={"Filter Venues"} />
            <VenueList {...this.props} handleListItemClick={this.props.handleListItemClick}/>
        </div>)
    }
}