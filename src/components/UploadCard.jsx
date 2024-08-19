import React, { useRef } from "react";

function UploadCard({text,svg,...props}) {

  return (
    <div className="flex items-center justify-center p-8 bg-white border rounded-lg shadow-md cursor-pointer " {...props}>
      <div className="flex items-center space-x-4">
      
        <div className="text-lg font-medium text-gray-800">
          <p className="font-bold">{text} </p>
          <p className="text-xs text-slate-300">Lorem ipsum dolor sit. 
          Dolor lorem sit.</p>
        </div>
        <div className="flex-shrink-0">
          <img
            className="w-12 h-12"
            src={svg}

            alt="YouTube Icon"
          />
        </div>
      </div>
    </div>
  );
}

export default UploadCard;