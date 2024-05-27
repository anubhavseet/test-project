import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-6">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap justify-between items-center">
                    <div className="w-full md:w-auto mb-4 md:mb-0">
                        <Link to="/" className="flex items-center">
                            <img
                                src="https://th.bing.com/th/id/OIG1.VcNQfB2tWmEQvMbqL3Xq?w=270&h=270&c=6&r=0&o=5&dpr=1.5&pid=ImgGn"
                                className="mr-3 h-16 rounded-3xl"
                                alt="Logo"
                            />
                        </Link>
                    </div>
                    <div className="grid grid-cols-2 gap-8 md:gap-6 lg:grid-cols-3">
                        <div>
                            <h2 className="mb-4 text-sm font-semibold text-gray-300 uppercase">Resources</h2>
                            <ul className="text-gray-500 font-medium">
                                <li className="mb-2">
                                    <Link to="/" className="hover:text-white">
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/about" className="hover:text-white">
                                        About
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-4 text-sm font-semibold text-gray-300 uppercase">Follow us</h2>
                            <ul className="text-gray-500 font-medium">
                                <li className="mb-2">
                                    <a
                                        href="https://github.com/hiteshchoudhary"
                                        className="hover:text-white"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        Github
                                    </a>
                                </li>
                                <li>
                                    <Link to="/" className="hover:text-white">
                                        Discord
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-4 text-sm font-semibold text-gray-300 uppercase">Legal</h2>
                            <ul className="text-gray-500 font-medium">
                                <li className="mb-2">
                                    <Link to="#" className="hover:text-white">
                                        Privacy Policy
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#" className="hover:text-white">
                                        Terms & Conditions
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-gray-700" />
                <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">
                        © 2023
                        <a href="https://hiteshchoudhary.com/" className="hover:text-white">
                        anubhavseet
                        </a>
                        . All Rights Reserved.
                    </span>
                    <div className="flex space-x-4">
                        <Link to="#" className="text-gray-500 hover:text-white">
                            {/* Facebook icon */}
                        </Link>
                        <Link to="#" className="text-gray-500 hover:text-white">
                            {/* Discord icon */}
                        </Link>
                        <Link to="#" className="text-gray-500 hover:text-white">
                            {/* Twitter icon */}
                        </Link>
                        <Link to="#" className="text-gray-500 hover:text-white">
                            {/* Instagram icon */}
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};
