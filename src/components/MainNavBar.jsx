
import { IoIosSearch } from "react-icons/io";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FaArrowRightFromBracket } from "react-icons/fa6";

export default function MainNavBar() {
  return (
    <nav className="flex  py-3 px-6  ml-[240px] h-[80px]  items-center  gap-10 bg-gray-200 ">
      <form class="basis-9/12 max-w-5xl ">
        <div className="relative flex items-center text-gray-400 focus-within:text-blue-500 ">
          <IoIosSearch className=" w-10 absolute pointer-events-none " />
          <input
            type="text"
            for="search"
            placeholder="Search"
            className="w-full p-2 px-9  focus:text-gray-900 focus:outline-none ring-1 rounded-full border-none ring-gray-400 focus:ring-blue-500 focus:ring-2"
          ></input>
        </div>
      </form>
      <button className="border border-gray-400 rounded-full p-3 text-gray-400 hover:text-white  hover:bg-blue-500 hover:border-blue-500">
        <IoMdNotificationsOutline class=" text-xl pointer-events-none" />
      </button>

      <button className="flex items-center justify-between h-[50px] hover:bg-blue-500 hover:text-white hover:border-blue-500  rounded-full p-2 border-gray-400 gap-4 basis-1/6  ring-1 border-none focus:outline-none hover:ring-blue-500 outline-none ring-gray-400 focus:ring-blue-500 focus:bg-blue-500 focus:text-white focus:ring-2">
        <div className=" items-center ml-2 ">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpDzeAHQJIET0Ez29w6VRL22ehHu1JL_pTyw&s"
            className="rounded-full w-10"
          />
        </div>

        <div className="flex flex-col pr-3 flex-grow items-center text-[#31456A]">
          <span className="text-[14px]  font-medium block ">Perf User 1</span>
          <span className="text-[10px] align-text-top">Azamara</span>
        </div>
        <FaArrowRightFromBracket className="  items-center" />
      </button>
    </nav>
  );
}
