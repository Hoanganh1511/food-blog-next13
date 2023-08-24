import React from "react";
import Link from "next/link";
import { FiInstagram, FiFacebook } from "react-icons/fi";
import { PiPinterestLogoFill } from "react-icons/pi";
const Socials = () => {
  return (
    <div className="flex items-center justify-center gap-[12px] mb-[50px]">
      <Link href="/about" className="">
        <FiInstagram size={26} />
      </Link>
      <Link href="/recipe" className="">
        <PiPinterestLogoFill size={26} />
      </Link>
      <Link href="/contact" className="">
        <FiFacebook size={26} />
      </Link>
    </div>
  );
};

export default Socials;
