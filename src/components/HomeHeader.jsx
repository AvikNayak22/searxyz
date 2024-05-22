import { GiHamburgerMenu } from "react-icons/gi";

const HomeHeader = () => {
  return (
    <header className="h-16 bg-white flex justify-between md:justify-end items-center gap-4 px-5">
      <div className="flex items-center gap-4 py-1">
        <span className="text-gray-800 text-[14px] line-height hover:text-[#644FED] cursor-pointer">
          about
        </span>
        <span className="text-gray-800 text-[14px] line-height hover:text-[#644FED] cursor-pointer">
          preferences
        </span>
      </div>

      <GiHamburgerMenu className="text-[20px] line-height hover:text-[#644FED] cursor-pointer" />
    </header>
  );
};

export default HomeHeader;
