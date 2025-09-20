
import React, { useEffect, useRef, useState } from 'react';

const Map = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [mapKey, setMapKey] = useState<string>('');

  const handleKeyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMapKey(e.target.value);
    localStorage.setItem('mapbox_key', e.target.value);
  };

  useEffect(() => {
    const savedKey = localStorage.getItem('mapbox_key');
    if (savedKey) {
      setMapKey(savedKey);
    }
  }, []);

  useEffect(() => {
    if (!mapKey || !mapRef.current) return;

    const loadMap = async () => {
      try {
        // Import mapboxgl dynamically
        const mapboxgl = (await import('mapbox-gl')).default;
        import('mapbox-gl/dist/mapbox-gl.css');

        mapboxgl.accessToken = mapKey;

        // The coordinates for Karachi
        const karachi = [67.0822, 24.9056];

        const map = new mapboxgl.Map({
          container: mapRef.current!,
          style: 'mapbox://styles/mapbox/streets-v11',
          center: karachi,
          zoom: 12,
        });

        // Add navigation controls
        map.addControl(new mapboxgl.NavigationControl(), 'top-right');

        // Add marker for the company location
        new mapboxgl.Marker({ color: '#ea384c' })
          .setLngLat(karachi)
          .setPopup(new mapboxgl.Popup().setHTML("<h3>BuildMasters Construction</h3><p>123 Construction Avenue, DHA Phase 8, Karachi</p>"))
          .addTo(map);

        return () => {
          map.remove();
        };
      } catch (error) {
        console.error('Error loading Mapbox:', error);
      }
    };

    loadMap();
  }, [mapKey]);

  return (
    <div className="mt-12">
      <h3 className="text-2xl font-bold mb-6">Our Location</h3>
      {!mapKey ? (
        <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-md mb-4">
          <p className="text-yellow-800">Please enter your Mapbox API key to view the map:</p>
          <input 
            type="text" 
            value={mapKey} 
            onChange={handleKeyChange} 
            placeholder="Enter your Mapbox public token"
            className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-md"
          />
          <p className="text-sm text-gray-500 mt-2">
            Get your free API key at <a href="https://www.mapbox.com/" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">mapbox.com</a>
          </p>
        </div>
      ) : null}
      <div 
        ref={mapRef} 
        className="w-full h-96 rounded-lg shadow-lg"
      >
        {!mapKey && (
          <div className="w-full h-full flex items-center justify-center bg-gray-100 rounded-lg">
            <p className="text-gray-500">Enter a Mapbox API key to display the map</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Map;
