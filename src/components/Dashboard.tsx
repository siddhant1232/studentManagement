import React, { useState } from "react";
import { Line, Pie } from "react-chartjs-2";
import SetBudget from "./SetBudget"; // Import SetBudget component
import RealTimeTransactionAnalysis from "./RealTimeTransactionAnalysis"; // Import RealTimeTransactionAnalysis component
import PerformanceTrendAnalysis from "./PerformanceTrendAnalysis"; // Import PerformanceTrendAnalysis component
import Footer from "./Footer"; // Import Footer component
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

interface Transaction {
  type: "income" | "expense";
  amount: number;
  category: string;
}

const Dashboard: React.FC = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([
    { type: "income", amount: 800, category: "Salary" },
    { type: "expense", amount: 200, category: "Food" },
    { type: "expense", amount: 300, category: "Rent" },
    { type: "income", amount: 400, category: "Freelance" },
  ]);

  const [isModalOpen, setModalOpen] = useState(false);
  const [isBudgetTrackerVisible, setBudgetTrackerVisible] = useState(false);
  const [isSettingBudget, setIsSettingBudget] = useState(false); // State to control the budget setting form

  const [formData, setFormData] = useState<{
    type: Transaction["type"];
    amount: string;
    category: string;
  }>({ type: "income", amount: "", category: "" });

  const [error, setError] = useState<string>("");

  const [budget, setBudget] = useState<number | null>(null); // State to hold the budget

  // Calculate totals
  const totalIncome = transactions
    .filter((t) => t.type === "income")
    .reduce((sum, t) => sum + t.amount, 0);

  const totalExpenses = transactions
    .filter((t) => t.type === "expense")
    .reduce((sum, t) => sum + t.amount, 0);

  const savings = totalIncome - totalExpenses;

  // Chart data
  const lineData = {
    labels: transactions.map((_, i) => `Transaction ${i + 1}`),
    datasets: [
      {
        label: "Income",
        data: transactions.map((t) => (t.type === "income" ? t.amount : 0)),
        borderColor: "#4F46E5",
        backgroundColor: "rgba(79, 70, 229, 0.3)",
        fill: true,
        tension: 0.3,
      },
      {
        label: "Expenses",
        data: transactions.map((t) => (t.type === "expense" ? t.amount : 0)),
        borderColor: "#EF4444",
        backgroundColor: "rgba(239, 68, 68, 0.3)",
        fill: true,
        tension: 0.3,
      },
      {
        label: "Budget",
        data: transactions.map(() => budget ?? 0), // Display the budget on the graph
        borderColor: "#10B981",
        backgroundColor: "rgba(16, 185, 129, 0.3)",
        fill: true,
        tension: 0.3,
      },
    ],
  };

  const pieData = {
    labels: [...new Set(transactions.map((t) => t.category))],
    datasets: [
      {
        data: transactions.reduce<{ labels: string[]; data: number[] }>(
          (acc, t) => {
            const index = acc.labels.indexOf(t.category);
            if (index > -1) {
              acc.data[index] += t.amount;
            } else {
              acc.labels.push(t.category);
              acc.data.push(t.amount);
            }
            return acc;
          },
          { labels: [], data: [] }
        ).data,
        backgroundColor: ["#3B82F6", "#F59E0B", "#10B981", "#EF4444", "#6B7280"],
        borderWidth: 2,
      },
    ],
  };

  // Add Transaction
  const addTransaction = () => {
    if (!formData.amount || !formData.category) {
      setError("Please fill in all fields.");
      return;
    }
    setError("");
    setTransactions([
      ...transactions,
      {
        type: formData.type as Transaction["type"],
        amount: parseFloat(formData.amount),
        category: formData.category,
      },
    ]);
    setFormData({ type: "income", amount: "", category: "" });
    setModalOpen(false);
  };

  // Handle setting budget
  const setBudgetAmount = (amount: string) => {
    const parsedAmount = parseFloat(amount);
    if (isNaN(parsedAmount) || parsedAmount <= 0) {
      setError("Please enter a valid budget amount.");
      return;
    }
    setBudget(parsedAmount);
    setError("");
  };

  return (
    <div className="min-h-screen bg-black p-6 max-w-screen-xl mx-auto flex flex-col">
      {/* Navbar */}
      <header className="flex justify-between items-center mb-6 bg-black p-4 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-white">Dashboard</h1>
        <div className="flex gap-4">
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
            onClick={() => setBudgetTrackerVisible(true)}
          >
            Report
          </button>
        </div>
      </header>

      {/* Back to Dashboard button */}
      {isBudgetTrackerVisible && (
        <button
          onClick={() => setBudgetTrackerVisible(false)}
          className="bg-gray-600 text-white px-4 py-2 rounded-md mb-4"
        >
          Back to Dashboard
        </button>
      )}

      {/* Conditional Rendering */}
      {/* {isBudgetTrackerVisible ? (
        <section className="bg-gray-800 text-white p-6 rounded-lg shadow-md mb-6">
          <h2 className="text-lg font-bold mb-4">Budget sTracker Report</h2>
          <SetBudget
            setBudgetAmount={setBudgetAmount}
            budget={budget}
            setIsSettingBudget={setIsSettingBudget}
          />
          <RealTimeTransactionAnalysis transactions={transactions} />
          <PerformanceTrendAnalysis transactions={transactions} /> */}
        </section>
      ) : (
        <>
          {/* Transactions List */}
          <section className="bg-gray-800 text-white shadow rounded-lg p-6 mb-6">
            <h2 className="text-lg font-medium mb-4">Transaction History</h2>
            <div className="max-h-64 overflow-y-auto">
              {transactions.length === 0 ? (
                <p className="text-gray-500">No transactions available.</p>
              ) : (
                <ul className="space-y-4">
                  {transactions.map((t, index) => (
                    <li
                      key={index}
                      className={`p-4 rounded-md ${
                        t.type === "income"
                          ? "bg-green-900 text-green-300"
                          : "bg-red-900 text-red-300"
                      }`}
                    >
                      <div className="flex justify-between">
                        <span className="font-semibold capitalize">{t.category}</span>
                        <span>${t.amount.toFixed(2)}</span>
                      </div>
                      <small className="text-gray-400 capitalize">{t.type}</small>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </section>

          {/* Summary Section */}
          <section className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
            <div className="bg-gray-800 shadow rounded-lg p-6 text-white">
              <h2 className="text-lg font-medium">Total Income</h2>
              <p className="text-2xl font-semibold text-green-400">${totalIncome}</p>
            </div>
            <div className="bg-gray-800 shadow rounded-lg p-6 text-white">
              <h2 className="text-lg font-medium">Total Expenses</h2>
              <p className="text-2xl font-semibold text-red-400">${totalExpenses}</p>
            </div>
            <div className="bg-gray-800 shadow rounded-lg p-6 text-white">
              <h2 className="text-lg font-medium">Savings</h2>
              <p className="text-2xl font-semibold text-indigo-400">${savings}</p>
            </div>
          </section>

          {/* Charts Section */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            <div className="bg-gray-800 shadow rounded-lg p-6 text-white">
              <h2 className="text-lg font-medium mb-4">Income vs Expenses</h2>
              <Line data={lineData} />
            </div>
            <div className="bg-gray-800 shadow rounded-lg p-6 text-white">
              <h2 className="text-lg font-medium mb-4">Expense Breakdown</h2>
              <Pie data={pieData} />
            </div>
          </section>
        </>
      )}

      {/* Add Transaction Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
          role="dialog"
          aria-labelledby="add-transaction-title"
          aria-modal="true"
        >
          <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6">
            <h2 className="text-xl font-semibold mb-4" id="add-transaction-title">
              Add Transaction
            </h2>
            <div className="mb-4">
              <label htmlFor="transaction-type" className="block text-sm font-medium text-gray-700">
                Type
              </label>
              <select
                id="transaction-type"
                value={formData.type}
                onChange={(e) =>
                  setFormData({ ...formData, type: e.target.value as Transaction["type"] })
                }
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              >
                <option value="income">Income</option>
                <option value="expense">Expense</option>
              </select>
            </div>
            <div className="mb-4">
              <label htmlFor="amount" className="block text-sm font-medium text-gray-700">
                Amount
              </label>
              <input
                type="number"
                id="amount"
                value={formData.amount}
                onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="category" className="block text-sm font-medium text-gray-700">
                Category
              </label>
              <input
                type="text"
                id="category"
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
            </div>
            {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
            <div className="flex justify-end gap-4">
              <button
                onClick={() => setModalOpen(false)}
                className="px-4 py-2 text-sm text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300"
              >
                Cancel
              </button>
              <button
                onClick={addTransaction}
                className="px-4 py-2 text-sm text-white bg-blue-600 rounded-md hover:bg-blue-700"
              >
                Add Transaction
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Fixed Footer */}
      <Footer />
    </div>
  );
};

export default Dashboard;
