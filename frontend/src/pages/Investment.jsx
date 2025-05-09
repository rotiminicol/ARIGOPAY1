"use client"

import { useState } from "react"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts"
import { PieChart, Pie, Cell } from "recharts"
import {
  DollarSign,
  TrendingUp,
  Activity,
  Info,
  AlertCircle,
  PlusCircle,
  Bell,
  User,
  ChevronDown,
  Filter,
  Download,
  Calendar,
} from "lucide-react"

const Investment = () => {
  const [activeTab, setActiveTab] = useState("portfolio")

  const performanceData = [
    { month: "Jan", value: 4000 },
    { month: "Feb", value: 3800 },
    { month: "Mar", value: 4200 },
    { month: "Apr", value: 5000 },
    { month: "May", value: 4700 },
    { month: "Jun", value: 5200 },
    { month: "Jul", value: 5500 },
  ]

  const portfolioData = [
    { name: "Stocks", value: 45 },
    { name: "Bonds", value: 25 },
    { name: "ETFs", value: 20 },
    { name: "Cash", value: 10 },
  ]

  const COLORS = ["#0070f3", "#38bdf8", "#3b82f6", "#1d4ed8"]

  const investmentProducts = [
    {
      id: 1,
      name: "Growth Stock Fund",
      type: "Stock",
      risk: "High",
      return: "+12.4%",
      minInvestment: "$500",
    },
    {
      id: 2,
      name: "Income Bond Fund",
      type: "Bond",
      risk: "Low",
      return: "+3.2%",
      minInvestment: "$1,000",
    },
    {
      id: 3,
      name: "Technology ETF",
      type: "ETF",
      risk: "Medium",
      return: "+15.7%",
      minInvestment: "$250",
    },
    {
      id: 4,
      name: "Balanced Portfolio",
      type: "Mixed",
      risk: "Medium",
      return: "+8.5%",
      minInvestment: "$2,000",
    },
  ]

  const transactionHistory = [
    {
      date: "Apr 12, 2025",
      time: "10:24 AM",
      type: "Buy",
      investment: "Tech Growth Fund",
      amount: "$2,000.00",
      status: "Completed",
    },
    {
      date: "Mar 10, 2025",
      time: "2:15 PM",
      type: "Buy",
      investment: "S&P 500 Index",
      amount: "$1,500.00",
      status: "Completed",
    },
    {
      date: "Feb 22, 2025",
      time: "9:45 AM",
      type: "Buy",
      investment: "Corporate Bond Fund",
      amount: "$3,000.00",
      status: "Completed",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <header className="bg-white border-b border-blue-100 sticky top-0 z-10">
        <div className="container mx-auto px-4 py-3 sm:py-4">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div>
              <h1 className="text-xl sm:text-2xl font-bold text-blue-900">Investment Center</h1>
              <p className="text-blue-600 text-sm sm:text-base">
                Manage your investments and explore new opportunities
              </p>
            </div>
            <div className="flex items-center space-x-4 sm:space-x-6">
              <button className="p-2 rounded-full bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors">
                <Bell size={18} />
              </button>
              <div className="flex items-center space-x-2">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-blue-600 flex items-center justify-center text-white">
                  <User size={14} />
                </div>
                <span className="hidden sm:inline text-blue-900 font-medium text-sm">John Doe</span>
                <ChevronDown size={14} className="text-blue-400" />
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-4 sm:py-6">
        <div className="grid grid-cols-1 gap-4 sm:gap-6 mb-6 sm:mb-8">
          <div className="bg-white rounded-xl shadow-sm border border-blue-100 p-4 sm:p-6 flex items-center transition-transform hover:scale-[1.02]">
            <div className="rounded-full bg-blue-100 p-3 sm:p-4 mr-4 sm:mr-5">
              <DollarSign className="text-blue-600" size={20} />
            </div>
            <div>
              <p className="text-blue-500 text-xs sm:text-sm font-medium">Total Invested</p>
              <p className="text-xl sm:text-2xl font-bold text-blue-900">$24,500.00</p>
              <p className="text-xs text-blue-400">Updated today</p>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-sm border border-blue-100 p-4 sm:p-6 flex items-center transition-transform hover:scale-[1.02]">
            <div className="rounded-full bg-green-100 p-3 sm:p-4 mr-4 sm:mr-5">
              <TrendingUp className="text-green-600" size={20} />
            </div>
            <div>
              <p className="text-blue-500 text-xs sm:text-sm font-medium">Total Returns</p>
              <p className="text-xl sm:text-2xl font-bold text-green-600">+$2,345.00</p>
              <p className="text-xs text-green-500">+9.6% overall</p>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-sm border border-blue-100 p-4 sm:p-6 flex items-center transition-transform hover:scale-[1.02]">
            <div className="rounded-full bg-blue-100 p-3 sm:p-4 mr-4 sm:mr-5">
              <Activity className="text-blue-600" size={20} />
            </div>
            <div>
              <p className="text-blue-500 text-xs sm:text-sm font-medium">Active Investments</p>
              <p className="text-xl sm:text-2xl font-bold text-blue-900">7</p>
              <p className="text-xs text-blue-400">Across 4 categories</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-blue-100 mb-6 sm:mb-8">
          <div className="flex flex-wrap border-b border-blue-100 px-4">
            <button
              className={`py-3 px-4 sm:px-6 font-medium text-xs sm:text-sm relative ${
                activeTab === "portfolio"
                  ? "text-blue-600 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-blue-600"
                  : "text-blue-400 hover:text-blue-600"
              }`}
              onClick={() => setActiveTab("portfolio")}
            >
              My Portfolio
            </button>
            <button
              className={`py-3 px-4 sm:px-6 font-medium text-xs sm:text-sm relative ${
                activeTab === "market"
                  ? "text-blue-600 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-blue-600"
                  : "text-blue-400 hover:text-blue-600"
              }`}
              onClick={() => setActiveTab("market")}
            >
              Market & Products
            </button>
            <button
              className={`py-3 px-4 sm:px-6 font-medium text-xs sm:text-sm relative ${
                activeTab === "history"
                  ? "text-blue-600 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-blue-600"
                  : "text-blue-400 hover:text-blue-600"
              }`}
              onClick={() => setActiveTab("history")}
            >
              Transaction History
            </button>
          </div>

          <div className="p-4 sm:p-6">
            {activeTab === "portfolio" && (
              <div className="grid grid-cols-1 gap-4 sm:gap-6">
                <div className="bg-white rounded-xl shadow-sm border border-blue-100 p-4 sm:p-6">
                  <div className="flex justify-between items-center mb-4 sm:mb-6">
                    <h2 className="text-base sm:text-lg font-semibold text-blue-900">
                      Portfolio Allocation
                    </h2>
                    <button className="text-blue-500 hover:text-blue-700 text-xs sm:text-sm font-medium flex items-center">
                      <Filter size={14} className="mr-1" /> Filter
                    </button>
                  </div>
                  <div className="h-64 sm:h-72">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={portfolioData}
                          cx="50%"
                          cy="50%"
                          innerRadius={50}
                          outerRadius={80}
                          fill="#8884d8"
                          paddingAngle={2}
                          dataKey="value"
                          label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                          labelLine={{ stroke: "#64748b", strokeWidth: 1 }}
                        >
                          {portfolioData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                          ))}
                        </Pie>
                        <Tooltip
                          contentStyle={{
                            backgroundColor: "white",
                            borderRadius: "8px",
                            border: "1px solid #e2e8f0",
                            fontSize: "12px",
                          }}
                        />
                        <Legend
                          layout="horizontal"
                          verticalAlign="bottom"
                          align="center"
                          wrapperStyle={{ paddingTop: "16px", fontSize: "12px" }}
                        />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-sm border border-blue-100 p-4 sm:p-6">
                  <div className="flex justify-between items-center mb-4 sm:mb-6">
                    <h2 className="text-base sm:text-lg font-semibold text-blue-900">Performance</h2>
                    <div className="flex items-center space-x-2">
                      <button className="text-blue-500 hover:text-blue-700 text-xs sm:text-sm font-medium flex items-center">
                        <Download size={14} className="mr-1" /> Export
                      </button>
                      <button className="text-blue-500 hover:text-blue-700 text-xs sm:text-sm font-medium flex items-center">
                        <Calendar size={14} className="mr-1" /> 6M
                      </button>
                    </div>
                  </div>
                  <div className="h-64 sm:h-72">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart
                        data={performanceData}
                        margin={{ top: 5, right: 20, left: 10, bottom: 25 }}
                      >
                        <defs>
                          <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#0070f3" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#0070f3" stopOpacity={0} />
                          </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" stroke="#f0f4f8" />
                        <XAxis
                          dataKey="month"
                          tick={{ fill: "#64748b", fontSize: 12 }}
                          axisLine={{ stroke: "#e2e8f0" }}
                        />
                        <YAxis
                          tick={{ fill: "#64748b", fontSize: 12 }}
                          axisLine={{ stroke: "#e2e8f0" }}
                        />
                        <Tooltip
                          contentStyle={{
                            backgroundColor: "white",
                            borderRadius: "8px",
                            border: "1px solid #e2e8f0",
                            fontSize: "12px",
                          }}
                        />
                        <Legend wrapperStyle={{ paddingTop: "10px", fontSize: "12px" }} />
                        <Line
                          type="monotone"
                          dataKey="value"
                          stroke="#0070f3"
                          strokeWidth={2}
                          activeDot={{ r: 6 }}
                          dot={{ stroke: "#0070f3", strokeWidth: 2, r: 3, fill: "white" }}
                          fillOpacity={1}
                          fill="url(#colorValue)"
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-sm border border-blue-100 p-4 sm:p-6">
                  <div className="flex justify-between items-center mb-4 sm:mb-6">
                    <h2 className="text-base sm:text-lg font-semibold text-blue-900">
                      Your Investments
                    </h2>
                    <button className="px-3 py-1 sm:px-4 sm:py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-xs sm:text-sm font-medium flex items-center">
                      <PlusCircle size={14} className="mr-1 sm:mr-2" /> Add Investment
                    </button>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-blue-100">
                      <thead>
                        <tr>
                          <th className="px-4 sm:px-6 py-2 sm:py-3 text-left text-xs font-semibold text-blue-500 uppercase tracking-wider">
                            Investment
                          </th>
                          <th className="px-4 sm:px-6 py-2 sm:py-3 text-left text-xs font-semibold text-blue-500 uppercase tracking-wider">
                            Type
                          </th>
                          <th className="px-4 sm:px-6 py-2 sm:py-3 text-left text-xs font-semibold text-blue-500 uppercase tracking-wider">
                            Value
                          </th>
                          <th className="px-4 sm:px-6 py-2 sm:py-3 text-left text-xs font-semibold text-blue-500 uppercase tracking-wider">
                            Return
                          </th>
                          <th className="px-4 sm:px-6 py-2 sm:py-3 text-left text-xs font-semibold text-blue-500 uppercase tracking-wider">
                            Actions
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-blue-50">
                        <tr className="hover:bg-blue-50 transition-colors">
                          <td className="px-4 sm:px-6 py-3 sm:py-4 whitespace-nowrap">
                            <div className="text-xs sm:text-sm font-medium text-blue-900">
                              Tech Growth Fund
                            </div>
                            <div className="text-xs text-blue-500">Purchased: Jan 15, 2025</div>
                          </td>
                          <td className="px-4 sm:px-6 py-3 sm:py-4 whitespace-nowrap">
                            <span className="px-2 sm:px-3 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800">
                              ETF
                            </span>
                          </td>
                          <td className="px-4 sm:px-6 py-3 sm:py-4 whitespace-nowrap">
                            <div className="text-xs sm:text-sm font-medium text-blue-900">
                              $8,240.00
                            </div>
                            <div className="text-xs text-blue-500">1,240 shares</div>
                          </td>
                          <td className="px-4 sm:px-6 py-3 sm:py-4 whitespace-nowrap">
                            <div className="text-xs sm:text-sm font-medium text-green-600">
                              +16.4%
                            </div>
                            <div className="text-xs text-green-500">+$1,352.00</div>
                          </td>
                          <td className="px-4 sm:px-6 py-3 sm:py-4 whitespace-nowrap">
                            <button className="px-2 sm:px-3 py-1 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors text-xs font-medium">
                              View Details
                            </button>
                          </td>
                        </tr>
                        <tr className="hover:bg-blue-50 transition-colors">
                          <td className="px-4 sm:px-6 py-3 sm:py-4 whitespace-nowrap">
                            <div className="text-xs sm:text-sm font-medium text-blue-900">
                              Corporate Bond Fund
                            </div>
                            <div className="text-xs text-blue-500">Purchased: Feb 22, 2025</div>
                          </td>
                          <td className="px-4 sm:px-6 py-3 sm:py-4 whitespace-nowrap">
                            <span className="px-2 sm:px-3 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                              Bond
                            </span>
                          </td>
                          <td className="px-4 sm:px-6 py-3 sm:py-4 whitespace-nowrap">
                            <div className="text-xs sm:text-sm font-medium text-blue-900">
                              $5,120.00
                            </div>
                            <div className="text-xs text-blue-500">512 shares</div>
                          </td>
                          <td className="px-4 sm:px-6 py-3 sm:py-4 whitespace-nowrap">
                            <div className="text-xs sm:text-sm font-medium text-green-600">
                              +4.2%
                            </div>
                            <div className="text-xs text-green-500">+$215.00</div>
                          </td>
                          <td className="px-4 sm:px-6 py-3 sm:py-4 whitespace-nowrap">
                            <button className="px-2 sm:px-3 py-1 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors text-xs font-medium">
                              View Details
                            </button>
                          </td>
                        </tr>
                        <tr className="hover:bg-blue-50 transition-colors">
                          <td className="px-4 sm:px-6 py-3 sm:py-4 whitespace-nowrap">
                            <div className="text-xs sm:text-sm font-medium text-blue-900">
                              S&P 500 Index
                            </div>
                            <div className="text-xs text-blue-500">Purchased: Mar 10, 2025</div>
                          </td>
                          <td className="px-4 sm:px-6 py-3 sm:py-4 whitespace-nowrap">
                            <span className="px-2 sm:px-3 py-1 text-xs font-semibold rounded-full bg-purple-100 text-purple-800">
                              Index Fund
                            </span>
                          </td>
                          <td className="px-4 sm:px-6 py-3 sm:py-4 whitespace-nowrap">
                            <div className="text-xs sm:text-sm font-medium text-blue-900">
                              $6,380.00
                            </div>
                            <div className="text-xs text-blue-500">320 shares</div>
                          </td>
                          <td className="px-4 sm:px-6 py-3 sm:py-4 whitespace-nowrap">
                            <div className="text-xs sm:text-sm font-medium text-green-600">
                              +9.1%
                            </div>
                            <div className="text-xs text-green-500">+$580.00</div>
                          </td>
                          <td className="px-4 sm:px-6 py-3 sm:py-4 whitespace-nowrap">
                            <button className="px-2 sm:px-3 py-1 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors text-xs font-medium">
                              View Details
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "market" && (
              <div>
                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6 sm:mb-8 rounded-r-lg">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <Info className="h-5 w-5 text-blue-600" />
                    </div>
                    <div className="ml-3">
                      <p className="text-xs sm:text-sm text-blue-700">
                        Explore our investment products and make informed decisions. Need help?{" "}
                        <a
                          href="#"
                          className="font-medium underline hover:text-blue-900 transition-colors"
                        >
                          Schedule a consultation
                        </a>{" "}
                        with our financial advisors.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-sm border border-blue-100 mb-6 sm:mb-8">
                  <div className="p-4 sm:p-6 border-b border-blue-100">
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                      <h2 className="text-base sm:text-lg font-semibold text-blue-900">
                        Investment Products
                      </h2>
                      <div className="flex items-center space-x-4">
                        <button className="px-3 sm:px-4 py-1 sm:py-2 bg-white border border-blue-200 text-blue-700 rounded-lg hover:bg-blue-50 transition-colors text-xs sm:text-sm font-medium flex items-center">
                          <Filter size={14} className="mr-1 sm:mr-2" /> Filter
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 sm:p-6">
                    <div className="overflow-x-auto">
                      <table className="min-w-full divide-y divide-blue-100">
                        <thead>
                          <tr>
                            <th className="px-4 sm:px-6 py-2 sm:py-3 text-left text-xs font-semibold text-blue-500 uppercase tracking-wider">
                              Product
                            </th>
                            <th className="px-4 sm:px-6 py-2 sm:py-3 text-left text-xs font-semibold text-blue-500 uppercase tracking-wider">
                              Type
                            </th>
                            <th className="px-4 sm:px-6 py-2 sm:py-3 text-left text-xs font-semibold text-blue-500 uppercase tracking-wider">
                              Risk Level
                            </th>
                            <th className="px-4 sm:px-6 py-2 sm:py-3 text-left text-xs font-semibold text-blue-500 uppercase tracking-wider">
                              Annual Return
                            </th>
                            <th className="px-4 sm:px-6 py-2 sm:py-3 text-left text-xs font-semibold text-blue-500 uppercase tracking-wider">
                              Min. Investment
                            </th>
                            <th className="px-4 sm:px-6 py-2 sm:py-3 text-left text-xs font-semibold text-blue-500 uppercase tracking-wider">
                              Action
                            </th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-blue-50">
                          {investmentProducts.map((product) => (
                            <tr key={product.id} className="hover:bg-blue-50 transition-colors">
                              <td className="px-4 sm:px-6 py-3 sm:py-4 whitespace-nowrap">
                                <div className="text-xs sm:text-sm font-medium text-blue-900">
                                  {product.name}
                                </div>
                                <div className="text-xs text-blue-500">ID: #{product.id}0254</div>
                              </td>
                              <td className="px-4 sm:px-6 py-3 sm:py-4 whitespace-nowrap">
                                <span
                                  className={`px-2 sm:px-3 py-1 text-xs font-semibold rounded-full ${
                                    product.type === "Stock"
                                      ? "bg-blue-100 text-blue-800"
                                      : product.type === "Bond"
                                      ? "bg-green-100 text-green-800"
                                      : product.type === "ETF"
                                      ? "bg-purple-100 text-purple-800"
                                      : "bg-gray-100 text-gray-800"
                                  }`}
                                >
                                  {product.type}
                                </span>
                              </td>
                              <td className="px-4 sm:px-6 py-3 sm:py-4 whitespace-nowrap">
                                <span
                                  className={`px-2 sm:px-3 py-1 text-xs font-semibold rounded-full ${
                                    product.risk === "High"
                                      ? "bg-red-100 text-red-800"
                                      : product.risk === "Medium"
                                      ? "bg-yellow-100 text-yellow-800"
                                      : "bg-green-100 text-green-800"
                                  }`}
                                >
                                  {product.risk}
                                </span>
                              </td>
                              <td className="px-4 sm:px-6 py-3 sm:py-4 whitespace-nowrap text-xs sm:text-sm font-medium text-green-600">
                                {product.return}
                              </td>
                              <td className="px-4 sm:px-6 py-3 sm:py-4 whitespace-nowrap text-xs sm:text-sm font-medium text-blue-900">
                                {product.minInvestment}
                              </td>
                              <td className="px-4 sm:px-6 py-3 sm:py-4 whitespace-nowrap">
                                <button className="px-2 sm:px-4 py-1 sm:py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-xs font-medium">
                                  Invest Now
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-r-lg">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <AlertCircle className="h-5 w-5 text-yellow-600" />
                    </div>
                    <div className="ml-3">
                      <p className="text-xs sm:text-sm text-yellow-700">
                        Remember that all investments carry risk. Past performance is not indicative
                        of future results.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "history" && (
              <div className="bg-white rounded-xl shadow-sm border border-blue-100">
                <div className="p-4 sm:p-6 border-b border-blue-100">
                  <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                    <h2 className="text-base sm:text-lg font-semibold text-blue-900">
                      Transaction History
                    </h2>
                    <div className="flex items-center space-x-4">
                      <button className="px-3 sm:px-4 py-1 sm:py-2 bg-white border border-blue-200 text-blue-700 rounded-lg hover:bg-blue-50 transition-colors text-xs sm:text-sm font-medium flex items-center">
                        <Calendar size={14} className="mr-1 sm:mr-2" /> Date Range
                      </button>
                      <button className="px-3 sm:px-4 py-1 sm:py-2 bg-white border border-blue-200 text-blue-700 rounded-lg hover:bg-blue-50 transition-colors text-xs sm:text-sm font-medium flex items-center">
                        <Download size={14} className="mr-1 sm:mr-2" /> Export
                      </button>
                    </div>
                  </div>
                </div>
                <div className="p-4 sm:p-6">
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-blue-100">
                      <thead>
                        <tr>
                          <th className="px-4 sm:px-6 py-2 sm:py-3 text-left text-xs font-semibold text-blue-500 uppercase tracking-wider">
                            Date
                          </th>
                          <th className="px-4 sm:px-6 py-2 sm:py-3 text-left text-xs font-semibold text-blue-500 uppercase tracking-wider">
                            Type
                          </th>
                          <th className="px-4 sm:px-6 py-2 sm:py-3 text-left text-xs font-semibold text-blue-500 uppercase tracking-wider">
                            Investment
                          </th>
                          <th className="px-4 sm:px-6 py-2 sm:py-3 text-left text-xs font-semibold text-blue-500 uppercase tracking-wider">
                            Amount
                          </th>
                          <th className="px-4 sm:px-6 py-2 sm:py-3 text-left text-xs font-semibold text-blue-500 uppercase tracking-wider">
                            Status
                          </th>
                          <th className="px-4 sm:px-6 py-2 sm:py-3 text-left text-xs font-semibold text-blue-500 uppercase tracking-wider">
                            Details
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-blue-50">
                        {transactionHistory.map((transaction, index) => (
                          <tr key={index} className="hover:bg-blue-50 transition-colors">
                            <td className="px-4 sm:px-6 py-3 sm:py-4 whitespace-nowrap">
                              <div className="text-xs sm:text-sm font-medium text-blue-900">
                                {transaction.date}
                              </div>
                              <div className="text-xs text-blue-500">{transaction.time}</div>
                            </td>
                            <td className="px-4 sm:px-6 py-3 sm:py-4 whitespace-nowrap">
                              <span className="px-2 sm:px-3 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                                {transaction.type}
                              </span>
                            </td>
                            <td className="px-4 sm:px-6 py-3 sm:py-4 whitespace-nowrap text-xs sm:text-sm text-blue-900">
                              {transaction.investment}
                            </td>
                            <td className="px-4 sm:px-6 py-3 sm:py-4 whitespace-nowrap text-xs sm:text-sm font-medium text-blue-900">
                              {transaction.amount}
                            </td>
                            <td className="px-4 sm:px-6 py-3 sm:py-4 whitespace-nowrap">
                              <span className="px-2 sm:px-3 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800">
                                {transaction.status}
                              </span>
                            </td>
                            <td className="px-4 sm:px-6 py-3 sm:py-4 whitespace-nowrap">
                              <button className="px-2 sm:px-3 py-1 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors text-xs font-medium">
                                View Details
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}

export default Investment
