import React from "react";
import { User, Upload, Search, Briefcase } from "lucide-react";

const Work = () => (
  <section className="py-12 px-[10%] text-center">
    <h2 className="text-3xl font-bold mb-4">How it works</h2>
    <p className="text-gray-600 text-lg mb-10">
      Get started in just a few steps and land your dream job faster.
    </p>
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      {[
        {
          title: "Create Account",
          description:
            "Sign up with your email and set up your profile to start your journey.",
          icon: <User className="w-8 h-8 text-teal-500 mx-auto" />,
        },
        {
          title: "Upload Resume",
          description:
            "Upload your resume to showcase your skills and experience to employers.",
          icon: <Upload className="w-8 h-8 text-teal-500 mx-auto" />,
        },
        {
          title: "Find Jobs",
          description:
            "Browse thousands of opportunities tailored to your skills and interests.",
          icon: <Search className="w-8 h-8 text-teal-500 mx-auto" />,
        },
        {
          title: "Apply Job",
          description:
            "Easily apply to jobs and track your applications directly on the platform.",
          icon: <Briefcase className="w-8 h-8 text-teal-500 mx-auto" />,
        },
      ].map((item, index) => (
        <div key={index} className="p-6 bg-white rounded-lg shadow-lg">
          <div className="mb-4">{item.icon}</div>
          <h3 className="text-xl font-bold mb-2">{item.title}</h3>
          <p className="text-gray-600">{item.description}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Work;
