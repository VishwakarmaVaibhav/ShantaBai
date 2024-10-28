import React from 'react';
import { Router } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-100 mt-10 px-6 py-10 text-gray-700">
      <div className="container mx-auto">
        {/* Categories Section */}
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 mb-10">
          <div>
            <h4 className="font-bold mb-3">Categories</h4>
            <ul>
              <li>Cleaning Services</li>
              <li>Cooking Services</li>
              <li>Laundry</li>
              <li>Home Care</li>
              <li>Personal Care</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-3">Special Services</h4>
            <ul>
              <li>On-Demand Booking</li>
              <li>Weekly Subscription</li>
              <li>Monthly Packages</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-3">Languages Supported</h4>
            <ul>
              <li>Hindi</li>
              <li>Marathi</li>
              <li>English</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-3">Contact Support</h4>
            <ul>
              <li>Call Assistance</li>
              <li>Booking Help</li>
              <li>Feedback & Support</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-6 border-gray-300" />

        {/* Footer Bottom Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center">
          {/* Social Links */}
          <div className="flex space-x-4 mb-6 sm:mb-0">
            <a href="#" className="text-gray-500 hover:text-gray-700">Instagram</a>
            <a href="#" className="text-gray-500 hover:text-gray-700">Twitter</a>
            <a href="#" className="text-gray-500 hover:text-gray-700">Facebook</a>
            <a href="#" className="text-gray-500 hover:text-gray-700">LinkedIn</a>
          </div>

          {/* Navigation Links */}
          <div className="flex space-x-4 text-gray-500">
            <a href="#">Home</a>
            <a href="#">Careers</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>

          {/* Download App Links */}
          <div className="flex space-x-4 mt-6 sm:mt-0">
            <a href="#" className="border border-gray-400 rounded-md px-4 py-2 text-gray-600">
              <img src="https://freelogopng.com/images/all_img/1664285914google-play-logo-png.png" alt="Play Store" className="h-6 inline mr-2" />
              Get it on Play Store
            </a>
            <a href="#" className="border border-gray-400 rounded-md px-4 py-2 text-gray-600">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzsOJ5nu9oi6G-oEzUOA9VNzf8h3PrxQwD0w&s" alt="App Store" className="h-6 inline mr-2" />
              Get it on App Store
            </a>
          </div>
        </div>

        {/* Bottom Text */}
        <div className="text-center text-gray-500 mt-10">
          © 2024 Shantabai Services Pvt. Ltd.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
