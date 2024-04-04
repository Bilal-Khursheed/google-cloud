import React from "react";
import Image from "next/image"; // Import the Image component
import MainButton from "../common/MainButton";

interface IProps {
  iconUrl: string;
  title: string;
  description: string;
  action?: () => void;
}

function ServiceCard({ iconUrl, title, description, action }: IProps) {
  return (
    <div className="flex flex-grow flex-col gap-[2.56rem] pt-[1.91rem] pb-[2.81rem] px-[2.56rem] items-center service-card-shadow rounded-[1.75rem]">
      <div className="relative w-[100px] h-[100px]">
        {" "}
        {/* Set the container to the desired width and height */}
        <Image
          src={iconUrl}
          alt="service icon"
          layout="fill" // This will make the image fill the container, adjust as necessary
          objectFit="cover" // Adjust this as necessary based on your design needs
        />
      </div>
      <p className="text-[2.25rem] font-[700]">{title}</p>
      <p className="text-normal">{description}</p>
      {action && <MainButton text="Learn More" onClick={action} />}
    </div>
  );
}

export default ServiceCard;
