import React from "react";
import { Separator } from "../ui/separator";

function FooterSection() {
  return (
    <section className="flex flex-col gap-[1.9rem] w-full mt-[10rem]">
      <div className="flex flex-col md:flex-row gap-8 justify-between">
        <div>
          <img src="/images/footer_logo.png" alt="footer logo" />
        </div>
        <div className="text-lightBlue text-[1rem]">
          © 2024 Aifluencer. All rights reserved.
        </div>
        <div className="flex gap-4">
          <p className="text-lightBlue text-[1rem]">Terms and C.</p>
        </div>
      </div>
      <Separator />
    </section>
  );
}

export default FooterSection;
