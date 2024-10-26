// src/Components/UserTypeModal.jsx
import React from 'react';

const UserTypeModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg max-w-xs text-center">
        <h2 className="text-xl font-bold mb-4">Are you a...</h2>
        <button className="bg-green-500 text-white px-4 py-2 rounded mb-2 w-full">
          Customer
        </button>
        <button className="bg-blue-500 text-white px-4 py-2 rounded w-full">
          Maid
        </button>
        <button onClick={onClose} className="mt-4 text-gray-600">
          Close
        </button>
      </div>
    </div>
  );
};

export default UserTypeModal;
