import React, { useEffect, useRef } from 'react';
import { LoadScript, GoogleMap, Marker, DirectionsRenderer } from '@react-google-maps/api';

const MapView = ({ parcel, isAdmin = false }) => {
  const mapRef = useRef(null);
  const [directions, setDirections] = useState(null);
  
  const mapContainerStyle = {
    width: '100%',
    height: '400px'
  };

  const center = {
    lat: parcel?.currentLocation?.lat || 23.8103,
    lng: parcel?.currentLocation?.lng || 90.4125
  };

  useEffect(() => {
    if (parcel && isAdmin) {
      // Calculate route from warehouse to destination
      const directionsService = new window.google.maps.DirectionsService();
      
      directionsService.route({
        origin: parcel.origin,
        destination: parcel.destination,
        travelMode: window.google.maps.TravelMode.DRIVING
      }, (result, status) => {
        if (status === window.google.maps.DirectionsStatus.OK) {
          setDirections(result);
        }
      });
    }
  }, [parcel, isAdmin]);

  return (
    <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={12}
        ref={mapRef}
      >
        {parcel?.currentLocation && (
          <Marker 
            position={parcel.currentLocation} 
            label="Current"
          />
        )}
        
        {isAdmin && directions && (
          <DirectionsRenderer directions={directions} />
        )}
        
        {parcel?.destination && (
          <Marker 
            position={parcel.destination} 
            label="Destination"
            icon={{
              url: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png'
            }}
          />
        )}
      </GoogleMap>
    </LoadScript>
  );
};

export default MapView;