import React from "react";

function Button({ text, children, width, size,...props }) {
    let sizeText = 'text-'+size
  return (
    <button
      className={`bg-[#211935] text-white py-3 px-4 rounded-md w-${width} flex gap-2 items-center `} {...props}
    >
      {children} <span className={sizeText}>
        {text} 
        </span>
    </button>
  );
}

export default Button;