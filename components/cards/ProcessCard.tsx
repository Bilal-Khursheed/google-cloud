// ProcessCard.jsx
import React from "react";

interface IProps {
  imageUrl: string;
  title: string;
  description: string;
}

function ProcessCard({ imageUrl, title, description }: IProps) {
  return (
    <div className="flex flex-col items-center border-[2px] border-[#EBEAED] rounded-lg shadow-lg py-[3rem] px-4 text-center">
      <div className="mb-6">
        <img
          src={imageUrl}
          alt="step image"
          className="w-[7.5rem] h-[7.5rem]"
        />
      </div>
      <p className="text-lightBlue font-bold text-[1.5rem] mb-4">{title}</p>
      <p className="text-darkBlue">{description}</p>
    </div>
  );
}

export default ProcessCard;
