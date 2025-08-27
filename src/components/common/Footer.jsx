import React from "react";
import { Briefcase, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  const links = [
    { name: "Home", link: "/" },
    { name: "Jobs", link: "/jobs" },
    { name: "About", link: "/about" },
    { name: "Contact Us", link: "/contact" },
  ];

  const socials = [
    { Icon: Facebook, url: "https://facebook.com/" },
    { Icon: Twitter, url: "https://twitter.com/" },
    { Icon: Linkedin, url: "https://linkedin.com/in/" },
    { Icon: Instagram, url: "https://www.instagram.com/udaa.nous" },
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-black text-white pt-16 pb-8 px-4 sm:px-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
    
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Briefcase className="w-7 h-7 text-teal-400" />
            <span className="text-2xl font-bold">Job Quick</span>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed">
            The Job Quick is a powerful job search platform that helps job seekers
            find their dream job quickly and efficiently.
          </p>
        </div>

       
        <div>
          <h3 className="text-lg font-semibold mb-4 text-teal-400">Address</h3>
          <p className="text-gray-400 text-sm mb-3">
            <strong>Head Office:</strong> 45 Skyline Plaza, Sector 18,
            Gurugram, Haryana - 122001
          </p>
          <p className="text-gray-400 text-sm">
            <strong>Branch Office:</strong> 123 Business Park Tower, MG Road,
            Bengaluru, Karnataka - 560001
          </p>
        </div>

       
        <div>
          <h3 className="text-lg font-semibold mb-4 text-teal-400">Links</h3>
          <ul className="space-y-2">
            {links.map((item, i) => (
              <li key={i}>
                <a
                  href={item.link}
                  className="text-gray-400 hover:text-teal-400 transition text-sm"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

       
        <div>
          <h3 className="text-lg font-semibold mb-4 text-teal-400">Newsletter</h3>
          <p className="text-gray-400 text-sm mb-4">
            Subscribe to stay updated on the latest job opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:ring-2 focus:ring-teal-400"
            />
            <button className="bg-teal-500 px-4 py-3 rounded-lg hover:bg-teal-600 transition">
              Subscribe
            </button>
          </div>
        </div>
      </div>

     
      <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-gray-400 text-xs sm:text-sm">
          © {new Date().getFullYear()} Job Portal. All rights reserved.
        </p>
        <div className="flex space-x-4">
          {socials.map(({ Icon, url }, i) => (
            <a
              key={i}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-teal-400 transition transform hover:-translate-y-1 hover:scale-110"
            >
              <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
