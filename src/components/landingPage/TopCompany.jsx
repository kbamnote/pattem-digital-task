import React from "react";
import { MapPin, Briefcase, Star, ExternalLink, Layers } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { useNavigate } from "react-router-dom";
import companies from "../../data/topCompany.json"; 

const TopCompany = () => {
  const navigate = useNavigate();

  const handleCompanyClick = (companyName) => {
    navigate(`/jobs?title=${encodeURIComponent(companyName)}`);
  };

  return (
    <section className="py-20 px-6 md:px-[10%] bg-gray-50">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-3">
          Top Companies
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-base sm:text-lg">
          Discover opportunities at the world's leading tech companies
        </p>
      </div>

      <Swiper
        modules={[Autoplay]}
        spaceBetween={24}
        slidesPerView={1}
        loop
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        breakpoints={{ 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
      >
        {companies.map((job, index) => (
          <SwiperSlide key={index}>
            <div
              onClick={() => handleCompanyClick(job.company)}
              className="cursor-pointer bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border border-gray-200 flex flex-col h-full"
            >
              {/* Company Header */}
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center gap-4">
                  <img
                    src={job.logo}
                    alt={`${job.company} logo`}
                    className="h-12 w-12 object-contain"
                  />
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">
                      {job.company}
                    </h3>
                    <div className="flex items-center gap-2 mt-1">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={16}
                            className={`${
                              i < Math.floor(job.rating)
                                ? "fill-yellow-400 text-yellow-400"
                                : "fill-gray-200 text-gray-200"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Job Details */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="mb-auto">
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">
                    {job.position}
                  </h4>

                  <div className="space-y-3 mb-4">
                    <div className="flex items-center gap-2 text-gray-600">
                      <Layers className="w-5 h-5 text-teal-600 flex-shrink-0" />
                      <span>{job.category}</span>
                    </div>

                    <div className="flex items-center gap-2 text-gray-600">
                      <Briefcase className="w-5 h-5 text-teal-600 flex-shrink-0" />
                      <span>{job.jobType}</span>
                    </div>

                    <div className="flex items-center gap-2 text-gray-600">
                      <MapPin className="w-5 h-5 text-teal-600 flex-shrink-0" />
                      <span>{job.location}</span>
                    </div>
                  </div>

                  <div className="bg-teal-50 p-4 rounded-lg mb-6">
                    <p className="text-teal-800 font-medium mb-1">
                      Compensation
                    </p>
                    <p className="text-gray-700">{job.salary}</p>
                  </div>
                </div>

                <a
                  href={job.applyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-full bg-teal-600 hover:bg-teal-700 text-white py-3 px-4 rounded-lg font-medium transition-colors gap-2 mt-auto"
                >
                  Apply Now
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default TopCompany;
