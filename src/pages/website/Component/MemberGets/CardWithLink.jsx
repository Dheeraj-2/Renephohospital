import React from "react";
import { FaShieldAlt, FaLaptopCode, FaUserMd } from "react-icons/fa"; // Importing icons
import { motion } from "framer-motion";
import { fadeIn } from "../../../../transition/variants";

function CardWithLink(props) {
  // Determine which icon to show based on the heading
  const renderIcon = () => {
    switch (props.heading) {
      case "Quality & Safety":
        return <FaShieldAlt size={40} className="text-blue-900 mb-4" />;
      case "Leading Technology":
        return <FaLaptopCode size={40} className="text-blue-900 mb-4" />;
      case "Experts by Experience":
        return <FaUserMd size={40} className="text-blue-900 mb-4" />;
      default:
        return null;
    }
  };

  return (
    
      <div className="mt-6 w-full max-w-sm mx-auto flex flex-col bg-gray-50 rounded-lg p-6">
        <div className="text-left">
          {/* Render the appropriate icon */}
          {renderIcon()}

          <div className="text-xl font-semibold text-black mb-2">
            {props.heading}
          </div>
          <div className="text-black text-xl">{props.titles}</div>
        </div>
      </div>
    
  );
}

export default CardWithLink;
