import React, { useState } from "react";
import { BriefcaseBusiness, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="w-full bg-black text-white shadow-lg sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <BriefcaseBusiness className="text-teal-500" />
          <h1 className="text-2xl font-bold">Job Quick</h1>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-6">
          <Link to="/" className="hover:text-teal-400">Home</Link>
          <Link to="/jobs" className="hover:text-teal-400">Jobs</Link>
          <Link to="/about" className="hover:text-teal-400">About Us</Link>
          <Link to="/contact" className="hover:text-teal-400">Contact Us</Link>
        </nav>

        {/* Desktop Auth */}
        <div className="hidden lg:flex items-center space-x-4">
          <Link to="/login">
            <button className="hover:text-teal-400 transition-colors px-4 py-2">Login</button>
          </Link>
          <Link to="/login">
            <button className="bg-teal-500 hover:bg-teal-600 px-4 py-2 rounded">Job Hosting</button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 hover:bg-gray-800 rounded"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden px-4 pb-4 border-t border-gray-800">
          <nav className="flex flex-col space-y-4 mt-4">
            <Link to="/" className="hover:text-teal-400">Home</Link>
            <Link to="/jobs" className="hover:text-teal-400">Jobs</Link>
            <Link to="/about" className="hover:text-teal-400">About Us</Link>
            <Link to="/contact" className="hover:text-teal-400">Contact Us</Link>
            <Link to="/login">
              <button className="hover:text-teal-400 transition-colors w-full text-left py-2">
                Login
              </button>
            </Link>
            <Link to="/host-login">
              <button className="bg-teal-500 hover:bg-teal-600 px-4 py-2 rounded w-full text-left">
                Job Hosting
              </button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
