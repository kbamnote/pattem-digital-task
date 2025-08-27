import React from "react";
import { Home, Search, ArrowLeft, Briefcase } from "lucide-react";

const NotFoundPage = () => {
  const handleGoHome = () => {
    
    window.location.href = "/";
  };

  const handleGoBack = () => {
    window.history.back();
  };

  const handleSearchJobs = () => {
   
    window.location.href = "/jobs";
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full text-center">
        
       
        <div className="mb-8">
          <div className="relative inline-block">
           
            <h1 className="text-8xl sm:text-9xl font-bold text-gray-200 select-none">
              404
            </h1>
            
          
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="w-16 h-16 bg-teal-600 rounded-2xl flex items-center justify-center animate-bounce">
                <Briefcase className="w-8 h-8 text-white" />
              </div>
            </div>
          </div>
        </div>

     
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Oops! Page Not Found
          </h2>
          <p className="text-gray-600 text-lg mb-2">
            The page you're looking for doesn't exist.
          </p>
          <p className="text-gray-500 text-sm">
            It might have been moved, deleted, or you entered the wrong URL.
          </p>
        </div>

     
        <div className="space-y-4">
         
          <button
            onClick={handleGoHome}
            className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-teal-600 text-white rounded-xl font-semibold hover:bg-teal-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            <Home className="w-5 h-5" />
            Go to Homepage
          </button>

          <div className="flex gap-4">
            <button
              onClick={handleGoBack}
              className="flex-1 flex items-center justify-center gap-2 px-4 py-3 text-gray-700 bg-gray-100 rounded-xl font-medium hover:bg-gray-200 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Go Back
            </button>
            
            <button
              onClick={handleSearchJobs}
              className="flex-1 flex items-center justify-center gap-2 px-4 py-3 text-teal-600 bg-teal-50 rounded-xl font-medium hover:bg-teal-100 transition-colors"
            >
              <Search className="w-4 h-4" />
              Browse Jobs
            </button>
          </div>
        </div>

    
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500 mb-4">
            Looking for something specific? Try these popular links:
          </p>
          
          <div className="flex flex-wrap justify-center gap-3">
            {["IT Jobs", "Remote Work", "Design Jobs", "Marketing", "Data Science"].map((link) => (
              <button
                key={link}
                className="px-3 py-1 text-xs text-gray-600 bg-gray-50 rounded-full hover:bg-gray-100 hover:text-gray-700 transition-colors"
              >
                {link}
              </button>
            ))}
          </div>
        </div>

        <div className="absolute top-20 left-10 w-8 h-8 bg-teal-100 rounded-full opacity-60 animate-pulse hidden sm:block"></div>
        <div className="absolute top-40 right-16 w-4 h-4 bg-teal-200 rounded-full opacity-40 animate-pulse hidden sm:block"></div>
        <div className="absolute bottom-32 left-16 w-6 h-6 bg-teal-50 rounded-full opacity-50 animate-pulse hidden sm:block"></div>
        <div className="absolute bottom-20 right-20 w-3 h-3 bg-teal-300 rounded-full opacity-30 animate-pulse hidden sm:block"></div>
      </div>
    </div>
  );
};

export default NotFoundPage;