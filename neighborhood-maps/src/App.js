import React, { Component } from 'react';
import './App.css';
import Map from './components/Map.js';
import FourSquareAPI from './api/';
import Sidebar from './components/Sidebar';
import NavBar from './components/NavBar';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      venues: [],
      markers: [],
      updateSuperState: obj => {
        this.setState(obj);
      }
    };
  }

 /*} toggleSideBar = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
*/
  
  //function to close any open marker before opening a new one
  closeAllMarkers = () => {
    const markers = this.state.markers.map(marker => {
      marker.isOpen = false;
      marker.clickedOnMarker = false;
      return marker;
    });
    //resets the state of markers
    this.setState({markers:Object.assign(markers, markers)})
  }

  // Opens InfoWindow when marker is clicked
  handleMarkerClick = (marker) =>  {
    this.closeAllMarkers();
    marker.isOpen = true; 
    this.setState({markers: Object.assign(this.state.markers, marker)});
    const venue = this.state.venues.find(venue => venue.id === marker.id)
        
    FourSquareAPI.getVenueDetails(marker.id)
    .then(results => {
    const mergedVenueData = Object.assign(venue, results.response.venue);
    this.setState({venues: Object.assign(this.state.venues, mergedVenueData)})

    console.log(venue);
  })
  .catch(error => {
    this.setState({error})
    console.log(this.state.error)
  })
}

handleListItemClick = venue => {
  const marker = this.state.markers.find(marker => marker.id === venue.id);
  this.handleMarkerClick(marker);
};

  componentDidMount() { 
    FourSquareAPI.search({
      near:"Chicago, IL",
      query: "museum", // museums
      limit: 50
    })


    .then(results => {

      const { venues } = results.response;
      const markers = venues.map(venue => {
        return {
          lat: venue.location.lat,
          lng: venue.location.lng,
          title: venue.name,
          isOpen: false,
          isVisible: true,
          id: venue.id
        }
      })
      this.setState( { venues, markers } );
      console.log(results);
    })

    /* Alert code from Tyler Stahl*/
    .catch(error => {
      window.alert('Error getting data from Foursquare: '+error.message);
      console.log(error);
    })
  };
  
  render() {
    return (
      <div className="App">
      <NavBar {...this.state} handleListItemClick={this.handleListItemClick}/>
      <Sidebar {...this.state} handleListItemClick={this.handleListItemClick}/>
      <Map {...this.state}
        handleMarkerClick = {this.handleMarkerClick} />
      </div>
    );
  }
}

export default App;