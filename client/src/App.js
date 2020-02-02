import React from 'react';
import GoogleMapReact from 'google-map-react';
import ScooterPin from './ScooterPin';
import CurrentPin from './CurrentPin';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scooters: [],
      center: {
        lat: 1.36,
        lng: 103.82
      },
      zoom: 12
    }
    this.loadScooters();
  }

  loadScooters() {
    fetch('http://localhost:3000/api/scooters?lat=1.36&lng=103.82&count=100&radius=20')
    .then(response => response.json())
    .then(response => this.setState({scooters: response}));
  }

  updateCenter = (lat, lng) => {
    this.setState({center: {lat, lng}});
  }

  render() {
    return (
      <div className="App" style={{display: 'flex'}}>
        <div style={{height: '100vh', width: '25%', boxShadow: '9px 0px 9px 0px rgba(0,0,0,0.2)', zIndex: 99}}></div>
        <div style={{ height: '100vh', flex: 1 }}>
          <GoogleMapReact
            onClick={(o) => this.updateCenter(o.lat, o.lng)}
            bootstrapURLKeys={{ key: 'AIzaSyBZ-W0xk6vyjkOa_gipMO5BjvcCyMqw-l4' }}
            center={this.state.center}
            defaultZoom={this.state.zoom}
          >
            <CurrentPin lat={this.state.center.lat} lng={this.state.center.lng} />
            {this.state.scooters.map(scooter => {
              return <ScooterPin key={scooter._id} lat={scooter.lat} lng={scooter.lng} />
            })}
          </GoogleMapReact>
        </div>
      </div>
    );
  }
}

export default App;
