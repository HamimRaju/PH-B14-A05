import React from "react";

export const Hero: React.FC = () => {
    return (
        <section className="max-w-7xl mx-auto px-4 py-16 flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="flex-1 space-y-6">
                <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
                    Build Your Ideal <br />
                    <span className="bg-linear-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
                        Development Stack
                    </span>
                </h1>
                <p className="text-gray-600 text-base max-w-lg">
                    Explore frontend, backend, database, and tooling options.
                    Compare them side by side, and put together the stack that
                    fits your next project.
                </p>
                <div className="flex gap-4">
                    <a
                        href="#technologies"
                        className="px-6 py-3 rounded-xl bg-linear-to-r from-orange-500 via-pink-500 to-purple-600 text-white font-medium shadow-lg hover:opacity-95 transition"
                    >
                        Explore Technologies
                    </a>
                    <button className="px-6 py-3 rounded-xl border border-gray-300 text-gray-700 font-medium hover:bg-gray-50 transition">
                        Learn More
                    </button>
                </div>
            </div>
            <div className="flex-1 flex justify-center">
                <div className="w-100 h-100 rounded-2xl flex items-center justify-center p-6 ">
                    <img
                        src="assets/banner-stack.png"
                        alt="Hero Banner"
                        className="w-full h-full object-contain"
                    />
                </div>
            </div>
        </section>
    );
};
