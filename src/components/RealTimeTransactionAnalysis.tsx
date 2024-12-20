import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';

const RealTimeTransactionAnalysis = () => {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'], // Example months
    datasets: [
      {
        label: 'Expenses',
        data: [100, 200, 150, 300, 250], // Example data points
        fill: false,
        borderColor: 'rgba(75,192,192,1)',
        tension: 0.1,
      },
    ],
  };

  return (
    <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold">Real-Time Transaction Analysis</h2>
      <Line data={data} />
    </div>
  );
};

export default RealTimeTransactionAnalysis;
