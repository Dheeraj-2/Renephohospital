import React from "react";
import ServiseCard from "./ServiseCard";
import doctor1 from "../../IMG/p4.jpg";
import doctor2 from "../../IMG/p2.jpg";
import doctor3 from "../../IMG/p11.jpg";
import doctor4 from "../../IMG/p4.jpg";
import doctor5 from "../../IMG/p5.jpg";
import doctor6 from "../../IMG/p11.jpg";
import doctor7 from "../../IMG/p12.jpg";
import doctor8 from "../../IMG/p8.jpg";
import { motion } from "framer-motion";
import { fadeIn } from "../../../../transition/variants";

function OurServise() {
  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-gray-800">Our Services</h1>
          <p className="text-gray-600 mt-2">
            We provide the best solutions tailored to your needs.
          </p>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.2 }}
          >
            <ServiseCard image={doctor1} title="Emergency Care" />
          </motion.div>
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.2 }}
          >
            <ServiseCard image={doctor2} title="General Surgery" />
          </motion.div>
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.2 }}
          >
            <ServiseCard image={doctor3} title="Urology Department" />
          </motion.div>
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.2 }}
          >
            <ServiseCard image={doctor4} title="Nephrology Department" />
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.2 }}
          >
            <ServiseCard image={doctor5} title="Gynaecology Department" />
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.2 }}
          >
            <ServiseCard image={doctor6} title="Orthopaedic" />
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.2 }}
          >
            <ServiseCard image={doctor7} title="Dialysis" />
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.2 }}
          >
            <ServiseCard image={doctor8} title="ICU & OT" />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default OurServise;
