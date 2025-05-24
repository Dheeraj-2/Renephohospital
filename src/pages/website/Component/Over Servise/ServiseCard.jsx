import React from "react";
import { Card } from "@material-tailwind/react";

function ServiseCard({ image, title }) {
  return (
    <Card className="w-70 relative overflow-hidden">
      <div className="relative">
        <img src={image} alt="card-image" className="h-full w-full object-cover rounded" />
        
        {/* Title directly on text, left-bottom */}
        <p className="absolute bottom-2 left-2 text-white text-sm font-medium bg-black bg-opacity-20 px-2 py-1 rounded-sm">
          {title}
        </p>
      </div>
    </Card>
  );
}

export default ServiseCard;
