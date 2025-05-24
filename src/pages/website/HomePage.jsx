import React from "react";
import Navbar from "./Comman/Navbar";
import HeroImg from "./Component/HereImg/HeroImg";
import Card from "./Component/MemberGets/Card";
import Comitted from "./Component/WeAreComitted/Comitted";
import Achivent from "./Component/Achivent/Achivent";
import OurServise from "./Component/Over Servise/OurServise";
import SimpleSlider from "./Component/Testimonial/SimpleSlider";
import ContactUs from "./Component/ContactUs/ContactUs";
import FooterWithSitemap from "./Comman/Footer";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <div id="hero">
        <HeroImg />
      </div>
      <Card />
      <div className="" id="services">
        <Comitted />
      </div>
      <div className="">
        <Achivent />
      </div>
      <div id="services1">
        <OurServise />
      </div>
      <div className="container mx-auto overflow-hidden" id="testimonial">
        <SimpleSlider />
      </div>
      <div id="contact">
        <ContactUs />
      </div>
      <div
        style={{ width: "98.7vw", height: "450px" }}
        className="flex justify-center"
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3599.528714583463!2d83.9543776753935!3d25.554070977482976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjXCsDMzJzE0LjciTiA4M8KwNTcnMjUuMCJF!5e0!3m2!1sen!2sin!4v1741336144432!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Map"
        ></iframe>
      </div>
      <FooterWithSitemap />
    </>
  );
};

export default HomePage;
