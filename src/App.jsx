// src/App.jsx
import React, { useState, useEffect } from 'react';
import LoadingSpinner from './Components/Loader'; // Import the
import Navbar from './Components/Navbar';
import HeroSection from './Components/Herosection';

function App() {
  const [loading, setLoading] = useState(true); // State for loading

  useEffect(() => {
    // Simulate a delay for loading (e.g., data fetching)
    setTimeout(() => {
      setLoading(false); // Hide the loading spinner after the delay
    }, 2000); // Adjust the delay as needed
  }, []);

  return (
    <>
    <div className=''>
      {loading ? (
        <div className='items-center justify-center bg-[#000000] text-white flex h-screenn '>
        <LoadingSpinner /> 
        </div>
      ) : (
        
        <div className="">
          <Navbar />
          <HeroSection />
        </div>

        
        
      )}
    </div>
    </>
  );
}

export default App;
