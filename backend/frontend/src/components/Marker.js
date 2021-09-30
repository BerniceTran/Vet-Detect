import React from 'react';
import './Marker.css';

const Marker = ({name}) => {
    // const { color, name, id } = props;

    return (
        <div className="LocationMarker">
            <div className="Marker"></div>
            <div className="MarkerNameDiv"><h4>{name}</h4></div>
        </div>

    );
  };

  export default Marker;