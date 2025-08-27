
import React from "react";
import { Link } from "react-router-dom";

const stats = [
  {
    number: "12k+",
    title: "Clients Worldwide",
    description:
      "We have successfully built a global network of satisfied clients, expanding our reach across multiple countries and industries.",
  },
  {
    number: "20k+",
    title: "Active Resumes",
    description:
      "Thousands of job seekers trust our platform to keep their resumes updated and ready for new opportunities.",
  },
  {
    number: "18k+",
    title: "Partner Companies",
    description:
      "We collaborate with top-tier companies to offer diverse job opportunities across various industries.",
  },
];

const About = () => {
  return (
    <section className="px-4 sm:px-6 lg:px-8 xl:px-[10%] py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row gap-10 items-center mb-16">
          <div className="w-full lg:w-1/2">
            <img
              src="https://plus.unsplash.com/premium_photo-1727730015669-aac64afb50ad?q=80&w=1470&auto=format&fit=crop"
              alt="Hero"
              className="rounded-3xl shadow-lg w-full aspect-video object-cover"
            />
          </div>

          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900">
              Good Life Begins With
              <span className="block mt-2">A Good Company</span>
            </h1>
            <p className="text-gray-600 mt-6 max-w-2xl mx-auto lg:mx-0">
              A good company provides more than just opportunities; it empowers
              individuals to reach their potential, fosters creativity, and
              encourages growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center lg:justify-start">
              <Link to='/jobs'>
              <button className="px-6 py-3 rounded-lg font-semibold shadow-md bg-teal-600 text-white hover:bg-teal-700">
                Search Job
              </button>
              </Link>
              <button className="px-6 py-3 font-semibold text-teal-600 hover:text-teal-700">
                Learn more
              </button>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map(({ number, title, description }, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg"
            >
              <div className="text-4xl font-bold text-teal-600 mb-4">
                {number}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{title}</h3>
              <p className="text-gray-600">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
