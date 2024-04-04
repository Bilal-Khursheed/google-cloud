import React from "react";
import MainButton from "../common/MainButton";

interface IProps {
  iconUrl: string;
  title: string;
  description: string;
  action?: () => void;
}

function ServiceCard({ iconUrl, title, description, action }: IProps) {
  return (
    <div className="flex flex-grow flex-col gap-[2.56rem]  pt-[1.91rem] pb-[2.81rem] px-[2.56rem] items-center service-card-shadow rounded-[1.75rem]">
      <div>
        {/* Adjust the width and height directly on the image */}
        <img src={iconUrl} alt="service icon" width="100" height="100" />
      </div>
      <p className="text-[2.25rem] font-[700]">{title}</p>
      <p className="text-normal">{description}</p>
      {/* Assuming you might want to use the MainButton component if an action is provided */}
      {action && <MainButton text="Learn More" onClick={action} />}
    </div>
  );
}

export default ServiceCard;
