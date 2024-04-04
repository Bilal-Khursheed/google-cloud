import React from "react";
import MainButton from "../common/MainButton";
import { useRouter } from "next/router";
import { Star, Users, Shield } from "lucide-react";
import NextImage from "next/image"; // Correct import for Next.js Image component

function HeroSection() {
  const router = useRouter();

  const navigateToSignUp = () => {
    router.push("/sign-up");
  };

  return (
    <section className="flex justify-between flex-col md:flex-row gap-4 items-center mt-32 mb-44">
      <div>
        <p className="font-[850] md:leading-[5.0625rem] text-2xl md:text-[4.375rem] text-purple-500">
          Create Your AI Influencer
        </p>
        <p className="text-[1.375rem] font-[500] mb-6">
          Forge the Future of Fame: Craft The Next Superstar
        </p>
        <div className="text-center md:text-left">
          <div className="flex items-center mb-2">
            <Users className="text-primary w-5 h-5 mr-2" />
            <p className="text-md font-medium">+3,212 AI Influencers created</p>
          </div>
          <div className="flex items-center mb-2">
            <NextImage
              src="/assets/icons/image-icon.svg"
              alt="Image Icon"
              width={20}
              height={20}
            />
            <p className="text-md font-medium">+48,233 images generated</p>
          </div>
          <div className="flex items-center mb-4">
            <Shield className="text-primary w-5 h-5 mr-2" />
            <p className="text-md font-medium mr-2">Trusted Worldwide</p>
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="text-yellow-500 w-4 h-4"
                fill="currentColor"
              />
            ))}
          </div>
        </div>
        <div className="flex gap-[1.75rem] items-center">
          <MainButton
            text="Get Started"
            classes="shadow-none w-[10.125rem]"
            onClick={navigateToSignUp}
          />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {["v1", "v2", "v3", "v4", "v5", "v6"].map((variant, index) => (
          <div
            key={index}
            className="relative"
            style={{ width: "164px", height: "164px" }}
          >
            <NextImage
              src={`/assets/images/${variant}.png`}
              alt={`Variant ${index + 1}`}
              layout="fill"
              objectFit="cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default HeroSection;
