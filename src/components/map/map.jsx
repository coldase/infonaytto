import "mapbox-gl/dist/mapbox-gl.css";
import "./map.css";
import { useRef, useEffect, useState } from "react";

import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN;

const MyMap = () => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  // 60.385,23.129
  const [lng, setLng] = useState(23.129);
  const [lat, setLat] = useState(60.385);
  const [zoom, setZoom] = useState(15);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [lng, lat],
      zoom: zoom,
    });
  });
  return <div ref={mapContainer} className="mymap" />;
};

export default MyMap;
