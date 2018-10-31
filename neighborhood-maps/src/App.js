import React, { Component } from 'react';
import './App.css';
import Map from './components/Map.js';
import FourSquareAPI from './api/';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      venues: [],
      markers: [],
    };
}

  componentDidMount() { 
    FourSquareAPI.search({
      near:"Chicago, IL",
      query: "museum", // museums
      limit: 50
    })


    .then(results => {
/* when this is .then(), I get "Unhandled Rejection (TypeError): Cannot read property 'response' of undefined" error.
    object does return with data, though...
    when it is fetch(), error is gone, but map show blank and markers do not show. */


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
        <Map {...this.state}/>
      </div>
    );
  }
}

export default App;