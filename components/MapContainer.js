import Map, { MapProvider, useMap, Source, Layer } from "react-map-gl";
import { useState, useCallback } from "react";
import "mapbox-gl/dist/mapbox-gl.css";
import styles from "/styles/App.module.css";

import Header from "/components/Header";
import AppNav from "/components/AppNav";

const MapContainer = ({ children }) => {
  const [loaded, setLoaded] = useState(false);
  const { lat, lng, slug, name } = children.props.community;
  const { color } = children.props;

  const geojson = {
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        geometry: { type: "Point", coordinates: [lng, lat] },
      },
    ],
  };

  const layerStyle = {
    id: "point",
    type: "circle",
    paint: {
      "circle-radius": 10,
      "circle-color": color,
    },
  };

  const onMapLoad = useCallback(() => {
    setLoaded(true);
  }, []);

  return (
    <div className={styles.root}>
      <Header />
      <AppNav name={name} slug={slug} />
      <div className={styles.app}>
        <div className={styles.contentWrapper}>{children}</div>
        <div className={styles.mapWrapper}>
          <div
            className={styles.mapContainer}
            style={{ opacity: loaded ? 1 : 0 }}
          >
            <Map
              onLoad={onMapLoad}
              mapboxAccessToken="pk.eyJ1IjoiYXphdmVhIiwiYSI6IkFmMFBYUUUifQ.eYn6znWt8NzYOa3OrWop8A"
              mapStyle="mapbox://styles/mapbox/light-v10"
              initialViewState={{
                longitude: lng,
                latitude: lat,
                zoom: 12,
              }}
            >
              <Source id="my-data" type="geojson" data={geojson}>
                <Layer {...layerStyle} />
              </Source>
            </Map>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapContainer;
