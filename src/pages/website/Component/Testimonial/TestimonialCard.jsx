import React from "react";
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Avatar,
} from "@material-tailwind/react";

const StarIcon = ({ filled }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill={filled ? "currentColor" : "none"}
        stroke="currentColor"
        strokeWidth="2"
        className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-500"
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 3.5l2.9 6.3 7 .6-5.3 4.6 1.5 6.9-6.1-3.7-6.1 3.7 1.5-6.9-5.3-4.6 7-.6L12 3.5z"
        />
    </svg>
);

function TestimonialCard({ name, role, image, review, rating = 5 }) {
    return (
        <div className="flex justify-center">
        <Card
            color="transparent"
            shadow={false}
            className="w-full max-w-[18rem] sm:max-w-[22rem] md:max-w-[24rem] bg-gray-900 p-6 rounded-xl transition-all duration-300 hover:shadow-lg"
        >
            {/* Avatar & Name Section */}
            <CardHeader
                color="transparent"
                floated={false}
                shadow={false}
                className="flex items-center gap-4 pb-4"
            >
                <Avatar 
                    size="lg" 
                    variant="circular" 
                    src={image} 
                    alt={name} 
                    className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20"
                />
                <div className="flex flex-col">
                    <Typography variant="h5" color="white" className="text-lg sm:text-xl md:text-2xl font-semibold">
                        {name}
                    </Typography>
                    <Typography color="white" className="text-xs sm:text-sm md:text-base opacity-75">
                        {role}
                    </Typography>
                </div>
            </CardHeader>

            {/* Review & Rating Section */}
            <CardBody className="p-0">
                <div className="flex items-center mb-2">
                    {Array.from({ length: 5 }).map((_, index) => (
                        <StarIcon key={index} filled={index < rating} />
                    ))}
                </div>
                <Typography color="white" className="text-sm sm:text-base md:text-lg opacity-90 leading-relaxed">
                    "{review}"
                </Typography>
            </CardBody>
        </Card>
        </div>
    );
}

export default TestimonialCard;
