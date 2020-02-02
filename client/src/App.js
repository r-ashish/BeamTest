import React from 'react';
import GoogleMapReact from 'google-map-react';
import ScooterPin from './ScooterPin';
import './App.css';

class App extends React.Component {
  static defaultProps = {
    center: {
      lat: 1.36,
      lng: 103.82
    },
    zoom: 12
  };

  constructor(props) {
    super(props);
    this.state = {
      scooters: []
    }
    this.loadScooters();
  }

  loadScooters() {
    fetch('http://localhost:3000/api/scooters?lat=1.36&lng=103.82&count=1000&radius=5')
    .then(response => response.json())
    .then(response => this.setState({scooters: response}));
  }

  render() {
    return (
      <div className="App">
        <div style={{ height: '100vh', width: '100%' }}>
          <GoogleMapReact 
            bootstrapURLKeys={{ key: 'AIzaSyBZ-W0xk6vyjkOa_gipMO5BjvcCyMqw-l4' }}
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
          >
            {this.state.scooters.map(scooter => {
              return <ScooterPin lat={scooter.lat} lng={scooter.lng} />
            })}
          </GoogleMapReact>
        </div>
      </div>
    );
  }
}

export default App;
