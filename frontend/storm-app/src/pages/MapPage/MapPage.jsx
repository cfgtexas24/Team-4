// Import necessary dependencies
import React, { useState, useEffect } from 'react';
import { GoogleMap, useJsApiLoader, Marker, InfoWindow } from '@react-google-maps/api';
import './MapPage.css';

// Define container style for the map
const containerStyle = {
  width: '100%',
  height: '500px',
  borderRadius: '15px',
};

// Main component function
const MapPage = () => {
  // Load Google Maps API
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries: ['places'],
  });

  // State variables
  const [userLocation, setUserLocation] = useState(null);
  const [map, setMap] = useState(null);
  const [libraries, setLibraries] = useState([]);
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [isSearching, setIsSearching] = useState(true);

  // Effect hook to get current location
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const location = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          setUserLocation(location);
          if (map) {
            findNearbyLibraries(location);
          }
        },
        (error) => {
          console.error('Error getting location:', error);
          const defaultLocation = { lat: -3.745, lng: -38.523 };
          setUserLocation(defaultLocation);
          if (map) {
            findNearbyLibraries(defaultLocation);
          }
        }
      );
    }
  }, [map]);

  // Function to find nearby libraries
  const findNearbyLibraries = (location) => {
    setIsSearching(true);
    if (!window.google || !window.google.maps) return;

    const service = new window.google.maps.places.PlacesService(map);
    const request = {
      location: location,
      radius: 5000,
      type: 'library'
    };

    // Call nearby search
    service.nearbySearch(request, (results, status) => {
      setIsSearching(false);
      if (status === window.google.maps.places.PlacesServiceStatus.OK && results) {
        setLibraries(results);
      }
    });
  };

  // Callback functions for map lifecycle
  const onLoad = React.useCallback((map) => {
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(() => {
    setMap(null);
  }, []);

  // Handle marker click
  const handleMarkerClick = (place) => {
    setSelectedPlace(place);
  };

  // Render loading state if Google Maps API is not loaded
  if (!isLoaded) {
    return (
      <div className="loading">
        <div className="loading-spinner"></div>
        <p>Loading the Library Finder...</p>
      </div>
    );
  }

  return (
    <div className="map-container">
      <div className="header">
        <h1>Library Finder</h1>
        <p>Discover libraries near you and start your reading adventure!</p>
      </div>

      <div className="map-wrapper">
        {userLocation && (
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={userLocation}
            zoom={13}
            onLoad={onLoad}
            onUnmount={onUnmount}
            options={{
              styles: [
                {
                  featureType: 'all',
                  elementType: 'all',
                  stylers: [{ saturation: -20 }]
                }
              ]
            }}
          >
            <Marker
              position={userLocation}
              icon={{
                url: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png'
              }}
              title="Your Location"
            />

            {libraries.map((library) => (
              <Marker
                key={library.place_id}
                position={library.geometry.location}
                onClick={() => handleMarkerClick(library)}
                title={library.name}
              />
            ))}

            {selectedPlace && (
              <InfoWindow
                position={selectedPlace.geometry.location}
                onCloseClick={() => setSelectedPlace(null)}
              >
                <div className="info-window">
                  <h3>{selectedPlace.name}</h3>
                  <p>{selectedPlace.vicinity}</p>
                  {selectedPlace.rating && (
                    <p className="rating">
                      {selectedPlace.rating} ⭐
                    </p>
                  )}
                  {selectedPlace.opening_hours && (
                    <p className={`status ${selectedPlace.opening_hours.open_now ? 'open' : 'closed'}`}>
                      {selectedPlace.opening_hours.open_now ? '✓ Open Now' : '× Closed'}
                    </p>
                  )}
                </div>
              </InfoWindow>
            )}
          </GoogleMap>
        )}
      </div>

      <div className="libraries-section">
        <h2>Nearby Libraries</h2>
        {isSearching ? (
          <div className="loading">
            <div className="loading-spinner"></div>
            <p>Finding libraries near you...</p>
          </div>
        ) : (
          <div className="libraries-grid">
            {libraries.map((library) => (
              <div
                key={library.place_id}
                className="library-card"
                onClick={() => {
                  handleMarkerClick(library);
                  map.panTo(library.geometry.location);
                }}
              >
                <h3>{library.name}</h3>
                <p>{library.vicinity}</p>
                {library.rating && (
                  <p className="rating">
                    {library.rating} ⭐
                  </p>
                )}
                {library.opening_hours && (
                  <span className={`status ${library.opening_hours.open_now ? 'open' : 'closed'}`}>
                    {library.opening_hours.open_now ? '✓ Open Now' : '× Closed'}
                  </span>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MapPage;
