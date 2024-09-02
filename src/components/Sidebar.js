import React from "react";
import { useSelector } from "react-redux";
import { IoMdHome } from "react-icons/io";
import { SiYoutubeshorts } from "react-icons/si";
import { MdSubscriptions } from "react-icons/md";
import { SiYoutubemusic } from "react-icons/si";
import { FaChevronRight } from "react-icons/fa6";
import { GrChannel } from "react-icons/gr";
import { LuHistory } from "react-icons/lu";
import { CgPlayList } from "react-icons/cg";
import { GoVideo } from "react-icons/go";
import { MdOutlineWatchLater } from "react-icons/md";
import { BiLike } from "react-icons/bi";
import { LuDownload } from "react-icons/lu";
import { PiFireSimpleBold } from "react-icons/pi";
import { FiShoppingBag } from "react-icons/fi";
import { IoMusicalNoteOutline } from "react-icons/io5";
import { BiCameraMovie } from "react-icons/bi";
import { IoGameControllerOutline } from "react-icons/io5";
import { LuNewspaper } from "react-icons/lu";
import { TfiCup } from "react-icons/tfi";
import { Link } from "react-router-dom";

function Sidebar() {
  const isSidebarVisible = useSelector((store) => store.app.isSidebarVisible);
  return (
    isSidebarVisible && (
      <div className="w-2/12">
        <ul className="flex flex-col *:flex *:py-2 *:px-2 *:rounded-lg *:items-center *:gap-5 *:cursor-pointer [&_span]:hidden lg:[&_span]:inline">
          <Link to="/" className="hover:bg-gray-200">
            <IoMdHome className="text-lg" /> <span>Home</span>
          </Link>
          <li className="hover:bg-gray-200">
            <SiYoutubeshorts className="text-lg" /> <span>Shorts</span>
          </li>
          <li className="hover:bg-gray-200">
            <MdSubscriptions className="text-lg" /> <span>Subscriptions</span>
          </li>
          <li className="hover:bg-gray-200">
            <SiYoutubemusic className="text-lg" /> <span>Music</span>
          </li>
        </ul>
        <ul className="flex flex-col *:flex *:py-2 *:px-2 *:rounded-lg *:items-center *:gap-5 *:cursor-pointer [&_span]:hidden lg:[&_span]:inline">
          <li className="font-semibold bg-gray-100 rounded-lg px-2 py-2 my-2 hover:bg-gray-200 flex justify-between">
            <span> You</span> <FaChevronRight />
          </li>
          <li className="hover:bg-gray-200">
            <GrChannel className="text-lg" /> <span>Your Channel</span>
          </li>
          <li className="hover:bg-gray-200">
            <LuHistory className="text-lg" /> <span>History</span>
          </li>
          <li className="hover:bg-gray-200">
            <CgPlayList className="text-lg" /> <span>PlayList</span>
          </li>
          <li className="hover:bg-gray-200">
            <GoVideo className="text-lg" /> <span>Your videos</span>
          </li>
          <li className="hover:bg-gray-200">
            <MdOutlineWatchLater className="text-lg" /> <span>Watch later</span>
          </li>
          <li className="hover:bg-gray-200">
            <BiLike className="text-lg" /> <span>Liked videos</span>
          </li>
          <li className="hover:bg-gray-200">
            <LuDownload className="text-lg" /> <span>Downloads</span>
          </li>
        </ul>
        <ul className="flex flex-col *:flex *:py-2 *:px-2 *:rounded-lg *:items-center *:gap-5 *:cursor-pointer [&_span]:hidden lg:[&_span]:inline">
          <li className="font-semibold bg-gray-100 rounded-lg px-2 py-2 my-2 flex justify-between">
            <span>Explore</span>
            <FaChevronRight />
          </li>
          <li className="hover:bg-gray-200">
            <PiFireSimpleBold className="text-lg" /> <span>Trending</span>
          </li>
          <li className="hover:bg-gray-200">
            <FiShoppingBag className="text-lg" /> <span>Shopping</span>
          </li>
          <li className="hover:bg-gray-200">
            <IoMusicalNoteOutline className="text-lg" /> <span>Music</span>
          </li>
          <li className="hover:bg-gray-200">
            <BiCameraMovie className="text-lg" /> <span>Movies</span>
          </li>
          <li className="hover:bg-gray-200">
            <IoGameControllerOutline className="text-lg" /> <span>Gaming</span>
          </li>
          <li className="hover:bg-gray-200">
            <LuNewspaper className="text-lg" /> <span>News</span>
          </li>
          <li className="hover:bg-gray-200">
            <TfiCup className="text-lg" /> <span>Sports</span>
          </li>
        </ul>
      </div>
    )
  );
}

export default Sidebar;
