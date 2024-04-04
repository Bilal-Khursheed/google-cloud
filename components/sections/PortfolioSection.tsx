import React from "react";
import MainButton from "../common/MainButton";

function PortfolioSection() {
  // Create an array of image numbers for easier mapping
  const firstRowImages = Array.from({ length: 6 }, (_, i) => i + 1); // Images 1 to 6
  const secondRowImages = Array.from({ length: 12 }, (_, i) => i + 7); // Images 7 to 18

  return (
    <section className="mt-[11.31rem] px-4 md:px-8 lg:px-12">
      <div className="text-center mb-8">
        <p className="text-lightBlue font-bold text-2xl">
          Powerful AI, Awesome AI Influencers
        </p>
        <p className="text-customLightGray text-[1.2rem] mt-4">
          Explore Our Portfolio: View Some Of Our Achievements
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-4">
        {firstRowImages.map((num) => (
          <img
            key={num}
            src={`/images/portfolio/portfolio${num}.png`}
            alt={`Portfolio ${num}`}
            className="w-[calc(16.666%_-_1rem)] md:w-[calc(11.666%_-_2rem)]"
          />
        ))}
        {secondRowImages.map((num) => (
          <img
            key={num}
            src={`/images/portfolio/portfolio${num}.png`}
            alt={`Portfolio ${num}`}
            className="w-[calc(16.666%_-_1rem)] md:w-[calc(11.666%_-_2rem)]"
          />
        ))}
      </div>
    </section>
  );
}

export default PortfolioSection;
