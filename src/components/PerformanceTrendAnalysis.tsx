import React from 'react';

const PerformanceTrendAnalysis = ({ budget, amountUsed }: { budget: number, amountUsed: number }) => {
  const performance = ((budget - amountUsed) / budget) * 100;

  return (
    <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold">Performance Trend Analysis</h2>
      <p className="mt-4">Budget Remaining: {budget - amountUsed}</p>
      <p>Performance: {performance.toFixed(2)}%</p>
    </div>
  );
};

export default PerformanceTrendAnalysis;
