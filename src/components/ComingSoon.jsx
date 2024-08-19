import React from 'react';

const ComingSoon = () => {
  return (
    <div className="flex flex-col items-center   bg-gray-100">
      {/* Content Container */}
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md text-center">
        {/* Title */}
        <h1 className="text-3xl font-semibold text-gray-800 mb-4">Coming Soon</h1>
        {/* Subtitle */}
        <p className="text-gray-600 mb-6">
          We're working hard to bring this feature to you. Stay tuned!
        </p>

      </div>
    </div>
  );
};

export default ComingSoon;