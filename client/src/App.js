import React from 'react';
import GoogleMapReact from 'google-map-react';
import ConfigController from './ConfigController';
import ScooterPin from './ScooterPin';
import CurrentPin from './CurrentPin';
import './App.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scooters: [],
      center: {lat: 1.36,lng: 103.82},
      zoom: 12,
      loading: false,
      delayTime: 2200,
      count: 100,
      radius: 5
    }
  }

  componentDidMount() {
    this.loadScooters();
  }

  loadScooters() {
    const apiUrl = new URL('http://localhost:3000/api/scooters');
    const params = {
      lat: this.state.center.lat,
      lng: this.state.center.lng,
      count: this.state.count,
      radius: this.state.radius
    };
    apiUrl.search = new URLSearchParams(params).toString();

    this.setState({loading: true});

    // since localhost responds quickly
    // so adding some delay to simulate actual API calls (to show loading animations etc.)
    setTimeout(()=> {
      fetch(apiUrl)
      .then(response => response.json())
      .then(response => this.setState({scooters: response, loading: false}));
    }, this.state.delayTime);
  }

  updateCenter = (lat, lng) => {
    this.setState({center: {lat, lng}, scooters: []}, () => this.loadScooters());
  }

  onConfigChange = (config) => {
    this.setState({...config, scooters: []}, () => this.loadScooters());
  }

  render() {
    return (
      <div className="App">
        <div className="config-controller">
          <ConfigController
            lat={this.state.center.lat}
            lng={this.state.center.lng}
            count={this.state.count}
            radius={this.state.radius}
            delay={this.state.delayTime}
            onChange={this.onConfigChange} />
        </div>
        <div className="map-container">
          <GoogleMapReact
            onClick={(o) => this.updateCenter(o.lat, o.lng)}
            bootstrapURLKeys={{ key: 'AIzaSyBZ-W0xk6vyjkOa_gipMO5BjvcCyMqw-l4' }}
            center={this.state.center}
            defaultZoom={this.state.zoom}
          >
            <CurrentPin loading={this.state.loading} lat={this.state.center.lat} lng={this.state.center.lng} />
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
