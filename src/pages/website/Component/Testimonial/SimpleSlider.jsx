import React from "react";
import Slider from "react-slick";
import TestimonialCard from "./TestimonialCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
    {
        id: 1,
        name: "John Doe",
        role: "CEO @ Company",
        image: "https://randomuser.me/api/portraits/men/32.jpg",
        review: "Amazing experience! The best platform I have used so far.",
        rating: 5,
    },
    {
        id: 2,
        name: "Jane Smith",
        role: "Product Manager",
        image: "https://randomuser.me/api/portraits/women/45.jpg",
        review: "A fantastic service with great support. hello Boss .!",
        rating: 4,
    },
    {
        id: 3,
        name: "Alex Johnson",
        role: "Designer",
        image: "https://randomuser.me/api/portraits/men/52.jpg",
        review: "Helped me improve my workflow drastically. Love it!",
        rating: 5,
    },
];

// Custom Arrows
const CustomPrevArrow = (props) => {
    const { className, onClick } = props;
    return (
        <div
            className={`${className} custom-arrow left-[-35px] text-yellow-400 hover:text-yellow-300`}
            onClick={onClick}
        >
            ◀
        </div>
    );
};

const CustomNextArrow = (props) => {
    const { className, onClick } = props;
    return (
        <div
            className={`${className} custom-arrow right-[-35px] text-yellow-400 hover:text-yellow-300`}
            onClick={onClick}
        >
            ▶
        </div>
    );
};

export default function SimpleSlider() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />,
        responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 2 } },
            { breakpoint: 768, settings: { slidesToShow: 1 } }, // Show only 1 slide on mobile
        ],
    };

    return (
        <>
            <div className=" text-center pt-10">
                <h1 className="text-4xl font-semibold mb-4">
                   Testimonials
                </h1>
            </div>
            <div className="px-4 py-10 relative">
                <Slider {...settings}>
                    {testimonials.map((testimonial) => (
                        <div key={testimonial.id} className="px-2">
                            <TestimonialCard {...testimonial} />
                        </div>
                    ))}
                </Slider>
            </div>
        </>
    );
}
