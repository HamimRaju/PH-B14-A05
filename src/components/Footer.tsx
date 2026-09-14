import React from "react";

export const Footer: React.FC = () => {
    return (
        <footer className="bg-white border-t border-gray-100 mt-20 pt-12 pb-6">
            <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                <div className="space-y-3">
                    <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-lg bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 flex items-center justify-center text-white font-bold text-xs">
                            DS
                        </div>
                        <span className="font-bold text-lg bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
                            Dev Stack
                        </span>
                    </div>
                    <p className="text-xs text-gray-500 leading-relaxed">
                        Curated tools, technologies, and resources for
                        developers building modern software.
                    </p>
                </div>

                <div>
                    <h4 className="font-semibold text-xs text-gray-800 uppercase mb-3">
                        Product
                    </h4>
                    <ul className="space-y-2 text-xs text-gray-500">
                        <li>
                            <a href="#" className="hover:text-purple-600">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-purple-600">
                                Technologies
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-purple-600">
                                Projects
                            </a>
                        </li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-semibold text-xs text-gray-800 uppercase mb-3">
                        Company
                    </h4>
                    <ul className="space-y-2 text-xs text-gray-500">
                        <li>
                            <a href="#" className="hover:text-purple-600">
                                About
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-purple-600">
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-semibold text-xs text-gray-800 uppercase mb-3">
                        Legal
                    </h4>
                    <ul className="space-y-2 text-xs text-gray-500">
                        <li>
                            <a href="#" className="hover:text-purple-600">
                                Privacy Policy
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-purple-600">
                                Terms of Service
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 border-t border-gray-100 pt-6 text-center text-xs text-gray-400">
                © {new Date().getFullYear()} Dev Stack. All rights reserved.
            </div>
        </footer>
    );
};
