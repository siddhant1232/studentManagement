import React from 'react';

const Features: React.FC = () => {
  return (
    <section id="features" className="py-20 bg-white mb-[10px]">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Features</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-4 border rounded-lg shadow-lg text-center">
            <h3 className="font-bold text-xl mb-2">Expense Tracking</h3>
            <p>Track your daily, weekly, and monthly expenses with ease.</p>
          </div>
          <div className="p-4 border rounded-lg shadow-lg text-center">
            <h3 className="font-bold text-xl mb-2">Budget Management</h3>
            <p>Set budgets and achieve your financial goals efficiently.</p>
          </div>
          <div className="p-4 border rounded-lg shadow-lg text-center">
            <h3 className="font-bold text-xl mb-2">Savings Insights</h3>
            <p>Get insights on how to save and invest for the future.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;