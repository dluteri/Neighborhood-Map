import React, {Component} from "react";
import ListItem from './ListItem';

export default class VenueList extends Component {
    render() {
        const venues = this.props.venues;
        return (<ol className="VenueList" tabIndex="0" role="List" aria-label="list">
            {venues && 
                venues.map((venue, idx) => (
                    <ListItem key={idx} {...venue}  
            handleListItemClick={this.props.handleListItemClick}/> 
            ))}
        </ol>
        );
    }
}