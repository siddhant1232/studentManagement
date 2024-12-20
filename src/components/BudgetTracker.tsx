import React, { useState } from 'react';

const BudgetTracker = () => {
  const [budget, setBudget] = useState<number>(0);
  const [amountUsed, setAmountUsed] = useState<number>(0);

  const budgetLeft = budget - amountUsed;

  return (
    <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold">Budget Tracker</h2>
      <div className="mt-4">
        <p>Monthly Budget: ${budget}</p>
        <p>Amount Used: ${amountUsed}</p>
        <p>Remaining Budget: ${budgetLeft}</p>
        <div className="mt-4">
          <button
            className="bg-blue-600 px-4 py-2 rounded text-white hover:bg-blue-500"
            onClick={() => setBudget(budget + 100)} // Example to add budget
          >
            Add $100 to Budget
          </button>
        </div>
      </div>
    </div>
  );
};

export default BudgetTracker;
