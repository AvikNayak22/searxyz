import React from "react";

const Footer = () => {
  return (
    <footer className=" flex items-center justify-center">
      <div className="flex py-[15px] px-[15px] md:px-[30px] border-b border-[#dadce0]">
        <span className="text-[#606163] font-semibold cursor-pointer text-[13px] leading-none">
          Powered by{" "}
          <a
            className="text-[#1A73E8]"
            href="https://developers.google.com/custom-search/v1/overview"
          >
            Custom Search JSON API
          </a>{" "}
          |{" "}
          <a
            className="text-[#1A73E8]"
            href="https://github.com/AvikNayak22/searxyz"
          >
            Source Code
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
