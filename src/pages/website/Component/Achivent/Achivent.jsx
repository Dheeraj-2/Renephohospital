import React from "react";
import AchiventCard from "./AchiventCard";
import bgImage from "../../IMG/pngtree5.png"; // Adjust the path based on your folder structure
import { motion } from "framer-motion";
import { fadeIn } from "../../../../transition/variants";

function Achivent() {
  const data1 = {
    title: "20",
    subtitle: "Verified Doctors",
    description1: "Consult with 20 verified doctors",
    bgColor: "bg-gray-900",
    textColor: "text-white",
  };

  const data2 = {
    title: "50",
    subtitle: "Expert Services",
    description1: "Consult with 50+ healthcare professionals",
    bgColor: "bg-blue-50",
    textColor: "text-black",
  };

  const data3 = {
    title: "100",
    subtitle: "Health Plans",
    description1: "Choose from 100+ tailored health plans",
    bgColor: "bg-gray-200",
    textColor: "text-black",
  };

  const data4 = {
    title: "200",
    subtitle: "Successful Surgeries",
    description1: "Over 200 successful surgeries performed",
    bgColor: "bg-white",
    textColor: "text-black",
  };

  return (
    <div
      className="  bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="container mx-auto">
        <div className="flex flex-col justify-center items-center pt-20">
          <h2 className="font-semibold text-4xl text-black ">
            Highlighting Key Achievements
          </h2>
          <p className="font-semibold pt-4"></p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 p-16">
          <div className="pb-6">
            <motion.div
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.2 }}
            >
              <AchiventCard {...data1} />
            </motion.div>
          </div>
          <div className="mt-14">
            <motion.div
              variants={fadeIn("down", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.2 }}
            >
              <AchiventCard {...data2} />
            </motion.div>
          </div>
          <div className="">
            <motion.div
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.2 }}
            >
              <AchiventCard {...data3} />
            </motion.div>
          </div>
          <div className="mt-14">
            <motion.div
              variants={fadeIn("down", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.2 }}
            >
              <AchiventCard {...data4} />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Achivent;
