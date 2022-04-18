import dynamic from "next/dynamic";

const MapContainer = ({ lat, lng }) => {
  const Map = dynamic(() => import("/components/Map"), {
    ssr: false,
    suspense: false,
  });
  return <Map lat={lat} lng={lng} />;
};

export default MapContainer;
