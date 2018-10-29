import React, { Component } from 'react';
import './App.css';
import Map from './components/Map.js';
import FourSquareAPI from './api/index.js';

class App extends Component {
  componentWillMount() {
    FourSquareAPI.search({
      near:"Chicago, IL",
      category: "4bf58dd8d48988d181941735", // museums
      radius: 800, 
      Limit: 40
    }).then(results => {
      console.log(results);
    });
  };
  
  render() {
    return (
      <div className="App">
        <Map />
      </div>
    );
  }
}

export default App;

// Code referenced from Forrest Walker's YouTube Tutorial - https://www.youtube.com/watch?v=Dj5hzKBxCBI&list=PL4rQq4MQP1crXuPtruu_eijgOUUXhcUCP&index=3
