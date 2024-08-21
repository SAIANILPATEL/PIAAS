import NavBar from "./NavBar";
import SideBar from "./SideBar";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import { FaClockRotateLeft } from "react-icons/fa6";


export default function Dashboard()
{
    return(
        <div class="grid grid-cols-12 ">
            
            <NavBar class="grid col-span-full"/>
            <SideBar/>
        
        <div class="col-start-4 col-end-7 m-8 ">
        <div className="rounded-[15px] bg-[#E0E5EC] shadow-[5px_5px_10px_#94979c,-5px_-5px_10px_#ffffff] p-4">
    <div className="flex justify-between items-center mb-4 ">
        <p className="text-[12px] text-gray-400 ">Last Test</p>
        <FaClockRotateLeft className="text-[12px] text-gray-400" />
    </div>
    <div className="text mb-4 text-[#31456A]">
        <a href="#">
            <p className="text-center text-xl text-[#31456A]">Az_Load_Test</p>
        </a>
        <p className="text-[9px] text-center">05/08/2024 10:00 PM</p>
    </div>
    <div className="flex justify-center items-center">
        <IoCheckmarkDoneCircle className="text-green-600 mr-2 text-xl" />
        <p className="text-center text-lg text-[#31456A]">Success</p>
    </div>
</div>



            </div>
            
            </div>
        
    );
}