import React from "react";
import {  MonitorCheck,DatabaseZap,ShoppingBag,UserSearch,WalletCards,Building2,GraduationCap,Wallet,} from "lucide-react";

const Categories = () => {
  const categories = [
    { icon: MonitorCheck, title: "IT & Networking", jobs: 1254 },
    { icon: ShoppingBag, title: "Sales & Marketing", jobs: 816 },
    { icon: DatabaseZap, title: "Data Science", jobs: 2082 },
    { icon: UserSearch, title: "Customer Service", jobs: 1520 },
    { icon: Building2, title: "Digital Marketing", jobs: 1022 },
    { icon: GraduationCap, title: "Human Resource", jobs: 1496 },
    { icon: Wallet, title: "Project Manager", jobs: 1529 },
    { icon: WalletCards, title: "Accounting", jobs: 1244 },
  ];

  return (
    <section className="bg-gray-50 px-6 sm:px-12 lg:px-[10%] py-16">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-3">
          Browse by Category
        </h2>
        <p className="text-gray-600 text-base sm:text-lg">
          Find your dream job in your preferred industry
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
        {categories.map(({ icon: Icon, title, jobs }) => (
          <div
            key={title}
            className="bg-white rounded-xl p-6 shadow-sm hover:shadow-xl border border-gray-100 transition-all duration-300 cursor-pointer hover:-translate-y-1"
          >
            <div className="flex flex-col items-center text-center">
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-teal-100 mb-5 shadow-sm">
                <Icon className="w-7 h-7 text-teal-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {title}
              </h3>
              <span className="text-teal-600 bg-teal-50 px-3 py-1 rounded-full text-sm font-medium">
                {jobs} jobs
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;
