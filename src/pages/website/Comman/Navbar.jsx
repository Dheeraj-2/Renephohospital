import { useState } from "react";
import { Link } from "react-router-dom"; // Use react-router-dom for navigation
import { Link as ScrollLink } from "react-scroll"; // Use react-scroll for scrolling
import logo from "../IMG/renepho2.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gray-100 shadow-md fixed w-full top-0 left-0 z-20">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div>
          <img src={logo} alt="logo" className="w-40" />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex space-x-6 items-center justify-end">
          <ScrollLink
            to="hero"
            smooth={true}
            duration={500}
            className="cursor-pointer text-black font-semibold text-xl hover:text-gray-500 transition"
          >
            Home
          </ScrollLink>
          <ScrollLink
            to="services1"
            smooth={true}
            duration={500}
            className="cursor-pointer text-black font-semibold text-xl hover:text-gray-500 transition"
          >
            Services
          </ScrollLink>
          <ScrollLink
            to="testimonial"
            smooth={true}
            duration={500}
            className="cursor-pointer text-black font-semibold text-xl hover:text-gray-500 transition"
          >
            Testimonials
          </ScrollLink>
          <div className="rounded-3xl bg-gray-500 w-max">
            <ScrollLink
              to="contact"
              smooth={true}
              duration={500}
              className="cursor-pointer p-3 text-white font-semibold text-xl hover:text-gray-100 transition py-6"
            >
              Enquire Now
            </ScrollLink>
          </div>
          {/* <div className="rounded-3xl bg-[#212121]">
            <Link
              to="/login"
              className="cursor-pointer p-6 text-white font-semibold text-xl hover:text-gray-100 transition py-6"
            >
              Login
            </Link>
          </div> */}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="lg:hidden p-2 rounded-md focus:outline-none text-black"
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden bg-gray-100 transition-all duration-300 ease-in-out ${
          isMenuOpen ? "block" : "hidden"
        }`}
      >
        <div className="flex flex-col pl-6 space-y-1 pb-3">
          <ScrollLink
            to="hero"
            smooth={true}
            duration={500}
            className="cursor-pointer text-black font-semibold text-xl hover:text-gray-500"
          >
            Home
          </ScrollLink>
          <ScrollLink
            to="services"
            smooth={true}
            duration={500}
            className="cursor-pointer text-black font-semibold text-xl hover:text-gray-500"
          >
            Services
          </ScrollLink>
          <ScrollLink
            to="testimonial"
            smooth={true}
            duration={500}
            className="cursor-pointer text-black font-semibold text-xl hover:text-gray-500"
          >
            Testimonials
          </ScrollLink>
          <div className="rounded-3xl bg-gray-500 w-max">
            <ScrollLink
              to="contact"
              smooth={true}
              duration={500}
              className="cursor-pointer p-3 text-white font-semibold text-xl hover:text-gray-100 transition"
            >
              Enquire Now
            </ScrollLink>
          </div>
          {/* <div className="rounded-3xl bg-[#212121]">
            <Link
              to="/login"
              className="cursor-pointer p-6 text-white font-semibold text-xl hover:text-gray-100 transition py-6"
            >
              Login
            </Link>
          </div> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
