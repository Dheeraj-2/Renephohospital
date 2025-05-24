import { Typography } from "@material-tailwind/react";
import React, { useState } from "react";

import SkeletonLayout from "../../components/layout/SkeletonLayout";
// import cap from "../../assets/cap.png";

const StatsCard = ({ title, value, growth }) => {
  const [loading, setLoading] = useState(false);

  setTimeout(() => {
    setLoading(true);
  }, 2000);


  return (
    <div className=" bgPrimaryGradient  rounded-xl shadow-lg  relative space-y-1 overflow-hidden bg-gradient-to-r from-[#29A6E0] to-[#2E3494]">
      {loading ? (
        <div className="p-6 min-h-[12rem] flex flex-col justify-center gap-2">
          <Typography
            textGradient={true}
            variant="h5"
            className=" text-white poppins-font"
          >
            {title}
          </Typography>
          <Typography
            textGradient={true}
            variant="h1"
            className=" text-white poppins-font"
          >
            {value || 0}
          </Typography>
          <Typography
            textGradient={true}
            variant="h6"
            className=" text-white poppins-font flex items-center gap-2"
          >
          </Typography>

          {/* <div className=" w-[10rem] h-[10rem] bg-opacity-20 rounded-full absolute right-0">
            <img src={cap} />
          </div> */}
        </div>
      ) : (
        <SkeletonLayout height={12} />
      )}
    </div>
  );
};

export default StatsCard;
