import React from 'react';
import { Router } from 'react-router-dom';
import Product from './Product';

const categories = [
  { id: 1, name: 'Cleaning', image: 'https://img.freepik.com/premium-photo/woman-is-sweeping-floor-front-window-with-cart-cart-with-yellow-handle_1085346-127676.jpg?w=996' },
  { id: 2, name: 'Cooking', image: 'https://img.freepik.com/premium-vector/happy-woman-cooking-tomato-sauce-pasta_1323048-62278.jpg?w=996' },
  { id: 3, name: 'Laundry', image: 'https://img.freepik.com/premium-vector/human-daily-activity-concept-vector-illustration_1287274-50241.jpg?w=996' },
  { id: 4, name: 'Gardening', image: 'https://img.freepik.com/free-photo/cartoon-style-flower-shop-owner-illustration_1409-6463.jpg?w=996' },
  { id: 5, name: 'Baby Care', image: 'https://img.freepik.com/premium-photo/smiling-mother-washing-her-baby-child-caring-moment_964514-1737.jpg?w=996' },
];





const HeroSection = () => {
  return (
    <>
    <div className="px-5 md:px-20 bg-[] py-6 md:py-8">
      {/* Hero Image Section */}
      <div className="w-full h-60 md:h-96 rounded-lg overflow-hidden shadow-lg my-5">
        <img
          src="https://img.freepik.com/free-photo/vacuum-cleaner-tackling-heavily-soiled-floor_23-2151340108.jpg?w=2000"
          alt="Hero"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>

      {/* Categories Section */}
      <div className="flex gap-4 px-2 py-5 bg-red overflow-x-auto md:grid md:grid-cols-5">
        
        {categories.map((category) => (
            <a href='#Card'  >
         <div
         key={category.id}
         className="min-w-[160px] md:w-auto  rounded-lg overflow-hidden shadow-lg bg-gradient-to-b from-[#fff2e5] to-[#ffe8d6] hover:shadow-2xl border-solid border-2px transform hover:scale-105 transition-all duration-300 ease-in-out mb-6 md:mb-0"
       >
         {/* Purple Background Category Name Above the Image */}
         <div className="text-center  font-semibold py-10 text-white bg-gradient-to-b from-black to-purple-600   ">
           {category.name}
         </div>
       
         {/* Image */}
         <img
           src={category.image}
           alt={category.name}
           className="w-full object-cover rounded-t-lg"
         />
       </div>
       
       </a>
        ))}
        
      </div>
      {/* img Section */}
      <div className="w-full h-30 md:h-60 pt-10 rounded-lg overflow-hidden shadow-lg mb-10">
        <img
          src="https://t3.ftcdn.net/jpg/05/18/01/40/360_F_518014080_lxrGkMdIw4xA43s8aRZyn7KDhQqAMOW6.jpg"
          alt="Hero"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      {/* card Section */}
      <div id='Card' className="flex flex-cols gap-4 px-2 py-2 h-[55vh] overflow-x-auto   md:grid md:grid-cols-5">
        <Product  />
      </div>
      <div className="flex flex-cols gap-4 px-2 py-2  h-[55vh] overflow-x-auto md:grid md:grid-cols-5">
        <Product  />
      </div>

      <div className='mt-20 py-10' id="love">
        <img src="public/Loveshanta.png" alt="love ShantaBai" className='w-full h-full object-cover rounded-lg'/>
      </div>
    </div>



    </>
  );
};

export default HeroSection;
