import React from 'react';

function AchiventCard({ title, subtitle, description1, description2, description3, bgColor, textColor }) {
    return (
        <div className={`${bgColor} py-12 px-8 rounded-lg shadow-md text-center`}>
            {/* Heading */}
            <h2 className={`text-4xl font-bold ${textColor} mb-4`}>
                {title}
            </h2>
            <h3 className={`text-2xl font-semibold ${textColor} mb-6`}>
                {subtitle}
            </h3>

            {/* Description */}
            <p className={`text-lg ${textColor} mb-4`}>
                {description1}
            </p>
            <p className={`text-lg ${textColor} mb-4`}>
                {description2}
            </p>
            <p className={`text-lg ${textColor}`}>
                {description3}
            </p>
        </div>
    );
}

export default AchiventCard;
