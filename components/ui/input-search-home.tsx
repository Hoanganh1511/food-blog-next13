import Link from "next/link";
import React from "react";
import { FiSearch } from "react-icons/fi";
import Container from "./Container";

const InputSearchHome = () => {
  return (
    <Container>
      <div className="relative w-full h-[60px] flex">
        <div className="relative flex-1 h-full bg-[#fff5e6]">
          <input
            placeholder="Search Posts, eg:fried rice"
            className="absolute top-0 left-0 pl-[25px] w-full h-full bg-transparent
            text-[22px] font-regular text-[#0154B3] placeholder-[#0154B3]
        "
          />
          <FiSearch
            size={22}
            className="absolute top-1/2 right-[16px] -translate-y-1/2"
          />
        </div>
        <Link
          href=""
          className="ml-[30px] px-[40px] bg-[#0154B3] text-[#ffa478] font-bold text-[24px] inline-flex items-center underline  "
        >
          <p> See all posts, chronologically →</p>
        </Link>
      </div>
    </Container>
  );
};

export default InputSearchHome;
