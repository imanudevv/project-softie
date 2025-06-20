
const Client = () => {
  return (
    <div>
            <div className="mt-[5%] text-center px-4">
      {/* Section Title */}
      <div>
        <span className="text-blue-600 text-[15px]">Client</span>
        <h2 className="text-[24px] font-medium">What Client's Say's
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
      </div>

     <div className="flex flex-wrap justify-center gap-6 mt-14">
  {[1, 2, 3].map((_, index) => (
    <div
      key={index}
      className="w-[280px] bg-white p-4 rounded-lg shadow-md border border-dashed border-gray-200 text-center"
    >
      {/* Icon */}
      <div className="flex justify-center mb-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          fill="currentColor"
          className="text-blue-500"
          viewBox="0 0 16 16"
        >
          <path d="M8 9.05a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5" />
          <path d="M1 1a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h.5a.5.5 0 0 0 .5-.5.5.5 0 0 1 1 0 .5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5.5.5 0 0 1 1 0 .5.5 0 0 0 .5.5h.5a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H6.707L6 1.293A1 1 0 0 0 5.293 1zm0 1h4.293L6 2.707A1 1 0 0 0 6.707 3H15v10h-.085a1.5 1.5 0 0 0-2.4-.63C11.885 11.223 10.554 10 8 10c-2.555 0-3.886 1.224-4.514 2.37a1.5 1.5 0 0 0-2.4.63H1z" />
        </svg>
      </div>

      {/* Quote */}
      <p className="italic text-gray-600 text-[14px] leading-relaxed mb-3">
        "we are Softie, a design and branding agency with partners worldwide
        been working in his mind, or rather soul."
      </p>

      {/* Name */}
      <p className="text-gray-800 font-semibold text-sm">
        - Christopher Mayo, <span className="font-bold">Softie</span>
      </p>
    </div>
  ))}
</div>

    </div>
  )
}

export default Client