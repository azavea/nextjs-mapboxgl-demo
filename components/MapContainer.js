import Map from "/components/Map";

const MapContainer = ({ children }) => {
  const { lat, lng } = children.props.community;
  console.log(children, lat, lng);
  return (
    <div>
      <Map lat={lat} lng={lng} />
      {children}
    </div>
  );
};

export default MapContainer;
