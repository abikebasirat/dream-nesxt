
import React, { useState } from "react";
import {
  GoogleMap,
  LoadScript,
  Marker,
  Autocomplete,
} from "@react-google-maps/api";

const MapApi = () => {
  const [map, setMap] = useState(null);
  const [searchBox, setSearchBox] = useState(null);
  const [location, setLocation] = useState({ lat: 9.082, lng: 8.6753 });

  const handlePlaceChanged = () => {
    const place = searchBox.getPlace();
    if (place && place.geometry) {
      const newLocation = {
        lat: place.geometry.location.lat(),
        lng: place.geometry.location.lng(),
      };
      setLocation(newLocation);
      map.panTo(newLocation);
    }
  };

  const handleMapClick = (event) => {
    const clickedLocation = {
      lat: event.latLng.lat(),
      lng: event.latLng.lng(),
    };
    setLocation(clickedLocation);
  };

  return (
    <LoadScript
      googleMapsApiKey="AIzaSyAk9aR1LnSanKYlKN1zmtrl1NXpiBL3hfU"
      libraries={["places"]}
    >
      <GoogleMap
        mapContainerStyle={{ height: "400px", width: "100%" }}
        center={location}
        zoom={12}
        onLoad={(mapInstance) => setMap(mapInstance)}
        onClick={handleMapClick}
      >
        <Autocomplete
          onLoad={(autocompleteInstance) => setSearchBox(autocompleteInstance)}
          onPlaceChanged={handlePlaceChanged}
        >
          <input
            type="text"
            placeholder="Search places around Nigeria"
            style={{
              boxSizing: "border-box",
              border: "1px solid transparent",
              width: "240px",
              height: "32px",
              padding: "0 12px",
              borderRadius: "3px",
              boxShadow: "0 2px 6px rgba(0, 0, 0, 0.3)",
              fontSize: "14px",
              outline: "none",
              textOverflow: "ellipses",
              position: "absolute",
              left: "50%",
              marginLeft: "-120px",
              top: "10px",
            }}
          />
        </Autocomplete>

        <Marker position={location} />
      </GoogleMap>
    </LoadScript>
  );
};

export default MapApi;