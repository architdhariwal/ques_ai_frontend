import React from "react";

function Loading() {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-gray-100 bg-opacity-50 z-50">
      <div className="border-8 border-t-8 border-gray-200 border-t-blue-500 border-solid rounded-full w-16 h-16 animate-spin"></div>
      <p className="mt-4 text-gray-600 text-lg">Loading...</p>
    </div>
  );
}

export default Loading;