import React from 'react';
import { FaMotorcycle } from 'react-icons/fa';

export default class ScooterPin extends React.Component {
  render() {
    return (
      <div>
        <FaMotorcycle className="pin" />
        <div className="pulse" />
      </div>
    );
  }
}