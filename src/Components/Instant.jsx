import React, { useState } from 'react';
import Navbar from './Navbar';
import CustomSlider from './CustomSlider';
import Footer from './Footer';
import Proceed from './Proceed';
import { Navigate } from 'react-router-dom';
import Router from '@mui/icons-material/Router';
import Route from '@mui/icons-material/Route';
import { useNavigate } from 'react-router-dom';


const Instant = () => {
  const bhkMarks = [
    { value: 1, label: '1', rs: 300 },
    { value: 2, label: '2', rs: 400 },
    { value: 3, label: '3', rs: 500 },
    { value: 4, label: '4', rs: 600 },
    { value: 5, label: '5', rs: 700 }
  ];

  const memberMarks = [
    { value: 1, label: '1', rs: 300, rsd: 600 },
    { value: 2, label: '2', rs: 400, rsd: 700 },
    { value: 3, label: '3', rs: 500, rsd: 800 },
    { value: 4, label: '4', rs: 600, rsd: 900 },
    { value: 5, label: '5', rs: 700, rsd: 1000 }
  ];

  const [foodPreference, setFoodPreference] = useState('Veg');
  const [workerPreference, setWorkerPreference] = useState('Men');
  const [selectedService, setSelectedService] = useState('Cooking');
  const [selectedMembers, setSelectedMembers] = useState('1'); // Track selected members
  const [selectedBHK, setSelectedBHK] = useState('1'); // Track selected BHK

  const isFoodActive = (preference) =>
    foodPreference === preference ? 'border-2 border-purple-600' : 'Veg';

  const isWorkerActive = (preference) =>
    workerPreference === preference ? 'border-2 border-purple-600' : '';

  const handleServiceSelect = (service) => {
    setSelectedService(service);
  };

  const handleMemberChange = (value) => {
    setSelectedMembers(value); // Update selected members when slider changes
  };

  const handleBHKChange = (value) => {
    setSelectedBHK(value); // Update selected BHK when slider changes
  };

  const isActive = (service) =>
    selectedService === service ? 'border-purple-600 border-2' : 'border-gray-300';

  const getMemberCost = () => {
    const member = memberMarks.find((mark) => mark.value === selectedMembers);
    return member ? member.rs : 300;
  };

  const getBHKCost = () => {
    const bhk = bhkMarks.find((mark) => mark.value === selectedBHK);
    return bhk? bhk.rs : 300 ;
  };

  const getCost = () => {
    const bhk = bhkMarks.find((mark) => mark.value === selectedBHK);
      return bhk? bhk.rsd : 600 ;
  };

  const navigate = useNavigate();

 const handleproceed = () => {
        navigate('/Proceed');
    };

  return (
    <>
      <div id="navbar">
        <Navbar />
      </div>
      <div className="px-4 md:px-20 overflow-auto pt-2 bg-purple-100">
        <h1 className="py-4">Select Service</h1>
        <div className="grid pb-4 grid-cols-3 gap-4 md:gap-10">
          <button
            onClick={() => handleServiceSelect('Cooking')}
            className={`rounded-lg bg-white overflow-auto shadow-lg p-3 ${isActive('Cooking')}`}
          >
            Cooking
          </button>
          <button
            onClick={() => handleServiceSelect('Cleaning')}
            className={`rounded-lg bg-white shadow-lg p-3 ${isActive('Cleaning')}`}
          >
            Cleaning
          </button>
          <button
            onClick={() => handleServiceSelect('Cooking + Cleaning')}
            className={`rounded-lg bg-white overflow-auto shadow-lg p-3 ${isActive('Cooking + Cleaning')}`}
          >
            Cooking + Cleaning
          </button>
        </div>
      </div>

      <div className="px-5 md:px-20 bg-purple-100">
        {selectedService === 'Cooking' && (
          <div className="flex flex-col md:flex-row md:gap-10 py-5">
            <div id="options" className="flex-1 py-5">
              <h2 className="pb-4">Select Food Preference</h2>
              <div className="grid grid-cols-3 gap-4">
                <button
                   className={`flex items-center justify-center rounded-lg shadow-lg bg-white p-2 md:p-3 transition-all duration-300 ease-in-out hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-600 ${isFoodActive('Veg')}`}
                  onClick={() => setFoodPreference('Veg')}
                >
                  <img src="healthy.png" alt="veg" className="h-[20px] pr-2" />
                  <span className="text-sm md:text-base font-medium">Veg</span>
                </button>
                <button
                   className={`flex items-center justify-center rounded-lg shadow-lg bg-white p-2 md:p-3 transition-all duration-300 ease-in-out hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-600 ${isFoodActive('NonVeg')}`}
                  onClick={() => setFoodPreference('NonVeg')}
                >
                  <img src="no-meat.png" alt="non veg" className="h-[20px] pr-2" />
                  <span className="text-sm md:text-base font-medium">Non Veg</span>
                </button>
                <button
                  className={`flex items-center justify-center rounded-lg shadow-lg bg-white p-2 md:p-3 transition-all duration-300 ease-in-out hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-600 ${isFoodActive('Veg+NonVeg')}`}
                  onClick={() => setFoodPreference('Veg+NonVeg')}
                >
                  <img src="healthy.png" alt="veg" className="h-[20px] pr-2" />
                  <span className="text-sm md:text-base font-medium">Veg + Non Veg</span>
                </button>
              </div>

              <h2 className="py-4">Select Worker Preference</h2>
              <div className="grid grid-cols-3  gap-4">
                <button
                  className={`flex items-center justify-center rounded-lg  shadow-lg bg-white p-2 md:p-3 transition-all duration-300 ease-in-out hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-600 ${isWorkerActive('Men')}`}
                  onClick={() => setWorkerPreference('Men')}
                >
                  <img src="https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/man-user-circle-black-icon.png" alt="men" className="h-[20px] justify-center pr-2" />
                  <span className="text-sm md:text-base font-medium"> Men</span>
                </button>
                <button
                 className={`flex items-center justify-center rounded-lg shadow-lg bg-white p-2 md:p-3 transition-all duration-300 ease-in-out hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-600 ${isWorkerActive('Women')}`}
                  onClick={() => setWorkerPreference('Women')}
                >
                  <img src="https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/woman-user-circle-black-icon.png" alt="women" className="h-[20px] justify-center pr-2" />
                  <span className="text-sm md:text-base font-medium">Women</span>
                </button>
                <button
                className={`flex items-center justify-center rounded-lg shadow-lg bg-white p-2 md:p-3 transition-all duration-300 ease-in-out hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-600 ${isWorkerActive('NoPreference')}`}
                 onClick={() => setWorkerPreference('NoPreference')}
                >
                 <img src="https://cdn-icons-png.freepik.com/256/9144/9144334.png?semt=ais_hybrid" alt="no preference" className="h-[20px] pr-2" />
                 <span className="text-sm md:text-base font-medium">No Preference</span>
                </button>
              </div>

              <h2 className="py-4">Select Members</h2>
              <div className="px-10">
                <CustomSlider
                  min={1}
                  max={5}
                  label="Members"
                  marks={memberMarks}
                  onChange={handleMemberChange} 
                />
              </div>
            </div>

            <div id="total" className="flex-1 py-5 border-l-2 border-black p-5 ">
              <h1>Total Cost</h1>
              <h2 className="py-5 flex "><img src="Rupee.png" className='h-10 pr-5 ' alt="Rs" />   <b className='text-4xl text-sky-400 text-center' >{getMemberCost()}</b></h2>
              <h1 className="py-2 text-lg font-bold">Include</h1>
              <div className="flex flex-wrap gap-2 py-2">
                <span className="bg-black text-white py-1 px-2 rounded-lg">1 Daal/lentil</span>
                <span className="bg-black text-white py-1 px-2 rounded-lg">1 Dry Vegetable</span>
                <span className="bg-black text-white py-1 px-2 rounded-lg">Rice/Chapatis</span>
              </div>
              <button onClick={handleproceed} className="w-full md:w-auto py-2 px-6 bg-black text-white rounded-lg text-center mt-4">Proceed</button>
            </div>
          </div>
        )}

        {selectedService === 'Cleaning' && (
         <div className="flex flex-col md:flex-row md:gap-10 py-5">
         <div id="options" className="flex-1 py-5">
           
           

           <h2 className="py-4">Select Worker Preference</h2>
           <div className="grid grid-cols-3  gap-4">
                <button
                  className={`flex items-center justify-center rounded-lg  shadow-lg bg-white p-2 md:p-3 transition-all duration-300 ease-in-out hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-600 ${isWorkerActive('Men')}`}
                  onClick={() => setWorkerPreference('Men')}
                >
                  <img src="https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/man-user-circle-black-icon.png" alt="men" className="h-[20px] justify-center pr-2" />
                  <span className="text-sm md:text-base font-medium"> Men</span>
                </button>
                <button
                 className={`flex items-center justify-center rounded-lg shadow-lg bg-white p-2 md:p-3 transition-all duration-300 ease-in-out hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-600 ${isWorkerActive('Women')}`}
                  onClick={() => setWorkerPreference('Women')}
                >
                  <img src="https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/woman-user-circle-black-icon.png" alt="women" className="h-[20px] justify-center pr-2" />
                  <span className="text-sm md:text-base font-medium">Women</span>
                </button>
                <button
                className={`flex items-center justify-center rounded-lg shadow-lg bg-white p-2 md:p-3 transition-all duration-300 ease-in-out hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-600 ${isWorkerActive('NoPreference')}`}
                 onClick={() => setWorkerPreference('NoPreference')}
                >
                 <img src="https://cdn-icons-png.freepik.com/256/9144/9144334.png?semt=ais_hybrid" alt="no preference" className="h-[20px] pr-2" />
                 <span className="text-sm md:text-base font-medium">No Preference</span>
                </button>
              </div>

           <h2 className="py-4">Home Size</h2>
           <div className="px-10"><CustomSlider min={1} max={5} label="BHK" marks={bhkMarks}
            onChange={handleBHKChange} /></div>
         </div>
         

         <div id="total" className="flex-1 py-5 border-l-2 border-black p-5 ">
           <h1>Total Cost</h1>
           
           <h2 className="py-5 flex "><img src="Rupee.png" className='h-10 pr-5 ' alt="Rs" />   <b className='text-4xl text-sky-400 text-center' >{getBHKCost()}</b></h2>
           <h1 className="py-2 text-lg font-bold">Include</h1>
           <div className="flex flex-wrap gap-2 py-2">
             <span className="bg-black text-white py-1 px-2 rounded-lg">Mopping</span>
             <span className="bg-black text-white py-1 px-2 rounded-lg">Swipping</span>
             <span className="bg-black text-white py-1 px-2 rounded-lg">Basic Cleaning</span>
           </div>
           <button onClick={handleproceed} className="w-full md:w-auto py-2 px-6 bg-black text-white rounded-lg text-center mt-4">Proceed</button>
         </div>
       </div>
        )}
{/* Cooking + Cleaning */}
{selectedService === 'Cooking + Cleaning' && (
  <div className="flex flex-col md:flex-row md:gap-10 py-5">
    <div id="options" className="flex-1 py-5">
      <h2 className="pb-4">Select Food Preference</h2>
      <div className="grid grid-cols-3 gap-4">
                <button
                   className={`flex items-center justify-center rounded-lg shadow-lg bg-white p-2 md:p-3 transition-all duration-300 ease-in-out hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-600 ${isFoodActive('Veg')}`}
                  onClick={() => setFoodPreference('Veg')}
                >
                  <img src="healthy.png" alt="veg" className="h-[20px] pr-2" />
                  <span className="text-sm md:text-base font-medium">Veg</span>
                </button>
                <button
                   className={`flex items-center justify-center rounded-lg shadow-lg bg-white p-2 md:p-3 transition-all duration-300 ease-in-out hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-600 ${isFoodActive('NonVeg')}`}
                  onClick={() => setFoodPreference('NonVeg')}
                >
                  <img src="no-meat.png" alt="non veg" className="h-[20px] pr-2" />
                  <span className="text-sm md:text-base font-medium">Non Veg</span>
                </button>
                <button
                  className={`flex items-center justify-center rounded-lg shadow-lg bg-white p-2 md:p-3 transition-all duration-300 ease-in-out hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-600 ${isFoodActive('Veg+NonVeg')}`}
                  onClick={() => setFoodPreference('Veg+NonVeg')}
                >
                  <img src="healthy.png" alt="veg" className="h-[20px] pr-2" />
                  <span className="text-sm md:text-base font-medium">Veg + Non Veg</span>
                </button>
              </div>

              
      <h2 className="py-4">Select Worker Preference</h2>
      <div className="grid grid-cols-3  gap-4">
                <button
                  className={`flex items-center justify-center rounded-lg  shadow-lg bg-white p-2 md:p-3 transition-all duration-300 ease-in-out hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-600 ${isWorkerActive('Men')}`}
                  onClick={() => setWorkerPreference('Men')}
                >
                  <img src="https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/man-user-circle-black-icon.png" alt="men" className="h-[20px] justify-center pr-2" />
                  <span className="text-sm md:text-base font-medium"> Men</span>
                </button>
                <button
                 className={`flex items-center justify-center rounded-lg shadow-lg bg-white p-2 md:p-3 transition-all duration-300 ease-in-out hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-600 ${isWorkerActive('Women')}`}
                  onClick={() => setWorkerPreference('Women')}
                >
                  <img src="https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/woman-user-circle-black-icon.png" alt="women" className="h-[20px] justify-center pr-2" />
                  <span className="text-sm md:text-base font-medium">Women</span>
                </button>
                <button
                className={`flex items-center justify-center rounded-lg shadow-lg bg-white p-2 md:p-3 transition-all duration-300 ease-in-out hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-600 ${isWorkerActive('NoPreference')}`}
                 onClick={() => setWorkerPreference('NoPreference')}
                >
                 <img src="https://cdn-icons-png.freepik.com/256/9144/9144334.png?semt=ais_hybrid" alt="no preference" className="h-[20px] pr-2" />
                 <span className="text-sm md:text-base font-medium">No Preference</span>
                </button>
              </div>

      <h2 className="py-4">Select Members</h2>
      <div className="px-10">
        <CustomSlider
          min={1}
          max={5}
          label="Members"
          marks={memberMarks}
          onChange={handleMemberChange}
        />
      </div>

      <h2 className="py-4">Home Size</h2>
      <div className="px-10">
        <CustomSlider
          min={1}
          max={5}
          label="BHK"
          marks={bhkMarks}
          onChange={handleBHKChange}
        />
      </div>
    </div>

    <div id="total" className="flex-1 py-5 border-l-2 border-black p-5">
      <h1>Total Cost</h1>
      <h2 className="py-5 flex">
        <img src="Rupee.png" className="h-10 pr-5" alt="Rs" />
        <b className="text-4xl text-sky-400 text-center">
          {getMemberCost() + getBHKCost()}
        </b>
      </h2>
      <h1 className="py-2 text-lg font-bold">Includes</h1>
      <div className="flex flex-wrap gap-2 py-2">
        <span className="bg-black text-white py-1 px-2 rounded-lg">1 Daal/lentil</span>
        <span className="bg-black text-white py-1 px-2 rounded-lg">1 Dry Vegetable</span>
        <span className="bg-black text-white py-1 px-2 rounded-lg">Rice/Chapatis</span>
        <span className="bg-black text-white py-1 px-2 rounded-lg">Mopping</span>
        <span className="bg-black text-white py-1 px-2 rounded-lg">Swiping</span>
        <span className="bg-black text-white py-1 px-2 rounded-lg">Basic Cleaning</span>
      </div>
      <button onClick={handleproceed} className="w-full md:w-auto py-2 px-6 bg-black text-white rounded-lg text-center mt-4">
        Proceed
      </button>
    </div>
  </div>
)}

      </div>

      <div id="footer">
        <Footer />
      </div>
    </>
  );
};

export default Instant;

