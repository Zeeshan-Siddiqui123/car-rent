import React from "react";
import { FaCarSide } from "react-icons/fa"; // React Icons for car icon

const Loader = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="relative w-full">
        {/* Road Line */}
        <div className="absolute bottom-2 left-0 w-full h-2 bg-gray-300 rounded-lg overflow-hidden">
          <div className="h-full bg-yellow-500 animate-pulse"></div>
        </div>

        {/* Moving Car */}
        <div className="absolute left-0 animate-move-car">
          <FaCarSide className="text-blue-500 text-6xl" />
        </div>
      </div>
    </div>
  );
};

export default Loader;
