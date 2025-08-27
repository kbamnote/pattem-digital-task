import React, { useState, useEffect } from 'react';
import { Search } from 'lucide-react';

const useNumberTicker = (endValue, duration = 2000) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const increment = Math.ceil(endValue / (duration / 16));
    const startTime = Date.now();
    const updateCount = () => {
      const elapsed = Date.now() - startTime;
      if (elapsed < duration) {
        start = Math.min(start + increment, endValue);
        setCount(start);
        requestAnimationFrame(updateCount);
      } else setCount(endValue);
    };
    requestAnimationFrame(updateCount);
  }, [endValue, duration]);
  return count.toLocaleString();
};

const HeroSection = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const stats = [
    { icon: "💼", number: 25850, label: "Jobs" },
    { icon: "👥", number: 10250, label: "Candidates" },
    { icon: "🏢", number: 18400, label: "Companies" },
  ];

  // ✅ Call hooks in a fixed order (outside map)
  const counts = stats.map(stat => useNumberTicker(stat.number));

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-20 text-center">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
          Find Your Dream Job Today!
        </h1>
        <p className="text-lg sm:text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
          Connecting Talent with Opportunity: Your Gateway to Career Success
        </p>

        <div className="relative bg-white/90 rounded-lg shadow-xl p-3 flex flex-col sm:flex-row gap-3">
          <div className="flex-1 relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Job Title or Company"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-3 py-2 rounded-md border border-gray-200 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500"
            />
          </div>
          <button className="w-full sm:w-auto bg-teal-500 hover:bg-teal-600 text-white px-6 py-2 rounded-md flex items-center justify-center gap-2 shadow-lg hover:shadow-xl">
            <Search className="w-4 h-4" />
            <span>Search Job</span>
          </button>
        </div>

        <div className="mt-12 sm:mt-20 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {stats.map((stat, i) => (
            <div key={i} className="text-center bg-black/20 rounded-lg p-6">
              <span className="inline-block p-4 bg-teal-500 rounded-full mb-4 shadow-lg">
                <span className="text-2xl">{stat.icon}</span>
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">{counts[i]}</h3>
              <p className="text-gray-300">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
