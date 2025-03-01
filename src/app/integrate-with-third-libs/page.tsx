'use client';

import { useEffect, useRef } from 'react';

const page = () => {
  const mapRef = useRef<HTMLDivElement | null>(null);
  const mapInstance = useRef<google.maps.Map | null>(null);

  useEffect(() => {
    if (typeof window.google === 'undefined') {
      console.error('Google Maps script is not loaded.');
      return;
    }

    if (mapRef.current && !mapInstance.current) {
      mapInstance.current = new window.google.maps.Map(mapRef.current, {
        center: { lat: -20, lng: 100 },
        zoom: 8,
      });
    }
  }, []);

  return (
    <div
      ref={mapRef}
      style={{ width: '100%', height: '400px', border: '1px solid black' }}
    />
  );
};

export default page;
