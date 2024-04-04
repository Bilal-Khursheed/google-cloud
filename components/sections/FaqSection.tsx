import React, { useState } from "react";
import Header from "../common/Header";

function FaqSection() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      question: "What is Aifluencer?",
      answer:
        "Aifluencer harnesses the power of artificial intelligence to craft a new face across diverse photos. This technology revolutionizes personal and commercial projects by offering unique, AI-generated faces for a variety of applications.",
    },
    {
      question: "How to use Aifluencer?",
      answer:
        "To access our services, you'll need to purchase credits. Once you've acquired your credits, simply complete our creation form, and that's it! Under 24 hours, we'll notify you via email that your results are ready.",
    },
    {
      question: "How long does it take to generate the images?",
      answer:
        "The process of generating your set of AI-crafted images takes up to 24 hours. Our advanced algorithms ensure each photo is created with attention to detail and realism, optimizing for the highest quality results within this timeframe.",
    },
    {
      question: "Will the results look realistic?",
      answer:
        "Our AI technology aims to deliver high-definition photos that are as realistic as possible. However, automated image generation is a complex process, and some generated photos might contain errors. We are committed to continuously refining our system to minimize these occurrences through regular updates.",
    },
    {
      question: "Can I generate more than 15 photos for the same character?",
      answer:
        "Absolutely! Each credit allows you to either create a new AI influencer or generate additional sets of 15 photos for an already created influencer.",
    },
    {
      question: "Can I use this service for commercial projects?",
      answer:
        "Yes, you can! We hold no intellectual property rights over the photos we produce, making them perfect for commercial use. Explore the endless possibilities with Aifluencer and bring your creative visions to life.",
    },
  ];

  const toggleFAQ = (index: number) => {
    // Explicitly define the type of `index` as number
    if (openFAQ === index) {
      return setOpenFAQ(null);
    }
    setOpenFAQ(index);
  };

  return (
    <section className="mt-[9rem]">
      <Header title="Frequently Asked Questions" subtitle="FAQ" />
      <div className="mt-8 md:mt-[3.31rem]">
        {faqs.map((faq, index) => (
          <div key={index} className="mb-4">
            <button
              onClick={() => toggleFAQ(index)}
              className="flex w-full justify-between items-center p-4 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors duration-300"
            >
              <p className="text-lg font-semibold">{faq.question}</p>
              <span>{openFAQ === index ? "-" : "+"}</span>
            </button>
            {openFAQ === index && (
              <div className="p-4 bg-gray-50 rounded-md mt-2">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default FaqSection;
