import { useMap } from "react-leaflet";
import { useEffect } from "react";

export const MapUpdater = ({ lat, lng }: { lat: number; lng: number }) => {
  const map = useMap();

  useEffect(() => {
    map.setView([lat, lng], map.getZoom());
    // Or use smooth animation:
    // map.flyTo([lat, lng], map.getZoom());
  }, [lat, lng, map]);

  return null;
};
