import React, { useState } from "react";
import { IoSearchCircle } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { useNavigate, useParams } from "react-router-dom";

const SearchInput = () => {
  const { query } = useParams();
  const [searchQuery, setSearchQuery] = useState(query || "");
  const navigate = useNavigate();

  const searchQueryHandler = (event) => {
    if (event?.key === "Enter" && searchQuery?.length > 0) {
      navigate(`/${searchQuery}/${1}`);
    }
  };
  return (
    <div
      id="searchBox"
      className="h-[46px] w-full md:w-[584px] flex items-center gap-3 px-4 border-2 border-[#5037EB] rounded-3xl hover:bg-white hover:shadow-c  focus-within:shadow-md"
    >
      <IoSearchCircle size={35} color="#4F37EC" />
      <input
        type="text"
        onChange={(e) => setSearchQuery(e.target.value)}
        onKeyUp={searchQueryHandler}
        value={searchQuery}
        autoFocus
        className="grow outline-0 text-black/[0.87]"
      />
      <div className="flex items-center gap-3">
        {searchQuery && (
          <IoMdClose
            size={24}
            color="#70757a"
            className="cursor-pointer"
            onClick={() => setSearchQuery("")}
          />
        )}
      </div>
    </div>
  );
};

export default SearchInput;
