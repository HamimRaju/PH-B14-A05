import React, { useState } from "react";

export const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 px-4 py-3">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                {/* Mobile View Left */}
                <div className="md:hidden flex items-center">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-gray-700 text-xl"
                    >
                        ☰
                    </button>
                </div>

                {/* Logo */}
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-linear-to-r from-orange-500 via-pink-500 to-purple-600 flex items-center justify-center text-white font-bold text-sm">
                        DS
                    </div>
                    <span className="font-bold text-xl bg-linear-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
                        Dev Stack
                    </span>
                </div>

                {/* Desktop Navigation Links */}
                <div className="hidden md:flex gap-6 text-gray-600 font-medium text-sm">
                    <a href="#home" className="hover:text-purple-600">
                        Home
                    </a>
                    <a href="#technologies" className="hover:text-purple-600">
                        Technologies
                    </a>
                    <a href="#projects" className="hover:text-purple-600">
                        Projects
                    </a>
                    <a href="#about" className="hover:text-purple-600">
                        About
                    </a>
                    <a href="#contact" className="hover:text-purple-600">
                        Contact
                    </a>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-3">
                    <button className="text-gray-700 text-sm font-medium hover:text-purple-600">
                        Sign In
                    </button>
                    <button className="px-4 py-2 text-sm text-white font-medium rounded-full bg-linear-to-r from-orange-500 via-pink-500 to-purple-600 shadow-md hover:opacity-90 transition">
                        Sign Up
                    </button>
                </div>
            </div>
        </nav>
    );
};
