import SideBar from "./SideBar";
import { BsSearch  } from "react-icons/bs";
export default function NavBar()
{
    return(
        <div class="grid col-span-full">
        <nav className="flex items-center bg-[#E0E5EC]  px-4 py-3 ml-[240px] h-[80px]  ">
    <div className="flex items-center w-full">
        <div className="relative w-full " >
        <input 
    type="text" 
    className="pl-10 w-full max-w-[90%] pr-4 py-2 border-none rounded-[15px] shadow-[5px_5px_10px_#94979c,-5px_-5px_10px_#ffffff]  focus:outline-none  bg-[#E0E5EC] placeholder-gray-500" 
    placeholder="Search" 
/>


            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none ">
                <BsSearch className="w-4 h-4 me-2 text-gray-600" />
            </div>
        </div>
    </div>
</nav>
</div>
    
    );
}