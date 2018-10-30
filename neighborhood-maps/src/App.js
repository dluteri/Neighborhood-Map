import React, { Component } from 'react';
import './App.css';
import Map from './components/Map.js';
import FourSquareAPI from './api/index.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      venues: [],
      markers: [],
    };
}

  componentWillMount() {
    FourSquareAPI.search({
      near:"Chicago, IL",
      category: "4bf58dd8d48988d181941735", // museums
      radius: 800, 
      Limit: 40
    }).then(results => {
      const [ venues ] = results.response;
      const markers = venues.map(venue => {
        return {
          lat: venue.location.lat,
          lng: venue.location.lng,
          isOpen: false,
          isVisible: true,
        }
      })
      this.setState([venues, markers]);
      console.log(results);
    });
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