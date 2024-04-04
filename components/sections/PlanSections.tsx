import React from "react";
import Header from "../common/Header";
import Image from "next/image";
import MainButton from "../common/MainButton";
import { plans } from "@/constants";
import Link from "next/link";

function PlansSection() {
  return (
    <section className="mt-32 mb-12">
      <Header title="Choose Your Plan" subtitle="Our Plans" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[3.56rem] justify-around mt-4 md:mt-12">
        {plans.map((plan) => (
          <div
            key={plan._id}
            className="credits-item p-6 rounded-lg shadow-lg"
            style={{
              backgroundColor: plan.isBestSeller ? "#F0F8FF" : "transparent",
            }}
          >
            <div className="flex-center flex-col gap-3">
              <Image src={plan.icon} alt={plan.name} width={50} height={50} />
              <p className="p-20-semibold mt-2 text-purple-500">{plan.name}</p>
              <p className="h1-semibold text-dark-600">${plan.price}</p>
              <p className="p-16-regular">{plan.credits} Credits</p>
            </div>

            <ul className="flex flex-col gap-5 py-9">
              {plan.inclusions.map((inclusion) => (
                <li
                  key={`${plan.name}-${inclusion.label}`}
                  className="flex items-center gap-4"
                >
                  <Image
                    src={`/assets/icons/${
                      inclusion.isIncluded ? "check.svg" : "cross.svg"
                    }`}
                    alt={inclusion.label}
                    width={24}
                    height={24}
                  />
                  <p className="p-16-regular">{inclusion.label}</p>
                </li>
              ))}
            </ul>

            <div className="flex justify-center w-full">
              <Link href="/sign-up" passHref>
                <MainButton
                  text="Get Started"
                  classes="shadow-none w-[10.125rem]"
                />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default PlansSection;
