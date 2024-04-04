import React from "react";
import Image from "next/image"; // Import the Image component

interface IProps {
  imageUrl: string;
  title: string;
  description: string;
}

function ProcessCard({ imageUrl, title, description }: IProps) {
  return (
    <div className="flex flex-col items-center border-[2px] border-[#EBEAED] rounded-lg shadow-lg py-[3rem] px-4 text-center">
      <div className="mb-6 relative w-[7.5rem] h-[7.5rem]">
        {" "}
        {/* Make sure to set a width and height */}
        <Image
          src={imageUrl}
          alt="step image"
          layout="fill" // Use 'fill' for a responsive image that fills the container, or use 'fixed' or 'responsive' based on your design needs
          objectFit="cover" // Adjust as necessary to fit the image properly
        />
      </div>
      <p className="text-lightBlue font-bold text-[1.5rem] mb-4">{title}</p>
      <p className="text-darkBlue">{description}</p>
    </div>
  );
}

export default ProcessCard;
