const Download = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
  };

  return (
    <footer className="bg-[#10101B] py-16 mt-17 text-white">
      <h1 className="text-5xl text-center mb-8">Want To Get Started</h1>

      <form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto space-y-4 p-4 bg-[#10101B] rounded-lg shadow-lg"
      >
        <input
          type="text"
          placeholder="Your name..."
          aria-label="Your name"
          className="w-full p-3 rounded-md bg-[#2C2B35] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="email"
          placeholder="Your email..."
          aria-label="Your email"
          className="w-full p-3 rounded-md bg-[#2C2B35] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="text"
          placeholder="Your subject..."
          aria-label="Your subject"
          className="w-full p-3 rounded-md bg-[#2C2B35] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <textarea
          placeholder="Your message..."
          aria-label="Your message"
          rows="3"
          className="w-full p-3 rounded-md bg-[#2C2B35] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
        ></textarea>

        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 font-semibold py-3 rounded-md transition"
        >
          Get The Demo
        </button>
      </form>

      <div className="bg-[#10101B] px-20 py-12 mt-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* ABOUT */}
          <div>
            <h2 className="text-[18px] font-semibold mb-4">ABOUT SOFTIE</h2>
            <p className="text-gray-500 mb-4">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat pariatur.
            </p>
            <div className="flex gap-4">
              {[
                { name: 'Twitter', icon: 'bi-twitter' },
                { name: 'Facebook', icon: 'bi-facebook' },
                { name: 'LinkedIn', icon: 'bi-linkedin' },
                { name: 'Google', icon: 'bi-google' },
              ].map(({ name, icon }) => (
                <div
                  key={name}
                  className="bg-[#2f2f3d] p-2 rounded-full"
                  title={name}
                  aria-label={name}
                >
                  <i className={`bi ${icon}`}></i>
                </div>
              ))}
            </div>
          </div>

          {/* PAGES */}
          <div>
            <h2 className="text-[18px] font-semibold mb-4">OUR PAGES</h2>
            <ul className="space-y-2 text-gray-500">
              <li>Home</li>
              <li>Features</li>
              <li>About</li>
              <li>Client</li>
              <li>Pricing</li>
            </ul>
          </div>

          {/* SUPPORT */}
          <div>
            <h2 className="text-[18px] font-semibold mb-4">SUPPORT</h2>
            <ul className="space-y-2 text-gray-500">
              <li>Help Center</li>
              <li>Live Chat</li>
              <li>Downloads</li>
              <li>Press Kit</li>
            </ul>
          </div>

          {/* LOCATIONS */}
          <div>
            <h2 className="text-[18px] font-semibold mb-4">LOCATIONS</h2>
            <ul className="space-y-2 text-gray-500">
              <li className=" inline-block px-2">Melbourne</li>
              <li>London</li>
              <li>New York</li>
              <li>San Francisco</li>
              <li>Ontario</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="text-center mt-6 text-sm text-gray-500">
        2024 © Softie. Design by Webonzer.
      </div>
    </footer>
  );
};

export default Download;
