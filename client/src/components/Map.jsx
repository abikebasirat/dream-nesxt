
import { useState } from "react";
import "./Map.scss"
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

const libraries = ["places"];
const mapContainerStyle = {
  width: "100%",
  height: "100%",
};

function Map() {
  const [open, setOpen] = useState(false);
  const [coords, setCoords] = useState({});
  const [distance, setDistance] = useState(0);

  const handleCloseMap = () => {
    setOpen(!open);
  };

  const handleLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude, accuracy } = position.coords;
        setCoords({ lat: latitude, lng: longitude });
        setDistance(accuracy);
      });
    }
  };

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries,
  });

  if (loadError) {
    return <div>Error loading maps</div>;
  }
  if (!isLoaded) {
    return <div>Loading maps ...</div>;
  }

  return (
    <div className="map-container">
    <div className="map-container">
      <div className="map-botton">
        <button
          className="map-botton"
          onClick={handleLocation}
        >
          Get Location
        </button>
        <button
          className="map-botton-red"
          onClick={handleCloseMap}
        >
          Show Map
        </button>
        {open && (
          <div className="open">
            <button
              className="close"
              onClick={handleCloseMap}
            >
              Close Map
            </button>

            <span>Accuracy {distance} : Metres</span>

            {isLoaded && (
              <GoogleMap
                mapContainerStyle={mapContainerStyle}
                center={coords}
                zoom={10}
              >
                <Marker position={coords} />
              </GoogleMap>
            )}
          </div>
        )}
      </div>
    </div>
    </div>
  );
}



export default Map






