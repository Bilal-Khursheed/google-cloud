import React from "react";
import Image from "next/image"; // Import the Image component

interface IProps {
  imageUrl: string;
  review: string;
  reviewerName: string;
}

function TestimonialCard({ imageUrl, review, reviewerName }: IProps) {
  return (
    <div className="flex flex-col md:flex-row gap-[1.88rem]">
      <div className="relative w-[4.375rem] h-[4.375rem] rounded-[0.625rem] overflow-hidden">
        {" "}
        {/* Adjust div to contain Image component */}
        <Image
          src={imageUrl}
          alt="reviewer profile picture"
          layout="fill" // Image will fill the container
          objectFit="cover" // Ensures the image covers the area without stretching
          className="rounded-[0.625rem]" // Apply rounding here to maintain the shape
        />
      </div>
      <div className="flex flex-col gap-[0.81rem]">
        <p className="text-darkBlue font-bold">{review}</p>
        <p className="text-darkBlue font-bold opacity-[0.3]">{reviewerName}</p>
      </div>
    </div>
  );
}

export default TestimonialCard;
