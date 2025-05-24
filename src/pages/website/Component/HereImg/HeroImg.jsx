import { useState, useEffect } from "react";

// Importing images
import image1 from "../../IMG/doctor.jpg";
import image2 from "../../IMG/doctor2.jpg";
import image3 from "../../IMG/doctor3.jpg";
import { motion } from "framer-motion";
import { fadeIn } from "../../../../transition/variants";

function HeroImg() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    {
      src: image1,
      text: "Empowering Your Health with Expert Care & Compassion",
      description:
        "Welcome to compassionate, state-of-the-art medical care. Our dedicated team ensures every patient receives the highest standard of healthcare with a personal touch. Your health, our mission",
    },
    {
      src: image2,
      text: "Empowering Your Health with Expert Care & Compassion",
      description:
        "Welcome to compassionate, state-of-the-art medical care. Our dedicated team ensures every patient receives the highest standard of healthcare with a personal touch. Your health, our mission",
    },
    {
      src: image3,
      text: "Empowering Your Health with Expert Care & Compassion",
      description:
        "Welcome to compassionate, state-of-the-art medical care. Our dedicated team ensures every patient receives the highest standard of healthcare with a personal touch. Your health, our mission",
    },
  ];

  // Function to move to the next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Autoplay functionality
  useEffect(() => {
    const interval = setInterval(nextSlide, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, []);

  return (
    <div className="relative w-full h-screen">
      {/* Image Slider */}
      <div className="absolute inset-0 z-[-1]">
        <div
          className="w-full h-full bg-cover bg-center transition-all duration-700"
          style={{
            backgroundImage: `url(${images[currentIndex].src})`,
          }}
        >
          <div className="w-full h-full bg-black opacity-50"></div>
        </div>
      </div>

      {/* Text on Image */}
      <div className="absolute top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h1 className="text-4xl font-bold mb-4">
            {images[currentIndex].text}
          </h1>
          <p className="text-lg">{images[currentIndex].description}</p>
        </motion.div>
      </div>
    </div>
  );
}

export default HeroImg;
