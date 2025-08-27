import React from "react";
import { Link } from "react-router-dom";
import { BriefcaseBusiness, CalendarDays, Trophy } from "lucide-react";

const Register = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center"
      style={{
      backgroundImage: "url('https://plus.unsplash.com/premium_photo-1675448891100-3dbf439d2db3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"
      }}
    >
      <div className="flex flex-col lg:flex-row justify-center items-center min-h-screen w-full p-4 md:p-8 lg:p-12 backdrop-blur-sm">
        {/* Login Form */}
        <div className="w-full max-w-md bg-white p-6 md:p-8 lg:p-12 rounded-lg shadow-lg">
          <h2 className="text-xl md:text-2xl font-semibold mb-6 text-center">Sign Up</h2>

          <form className="space-y-4">
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>

            <div>
              <label className="block text-gray-700 text-sm font-medium mb-1">Password</label>
              <input
                type="password"
                className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>

            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
              <label className="flex items-center text-sm text-gray-700">
                <input type="checkbox" className="mr-2" /> Show Password
              </label>
               <Link to='/register' className="text-sm text-teal-500">Forgot password?</Link>
            </div>

<Link to='/'>
            <button className="w-full bg-teal-700 text-white py-2 rounded hover:bg-teal-600 focus:ring-2 focus:ring-teal-300">
              SIGN UP
            </button>
            </Link>
          </form>

          <div className="mt-6 text-center text-gray-500">OR</div>

          <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 mt-4">
            <button className="w-full bg-teal-950 text-white py-2 rounded hover:bg-teal-900">FACEBOOK</button>
            <button className="w-full bg-teal-500 text-white py-2 rounded hover:bg-teal-600">TWITTER</button>
          </div>

          <div className="mt-6 text-center">
            Already have an account?{" "}
            <Link to="/login" className="text-teal-500">Sign in</Link>
          </div>
        </div>

        {/* Right Side */}
        <div className="hidden lg:block lg:w-1/2 lg:max-w-xl xl:max-w-2xl lg:ml-16 text-white">
          <div className="p-8 rounded-lg">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-black">
              Become the best you can be and have fun
            </h2>
            <p className="mb-6 text-teal-500">
              Join the group of more than 300 clients that love us.
            </p>

            <div className="space-y-6 text-black">
              <div className="flex items-center">
                <div className="bg-teal-50 rounded-full w-12 h-12 flex items-center justify-center mr-4">
                  <BriefcaseBusiness className="text-teal-500" />
                </div>
                <p>Something about businesses that makes it special and different from everything else</p>
              </div>

              <div className="flex items-center">
                <div className="bg-teal-50 rounded-full w-12 h-12 flex items-center justify-center mr-4">
                  <CalendarDays className="text-teal-500" />
                </div>
                <p>There is this saying about the business and entrepreneurship, but who remembers it anyway</p>
              </div>

              <div className="flex items-center">
                <div className="bg-teal-50 rounded-full w-12 h-12 flex items-center justify-center mr-4">
                  <Trophy className="text-teal-500" />
                </div>
                <p>If only there was a template for all your needs wait a second there is and it is called this</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
