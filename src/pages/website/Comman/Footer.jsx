import { Typography } from "@material-tailwind/react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import renepho2 from "../IMG/renepho2.png";
import { Link } from "react-router-dom";
import { FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-white py-6 px-4 md:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4">
        {/* Logo and About */}
        <div>
          <Typography variant="h5" className="text-lg font-bold mb-1">
            <img src={renepho2} alt="logo" className="w-60 h-auto" />
          </Typography>
        </div>

        {/* Sitemap */}
        <div>
          <Typography variant="h6" className="text-base font-semibold mb-1">
            Company
          </Typography>
          <ul className="space-y-1 text-sm">
            <li>
              <Link
                to="hero"
                smooth={true}
                duration={500}
                className="cursor-pointer text-gray-300 hover:text-white"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="services1"
                smooth={true}
                duration={500}
                className="cursor-pointer text-gray-300 hover:text-white"
              >
                Services
              </Link>
            </li>
          </ul>
        </div>

        {/* Helps */}
        <div>
          <Typography variant="h6" className="text-base font-semibold mb-1">
            Helps
          </Typography>
          <ul className="space-y-1 text-sm">
            <li>
              <Link
                to="testimonial"
                smooth={true}
                duration={500}
                className="cursor-pointer text-gray-300 hover:text-white"
              >
                Testimonials
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                smooth={true}
                duration={500}
                className="cursor-pointer text-gray-300 hover:text-white"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <Typography variant="h6" className="text-base font-semibold mb-1">
            Follow Us
          </Typography>
          <div className="flex space-x-3 mt-1">
            <a
              href="https://www.facebook.com/renephohospital"
              target="_blank"
              className="text-gray-300 hover:text-white"
            >
              <FaFacebook size={18} />
            </a>
            <a
              href="https://x.com/renephohospital"
              target="_blank"
              className="text-gray-300 hover:text-white"
            >
              <FaTwitter size={18} />
            </a>
            <a
              href="https://www.instagram.com/renephohospital/"
              target="_blank"
              className="text-gray-300 hover:text-white"
            >
              <FaInstagram size={18} />
            </a>
            <a
              href="https://www.linkedin.com/company/renepho-hospital/"
              target="_blank"
              className="text-gray-300 hover:text-white"
            >
              <FaLinkedin size={18} />
            </a>

            <a
              href="https://www.youtube.com/@RenephoHospital"
              target="_blank"
              className="text-gray-300 hover:text-white"
            >
              <FaYoutube size={20} />
            </a>
          </div>
          <div className="rounded-3xl bg-white w-max mt-4 cursor-pointer">
            <Link
              to="/login"
              className="cursor-pointer p-6 text-black font-bold text-sm  md:text-lg  transition py-6"
            >
              Corporate Login
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="text-center text-gray-500 text-xs mt-6 border-t border-gray-700 pt-3">
        &copy; {new Date().getFullYear()} Your Company. All rights reserved.
      </div>
    </footer>
  );
}
