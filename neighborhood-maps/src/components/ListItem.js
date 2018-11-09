import React, {Component} from "react";



export default class ListItem extends Component {
    render() {
        const handleListItemClick = this.props.handleListItemClick;
        
        return (<li className="listItem" tabIndex="0" role="button" 
            onClick={() => handleListItemClick(this.props)}
            onKeyPress={() => handleListItemClick(this.props)}>

            {this.props.name}
        </li>)
    }
}