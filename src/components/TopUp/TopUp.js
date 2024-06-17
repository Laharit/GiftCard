import React, { useState } from 'react';

const TopUpCard = () => {
  const [topUpAmount, setTopUpAmount] = useState('');

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-700 to-blue-500 p-6">
      <div className="bg-white rounded-2xl p-6 w-full max-w-md shadow-lg">
        <h2 className="text-lg font-semibold text-center text-gray-700 mb-4">Card top-up</h2>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Top up amount</label>
          <div className="relative">
            <input 
              type="number" 
              value={topUpAmount} 
              onChange={(e) => setTopUpAmount(e.target.value)} 
              className="w-full pr-2 border border-gray-300 rounded-lg pr-12 text-black" // <-- Ensure text color is black
              placeholder="Enter amount in AUD" style={{fontSize:'20px',padding:'8px'}}
            />
           
          </div>
        </div>
        <div className="bg-gray-100 rounded-lg p-4 mb-4">
          <p className="text-sm text-gray-700">Transactions details</p>
          <p className="text-sm text-gray-700 mt-2">Service fee 3%</p>
          <p className="text-sm text-gray-700 mt-2">Card load limit</p>
          <div className="bg-gray-300 h-2 rounded-full mt-1">
            <div className="bg-purple-700 h-2 w-1/3 rounded-full"></div>
          </div>
          <p className="text-sm text-gray-700 mt-2">Load $1500</p>
        </div>
        
        <button 
          className="w-full py-2 bg-gradient-to-br from-purple-700 to-blue-500 text-white rounded-lg hover:from-purple-600 hover:to-blue-400"
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default TopUpCard;
