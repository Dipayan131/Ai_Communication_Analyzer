import React from 'react';

const Card = ({ time, onDetailsClick }) => {
  return (
    <div className="border rounded-md shadow-md p-4 flex flex-col items-center justify-between bg-white">
      <div className="flex flex-col items-center">
        <div className="mb-2">
          <img src="/book-icon.png" alt="Book Icon" className="w-6 h-6" />
        </div>
        <p className="text-gray-600">{time} min</p>
      </div>
      <button 
        className="mt-4 bg-white border border-black rounded-md px-4 py-2 hover:bg-gray-100" 
        onClick={onDetailsClick}
      >
        Details
      </button>
    </div>
  );
};

export default Card;