import React from 'react';

const RoleSelectionOverlay = ({ onSelectRole }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-4/5 max-w-md text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Select Your Role</h2>
        <p className="text-gray-600 mb-6">
          Please choose whether you are a customer looking for household help or a maid looking to join our platform.
        </p>

        <div className="space-y-4">
          <button
            onClick={() => onSelectRole('customer')}
            className="w-full bg-indigo-600 text-white py-2 rounded-lg font-semibold hover:bg-indigo-700"
          >
            I am a Customer
          </button>
          <button
            onClick={() => onSelectRole('maid')}
            className="w-full bg-red-600 text-white py-2 rounded-lg font-semibold hover:bg-red-700"
          >
            I am a Maid
          </button>
        </div>
      </div>
    </div>
  );
};

export default RoleSelectionOverlay;
