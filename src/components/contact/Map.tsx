
import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const Map = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);

  useEffect(() => {
    if (!mapContainer.current) return;

    // Initialize map with Karachi coordinates
    mapboxgl.accessToken = 'pk.eyJ1IjoiZXhhbXBsZXVzZXIiLCJhIjoiY2xnNXdvc2U3MDQ0eDNkbXMwcW51bjdxYSJ9.8EQBf3T3O2xb4NINGjF4dA';
    
    // Coordinates for Karachi, Pakistan [longitude, latitude]
    const karachiCoordinates: [number, number] = [67.0099, 24.8607];
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: karachiCoordinates,
      zoom: 12
    });

    // Add navigation controls
    map.current.addControl(
      new mapboxgl.NavigationControl(),
      'top-right'
    );

    // Add marker for company location
    new mapboxgl.Marker({
      color: '#e63946' // Red color matching the theme
    })
      .setLngLat(karachiCoordinates)
      .setPopup(
        new mapboxgl.Popup({ offset: 25 })
          .setHTML('<h3>BuildMasters HQ</h3><p>123 Construction Avenue, DHA Phase 8</p>')
      )
      .addTo(map.current);
      
    // Cleanup
    return () => {
      map.current?.remove();
    };
  }, []);

  return (
    <div className="w-full h-[400px] rounded-lg overflow-hidden shadow-lg">
      <div ref={mapContainer} className="w-full h-full" />
      <div className="mt-2 text-sm text-gray-500 text-center">
        Note: This is a demo map. Contact us for our exact location.
      </div>
    </div>
  );
};

export default Map;
