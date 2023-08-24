import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-black">
      <div className="flex flex-col sm:flex-row items-center justify-center text-[12px] md:text-[16px] gap-[15px] text-white p-[20px]">
        <strong>Copyright © 2023 iamafoodblog, all rights reserved.</strong>
        <div className="flex gap-[15px]">
          <Link href="/about">About</Link> |<Link href="/faq">FAQ</Link> |
          <Link href="/new-here">New Here?</Link> |
          <a href="/contact">Contact</a> |<Link href="/privacy/">Privacy</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
