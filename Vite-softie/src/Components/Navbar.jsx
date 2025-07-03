import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import About from "./About";
import Features from "./Features";
import Screenshot from "./Screenshot";
import Client from "./Client";
import Pricing from "./Pricing";
import Download from "../Download";

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
        <Link to="/" className="text-3xl font-bold">SOFTIE</Link>
        <nav className="text-lg font-medium">
          <Link to="/" className="ps-5 hover:text-blue-500">Home</Link>
          <Link to="/about" className="ps-5 hover:text-blue-500">About</Link>
          <Link to="/features" className="ps-5 hover:text-blue-500">Features</Link>
          <Link to="/screenshot" className="ps-5 hover:text-blue-500">Screenshot</Link>
          <Link to="/client" className="ps-5 hover:text-blue-500">Client</Link>
          <Link to="/pricing" className="ps-5 hover:text-blue-500">Pricing</Link>
          <Link to="/download" className="ps-5 hover:text-blue-500">Download</Link>
        </nav>
        <button className="bg-blue-500 text-white py-2 px-6 rounded-xl hover:bg-blue-600">
          Sign Up
        </button>
      </div>
      <About />
      <Features />
      <Screenshot />
      <Client />
      <Pricing />
      <Download />   {/* <-- Add this line if you want Download on home page */}
    </div>
  );
};
