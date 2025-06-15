import React, { useState } from "react";
import Avatar from "react-avatar";

import { AiOutlineMenu } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import { IoMdMic } from "react-icons/io";
import { RiVideoAddLine } from "react-icons/ri";
import { AiOutlineBell } from "react-icons/ai";

import logo from "../../public/logo.png";
import profile from "../../public/profile.jpg";
import { useNavigate } from "react-router-dom";
function Navbar({ toggleSidebar }) {
  const [searchQuery, setSearchQuery] = useState("");

  const navigate = useNavigate();

  const searchQueryHandler = (event) => {
    if (
      (event?.key === "Enter" || event === "searchButton") &&
      searchQuery?.length > 0
    ) {
      navigate(`/search/${searchQuery}`);
      setSearchQuery("");
    }
  };

  return (
    <div className="flex flex-col sm:flex-row justify-between fixed top-0 w-full bg-white px-4 sm:px-6 py-2 z-50">
      <div className="flex items-center space-x-4 mb-2 sm:mb-0">
        <AiOutlineMenu
          className="text-xl cursor-pointer"
          onClick={toggleSidebar}
        />
        <img src={logo} alt="" className="w-24 sm:w-28 cursor-pointer" />
      </div>
      <div className="flex w-full sm:w-[35%] items-center mb-2 sm:mb-0">
        <div className="w-full px-4 py-2 border border-gray-400 rounded-l-full">
          <input
            type="text"
            placeholder="Search krle bro"
            className="outline-none w-full"
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyUp={searchQueryHandler}
            value={searchQuery}
          />
        </div>
        <button
          className="px-4 py-2 border border-gray-400 bg-gray-100 rounded-r-full"
          onClick={() => searchQueryHandler("searchButton")}
        >
          <CiSearch size={"24px"} />
        </button>
        <IoMdMic
          size={"42px"}
          className="ml-3 border border-gray-600 rounded-full p-2 cursor-pointer hover:bg-gray-200 duration-200"
        />
      </div>
      <div className="flex space-x-5 items-center">
        <RiVideoAddLine className="text-2xl" />
        <AiOutlineBell className="text-2xl" />
        <Avatar src={profile} size="32" round={true} />
      </div>
    </div>
  );
}

export default Navbar;
