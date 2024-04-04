import React from "react";
import Header from "../common/Header";
import ServiceCard from "../cards/ServiceCard";

function ServiceSection() {
  const serviceData = [
    {
      id: 0,
      iconUrl: "/images/icon1.png",
      title: "Unique AI Influencer",
      description:
        "Unleash uniqueness. Our AI crafts influencers that embody your brand's distinct character.",
    },
    {
      id: 1,
      iconUrl: "/images/icon2.png",
      title: "Consistent Face",
      description:
        "Guarantee consistency. Ensure your AI influencer always presents with unwavering accuracy.",
    },
    {
      id: 2,
      iconUrl: "/images/icon3.png",
      title: "HD Quality",
      description:
        "Every AI influencer is rendered in stunning HD, bringing lifelike quality to every interaction and campaign.",
    },
  ];
  return (
    <section>
      <Header title="service" subtitle="Our Services" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-[3.56rem] justify-around mt-8 md:mt-[6.75rem]">
        {serviceData.map((service) => (
          <ServiceCard
            key={service.id}
            title={service.title}
            description={service.description}
            iconUrl={service.iconUrl}
          />
        ))}
      </div>
    </section>
  );
}

export default ServiceSection;
