"use client";
import { useLayoutContext } from "@app/app/landing-page/layout";
import { Button } from "@app/components/ui/Button";
import React from "react";
function Herocitation() {
  const { toggleSignIn } = useLayoutContext();
  return (
    <div className=" flex items-center py-[4rem]">
      <nav className="  flex flex-col ">
        <h1 className="tracking-[-0.075rem] text-[3rem] text-[#222142] font-semibold leading-[4rem]">
          Ghana Revenue Authority
        </h1>
        <h1 className=" tracking-tight text-[2rem] text-gray-500 font-semibold leading-[4rem]">
          Voluntary Disclosure Portal
        </h1>
        <p className=" mt-[1.5rem] max-w-[32rem] text-[#4B5565] text-[1.25rem] leading-[1.875rem] font-normal self-stretch">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus
          molestiae totam odio mollitia voluptatibus doloremque consectetur
          natus, veritatis tenetur consequatur.
        </p>
        <div className="pt-14">
          <Button onClick={toggleSignIn} variant="primary">
            Apply Now
          </Button>
        </div>
      </nav>
    </div>
  );
}

export default Herocitation;
