import React, {Component} from "react";



export default class ListItem extends Component {
    render() {
        return (<li className="listItem">
            {this.props.name}
        </li>)
    }
}