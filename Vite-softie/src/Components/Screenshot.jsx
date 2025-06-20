import React from "react";

const Screenshot = () => {
  return (
    <div className="mt-[5%] text-center px-4">
      {/* Section Title */}
      <div>
        <span className="text-blue-600 text-[15px]">Screenshot</span>
        <h2 className="text-[24px] font-medium">Dashboard Screenshot</h2>
      </div>

      {/* Divider with Icon */}
      <div className="flex items-center justify-center gap-2 my-2">
        <span className="border-b-2 w-6 border-gray-300"></span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-x-diamond-fill text-black"
          viewBox="0 0 16 16"
        >
          <path d="M9.05.435c-.58-.58-1.52-.58-2.1 0L4.047 3.339 8 7.293l3.954-3.954L9.049.435zm3.61 3.611L8.708 8l3.954 3.954 
          2.904-2.905c.58-.58.58-1.519 0-2.098l-2.904-2.905zm-.706 8.614L8 8.708l-3.954 3.954 2.905 2.904c.58.58 
          1.519.58 2.098 0l2.905-2.904zm-8.614-.706L7.292 8 3.339 4.046.435 6.951c-.58.58-.58 1.519 0 2.098z" />
        </svg>
        <span className="border-b-2 w-6 border-gray-300"></span>
      </div>

      {/* Description Text */}
      <p className="font-medium text-gray-500 text-[13px] max-w-[520px] text-center mx-auto leading-normal">
        Dantes remained confused and silent by this explanation of the thoughts
        which had unconsciously been working in his mind, or rather soul.
      </p>

      <div className="flex ml-[15%] gap-13 mt-15">
        <img src="screenshot-1.png" className="h-60 w-[20rem] object-contain border border-gray-300 rounded-md shadow-sm" />
            <img src="screenshot-2.png" className="h-60 w-[20rem] object-contain border border-gray-300 rounded-md shadow-sm" />
                <img src="screenshot-3.png" className="h-60 w-[20rem] object-contain border border-gray-300 rounded-md shadow-sm" />
      </div>
      <div className="flex ml-[15%] gap-13 mt-5 ">
        <img src="screenshot-4.png" className="h-60 w-[20rem] object-contain border border-gray-300 rounded-md shadow-sm" />
            <img src="screenshot-5.png" className="h-60 w-[20rem] object-contain border border-gray-300 rounded-md shadow-sm" />
                <img src="screenshot-6.png" className="h-60 w-[20rem] object-contain border border-gray-300 rounded-md shadow-sm" />
      </div>
    </div>
  );
};

export default Screenshot;
