import "bootstrap-icons/font/bootstrap-icons.css";

const About = () => {
  return (
    <>
      <div>
  <div className="mt-[5%] text-center">
  <span className="text-blue-600 text-[15px]">About</span>
  <h2 className="text-[24px] font-medium">About Us</h2>
</div>
        <p className="flex items-center justify-center gap-2 my-2">
          <span className="border-b-2 w-6 border-gray-300"></span>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
            className="bi bi-x-diamond-fill text-black" viewBox="0 0 16 16">
            <path d="M9.05.435c-.58-.58-1.52-.58-2.1 0L4.047 3.339 8 7.293l3.954-3.954L9.049.435zm3.61 3.611L8.708 8l3.954 3.954 
              2.904-2.905c.58-.58.58-1.519 0-2.098l-2.904-2.905zm-.706 8.614L8 8.708l-3.954 3.954 2.905 2.904c.58.58 
              1.519.58 2.098 0l2.905-2.904zm-8.614-.706L7.292 8 3.339 4.046.435 6.951c-.58.58-.58 1.519 0 2.098z" />
          </svg>
          <span className="border-b-2 w-6 border-gray-300"></span>
        </p>

        <p className="font-medium text-gray-500 text-[13px] max-w-[520px] text-center mx-auto leading-normal">
          Dantes remained confused and silent by this explanation of the thoughts which had unconsciously been working in his mind, or rather soul.
        </p>
        <div className='flex mt-[4%] ml-[20%] gap-5.5'>
          <div className="w-full md:w-80 p-6 border border-gray-200  text-center shadow-sm hover:shadow-md transition">
            <div className="text-blue-500 text-4xl mb-4">
       
              <i className="bi bi-box-arrow-up"></i>
            </div>
            <h3 className="text-xl font-semibold mb-3">Strategy Solutions</h3>
                <p className="text-gray-500 text-sm mb-6">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur.
            </p>
            <button className="w-10 h-10 rounded-full border border-gray-300 flex ml-[45%]  items-center justify-center hover:bg-blue-100 transition">
              <i className="bi bi-arrow-right"></i>
            </button>
          </div>

          <div className="w-full md:w-80 p-6 border border-gray-200  text-center shadow-sm hover:shadow-md transition">
            <div className="text-blue-500 text-4xl mb-4">
              <i className="bi bi-share"></i>
            </div>
            <h3 className="text-xl font-semibold mb-3">Dedicated Support</h3>
            <p className="text-gray-500 text-sm mb-6">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur.
            </p>
            <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center ml-[45%] justify-center hover:bg-blue-100 transition">
              <i className="bi bi-arrow-right"></i>
            </button>
          </div>

          <div className="w-full md:w-80 p-6 border border-gray-200  text-center shadow-sm hover:shadow-md transition">
            <div className="text-blue-500 text-4xl mb-4">
              <i className="bi bi-display"></i>
            </div>
            <h3 className="text-xl font-semibold mb-3">Digital Design</h3>
            <p className="text-gray-500 text-sm mb-6">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur.
            </p>
            <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-blue-100 transition ml-[45%]">
              <i className="bi bi-arrow-right"></i>
            </button>
          </div>

        </div>
      </div>
    </>
  )
}

export default About;