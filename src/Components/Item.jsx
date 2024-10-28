import React from 'react';
import Navbar from './Navbar';
import Works from './Works';
import Footer from './Footer';




const products = [
  { 
    id: 1, 
    name: 'Home Cleaning', 
    duration: '2 hours', 
    pro: '₹500', 
    og: '₹600', 
    dis: '₹550', 
    img: 'https://img.freepik.com/free-photo/front-view-woman-holding-cleaning-supplies_23-2148587323.jpg', 
    perdis: '8%' ,
    Discription: 'Lorem ipsum dolor sit amet, consectetur adip',
    Country: 'India',
    Rules: 'Lorem ipsum dolor sit amet, consectetur adip'
  }
];

const Item = () => {
  return (
    <>
      <Navbar />
      <div className="py-5 px-5 md:px-20 grid gap-5">
        {products.map((product) => (
          <div key={product.id} className="flex flex-col md:flex-row items-start bg-white rounded-lg p-5">
            {/* Left side: Image */}
            <div className="md:w-1/2">
              <img 
                alt={product.name} 
                src={product.img} 
                className="w-full h-auto rounded-lg object-cover shadow-md"
              />
             
            </div>

            {/* Right side: Content */}
            <div className="md:w-1/2 md:pl-10 mt-5 md:mt-0">
              {/* Breadcrumbs */}
              <div className="text-sm text-gray-500 mb-4">
                <a href="/" className="hover:text-blue-600">Home</a> &gt; <span>{product.name}</span>
              </div>
              
              {/* Product Details */}
              <h1 className="text-2xl font-bold text-gray-800 mb-2">{product.name}</h1>
              <p className="text-gray-700 mb-4">Duration: {product.duration}</p>
              
              {/* Pricing */}
              <div className="flex items-center mb-4">
                <p className="text-red-500 font-semibold text-lg mr-4">Discounted Price: {product.dis}</p>
                <p className="text-gray-500 line-through">Original Price: {product.og}</p>
              </div>
              
              {/* Profit Calculation */}
              <p className="text-sm text-gray-500 mb-6">You save: ₹{product.og - product.dis}</p>
              
              {/* Slot Time and Date Selection */}
              <div className="mb-6">
                <h2 className="text-lg font-semibold text-gray-800 mb-2">Select Date & Time</h2>

                {/* Date Picker */}
                <label className="block text-sm text-gray-600 mb-2">Select Date:</label>
                <input 
                  type="date" 
                  className="w-full border border-gray-300 rounded-lg p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400" 
                />

                {/* Time Slot Picker */}
                <label className="block text-sm text-gray-600 mb-2">Select Time Slot:</label>
                <select 
                  className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  defaultValue=""
                >
                  <option value="" disabled>Select a time slot</option>
                  <option value="morning">Morning (9 AM - 12 PM)</option>
                  <option value="afternoon">Afternoon (12 PM - 3 PM)</option>
                  <option value="evening">Evening (3 PM - 6 PM)</option>
                  <option value="night">Night (6 PM - 9 PM)</option>
                </select>
              </div>

              {/* Book Now Button */}
              <button   className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-5 rounded-lg transition">
                Book Now
              </button>
              <h2 className="text-lg font-semibold mt-5">About Product</h2>
              <ul className="text-gray-600 mt-2 space-y-1">
                <li>Description: {product.Discription}</li>
                <li>Country of Origin: {product.Country}</li>
                <li>Rules: {product.Rules}</li>
              </ul>
            </div>
          </div>
        ))}

        {/* Works Section */}
        <div className="py-10">
          <Works />
        </div>
        
        {/* Footer */}
        <Footer />
      </div>
    </>
  );
};

export default Item;
