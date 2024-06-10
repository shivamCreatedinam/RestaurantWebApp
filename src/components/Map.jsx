import React, { useState } from 'react';
import { GoogleMap, LoadScript, StandaloneSearchBox } from '@react-google-maps/api';

export const Map = () => {
  const [center, setCenter] = useState({ lat: 41.3851, lng: 2.1734 });

  const handlePlaceChanged = () => {
    const place = searchBox.getPlaces()[0];
    if (place) {
      setCenter({
        lat: place.geometry.location.lat(),
        lng: place.geometry.location.lng(a)
      });
    }
  };

  return (
    <LoadScript googleMapsApiKey="YOUR_API_KEY">
      <GoogleMap
        mapContainerStyle={{ height: '100vh', width: '100%' }}
        zoom={13}
        center={center}
      >
        <StandaloneSearchBox
          onLoad={(ref) => (searchBox = ref)}
          onPlacesChanged={handlePlaceChanged}
        >
          <input
            type="text"
            placeholder="Search location"
            style={{
              boxSizing: `border-box`,
              border: `1px solid transparent`,
              width: `240px`,
              height: `32px`,
              padding: `0 12px`,
              borderRadius: `3px`,
              boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
              fontSize: `14px`,
              outline: `none`,
              textOverflow: `ellipses`
            }}
          />
        </StandaloneSearchBox>
      </GoogleMap>
    </LoadScript>
  );
};


