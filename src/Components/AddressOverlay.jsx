import React, { useState } from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';

const AddressOverlay = ({ closeOverlay, saveAddress }) => {
  const [newAddress, setNewAddress] = useState('');
  const [currentLocation, setCurrentLocation] = useState(null);
  const [selectedAddress, setSelectedAddress] = useState('');

  // Simulated saved locations
  const savedLocations = {
    home: 'b2/404 karan complex near vedant school haktesh, Mira Road East',
    other: 'SARITA ELECTRIC HARDWARE STORE, sai sham shopping centre, Mira Road East',
  };

  // Geocoding API or simulated function for address
  const getReadableLocation = (latitude, longitude) => {
    // Simulated: You can replace this with an actual API call like Google Maps Geocoding
    return `Mira Road, Mumbai`; // Example address based on lat/long
  };

  // Get current location
  const enableLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          const readableAddress = getReadableLocation(latitude, longitude);
          setCurrentLocation(readableAddress);
        },
        (error) => {
          console.error('Error getting location', error);
        }
      );
    } else {
      alert('Geolocation is not supported by this browser.');
    }
  };

  // Handle save action
  const handleSave = () => {
    const finalAddress = selectedAddress || newAddress || currentLocation;
    if (finalAddress) {
      saveAddress(finalAddress); // Save the selected or entered address
    }
    closeOverlay(); // Close the overlay
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className={`bg-white rounded-lg p-6 w-full ${window.innerWidth > 768 ? 'max-w-md' : 'h-full'} md:h-auto relative overflow-y-auto`}>
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Select Your Address</h2>
          <button onClick={closeOverlay} className="text-xl">&times;</button>
        </div>

        {/* Search bar for entering new address */}
        <input
          type="text"
          placeholder="Search a new address"
          value={newAddress}
          onChange={(e) => setNewAddress(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md mb-4"
        />

        {/* Current Location Section */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <FaMapMarkerAlt className="text-red-500" />
            <span className="font-semibold text-red-500">Current Location</span>
          </div>
          <button onClick={enableLocation} className="bg-red-500 text-white px-3 py-1 rounded-md">
            Enable Location
          </button>
        </div>
        {currentLocation && (
          <div className="text-gray-700 mb-4">
            Current Location: {currentLocation}
          </div>
        )}

        {/* Saved Locations */}
        <div className="mb-4">
          <h3 className="font-bold">Saved Locations</h3>
          <div className="mt-2">
            <div className="flex items-center justify-between cursor-pointer" onClick={() => setSelectedAddress(savedLocations.home)}>
              <h4 className="font-semibold">Home</h4>
              <p className="text-gray-600 text-sm">{savedLocations.home}</p>
            </div>
            <div className="flex items-center justify-between cursor-pointer mt-2" onClick={() => setSelectedAddress(savedLocations.other)}>
              <h4 className="font-semibold">Other</h4>
              <p className="text-gray-600 text-sm">{savedLocations.other}</p>
            </div>
          </div>
        </div>

        {/* Save Button */}
        <button onClick={handleSave} className="bg-indigo-500 text-white py-2 px-4 rounded-md w-full">
          Save Address
        </button>
      </div>
    </div>
  );
};

export default AddressOverlay;
