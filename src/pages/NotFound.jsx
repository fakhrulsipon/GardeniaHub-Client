import React from 'react';
import { Link } from 'react-router';

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-green-50 text-center px-4">
      <img
        src="https://cdn-icons-png.flaticon.com/512/2748/2748558.png"
        alt="404 Not Found"
        className="w-48 h-48 mb-6 animate-bounce"
      />
      <h1 className="text-5xl font-extrabold text-green-700 mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-green-800 mb-2">Oops! Page Not Found</h2>
      <p className="text-gray-600 mb-6">The page you are looking for does not exist or an invalid URL was entered.</p>
      
      <Link
        to="/"
        className="inline-block bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition"
      >
        🔙 Back to Home
      </Link>
    </div>
  );
};

export default NotFound;
