import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Product from './Product';
import Instant from './Instant';
import Navbar from './Navbar';
import Plan from './Plan';

const categories = [
  { id: 1, name: 'Cleaning', image: 'https://img.freepik.com/premium-photo/woman-is-sweeping-floor-front-window-with-cart-cart-with-yellow-handle_1085346-127676.jpg?w=996' },
  { id: 2, name: 'Cooking', image: 'https://img.freepik.com/premium-vector/happy-woman-cooking-tomato-sauce-pasta_1323048-62278.jpg?w=996' },
  { id: 3, name: 'Laundry', image: 'https://img.freepik.com/premium-vector/human-daily-activity-concept-vector-illustration_1287274-50241.jpg?w=996' },
  { id: 4, name: 'Gardening', image: 'https://img.freepik.com/free-photo/cartoon-style-flower-shop-owner-illustration_1409-6463.jpg?w=996' },
  { id: 5, name: 'Baby Care', image: 'https://img.freepik.com/premium-photo/smiling-mother-washing-her-baby-child-caring-moment_964514-1737.jpg?w=996' },
];

const HeroSection = () => {
  const navigate = useNavigate(); 
  const scrollContainerRef = useRef();

  // Navigation functions
  const handlePlan = () => navigate('/Plan');
  const handleInstant = () => navigate('/Instant');

  // Greeting based on the time of day
  const getGreeting = () => {
    const currentHour = new Date().getHours();
    if (currentHour < 12) return "Good Morning!";
    if (currentHour < 18) return "Good Afternoon!";
    return "Good Evening!";
  };

  // Word rotation effect
  const words = ["Friend", "User", "Champion", "Bhagwaan", "Grahak", "Client", "Buyer", "Purchaser", "Consumer", "Patron", "Shopper", "Guest", "Member", "Subscriber", "Clientele", "Account", "Stakeholder", "Beneficiary", "End User", "Market Participant", "Buyer Persona", "Audience", "Prospect", "Lead", "Consumer Base", "Retailer", "Vendor", "Contractor", "Partner", "Supporter", "Follower", "Advocate", "Ally", "Stakeholder", "User Base", "Enthusiast", "Devotee", "Participant"];
  
  const getRandomWord = () => words[Math.floor(Math.random() * words.length)];

  const [randomWord, setRandomWord] = useState(getRandomWord());
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFading(true);
      setTimeout(() => {
        setRandomWord(getRandomWord());
        setIsFading(false);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Scroll effect for categories
  useEffect(() => {
    const handleScroll = () => {
      if (scrollContainerRef.current) {
        const scrollTop = window.scrollY;
        scrollContainerRef.current.scrollLeft = scrollTop;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Fade styles for random word
  const fadeInStyles = {
    opacity: isFading ? 0 : 1,
    transform: isFading ? 'translateY(10px)' : 'translateY(0)',
    transition: 'opacity 0.5s ease, transform 0.5s ease'
  };

  const fadeOutStyles = {
    opacity: isFading ? 1 : 0,
    transform: isFading ? 'translateY(-10px)' : 'translateY(0)',
    transition: 'opacity 0.5s ease, transform 0.5s ease'
  };

  return (
    <div className="px-5 md:px-20 py-6 md:py-8">
      {/* Greeting Section */}
      <div id="Goodmorning" className='relative rounded border bg-black py-2 px-5 mb-5'>
        <span className="text-lg text-white font-bold">{getGreeting()} </span>
        <span style={isFading ? fadeOutStyles : fadeInStyles} className="text-lg text-purple-300 font-bold">
          {randomWord}
        </span>
      </div>

      {/* Hero Image Section */}
      <div className="w-full h-30 md:h-64 rounded-lg overflow-hidden shadow-lg my-5">
        <img
          src="https://img.freepik.com/free-photo/vacuum-cleaner-tackling-heavily-soiled-floor_23-2151340108.jpg?w=2000"
          alt="Hero"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>

      {/* Instant and Plan Service Section */}
      <div className="flex flex-col md:flex-row gap-4 px-2 bg-white mb-5">
        <a onClick={handleInstant} className="w-full md:w-1/2">
          <div className="bg-black flex items-center p-4 rounded-lg border-solid border-4 border-purple-600 shadow-md hover:scale-95 transition-all duration-300 ease-in-out">
            <img
              src="https://www.pngitem.com/pimgs/m/514-5149750_instant-transactions-icon-hd-png-download.png"
              alt="instant"
              className="w-[50px] h-[50px] mr-3 rounded border-[0.5px]"
            />
            <div className="flex flex-col">
              <h1 className="text-xl font-semibold text-white">Get Instant Service</h1>
              <p className="text-gray-400">Services within 1 hour!!</p>
            </div>
          </div>
        </a>

        <a onClick={handlePlan} className="w-full md:w-1/2">
          <div className="bg-black flex items-center p-4 rounded-lg border-solid border-4 border-purple-600 shadow-md hover:scale-95 transition-all duration-300 ease-in-out">
            <img
              src="https://uxwing.com/wp-content/themes/uxwing/download/time-and-date/work-schedule-icon.png"
              alt="plan"
              className="w-[50px] h-[50px] mr-3 bg-white rounded border-[0.5px]"
            />
            <div className="flex flex-col">
              <h1 className="text-xl font-semibold text-white">Plan Your Service</h1>
              <p className="text-gray-400">Customized schedule options!</p>
            </div>
          </div>
        </a>
      </div>

      {/* Categories Section */}
      <div className="overflow-x-auto py-5 pl-1 ml-1" ref={scrollContainerRef}>
        <div className="flex gap-5 md:gap-8 md:pl-10 md:flex-nowrap min-w-full">
          {categories.map((category) => (
            <a href="#Card" key={category.id} className="flex-shrink-0 rounded-md w-[45%] sm:w-[30%] md:w-auto">
              <div className="min-w-[160px] border-solid border-2 border-purple-900 rounded-lg overflow-hidden shadow-lg bg-gradient-to-b from-[#fff2e5] to-[#ffe8d6] hover:shadow-2xl transform hover:scale-105 transition-all duration-300 ease-in-out">
                <div className="text-center font-semibold py-10 text-white bg-gradient-to-b from-black to-purple-600">
                  {category.name}
                </div>
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-[210px] h-[210px] object-cover mx-auto"
                />
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Additional Hero Image Section */}
      <div className="w-full h-30 md:h-60 pt-10 rounded-lg overflow-hidden shadow-lg mb-10">
        <img
          src="https://t3.ftcdn.net/jpg/05/18/01/40/360_F_518014080_lxrGkMdIw4xA43s8aRZyn7KDhQqAMOW6.jpg"
          alt="Additional Hero"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
    
       {/* Product Cards Section */}
       <div id='Card'  className="flex flex-wrap gap-4 pl-0 py-2 h-[55vh] overflow-x-auto md:grid md:grid-cols-5 pl-5">
       <Product />
     </div>
     <div className="flex flex-wrap gap-4 pl-0 pt-0 mt-0 py-2 h-[55vh] overflow-x-auto md:grid md:grid-cols-5 pl-5 pb-0 mb-0">
       <Product />
     </div>

     {/* Love ShantaBai Image Section */}
     <div className='mt-20 pb-10' id="love">
       <img src="/Loveshanta.jpg" alt="Love ShantaBai" className='w-full h-full object-cover rounded-lg'/>
     </div>
   </div>
  );
};

export default HeroSection;
