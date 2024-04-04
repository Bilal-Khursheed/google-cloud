import React from "react";
import Header from "../common/Header";
import TestimonialCard from "../cards/TestimonialCard";

function TestimonialSection() {
  const appReviewData = [
    {
      id: 0,
      imageUrl: "/images/rayhan.jpg",
      reviewerName: "Rayhan.C",
      review:
        "My third time using AIfluencer and it's always amazing. Really boosts my online stuff.",
    },

    {
      id: 1,
      imageUrl: "/images/kayley.jpg",
      reviewerName: "Nico.M",
      review:
        "Got my AI influencer up and running with AIfluencer quicker than I thought possible. The process was simple, and the results blew me away. My followers are loving it, and engagement is through the roof. Couldn't be happier with the choice.",
    },
    {
      id: 2,
      imageUrl: "/images/gene.jpg",
      reviewerName: "Anonymous",
      review:
        "With AIfluencer, I'm pulling in $1200 a month just by selling AI images. It's been a game-changer for my passive income. Super easy to use and profitable.",
    },
    {
      id: 3,
      imageUrl: "/images/gene.jpg",
      reviewerName: "Allan.K",
      review:
        "After trying lots of sites and also services like Fiverr etc... AIfluencer is probably the best for quality and price. It's a real deal.",
    },
  ];
  return (
    <section className="mt-[9rem]">
      <Header title="testimonials" subtitle="What Clients Say About Us" />
      <div className="grid grid-cols-1 gap-16  md:grid-cols-2 mt-8 md:mt-[6.75rem]">
        {appReviewData.map((review) => (
          <TestimonialCard
            key={review.id}
            imageUrl={review.imageUrl}
            review={review.review}
            reviewerName={review.reviewerName}
          />
        ))}
      </div>
    </section>
  );
}

export default TestimonialSection;
