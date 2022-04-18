import mapboxgl from "!mapbox-gl";
import { useRef, useState, useEffect } from "react";
import "mapbox-gl/src/css/mapbox-gl.css";
import { useAppSelector, useAppDispatch } from "/app/hooks";

import {
  decrement,
  increment,
  selectCount,
  selectPage,
} from "/app/counterSlice";

const Map = ({ lat, lng }) => {
  mapboxgl.accessToken =
    "pk.eyJ1IjoiYXphdmVhIiwiYSI6IkFmMFBYUUUifQ.eYn6znWt8NzYOa3OrWop8A";

  const [mounted, setMounted] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const count = useAppSelector(selectCount);
  const page = useAppSelector(selectPage);

  const mapContainerA = useRef(null);

  const [map, setMap] = useState(null);

  useEffect(() => {
    setMounted(true);
    if (!mounted) {
      const map = new mapboxgl.Map({
        cooperativeGestures: true,
        container: "map",
        style: "mapbox://styles/mapbox/light-v10?optimize=true",
        center: [lng, lat],
        minZoom: 0,
        zoom: 10,
        maxZoom: 18,
      });

      var nav = new mapboxgl.NavigationControl({
        showCompass: false,
        showZoom: true,
      });
      // setLoaded(true);

      map.on("load", function () {
        setMap(map);
        setLoaded(true);
      });

      map.addControl(nav, "bottom-right");
    }
  }, []);

  useEffect(() => {
    if (mounted) {
      map.setZoom(count);
    }
  }, [count]);

  return (
    <div className="map-container" style={{ opacity: loaded ? 1 : 0 }}>
      <div id="map-count">
        Count: {count}; Page {page}
      </div>
      <div id="map" className="map"></div>

      <style global jsx>{`
        #map-count {
          position: relative;
          z-index: 1000;
        }
        .map-container {
          transition: opacity 0.4s ease-in-out;
        }

        .map {
          width: 100%;
          height: 100px;
          background: #ccc;
        }
        .mapboxgl-ctrl button.mapboxgl-ctrl-zoom-out .mapboxgl-ctrl-icon {
          background-image: url("/images/svg/mapboxgl-ctrl-zoom-out.svg");
        }

        .mapboxgl-ctrl button.mapboxgl-ctrl-compass .mapboxgl-ctrl-icon {
          background-image: url("/images/svg/mapboxgl-ctrl-compass.svg");
        }

        .mapboxgl-ctrl button.mapboxgl-ctrl-zoom-in .mapboxgl-ctrl-icon {
          background-image: url("/images/svg/mapboxgl-ctrl-zoom-in.svg");
        }

        a.mapboxgl-ctrl-logo {
          background-image: url("/images/svg/mapboxgl-ctrl-logo.svg");
        }

        .mapboxgl-ctrl-attrib-button {
          background-image: url("/images/svg/mapboxgl-ctrl-attrib.svg");
        }

        .mapboxgl-ctrl-attrib.mapboxgl-compact {
          min-height: 24px;
        }
      `}</style>
    </div>
  );
};

export default Map;
