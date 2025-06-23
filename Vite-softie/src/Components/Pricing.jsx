

const Pricing = () => {
  return (
<div>
         <div className="mt-[5%] text-center px-4">
      {/* Section Title */}
      <div>
        <span className="text-blue-600 text-[15px]">Price</span>
        <h2 className="text-[24px] font-medium">Best Pricing

</h2>
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

      <div className="mt-15">
  <div className="flex flex-wrap justify-center gap-8 p-6">
  {/* Card 1 */}
  <div className="relative w-72 bg-white p-6 rounded-xl shadow border text-center">
    <span className="inline-block px-4 py-1 mb-6 text-sm text-blue-600 bg-blue-100 rounded-full">
      Single use
    </span>
    <div className="mb-6">
      <svg className="mx-auto h-6 w-6 text-gray-700" fill="currentColor" viewBox="0 0 16 16">
        <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zM4 8a4 4 0 1 1 8 0A4 4 0 0 1 4 8z" />
      </svg>
    </div>
    <hr className="my-4" />
    <div className="text-gray-900 text-3xl font-semibold mb-2">Free</div>
    <p className="text-sm text-gray-500 mb-6">
      It is a long established fact that a reader will be distracted.
    </p>
    <button className="px-6 py-2 text-white bg-blue-500 hover:bg-blue-600 rounded-full text-sm font-medium transition">
      Download
    </button>
  </div>

  {/* Card 2 (Best Plan) */}
  <div className="relative w-72 bg-white p-6 rounded-xl shadow border text-center">
    {/* Ribbon */}
    <div className="absolute top-0 right-0">
      <div className="bg-blue-500 text-white text-xs font-semibold px-2 py-1 transform rotate-45 translate-x-4 -translate-y-2">
        BEST PLAN
      </div>
    </div>
    <span className="inline-block px-4 py-1 mb-6 text-sm text-blue-600 bg-blue-100 rounded-full">
      Multiple Use
    </span>
    <div className="mb-6">
      <svg className="mx-auto h-6 w-6 text-gray-700" fill="currentColor" viewBox="0 0 16 16">
        <path d="M8 0L7 6 2 2l2 6-6 1 6 2-2 6 5-4 1 6 1-6 5 4-2-6 6-2-6-1 2-6-5 4z" />
      </svg>
    </div>
    <hr className="my-4" />
    <div className="text-gray-900 text-3xl font-semibold mb-2">
      <span className="align-top text-sm">$</span>29.00
    </div>
    <p className="text-sm text-gray-500 mb-6">
      It is a long established fact that a reader will be distracted.
    </p>
    <button className="px-6 py-2 text-white bg-blue-500 hover:bg-blue-600 rounded-full text-sm font-medium transition">
      Download
    </button>
  </div>

  {/* Card 3 */}
  <div className="relative w-72 bg-white p-6 rounded-xl shadow border text-center">
    <span className="inline-block px-4 py-1 mb-6 text-sm text-blue-600 bg-blue-100 rounded-full">
      Extended Use
    </span>
    <div className="mb-6">
      <svg className="mx-auto h-6 w-6 text-gray-700" fill="currentColor" viewBox="0 0 16 16">
        <circle cx="8" cy="2" r="1.5" />
        <circle cx="2" cy="14" r="1.5" />
        <circle cx="14" cy="14" r="1.5" />
        <path d="M8 3.5v4m0 0l-5.5 6m5.5-6l5.5 6" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    </div>
    <hr className="my-4" />
    <div className="text-gray-900 text-3xl font-semibold mb-2">
      <span className="align-top text-sm">$</span>59.00
    </div>
    <p className="text-sm text-gray-500 mb-6">
      It is a long established fact that a reader will be distracted.
    </p>
    <button className="px-6 py-2 text-white bg-blue-500 hover:bg-blue-600 rounded-full text-sm font-medium transition">
      Download
    </button>
  </div>
</div>
 
      </div>

      
</div>
<div className="flex gap-20 ml-10 mt-15 justify-center gap-50"><img src="1.png"className="h-12 w-auto object-contain"/>
<img src="2.png"className="h-12 w-auto object-contain"/>
<img src="3.png"className="h-12 w-auto object-contain"/>
<img src="4.png"className="h-12 w-auto object-contain"/>
</div>
</div>
  )
}

export default Pricing;