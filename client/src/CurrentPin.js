import React from 'react';
import { FaDotCircle } from 'react-icons/fa';

export default class CurrentPin extends React.Component {
  render() {
    return (
        <React.Fragment>
          <FaDotCircle className="pin red" />
          {this.props.loading && <div className="pulse red" />}
        </React.Fragment>
    );
  }
}