import React from 'react';
import GoogleMapReact from 'google-map-react';

const Map = ({clinics}) => {

    const locations = [];
    for (let i = 0; i < clinics.length; i++) {
        const clinic = clinics[i];
        // locations.push(<Marker lat={clinic.latitude.$numberDecimal} lng={clinic.latitude.$numberDecimal} />);
        // console.log("latitude", clinic.latitude.$numberDecimal);
        locations.push(
            <Marker
                key={clinic._id}
                lat={clinic.latitude.$numberDecimal}
                lng={clinic.latitude.$numberDecimal}
                text={clinic.name}
            />
        );
    }

    const renderMarkers = () => {
        return 
    } 

    console.log(locations);

  return (
        <div style={{ height: '100vh', width: '50%' }}>
         
            <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyAsjUog0wuqDSKG8gC9zJkzdVPG_cCdLIM' }}
                defaultCenter={{lat: 40.730610, lng: -73.935242}}
                defaultZoom={11}>
                <Marker
                    lat={40.730610}
                    lng={-73.935242}
                    text="My Marker"
                />
                {/* <Marker
                    lat={40.749721}
                    lng={-73.941572}
                    text={"Court Square Animal Hospital"}
                /> */}
                {/* <Marker2 lat={40.749721} lng={-73.941572} /> */}
                {locations}
                {/* {
                    clinics.map(clinic => (
                        <Marker
                            key={clinic._id}
                            lat={clinic.latitude.$numberDecimal}
                            lng={clinic.latitude.$numberDecimal}
                            text={clinic.name}
                        />
                    ))
                } */}
            </GoogleMapReact>
    </div>
  )
}

const Marker2 = props => {
  return <div className="SuperAwesomePin"></div>
}

const Marker = ({ text }) => <div>{text}</div>;

export default Map;