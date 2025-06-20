import { useEffect, useState } from "react";
import 'bootstrap-icons/font/bootstrap-icons.css';

const Home = () => {
  const text = "Professional Sass Landing Page Template";
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);

  const speed = 100;
  const pause = 1500;

  useEffect(() => {
    const handleTyping = () => {
      if (!isDeleting) {
        setDisplayedText(text.slice(0, index + 1));
        setIndex((prev) => prev + 1);

        if (index === text.length) {
          setTimeout(() => setIsDeleting(true), pause);
        }
      } else {
        setDisplayedText(text.slice(0, index - 1));
        setIndex((prev) => prev - 1);

        if (index === 0) {
          setIsDeleting(false);
        }
      }
    };

    const timer = setTimeout(handleTyping, speed);
    return () => clearTimeout(timer);
  }, [index, isDeleting, text, speed, pause]);

  return (
    <div className="text-center pt-20 bg-gray-900 min-h-screen">
      <h1 className="text-white text-3xl md:text-5xl font-bold font-mono border-r-4 border-white pr-2 animate-pulse mt-[95px]">
        {displayedText}
      </h1>

      <p className="font-medium text-gray-500 text-xl mt-10">
        It is a long established fact that a reader will be distracted by <br />
        the readable content layout readable English.
      </p>

      <button className="bg-blue-500 hover:bg-blue-600 py-4 px-10 font-bold rounded-xl mt-10 text-xl text-white">
        Start Free Trial
      </button>

      <div className="mt-6 space-x-4 text-white text-sm">
        <span className="border-r-2 border-gray-500 pr-2">15 days trial</span>
        <span className="border-r-2 border-gray-500 pr-2">Any product</span>
        <span>No credit card</span>
      </div>

      <img src="./hi.png" alt="Preview" className="mx-auto mt-10 w-3/4 md:w-2/4" />
    </div>
  );
};

export default Home;
