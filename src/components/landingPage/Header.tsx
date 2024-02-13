import Link from "next/link";
import React from "react";
import Logo from "@app/asessts/logo.png";
import Image from "next/image";
import { useLayoutContext } from "@app/app/landing-page/layout";

const Header = () => {
  const { toggleSignIn } = useLayoutContext();
  return (
    <div className="w-full  bg-[#155C9B] h-32 flex items-center">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <Image src={Logo} alt="logo" priority className="w-28" />
          <div className="flex gap-4 items-center">
            <Link
              href=""
              className="rounded-[5px] border border-[#222142] text-white px-4 py-2 text-sm"
            >
              Sign Up
            </Link>
            <button
              onClick={toggleSignIn}
              className="rounded-[5px] bg-[#222142] text-white px-4 border border-[#FEDC32] py-2 text-sm"
            >
              Sign In
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
