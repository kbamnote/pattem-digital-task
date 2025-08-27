import React from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";
import { Phone, Mail, Clock, MapPin } from "lucide-react";

const ContactUs = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const contactInfo = [
    { icon: Phone, title: "Call for inquiry", value: "+91 98765 43210" },
    { icon: Mail, title: "Send us email", value: "info@jobquick.com" },
    { icon: Clock, title: "Opening hours", value: "Mon - Fri: 10AM - 6PM" },
    {
      icon: MapPin,
      title: "Head Office (Gurugram)",
      value: "Cyber City, Tower 9, DLF Phase 3, Gurugram, Haryana - 122002",
    },
 
  ];

  return (
    <>
      <Header />
   
      <div className="w-auto h-60 bg-gray-900 text-white flex justify-center items-center">
        <h1 className="text-3xl md:text-5xl font-semibold">Contact Us</h1>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-12">
    
        <div>
          <h2 className="text-3xl font-bold mb-6">
            You Will Grow, You Will Succeed. We Promise That
          </h2>
          <p className="text-gray-600 mb-8">
            Reach out to us for opportunities, partnerships, or any queries. Our
            team will connect with you as soon as possible.
          </p>

          <div className="grid sm:grid-cols-2 gap-8">
            {contactInfo.map(({ icon: Icon, title, value }, i) => (
              <div key={i}>
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center">
                    <Icon className="h-5 w-5 text-teal-600" />
                  </div>
                  <h3 className="font-semibold">{title}</h3>
                </div>
                <p className="text-gray-600 text-sm">{value}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
          <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
          <p className="text-gray-600 mb-6">
            Fill the form below and we’ll get back to you soon.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 outline-none"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 outline-none"
              />
            </div>
            <input
              type="email"
              placeholder="Email Address"
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 outline-none"
            />
            <textarea
              rows={4}
              placeholder="Your message..."
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 outline-none"
            />
            <button
              type="submit"
              className="w-full bg-teal-600 text-white py-2 px-4 rounded-md hover:bg-teal-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

    
      <div className="w-full h-[480px] overflow-hidden p-6 mb-4">
        <iframe
          title="Google Map - Head Office Gurugram"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.408896158803!2d77.08838107549446!3d28.49052917574519!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d193f1c0d5a6d%3A0x51c2d7a7b6c5c6c2!2sDLF%20Cyber%20City%2C%20DLF%20Phase%203%2C%20Gurugram%2C%20Haryana!5e0!3m2!1sen!2sin!4v1735422000000!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <Footer />
    </>
  );
};

export default ContactUs;
