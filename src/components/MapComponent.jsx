import React, { useEffect } from "react";
import Map, { Marker } from "react-map-gl";

const MapComponent = ({ latitude, longitude }) => {
  const mapboxToken = "YOUR_MAPBOX_ACCESS_TOKEN";

  useEffect(() => {
    if (!mapboxToken || mapboxToken === "YOUR_MAPBOX_ACCESS_TOKEN") {
      alert("Map functionality is currently disabled beacause it's paid api");
    }
  }, [mapboxToken]);

  if (!mapboxToken || mapboxToken === "YOUR_MAPBOX_ACCESS_TOKEN") {
    return null; 
  }

  return (
    <div className="map-container">
      <Map
        initialViewState={{
          latitude: latitude,
          longitude: longitude,
          zoom: 12,
        }}
        style={{ width: "100%", height: "100%" }}
        mapStyle="mapbox://styles/mapbox/streets-v11"
        mapboxAccessToken={mapboxToken}
      >
        <Marker latitude={latitude} longitude={longitude} />
      </Map>
    </div>
  );
};

export default MapComponent;
