import React, { Component } from 'react';

class NavBar extends Component {
    render() {
        const { menuKeyEnter, toggleSideBar, sidebarOpen } = this.props;
        return (
            <nav id="navbar">
                <h3 id="headerText">Chicago Museums</h3>
                <h3 tabIndex="0" className="menu-text" title={ "Open/Close Sidebar" }
                    onKeyPress={menuKeyEnter}>
                    
                    <i className="material-icons"
                    style={{
                        lineHeight: "inherit",
                        marginRight: "1rem",
                        marginTop: "1rem"
                    }}
                    onClick={() => toggleSideBar()}>
                    {sidebarOpen ? "clear" : "menu"}
                    </i>
                </h3>
            </nav>
        );
    }
}

export default NavBar;

// inspired by Ryan Waite's video walk-through https://www.youtube.com/watch?v=LvQe7xrUh7I&index=6&list=PLKC17wty6rS1XVZbRlWjYU0WVsIoJyO3s&t=0s