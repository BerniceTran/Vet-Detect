import React from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './Marker';

const Map = ({clinics}) => {
    const { REACT_APP_API_KEY } = process.env;
    // console.log(REACT_APP_API_KEY); 

  return (
        <div style={{ height: '100vh' }}>
         
            <GoogleMapReact
                bootstrapURLKeys={{ key: REACT_APP_API_KEY }}
                defaultCenter={{lat: 40.730610, lng: -73.935242}}
                defaultZoom={11}>
                {/* <Marker
                    lat={40.730610}
                    lng={-73.935242}
                    text="My Marker"
                /> */}
                {
                    clinics.map(clinic => (
                        <Marker
                            key={clinic._id}
                            lat={clinic.latitude.$numberDecimal}
                            lng={clinic.longitude.$numberDecimal}
                            name={clinic.name}
                        />
                    
                    ))
                }
            </GoogleMapReact>
    </div>
  )
}


// const Marker = ({ text }) => <div>{text}</div>;

export default Map;