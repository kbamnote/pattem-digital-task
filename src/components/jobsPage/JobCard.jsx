import React from "react";
import { UserCheck, Clock, MapPin, Laptop, DollarSign, Tag, Calendar } from "lucide-react";

const JobCard = ({ job }) => {
  const jobDetails = [
    { icon: Tag, text: job.category },
    { icon: DollarSign, text: job.salary },
    { icon: Clock, text: job.type },
    { icon: Laptop, text: job.worktype },
    { icon: UserCheck, text: job.experience },
    { icon: MapPin, text: job.location }
  ];

  return (
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 p-8 hover:-translate-y-1 flex flex-col">
      {/* Header */}
      <div className="flex items-start gap-4 mb-6">
        <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-teal-50 to-teal-100 flex items-center justify-center flex-shrink-0">
          <img src={job.logo} alt={job.company} className="w-12 h-12 object-cover rounded-lg" />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-semibold text-gray-900 mb-1 line-clamp-2">{job.title}</h3>
          <p className="text-gray-600 text-sm mb-2">{job.company}</p>
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <Calendar className="w-3 h-3" />
            Posted {job.posted}
          </div>
        </div>
      </div>

      {/* Description */}
      <p className="text-gray-600 text-sm mb-6 line-clamp-3">{job.description}</p>

      {/* Job Details */}
      <div className="grid grid-cols-1 gap-3 mb-6 text-sm text-gray-600">
        {jobDetails.map(({ icon: Icon, text }, index) => (
          <div key={index} className="flex items-center gap-2">
            <Icon className="w-4 h-4 text-teal-600 flex-shrink-0" />
            <span className="truncate">{text}</span>
          </div>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="mt-auto flex gap-3">
        <button className="flex-1 px-4 py-3 text-sm font-medium text-teal-600 bg-teal-50 rounded-xl hover:bg-teal-100 transition-colors">
          Save Job
        </button>
        <button className="flex-1 px-4 py-3 text-sm font-medium text-white bg-teal-600 rounded-xl hover:bg-teal-700 transition-colors">
          Apply Now
        </button>
      </div>
    </div>
  );
};

export default JobCard;