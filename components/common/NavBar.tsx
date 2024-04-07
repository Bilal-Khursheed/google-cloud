"use client";

import React, { useState } from "react";
import { X } from "lucide-react";
import MainButton from "./MainButton";
import Link from "next/link";

interface NavBarProps {
  scrollToTop: () => void;
  scrollToService: () => void;
  scrollToPlans: () => void;
  scrollToFAQ: () => void;
}

function NavBar({
  scrollToTop,
  scrollToService,
  scrollToPlans,
  scrollToFAQ,
}: NavBarProps) {
  const [menu, setMenu] = useState(false);
  const toggleMenu = () => setMenu(!menu);

  return (
    <div className="md:sticky md:top-0 md:shadow-none z-20">
      {/* DESKTOP */}
      <div className="hidden lg:block animate-in fade-in zoom-in bg-white p-4">
        <div className="flex justify-between md:mx-[9rem] items-center">
          <div>
            <img src="/images/epixelap_logo.png" alt="logo" />
          </div>
          <div className="flex gap-[20px] xl:gap-[50px] text-[16px] items-center select-none">
            <p
              onClick={scrollToTop}
              className="hover:text-primary cursor-pointer flex items-center gap-2 font-[500] text-gray"
            >
              Home
            </p>
            <p
              onClick={scrollToService}
              className="hover:text-primary cursor-pointer flex items-center gap-2 font-[500] text-gray"
            >
              Service
            </p>
            <p
              onClick={scrollToPlans}
              className="hover:text-primary cursor-pointer flex items-center gap-2 font-[500] text-gray"
            >
              Pricing
            </p>
            <p
              onClick={scrollToFAQ}
              className="hover:text-primary cursor-pointer flex items-center gap-2 font-[500] text-gray"
            >
              FAQ
            </p>
          </div>
          <div className="flex items-center gap-[40px] select-none">
            <Link href="/sign-in" passHref>
              <button className="hover:text-primary cursor-pointer flex items-center gap-2 font-[500] text-gray">
                Login
              </button>
            </Link>
            <Link href="/sign-up" passHref>
              <MainButton
                text="Sign up"
                variant="primary"
                classes="shadow-none bg-purple-gradient"
              />
            </Link>
          </div>
        </div>
      </div>

      {/* MOBILE */}
      <div
        className={`block lg:hidden shadow-sm fixed top-0 w-full z-[999] bg-white py-4 animate-in fade-in zoom-in ${
          menu ? "bg-primary py-2" : ""
        }`}
      >
        <div className="flex justify-between mx-[10px]">
          <div className="flex gap-[50px] text-[16px] items-center select-none">
            <img
              src="/images/epixelap_logo.png"
              alt="logo"
              className="w-[7rem]"
            />
          </div>
          <div className="flex items-center gap-[40px]">
            {menu ? (
              <X
                className="cursor-pointer animate-in fade-in zoom-in text-black"
                onClick={toggleMenu}
              />
            ) : (
              <img
                src="/svgs/hamburger.svg"
                alt="menu"
                className="cursor-pointer animate-in fade-in zoom-in"
                onClick={toggleMenu}
              />
            )}
          </div>
        </div>
        {menu && (
          <div className="my-8 select-none animate-in slide-in-from-right">
            <div className="flex flex-col gap-8 mt-8 mx-4">
              <Link href="/sign-in" passHref>
                <button className="hover:text-primary cursor-pointer flex items-center gap-2 font-[500] text-gray">
                  Login
                </button>
              </Link>
              <Link href="/sign-up" passHref>
                <div>
                  <MainButton text="Sign up" classes="shadow-none" />
                </div>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default NavBar;
