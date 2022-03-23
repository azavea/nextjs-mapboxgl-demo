import mapboxgl from "!mapbox-gl";
import { useState, useEffect } from "react";
import "mapbox-gl/src/css/mapbox-gl.css";

const Map = ({ lat, lng }) => {
  mapboxgl.accessToken =
    "pk.eyJ1IjoiYXphdmVhIiwiYSI6IkFmMFBYUUUifQ.eYn6znWt8NzYOa3OrWop8A";

  const [mounted, setMounted] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (!mounted) {
      const map = new mapboxgl.Map({
        cooperativeGestures: true,
        container: "map",
        style: "mapbox://styles/azavea/ckz3jjuxd001x15nr01wh9fve?optimize=true",
        center: [lng, lat],
        minZoom: 8,
        zoom: 10,
        maxZoom: 18,
      });

      var nav = new mapboxgl.NavigationControl({
        showCompass: false,
        showZoom: true,
      });
      // setLoaded(true);

      map.on("load", function () {
        setLoaded(true);
      });

      map.addControl(nav, "bottom-right");
    }
  }, []);

  return (
    <div className="map-container" style={{ opacity: loaded ? 1 : 0 }}>
      <div id="map" className="map">
        <style global jsx>{`
          .map-container {
            transition: opacity 0.4s ease-in-out;
          }

          .map {
            width: 100%;
            height: 100vh;
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
    </div>
  );
};

export default Map;
