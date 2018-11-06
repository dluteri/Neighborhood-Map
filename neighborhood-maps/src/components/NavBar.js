import React, { Component } from 'react';

class NavBar extends Component {
    render() {
        return (
            <nav id="navbar">
                <h3 id="headerText">Chicago Museums</h3>
                <h3 tabIndex="0" className="menu-text" title={ this.props.menuText + " Sidebar" }
                    onClick={() => { this.props.  toggleSideBar () 
                        this.setState(state => ({ sidebarOpen: !state.sidebarOpen }));
                    } }
                    onKeyPress={this.props.menuKeyEnter}>
                    {
                        this.props.sidebarOpen ?
                        <i className="material-icons" style={{lineHeight: "inherit"}}>clear</i> :
                        <i className="material-icons" style={{lineHeight: "inherit"}}>menu</i> 
                    }
                
                </h3>


            </nav>
        );
    }
}

export default NavBar;

// inspired by Ryan Waite's video walk-through https://www.youtube.com/watch?v=LvQe7xrUh7I&index=6&list=PLKC17wty6rS1XVZbRlWjYU0WVsIoJyO3s&t=0s