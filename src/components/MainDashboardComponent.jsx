
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import {  FaClockRotateLeft } from "react-icons/fa6";
import { MdArrowRightAlt } from "react-icons/md";
import { LuDot } from "react-icons/lu";
import { CiCirclePlus } from "react-icons/ci";

export default function MainDashboardComponent() {
  return (
    <div className="flex  h-full  p-5  ml-[240px] gap-8 ">
      <button className=" w-[275px] border  rounded-lg hover:bg-blue-500 hover:border-none text-slate-700 hover:text-white ">
        <div className=" flex flex-col items-center justify-center p-4 ">
          <CiCirclePlus className="text-6xl   " />
          <span className="text-lg font-semibold ">New Test</span>
        </div>
      </button>
      <div className="border  items-center rounded-lg w-[275px]">
        <div className="flex flex-col gap-4">
          <div className="flex mt-4 mr-4 ml-4 justify-between items-center text-gray-600">
            <span className="font-semibold">Last Test</span>
            <FaClockRotateLeft></FaClockRotateLeft>
          </div>
          <div className="flex flex-col pt-2 pb-2 ml-4 mr-4 gap-1">
            <a
              href="www.google.com"
              className="text-slate-700 hover:text-blue-500"
            >
              <span className="text-2xl font-semibold ">Az_Load_Test</span>
            </a>

            <div className="flex items-center ">
              <span className="text-xs  text-slate-500 ">
                05/08/2024 10:00 PM
              </span>
              <LuDot className="text-slate-700 text-xl" />
              <IoCheckmarkDoneCircle className="text-green-600 mr-1 text-xl " />
              <span className="text-xs text-slate-500 ">Success</span>
            </div>
          </div>
          <div className="rounded-b-lg mt-1 bg-gray-100 hover:bg-blue-500 block text-slate-600 hover:text-white ">
            <div className="flex flex-row pt-2 pb-2  ml-4 mr-4 justify-between items-center  ">
              <span className="font-semibold">View Report</span>
              <MdArrowRightAlt className="inline text-xl" />
            </div>
          </div>
        </div>
      </div>

      <div className="hidden">Hello</div>
    </div>
  );
}
