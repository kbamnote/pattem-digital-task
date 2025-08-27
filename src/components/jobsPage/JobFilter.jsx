import React from "react";
import { X } from "lucide-react";

const JobFilter = ({ filters, setFilters, filterOptions, activeFiltersCount, clearFilters }) => {
  const handleFilterChange = (filterKey, value) => {
    setFilters(prev => ({ ...prev, [filterKey]: value }));
  };

  const FilterSelect = ({ label, value, onChange, options, placeholder }) => (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-3">{label}</label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full p-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500"
      >
        <option value="">{placeholder}</option>
        {options.map(option => (
          <option key={option.value || option} value={option.value || option}>
            {option.label || option}
          </option>
        ))}
      </select>
    </div>
  );

  return (
    <div className="lg:w-80 flex-shrink-0">
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sticky top-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-gray-900">Filters</h3>
          {activeFiltersCount > 0 && (
            <button
              onClick={clearFilters}
              className="flex items-center gap-2 px-3 py-1 text-sm text-gray-600 hover:text-gray-800 transition-colors"
            >
              <X className="w-4 h-4" />
              Clear All ({activeFiltersCount})
            </button>
          )}
        </div>

        <div className="space-y-6">
          <FilterSelect
            label="Category"
            value={filters.category}
            onChange={(value) => handleFilterChange('category', value)}
            options={filterOptions.categories}
            placeholder="All Categories"
          />

          <FilterSelect
            label="Location"
            value={filters.location}
            onChange={(value) => handleFilterChange('location', value)}
            options={filterOptions.locations}
            placeholder="All Locations"
          />

          <FilterSelect
            label="Work Type"
            value={filters.worktype}
            onChange={(value) => handleFilterChange('worktype', value)}
            options={filterOptions.worktypes}
            placeholder="All Work Types"
          />

          <FilterSelect
            label="Experience"
            value={filters.experience}
            onChange={(value) => handleFilterChange('experience', value)}
            options={filterOptions.experiences}
            placeholder="All Experience Levels"
          />

          <FilterSelect
            label="Job Type"
            value={filters.jobType}
            onChange={(value) => handleFilterChange('jobType', value)}
            options={filterOptions.jobTypes}
            placeholder="All Job Types"
          />

          <FilterSelect
            label="Salary Range"
            value={filters.salaryRange}
            onChange={(value) => handleFilterChange('salaryRange', value)}
            options={filterOptions.salaryRanges}
            placeholder="All Salary Ranges"
          />
        </div>
      </div>
    </div>
  );
};

export default JobFilter;