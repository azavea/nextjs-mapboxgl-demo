import mapboxgl from "!mapbox-gl";
import { useState, useEffect } from "react";
import "mapbox-gl/src/css/mapbox-gl.css";

const Map = ({ lat, lng }) => {
  mapboxgl.accessToken =
    "pk.eyJ1IjoibGtuYXJmIiwiYSI6IjhjbGg4RUkifQ.-lS6mAkmR3SVh-W4XwQElg";

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (!mounted) {
      const map = new mapboxgl.Map({
        cooperativeGestures: true,
        container: "map",
        style: "mapbox://styles/lknarf/cl0pf3asg000114nt5jepzs6s",
        center: [lng, lat],
        minZoom: 8,
        zoom: 10,
        maxZoom: 18,
      });

      var nav = new mapboxgl.NavigationControl({
        showCompass: false,
        showZoom: true,
      });

      map.addControl(nav, "bottom-right");
    }
  }, []);

  return (
    <div id="map" className="map">
      <style global jsx>{`
        .map {
          width: 100%;
          height: 100vh;
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
