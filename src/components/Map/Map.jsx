import { useEffect } from 'react';
import PropTypes from 'prop-types';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

export const Map = ({ dataCoords }) => {
  useEffect(() => {
    const { lat, lng } = dataCoords;

    if (!(lat && lng)) return;

    const map = L.map('map', {
      zoomControl: false,
      scrollWheelZoom: false,
      zoomDelta: false,
      dragging: false,
      keyboard: false,
      attributionControl: false
    }).setView([lat, lng], 17);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

    const locationIcon = L.icon({
      iconUrl: '/icon-location.svg'
    });
    L.marker([lat, lng], { icon: locationIcon }).addTo(map);

    return () => {
      map.remove();
    };
  }, [dataCoords]);

  return (
    <div id='map' className='Map'></div>
  );
};

Map.propTypes = {
  dataCoords: PropTypes.object
};
