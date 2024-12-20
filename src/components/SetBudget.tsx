import React, { useState } from "react";

const SetBudget: React.FC = () => {
  // States for the budget, amount used yesterday, and total savings
  const [budget, setBudget] = useState<number>(500); // Default budget set to 500
  const [amountUsedYesterday, setAmountUsedYesterday] = useState<number>(50); // Example amount used yesterday
  const [totalSavings, setTotalSavings] = useState<number>(200); // Example savings
  
  const [isEditing, setIsEditing] = useState<boolean>(false); // State to toggle editing mode
  const [newBudget, setNewBudget] = useState<number>(budget); // State to store the new budget

  // Calculate budget left
  const budgetLeft = budget - amountUsedYesterday - totalSavings;

  const handleSetBudget = () => {
    // Update the budget with the new value entered by the user
    setBudget(newBudget);
    setIsEditing(false); // Exit editing mode
  };

  return (
    <div className="min-h-screen bg-gray-900 p-6 flex">
      {/* Left Section: Budget Tracker */}
      <div className="w-full lg:w-1/2 bg-gray-800 text-white p-6 rounded-lg shadow-lg flex flex-col gap-6">
        {/* Budget Tracker Box */}
        <div className="bg-gray-700 p-6 rounded-lg border-2 border-gray-600">
          {/* Total Budget For Month */}
          <div className="mb-4">
            <h2 className="text-lg font-medium">Total Budget For Month</h2>
            {isEditing ? (
              // Input field for setting the new budget when editing
              <div className="flex items-center gap-4">
                <input
                  type="number"
                  className="p-2 border rounded text-black"
                  value={newBudget}
                  onChange={(e) => setNewBudget(Number(e.target.value))}
                />
                <button
                  className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700"
                  onClick={handleSetBudget}
                >
                  Set Budget
                </button>
              </div>
            ) : (
              <p className="text-2xl font-semibold text-green-400">${budget}</p>
            )}
          </div>
          
          {/* Amount Directory */}
          <div className="mt-4">
            <h3 className="text-lg font-medium mb-2">Amount Directory</h3>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-gray-300">Amount Used Yesterday</span>
                <span className="text-gray-400">${amountUsedYesterday}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Budget Left</span>
                <span className="text-gray-400">${budgetLeft}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Total Savings</span>
                <span className="text-gray-400">${totalSavings}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Set Budget Button */}
        {!isEditing && (
          <button
            className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 mt-6"
            onClick={() => setIsEditing(true)} // Enable editing when clicked
          >
            Set Budget
          </button>
        )}
      </div>

      {/* Right Section */}
      <div className="w-full lg:w-1/2 pl-6">
        {/* You can add more content here if needed */}
      </div>
    </div>
  );
};

export default SetBudget;
