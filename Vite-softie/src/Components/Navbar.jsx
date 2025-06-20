import { useEffect, useState } from "react";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); // You can tweak 50px to your liking
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      id="header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 
        ${scrolled ? "bg-white text-black shadow-md" : "bg-gray-900 text-white"}`}
    >
      <div className="flex justify-around items-center py-4">
        <a href="#" className="text-3xl font-bold">SOFTIE</a>
        <nav className="text-lg font-medium">
          <a href="#home" className="ps-5 hover:text-blue-500">Home</a>
          <a href="#about" className="ps-5 hover:text-blue-500">About</a>
          <a href="#features" className="ps-5 hover:text-blue-500">Features</a>
          <a href="#screenshot" className="ps-5 hover:text-blue-500">Screenshot</a>
          <a href="#client" className="ps-5 hover:text-blue-500">Client</a>
          <a href="#pricing" className="ps-5 hover:text-blue-500">Pricing</a>
          <a href="#download" className="ps-5 hover:text-blue-500">Download</a>
        </nav>
        <button className="bg-blue-500 text-white py-2 px-6 rounded-xl hover:bg-blue-600">
          Sign Up
        </button>
      </div>
    </div>
  );
};
