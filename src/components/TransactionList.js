import React from 'react';

const transactions = [
  { id: 1, type: 'Purchase', place: 'Shop 1', category: 'Food and Market', amount: -120.86 },
  { id: 2, type: 'Top-up', method: 'Bank Transfer', amount: 10000 },
  { id: 3, type: 'Top-up', method: 'Bank Transfer', amount: 10000 },
  { id: 4, type: 'Purchase', place: 'Shop 1', category: 'Food and Market', amount: -120.86 },
  { id: 5, type: 'Purchase', place: 'Shop 1', category: 'Food and Market', amount: -120.86 },
  { id: 6, type: 'Top-up', method: 'Bank Transfer', amount: 10000 }
];

const TransactionList = () => {
  return (
    <div className="w-full max-w-md p-3">
      {transactions.map(transaction => (
        <div key={transaction.id} className={`flex justify-between py-2 border-b border-gray-700 ${transaction.amount < 0 ? 'text-red-500' : 'text-green-500'}`}>
          <div>
            <div>{transaction.place} {transaction.type}</div>
            <div>{transaction.category || transaction.method}</div>
          </div>
          <div>{transaction.amount.toFixed(2)}</div>
        </div>
      ))}
    </div>
  );
};

export default TransactionList;
