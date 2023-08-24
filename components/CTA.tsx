import React from "react";
import Link from "next/link";
const CTA = () => {
  return (
    <div className="flex items-center justify-center gap-[8px] mt-[45px]">
      <Link
        href="/about"
        className="text-[#133d9b] bg-[#fedeb4] py-[15px] min-w-[100px] md:min-w-[300px] text-center font-bold text-[24px]"
      >
        About
      </Link>
      <Link
        href="/recipe"
        className="text-[#133d9b] bg-[#fedeb4] py-[15px] min-w-[100px] md:min-w-[300px] text-center font-bold text-[24px]"
      >
        Recipe
      </Link>
      <Link
        href="/contact"
        className="text-[#133d9b] bg-[#fedeb4] py-[15px] min-w-[100px] md:min-w-[300px] text-center font-bold text-[24px]"
      >
        Contact
      </Link>
    </div>
  );
};

export default CTA;
