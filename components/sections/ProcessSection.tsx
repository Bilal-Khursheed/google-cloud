// ProcessSection.jsx
import React from "react";
import Header from "../common/Header";
import ProcessCard from "../cards/ProcessCard";

function ProcessSection() {
  const processSteps = [
    {
      id: 0,
      imageUrl: "/images/form-icon.png",
      title: "Fill the Form",
      description:
        "Enter your preferences and desired characteristics for your AI influencer.",
    },
    {
      id: 1,
      imageUrl: "/images/magic-icon.png",
      title: "AI Magic",
      description:
        "Our custom AI processes your request, using deep learning to generate unique and wonderful influencer images.",
    },
    {
      id: 2,
      imageUrl: "/images/result-icon.png",
      title: "Your AI Influencer Awaits",
      description:
        "Discover your custom AI influencer, ready to engage and inspire across all platforms.",
    },
  ];

  return (
    <section className="mt-[10rem]">
      <Header title="The Process" subtitle="How It Works?" />
      <div className="grid grid-cols-1 gap-16 mt-8 md:grid-cols-3 md:mt-[3.31rem]">
        {processSteps.map((step) => (
          <ProcessCard
            key={step.id}
            imageUrl={step.imageUrl}
            title={step.title}
            description={step.description}
          />
        ))}
      </div>
    </section>
  );
}

export default ProcessSection;
