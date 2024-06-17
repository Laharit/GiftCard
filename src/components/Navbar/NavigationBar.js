import React from 'react';

const NavigationBar = ({ activeTab, setActiveTab }) => {
  return (
    <div className="flex justify-around bg-gray-800 w-full py-3">
      {['Top Up', 'Apple Wallet', 'Google Wallet', 'History'].map(tab => (
        <div
          key={tab}
          className={`flex flex-col items-center cursor-pointer ${activeTab === tab ? 'text-green-500' : 'text-white'}`}
          onClick={() => setActiveTab(tab)}
        >
          <div className="mb-1">{tab === 'Top Up' ? '📇' : tab === 'History' ? '💱' : tab === 'Google Wallet' ? '👛' : '⚙️'}</div>
          <div>{tab}</div>
        </div>
      ))}
    </div>
  );
};

export default NavigationBar;
