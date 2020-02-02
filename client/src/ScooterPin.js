import React from 'react';
import { FaMotorcycle } from 'react-icons/fa';

export default class ScooterPin extends React.Component {
  render() {
    return (
      <div>
        <FaMotorcycle style={
          {
            width: 15,
            height: 15,
            borderRadius: 10,
            transform: 'matrix(-1, 0, 0, 1, 10, 0)',
            boxShadow: '1px 1px 1px #888888'
          }
        } />
      </div>
    );
  }
}