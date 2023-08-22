import React from "react";
import { RiSearchLine } from "react-icons/ri";
const SearchHeader = () => {
  return (
    <div className="w-full h-[46px] relative">
      <input
        type="text"
        placeholder="Search anything here"
        className="absolute top-0 left-0 w-full h-full pl-[12px] outline-none border-none rounded-sm text-gray-800 leading-8"
      />
      <RiSearchLine
        size={23}
        className="absolute top-1/2 right-[8px] text-black -translate-y-1/2"
      />
    </div>
  );
};

export default SearchHeader;
