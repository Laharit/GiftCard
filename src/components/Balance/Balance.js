import React from 'react';
import './Balance.css';

const Balance = () => {
  const balanceAmount = 58000.75; // Example balance amount
  const availableAmount = 100000;
  const percentage = (balanceAmount / availableAmount) * 100;

  return (
    <div className="balance-container">
      <div className="balance-item">
        <div className="balance-details">
          <p className="balance-para">Used</p>
          <h6 className="balance-amount">${balanceAmount.toFixed(2)}</h6>
        </div>
        <div className="balance-details" style={{ alignItems: 'flex-end' }}>
          <p className="balance-para">Available</p>
          <h6 className="balance-amount">${availableAmount.toFixed(2)}</h6>
        </div>
      </div>
      <div className="slider-track">
        <div className="slider-fill" style={{ width: `${percentage}%` }}></div>
      </div>
    </div>
  );
};

export default Balance;
