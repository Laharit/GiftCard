import React, { useState } from 'react';
import Carousel from './components/Card/CardCarousel';
import NavigationBar from './components/Navbar/NavigationBar';
import History from './components/Navbar/History';
import AppleWallet from './components/Navbar/AppleWallet';
import GoogleWallet from './components/Navbar/GoogleWallet';
const App = () => {
  const [activeTab, setActiveTab] = useState('Card');

  const renderContent = () => {
    switch (activeTab) {
      case 'Top Up':
        return <Carousel />;
      case 'History':
        return <History/>;
      case 'Apple Wallet':
        return <AppleWallet />;
      case 'Google Wallet':
        return <GoogleWallet/>;
      default:
        return <Carousel />;
    }
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center pt-5">
      
      <div className="flex-grow flex justify-center items-center w-full">
        {renderContent()}
        
      </div>
    
     
      <NavigationBar activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
};

export default App;
