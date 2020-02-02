import React from 'react';

export default class ConfigController extends React.Component {

    render() {
        return (
            <React.Fragment>
                <h3>Search Scooters in Singapore</h3>
                <br></br>
                <div>
                    <span>Latitude: <strong>{this.props.lat}</strong></span>
                    <br></br>
                    <span>Longitude: <strong>{this.props.lng}</strong></span>
                </div>
                <p><small>(Click on the map to change the coordinates)</small></p>
                <label htmlFor="count"><small>No. of scooters to display</small></label>
                <input
                    id="count"
                    value={this.props.count}
                    onChange={(e) => this.props.onChange({count: e.target.value})}
                    placeholder="No. of scooters to display"></input>
                <label htmlFor="radius"><small>Search radius (km)</small></label>
                <input
                    id="radius"
                    value={this.props.radius}
                    onChange={(e) => this.props.onChange({radius: e.target.value})}
                    placeholder="Search radius (km)"></input>
                <label htmlFor="delay"><small>Delay in API response (ms)</small></label>
                <input
                    id="delay"
                    value={this.props.delay}
                    onChange={(e) => this.props.onChange({delayTime: parseInt(e.target.value)})}
                    placeholder="Delay in API response (ms)"></input>
            </React.Fragment>
        );
    }
}