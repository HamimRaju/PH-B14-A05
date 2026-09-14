import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12 md:py-16 flex flex-col md:flex-row items-center justify-between gap-10">
      {/* Left Content */}
      <div className="flex-1 space-y-6 text-center md:text-left">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight">
          Build Your Ideal <br />
          <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
            Development Stack
          </span>
        </h1>
        
        <p className="text-gray-600 text-sm sm:text-base max-w-lg mx-auto md:mx-0 leading-relaxed">
          Explore frontend, backend, database, and tooling options. Compare them side by side, and put together the stack that fits your next project.
        </p>

        <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-2">
          <a
            href="#technologies"
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 text-white font-medium text-sm shadow-md hover:opacity-95 transition-opacity"
          >
            Explore Technologies
          </a>
          <button className="px-6 py-3 rounded-xl border border-gray-300 text-gray-700 font-medium text-sm hover:bg-gray-50 transition-colors">
            Learn More
          </button>
        </div>
      </div>

      {/* Right Banner Image */}
      <div className="flex-1 flex justify-center w-full">
        <img
          src="../assets/banner-stack.png"
          alt="Hero Banner"
          className="w-full max-w-md h-auto object-contain drop-shadow-sm"
        />
      </div>
    </section>
  );
};