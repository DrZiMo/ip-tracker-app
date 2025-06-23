import L from "leaflet";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { useIpInfo } from "../store/ipAddressInfoStore";
import { useEffect, useState } from "react";
import { MapUpdater } from "./MapUpdater";

const customIcon = new L.Icon({
  iconUrl: "/images/icon-location.svg",
});
const MapPart = () => {
  const { location } = useIpInfo((state) => state.ipInfoData);

  const [latitude, setLatitude] = useState(2.0469);
  const [longitude, setLongitude] = useState(45.3182);

  useEffect(() => {
    if (location?.lat && location?.lng) {
      setLatitude(location.lat);
      setLongitude(location.lng);
    }
  }, [location]);

  return (
    <MapContainer
      center={[latitude, longitude]}
      zoom={16}
      zoomControl={false}
      style={{ height: "100%", width: "100%", zIndex: "-10" }}
    >
      <MapUpdater lat={latitude} lng={longitude} />

      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={[latitude, longitude]} icon={customIcon}>
        <Popup>IP address location</Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapPart;
