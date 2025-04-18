import { useState } from "react";
import { FaExchangeAlt, FaMoneyBillWave, FaCreditCard, FaCopy, FaQrcode, FaArrowUp, FaArrowDown, FaSearch } from "react-icons/fa";
import { FiSend, FiUserPlus } from "react-icons/fi";
import { RiExchangeDollarFill } from "react-icons/ri";
import { motion, AnimatePresence } from "framer-motion";

const Dashboard = () => {
  const [showFullBalance, setShowFullBalance] = useState(false);

  // Sample data
  const exchangeRates = [
    { currency: "USD", rate: "1 USD = 1,200 NGN", trend: "up" },
    { currency: "EUR", rate: "1 EUR = 1,350 NGN", trend: "down" },
    { currency: "GBP", rate: "1 GBP = 1,500 NGN", trend: "up" },
  ];

  const recentTransactions = [
    { type: "credit", name: "Salary Deposit", amount: "₦250,000", date: "Today, 10:45 AM", icon: <FaMoneyBillWave className="text-emerald-500" /> },
    { type: "debit", name: "Transfer to John", amount: "₦50,000", date: "Yesterday, 2:30 PM", icon: <FiSend className="text-rose-500" /> },
    { type: "debit", name: "Electricity Bill", amount: "₦15,000", date: "Mar 15, 9:15 AM", icon: <FaCreditCard className="text-amber-500" /> },
  ];

  const quickActions = [
    { icon: <FiSend size={22} />, label: "Send Money", color: "bg-indigo-100 text-indigo-600" },
    { icon: <FaQrcode size={22} />, label: "Pay with QR", color: "bg-emerald-100 text-emerald-600" },
    { icon: <FiUserPlus size={22} />, label: "Add Beneficiary", color: "bg-violet-100 text-violet-600" },
    { icon: <FaExchangeAlt size={22} />, label: "Currency Swap", color: "bg-amber-100 text-amber-600" },
  ];

  return (
    <motion.div 
      className="flex-[4_4_0] mr-auto min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Header */}
      <div className="flex justify-between items-center mb-10">
        <motion.h1 
          className="text-3xl font-bold text-gray-900"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          Dashboard
        </motion.h1>
        <div className="relative w-80">
          <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search transactions..."
            className="w-full pl-12 pr-4 py-3 rounded-full border border-gray-200 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300"
          />
        </div>
      </div>

      {/* Account Summary */}
      <motion.div 
        className="bg-white rounded-2xl shadow-lg p-8 mb-8"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <div className="flex justify-between items-start mb-6">
          <div>
            <h2 className="text-gray-500 text-sm font-medium">Total Balance</h2>
            <div className="flex items-center mt-3">
              <AnimatePresence mode="wait">
                <motion.p
                  key={showFullBalance ? "visible" : "hidden"}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="text-4xl font-bold text-gray-900"
                >
                  {showFullBalance ? "₦1,245,876.50" : "₦•••••••"}
                </motion.p>
              </AnimatePresence>
              <button 
                onClick={() => setShowFullBalance(!showFullBalance)}
                className="ml-3 text-indigo-600 hover:text-indigo-800 text-sm font-medium transition-colors"
              >
                {showFullBalance ? "Hide" : "Show"}
              </button>
            </div>
            <p className="text-gray-500 text-sm mt-2">Arigo Pay •••• 4567</p>
          </div>
          <motion.button 
            className="flex items-center px-5 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition shadow-md"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaCopy className="mr-2" /> Copy Account No.
          </motion.button>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-4 gap-4 mt-8">
          {quickActions.map((action, index) => (
            <motion.button
              key={index}
              className={`flex flex-col items-center justify-center p-5 rounded-xl ${action.color} hover:shadow-lg transition-all duration-300`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
            >
              <div className="p-3 rounded-full bg-white shadow-sm mb-3">{action.icon}</div>
              <span className="text-sm font-semibold">{action.label}</span>
            </motion.button>
          ))}
        </div>
      </motion.div>

      {/* Exchange Rates and Recent Transactions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        {/* Exchange Rates */}
        <motion.div 
          className="bg-white rounded-2xl shadow-lg p-8 col-span-1"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
        >
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-semibold text-gray-900">Exchange Rates</h2>
            <RiExchangeDollarFill className="text-indigo-600" size={22} />
          </div>
          <div className="space-y-5">
            {exchangeRates.map((rate, index) => (
              <motion.div 
                key={index} 
                className="flex justify-between items-center"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
              >
                <span className="font-medium text-gray-900">{rate.currency}</span>
                <div className="flex items-center">
                  <span className="text-gray-600 mr-2">{rate.rate}</span>
                  {rate.trend === "up" ? (
                    <FaArrowUp className="text-emerald-500" />
                  ) : (
                    <FaArrowDown className="text-rose-500" />
                  )}
                </div>
              </motion.div>
            ))}
          </div>
          <motion.button 
            className="w-full mt-6 py-3 text-indigo-600 font-semibold rounded-lg border border-indigo-600 hover:bg-indigo-50 transition"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            View All Rates
          </motion.button>
        </motion.div>

        {/* Recent Transactions */}
        <motion.div 
          className="bg-white rounded-2xl shadow-lg p-8 col-span-2"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
        >
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-semibold text-gray-900">Recent Transactions GodMode Recent Transactions</h2>
            <motion.button 
              className="text-indigo-600 hover:text-indigo-800 font-semibold text-sm"
              whileHover={{ scale: 1.05 }}
            >
              View All
            </motion.button>
          </div>
          <div className="space-y-4">
            {recentTransactions.map((transaction, index) => (
              <motion.div 
                key={index} 
                className="flex items-center p-4 hover:bg-gray-50 rounded-lg transition"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
              >
                <div className="p-3 rounded-full bg-gray-100 mr-4">
                  {transaction.icon}
                </div>
                <div className="flex-1">
                  <h3 className="font-medium text-gray-900">{transaction.name}</h3>
                  <p className="text-sm text-gray-500">{transaction.date}</p>
                </div>
                <div className={`font-semibold ${transaction.type === "credit" ? "text-emerald-600" : "text-rose-600"}`}>
                  {transaction.amount}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Transfer Money Section */}
      <motion.div 
        className="bg-white rounded-2xl shadow-lg p-8"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <h2 className="text-lg font-semibold text-gray-900 mb-6">Transfer Money</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="col-span-1">
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-semibold mb-2">From</label>
              <select className="w-full p-3 border border-gray-200 rounded-lg bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition">
                <option>Arigo Pay Account (₦1,245,876.50)</option>
                <option>Savings Account (₦500,000.00)</option>
              </select>
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-semibold mb-2">To</label>
              <select className="w-full p-3 border border-gray-200 rounded-lg bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition">
                <option>Select beneficiary</option>
                <option>John Doe (Zenith Bank •••• 1234)</option>
                <option>Jane Smith (GTBank •••• 5678)</option>
              </select>
            </div>
          </div>
          <div className="col-span-1">
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-semibold mb-2">Amount</label>
              <input
                type="text"
                placeholder="0.00"
                className="w-full p-3 border border-gray-200 rounded-lg bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-semibold mb-2">Narration</label>
              <input
                type="text"
                placeholder="Optional"
                className="w-full p-3 border border-gray-200 rounded-lg bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
              />
            </div>
          </div>
          <div className="col-span-1 flex flex-col justify-between">
            <div>
              <p className="text-gray-500 text-sm mb-1">Transfer Fee</p>
              <p className="font-semibold text-gray-900">₦50.00</p>
            </div>
            <motion.button 
              className="w-full py-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition font-semibold shadow-md"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send Money
            </motion.button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Dashboard;