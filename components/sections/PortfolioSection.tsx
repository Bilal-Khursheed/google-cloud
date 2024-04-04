import React from "react";
import Image from "next/image";
import MainButton from "../common/MainButton";

function PortfolioSection() {
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
          <div
            key={num}
            className="relative w-[calc(16.666%_-_1rem)] md:w-[calc(11.666%_-_2rem)] h-[150px] md:h-[200px]"
          >
            <Image
              src={`/images/portfolio/portfolio${num}.png`}
              alt={`Portfolio ${num}`}
              layout="fill"
              objectFit="cover"
            />
          </div>
        ))}
        {secondRowImages.map((num) => (
          <div
            key={num}
            className="relative w-[calc(16.666%_-_1rem)] md:w-[calc(11.666%_-_2rem)] h-[150px] md:h-[200px]"
          >
            <Image
              src={`/images/portfolio/portfolio${num}.png`}
              alt={`Portfolio ${num}`}
              layout="fill"
              objectFit="cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default PortfolioSection;
