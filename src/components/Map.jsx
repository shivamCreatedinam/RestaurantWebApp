// import React, { useEffect, useState } from 'react';
// import { GoogleMap, StandaloneSearchBox, useLoadScript } from '@react-google-maps/api';

// const libraries = ["places"];

// export const Map = () => {
//   const [center, setCenter] = useState({ lat: 41.3851, lng: 2.1734 });
//   const { isLoaded, loadError } = useLoadScript({
//     googleMapsApiKey: "AIzaSyA9SSZuornNLqZlA0O1sEnZSDjTRKpARl0",
//     libraries,
//   });

//   const handlePlaceChanged = () => {
//     const place = searchBox.getPlaces()[0];
//     if (place) {
//       setCenter({
//         lat: place.geometry.location.lat(),
//         lng: place.geometry.location.lng(),
//       });
//     }
//   };

//   if (loadError) {
//     return <div>Error loading maps</div>;
//   }

//   if (!isLoaded) {
//     return <div>Loading...</div>;
//   }

//   let searchBox;

//   return (
//     <GoogleMap
//       mapContainerStyle={{ height: '100vh', width: '100%' }}
//       zoom={13}
//       center={center}
//     >
//       <StandaloneSearchBox
//         onLoad={(ref) => (searchBox = ref)}
//         onPlacesChanged={handlePlaceChanged}
//       >
//         <input
//           type="text"
//           placeholder="Search location"
//           style={{
//             boxSizing: `border-box`,
//             border: `1px solid transparent`,
//             width: `240px`,
//             height: `32px`,
//             padding: `0 12px`,
//             borderRadius: `3px`,
//             boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
//             fontSize: `14px`,
//             outline: `none`,
//             textOverflow: `ellipsis`,
//           }}
//         />
//       </StandaloneSearchBox>
//     </GoogleMap>
//   );
// };
import React, { useState, useCallback, useRef } from 'react';
import { GoogleMap, StandaloneSearchBox, useLoadScript } from '@react-google-maps/api';

const libraries = ['places'];

export const Map = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: 'AIzaSyA9SSZuornNLqZlA0O1sEnZSDjTRKpARl0',  // Replace 'YOUR_API_KEY' with your actual API key
    libraries,
  });

  const [center, setCenter] = useState({ lat: 41.3851, lng: 2.1734 });
  const searchBoxRef = useRef(null);

  const onLoad = useCallback((ref) => {
    searchBoxRef.current = ref;
  }, []);

  const onPlacesChanged = useCallback(() => {
    const places = searchBoxRef.current.getPlaces();
    if (places && places.length > 0) {
      const place = places[0];
      const newCenter = {
        lat: place.geometry.location.lat(),
        lng: place.geometry.location.lng(),
      };
      setCenter(newCenter);
    }
  }, []);

  if (loadError) {
    return <div>Error loading maps</div>;
  }

  if (!isLoaded) {
    return <div>Loading maps...</div>;
  }

  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <StandaloneSearchBox
        onLoad={onLoad}
        onPlacesChanged={onPlacesChanged}
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
            textOverflow: `ellipses`,
            position: 'absolute',
            top: '10px',
            left: '10px',
            zIndex: '5',
          }}
        />
      </StandaloneSearchBox>
      <GoogleMap
        mapContainerStyle={{ height: '100%', width: '100%' }}
        zoom={13}
        center={center}
      />
    </div>
  );
};
