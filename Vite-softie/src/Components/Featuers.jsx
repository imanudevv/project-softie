const Featuers = () => {
  return (
    <>
      {/* Heading and subheading */}
      <div className="mt-[10%]">
        <div className="mt-[5%] text-center">
          <span className="text-blue-600 text-[15px]">features</span>
          <h2 className="text-[24px] font-medium">Key features of the product</h2>
        </div>

        {/* Decorative separator with icon */}
        <p className="flex items-center justify-center gap-2 my-2">
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
        </p>

        {/* Description paragraph */}
        <p className="font-medium text-gray-500 text-[13px] max-w-[520px] text-center mx-auto leading-normal">
          Dantes remained confused and silent by this explanation of the thoughts which had unconsciously been working in his mind, or rather soul.
        </p>

        {/* Image + feature text block */}
        <div className="flex gap-6">
          <div className="mt-[5%] ml-[15%]">
            <h2 className="text-[24px]">
              Create Something Totally & Amazing Professional Features.
            </h2>
            <p className="font-light text-gray-500 text-[15px] max-w-[520px] leading-normal mt-4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
            <div className="flex gap-16 mt-7">
              {/* Card 1 */}
              <div>
                <div className="bg-blue-100 text-blue-600 rounded-md w-10 h-10 flex items-center justify-center text-sm font-medium mb-2">
                  1
                </div>
                <h3 className="text-[18px] font-semibold mb-1">Creative Execution</h3>
                <p className="text-gray-500 text-[14px] leading-relaxed max-w-[220px]">
                  Nulla sociis odio pharetra aptent senectus volutpat.
                </p>
              </div>
              {/* Card 2 */}
              <div>
                <div className="bg-blue-100 text-blue-600 rounded-md w-10 h-10 flex items-center justify-center text-sm font-medium mb-2">
                  2
                </div>
                <h3 className="text-[18px] font-semibold mb-1">Sky's the limit</h3>
                <p className="text-gray-500 text-[14px] leading-relaxed max-w-[220px]">
                  sed do eiusmod tempor incididunt ut labore.
                </p>
              </div>
            </div>
          </div>
          <img
            src="/features-1.png"
            className="ml-auto h-80 w-[28rem] mr-[20%] mt-14"
            alt="Feature 1"
          />
        </div>

        {/* Second feature block */}
        <div className="mt-24 flex items-center justify-center gap-10 px-10">
          {/* Left Side Image */}
          <img
            src="/features-2.png"
            className="h-80 w-[28rem]"
            alt="Feature 2"
          />
          {/* Right Side Content */}
          <div className="max-w-xl p-8 bg-white rounded-2xl shadow-md">
            <div className="w-12 h-12 flex items-center justify-center bg-blue-100 rounded-xl mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                className="bi bi-infinity text-blue-500"
                viewBox="0 0 16 16"
              >
                <path d="M5.248 7.99a3.015 3.015 0 0 1-.502.605c-.327.292-.76.47-1.246.47C2.367 9.065 1.5 8.189 1.5 7s.867-2.065 
                  2-2.065c.486 0 .92.178 1.246.47.198.177.37.39.502.605.132.216.242.441.33.65a7.35 7.35 0 0 0-.33.65zm1.298-.99a6.798 
                  6.798 0 0 0-.588-.877c-.432-.527-1.057-.992-1.958-.992C2.015 5.13.5 6.52.5 8s1.515 2.87 3.5 2.87c.901 
                  0 1.526-.465 1.958-.992.2-.243.382-.525.548-.832.166.307.348.589.548.832.432.527 1.057.992 
                  1.958.992 1.985 0 3.5-1.39 3.5-2.87s-1.515-2.87-3.5-2.87c-.901 0-1.526.465-1.958.992a6.801 
                  6.801 0 0 0-.588.877zM10.752 8.01c.093-.188.202-.434.33-.65a7.35 7.35 0 0 0-.33-.65 3.015 
                  3.015 0 0 1 .502-.605c.327-.292.76-.47 1.246-.47 1.133 0 2 .926 2 2.065s-.867 2.065-2 2.065c-.486 
                  0-.92-.178-1.246-.47a3.015 3.015 0 0 1-.502-.605z" />
              </svg>
            </div>
            <h2 className="text-2xl font-semibold mb-2 text-gray-800">
              Small Business For Professional Features.
            </h2>
            <p className="text-gray-500 mb-5 text-[15px]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <ul className="text-blue-600 space-y-2 text-[15px] mb-6">
              <li className="flex items-center">
                <span className="mr-2">⊚</span> Softie Landing Page.
              </li>
              <li className="flex items-center">
                <span className="mr-2">⊚</span> Bootstrap Html Css Design.
              </li>
              <li className="flex items-center">
                <span className="mr-2">⊚</span> Clean & Creative.
              </li>
            </ul>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-full text-[15px]">
              Read More
            </button>
          </div>
        </div>

        {/* Third feature block */}
        <div className="bg-gray-50 min-h-screen flex items-center justify-center px-6">
          <div className="flex flex-col md:flex-row items-center md:items-start max-w-6xl w-full space-y-10 md:space-y-0 md:space-x-10">
            {/* Text Content */}
            <div className="w-full md:w-1/2">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Perfact For Small & Corporate Businesses Template.
              </h2>
              <div className="w-16 h-1 bg-blue-500 mb-6"></div>
              <p className="text-gray-500 text-[15px] mb-6 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div className="space-y-6">
                {/* Feature 1 */}
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="text-blue-600" viewBox="0 0 16 16">
                      <path d="M13.854 3.646a.5.5 0 0 0-.708 0L6.5 10.293 3.354 7.146a.5.5 0 1 0-.708.708l3.5 3.5a.5.5 0 0 0 .708 0l7-7a.5.5 0 0 0 0-.708z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-[16px] font-semibold text-gray-800">Clean & Minimal Design</h4>
                    <p className="text-gray-500 text-[15px] mt-1">
                      You want customer to your store. Easily publish your coupans and when a user has catch one of your coupens.
                    </p>
                  </div>
                </div>
                {/* Feature 2 */}
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="text-blue-600" viewBox="0 0 16 16">
                      <path d="M13.854 3.646a.5.5 0 0 0-.708 0L6.5 10.293 3.354 7.146a.5.5 0 1 0-.708.708l3.5 3.5a.5.5 0 0 0 .708 0l7-7a.5.5 0 0 0 0-.708z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-[16px] font-semibold text-gray-800">Elegant & Modern Design</h4>
                    <p className="text-gray-500 text-[15px] mt-1">
                      You want customer to your store. Easily publish your coupans and when a user has catch one of your coupens.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Image Section */}
            <div className="w-full md:w-1/2 flex justify-center">
              <img
                src="/features-3.png"
                alt="Feature 3"
                className="h-80 w-[28rem] object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Featuers;