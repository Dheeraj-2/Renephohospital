import React from "react";
import CardWithLink from "./CardWithLink";
import { motion } from "framer-motion";
import { fadeIn } from "../../../../transition/variants";

function Card(props) {
  return (
    <div className="bg-[#f0f8ff]">
      <div className="container  mx-auto px-20 py-20">
        <div className="p-5 font-sans flex flex-col lg:flex-row justify-between items-center">
          <div className="max-w-full lg:max-w-[50%]">
            <p className="text-4xl font-bold mb-2 text-center lg:text-left">
              86% of our members get better within 12 weeks
            </p>
          </div>

          <div className="max-w-full lg:max-w-[45%] text-black text-xl text-center lg:text-left">
            <p>
              Our providers take a hands-on approach to help you see improvement
              at every step, no matter how severe your symptoms. Just come as
              you are and let us take it from there.
            </p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-center gap-10 items-center pb-8">
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.2 }}
          >
            <CardWithLink
              heading="Quality & Safety"
              titles="Our hospital features cutting-edge technology and is staffed by highly skilled experts."
            />
          </motion.div>
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.2 }}
          >
            <CardWithLink
              heading="Leading Technology"
              titles="Our hospital employs advanced technology to deliver top-quality care to every patient."
            />
          </motion.div>
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.2 }}
          >
            <CardWithLink
              heading="Experts by Experience"
              titles="Experts by Experience use their lived experiences to enhance patient care and improve healthcare practices."
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Card;
