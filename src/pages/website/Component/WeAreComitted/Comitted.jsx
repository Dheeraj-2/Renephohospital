import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import healthcareImage from "../../IMG/doctor5.jpg"; // Adjust the path if needed
import { motion } from "framer-motion";
import { fadeIn } from "../../../../transition/variants";

const Committed = () => {
  return (
    <div className="bg-blue-50">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between  p-6 md:p-12 rounded-lg gap-6">
        {/* Left Side - Text */}
        <motion.div
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.2 }}
          className="w-[50%]"
        >
          <div className="md:w-full space-y-4">
            <h1 className="text-lg md:text-xl text-black">
              Caring for the health and well-being of you and your family
            </h1>
            <p className="text-2xl md:text-4xl font-bold text-black leading-tight">
              We are committed to delivering top-notch medical and general
              practice care to you and your family!
            </p>
            <p className="text-base md:text-lg text-black">
              We offer comprehensive medical services for your entire family,
              from general check-ups to specific injury care.
            </p>
            <p className="text-base md:text-lg text-black">
              We provide care for your whole family. The frequency of doctor
              visits will vary based on age and overall health!
            </p>

            {/* Feature List */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <ul className="text-black space-y-2">
                <li className="flex items-center">
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="text-green-500 mr-2"
                  />
                  Trusted compassionate care
                </li>
                <li className="flex items-center">
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="text-green-500 mr-2"
                  />
                  Health assessments
                </li>
                <li className="flex items-center">
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="text-green-500 mr-2"
                  />
                  Supportive Systems and Procedures
                </li>
                <li className="flex items-center">
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="text-green-500 mr-2"
                  />
                  Hygiene and sanitation amenities
                </li>
              </ul>
              <ul className="text-black space-y-2">
                <li className="flex items-center">
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="text-green-500 mr-2"
                  />
                  Outstanding Clinical Expertise
                </li>
                <li className="flex items-center">
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="text-green-500 mr-2"
                  />
                  Inpatient and outpatient care
                </li>
                <li className="flex items-center">
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="text-green-500 mr-2"
                  />
                  Desensitisation injections
                </li>
                <li className="flex items-center">
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="text-green-500 mr-2"
                  />
                  Medical supplies and equipment
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Right Side - Image */}
        <motion.div
          variants={fadeIn("left", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.2 }}
          className="w-[50%]"
        >
          <div className="md:w-full">
            <img
              src={healthcareImage}
              alt="Healthcare"
              className="rounded-lg  shadow-md w-full h-auto max-h-[400px] object-cover"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Committed;
