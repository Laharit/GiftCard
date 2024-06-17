import React from 'react';

const Card = ({ card }) => {
  return (
    <>
    <h1 style={{textAlign:'center',fontSize:'30px'}}>Gift Card</h1>
      <div className="bg-gray-800 rounded-lg p-5 w-full max-w-md mb-[30px]" >
        <div className="mb-5">
          <div className="text-2xl font-bold mb-2">{card.balance || '$10,300'}</div>
          <div className="mb-2">{card.number}</div>
          <div className="flex justify-between">
            <div>{card.expiry}</div>
            <div>CVV: ***</div>
          </div>
        </div>
        <button className="w-full py-2 bg-green-600 text-white rounded hover:bg-green-700">
          Top Up Card
        </button>
      </div>
    </>
  );
};

export default Card;
