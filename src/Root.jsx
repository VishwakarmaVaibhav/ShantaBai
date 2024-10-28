import React, { useEffect, useState } from "react";
import Navbar from "./Components/Navbar";
import HeroSection from "./Components/Herosection";
import Footer from "./Components/Footer";
import Search from "./Components/Search";
import Works from "./Components/Works";
import LoadingSpinner from "./Components/Loader";

function Root() {
    const [loading, setLoading] = useState(true); // State for loading
    const [isDarkMode, setIsDarkMode] = useState(false); // State for dark mode

    useEffect(() => {
      // Simulate a delay for loading (e.g., data fetching)
      setTimeout(() => {
        setLoading(false); // Hide the loading spinner after the delay
      }, 2000); // Adjust the delay as needed
    }, []);

    return (
      <div className={isDarkMode ? 'dark' : 'light'}>
        {loading ? (
          <div className='items-center justify-center bg-[#000000] text-white flex h-screen'>
            <LoadingSpinner /> 
          </div>
        ) : (
          <div>
            <Navbar />
            <HeroSection />
            <div className="">
            <Works />
            <Footer />
            </div>
            
          </div>
        )}
      </div>
    );
}

export default Root;
