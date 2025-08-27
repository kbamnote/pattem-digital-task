import React, { useState, useMemo } from "react";
import { Search, Briefcase } from "lucide-react";
import JobFilter from "./JobFilter";
import JobCard from "./JobCard";
import jobsData from "../../data/jobs.json";
import Header from "../common/Header";
import Footer from "../common/Footer";

const Jobs = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState({
    category: "",
    location: "",
    worktype: "",
    experience: "",
    salaryRange: "",
    jobType: ""
  });

  const { jobs, filterOptions } = jobsData;

  const filteredJobs = useMemo(() => {
    return jobs.filter(job => {
    
      const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           job.category.toLowerCase().includes(searchTerm.toLowerCase());

     
      const matchesCategory = !filters.category || job.category === filters.category;
      const matchesLocation = !filters.location || job.location === filters.location;
      const matchesWorktype = !filters.worktype || job.worktype === filters.worktype;
      const matchesExperience = !filters.experience || job.experience === filters.experience;
      const matchesJobType = !filters.jobType || job.type === filters.jobType;
      
   
      let matchesSalary = true;
      if (filters.salaryRange) {
        const range = filterOptions.salaryRanges.find(r => r.label === filters.salaryRange);
        if (range) {
          matchesSalary = job.salaryMax >= range.min && job.salaryMin <= range.max;
        }
      }

      return matchesSearch && matchesCategory && matchesLocation && 
             matchesWorktype && matchesExperience && matchesJobType && matchesSalary;
    });
  }, [searchTerm, filters, jobs, filterOptions.salaryRanges]);

  const activeFiltersCount = Object.values(filters).filter(Boolean).length + (searchTerm ? 1 : 0);

  const clearFilters = () => {
    setFilters({
      category: "",
      location: "",
      worktype: "",
      experience: "",
      salaryRange: "",
      jobType: ""
    });
    setSearchTerm("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
         <Header/>
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
       
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Find Your Dream Job</h1>
          <p className="text-gray-600">Discover amazing opportunities that match your skills and interests</p>
        </div>

        {/* Search Bar */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-8">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search jobs, companies, or keywords..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            />
          </div>
        </div>

        
        <div className="flex flex-col lg:flex-row gap-8">
         
          <JobFilter
            filters={filters}
            setFilters={setFilters}
            filterOptions={filterOptions}
            activeFiltersCount={activeFiltersCount}
            clearFilters={clearFilters}
          />

        
          <div className="flex-1">
           
            <div className="mb-6 flex justify-between items-center">
              <p className="text-gray-600">
                Showing <span className="font-semibold text-gray-900">{filteredJobs.length}</span> jobs
              </p>
            </div>

          
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
              {filteredJobs.map((job) => (
                <JobCard key={job.id} job={job} />
              ))}
            </div>

           
            {filteredJobs.length === 0 && (
              <div className="text-center py-16">
                <div className="w-24 h-24 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
                  <Briefcase className="w-12 h-12 text-gray-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No jobs found</h3>
                <p className="text-gray-600 mb-6">Try adjusting your search criteria or clearing filters</p>
                <button
                  onClick={clearFilters}
                  className="px-6 py-3 bg-teal-600 text-white rounded-xl hover:bg-teal-700 transition-colors"
                >
                  Clear All Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Jobs;