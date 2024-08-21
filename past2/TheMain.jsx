export default function TheMain()
{
    return(
        <div className="flex flex-col">
      <nav className="flex  py-3 px-6 border-b ml-[240px] h-[80px]  items-center  gap-10">
        <form class="basis-9/12 max-w-5xl ">
          <div className="relative flex items-center text-gray-400 focus-within:text-blue-400 ">
            <IoIosSearch className=" w-10 absolute pointer-events-none " />
            <input
              type="text"
              for="search"
              placeholder="Search"
              className="w-full p-2 px-9  focus:text-gray-900 focus:outline-none ring-1 rounded-full border-none ring-gray-400 focus:ring-blue-400 focus:ring-2"
            ></input>
          </div>
        </form>
        <button className="border border-gray-400 rounded-full p-3 text-gray-400 focus:text-white  focus:bg-blue-400 focus:border-blue-400">
          <IoMdNotificationsOutline class=" text-xl pointer-events-none" />
        </button>

        <button className="flex items-center justify-between h-[50px]   rounded-full p-2 border-gray-400 gap-4 basis-1/6  ring-1 border-none focus:outline-none  ring-gray-400 focus:ring-blue-400 focus:ring-2">
          <div className=" items-center ml-2 ">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpDzeAHQJIET0Ez29w6VRL22ehHu1JL_pTyw&s"
              className="rounded-full w-10"
            />
          </div>

          <div className="flex flex-col pr-3 flex-grow items-center">
            <span className="text-[14px]  font-medium block ">Perf User 1</span>
            <span className="text-[10px] align-text-top">Azamara</span>
          </div>
          <FaArrowRightFromBracket className="  items-center" />
        </button>
      </nav>

      <aside className="flex flex-col-2 w-[240px] h-full fixed p-5 border">
        <div className=" h-[80px]">
          <a href="#">
            <svg
              width="200"
              height="44"
              viewBox="0 0 114 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.8115 12.0856V6.25293H23.3784V12.0856C23.3784 14.2563 24.2484 15.5116 26.3458 15.5116C28.4432 15.5116 29.3147 14.2563 29.3147 12.1006V6.25293H31.9108V12.1006C31.9108 15.6153 29.9898 17.8356 26.3458 17.8356C22.7018 17.8356 20.8115 15.6333 20.8115 12.0856Z"
                fill="#0096FF"
              ></path>
              <path
                d="M91.6768 5.76123L98.121 17.6852H95.3193L91.6553 10.5792L88.0144 17.6852H85.1621L91.6768 5.76123Z"
                fill="#0096FF"
              ></path>
              <path
                d="M46.5986 6.25293H49.161L49.1472 15.4033H55.0528V17.6853H46.5986V6.25293Z"
                fill="#0096FF"
              ></path>
              <path
                d="M57.0088 6.25293H59.5726V17.6853H57.0088V6.25293Z"
                fill="#0096FF"
              ></path>
              <path
                d="M67.8075 8.54992H62.0845V6.25293H72.0407L66.0047 15.3898H72.1128L72.0836 17.6853H61.8037L67.8075 8.54992Z"
                fill="#0096FF"
              ></path>
              <path
                d="M74.422 6.25293H83.6279V8.53339H76.9675V10.5327L81.6441 10.5448V12.7516H76.9675V15.4033H83.6418V17.6868H74.4189L74.422 6.25293Z"
                fill="#0096FF"
              ></path>
              <path
                d="M38.8555 5.76123L45.2997 17.6852H42.498L38.8341 10.5792L35.1931 17.6852H32.3408L38.8555 5.76123Z"
                fill="#0096FF"
              ></path>
              <path
                d="M99.6221 6.25293H102.184L102.171 15.4033H108.076V17.6853H99.6221V6.25293Z"
                fill="#0096FF"
              ></path>
              <path
                d="M13.2277 6.2168C12.2121 6.21663 11.2139 6.47509 10.331 6.96684C9.44807 7.45859 8.71076 8.16674 8.19138 9.02184C7.67199 9.87693 7.38837 10.8496 7.36833 11.8445C7.34828 12.8393 7.5925 13.8222 8.07703 14.6967L9.94124 12.8582C9.7675 12.2476 9.77454 11.6011 9.96156 10.9942C10.1486 10.3873 10.5079 9.84502 10.9975 9.43059C11.4871 9.01615 12.0869 8.74666 12.727 8.65353C13.367 8.5604 14.0208 8.64748 14.6123 8.90461C15.2037 9.16174 15.7083 9.57831 16.0673 10.1058C16.4263 10.6332 16.6248 11.2498 16.6397 11.8836C16.6546 12.5173 16.4852 13.1422 16.1514 13.6853C15.8176 14.2284 15.3331 14.6673 14.7544 14.9508L15.2316 17.356C16.5257 16.8938 17.6124 15.9999 18.3008 14.831C18.9893 13.6621 19.2356 12.293 18.9964 10.9639C18.7573 9.63485 18.0481 8.43076 16.9932 7.56296C15.9383 6.69516 14.6052 6.21909 13.2277 6.2183V6.2168Z"
                fill="#0096FF"
              ></path>
              <path
                d="M14.6006 17.7032H12.1456L11.6853 15.4483L9.39613 17.7032H5.97461L13.1859 10.6138L14.6006 17.7032Z"
                fill="#F53E5A"
              ></path>
            </svg>
          </a>
          <div className="grid grid-row-3 mt-4">
            <ul class="mt-4 font-bold text-[#31456A]">
              <li class="  hover:shadow  hover:bg-blue-500 hover:rounded hover:text-white py-2 mb-2 ">
                <a href="#" class="px-3">
                  <BiCategory class="inline-block w-5 h-5 -mt-1 mr-2 " />
                  Dashboard
                </a>
              </li>
              <li class="grid hover:shadow  hover:bg-blue-500 hover:rounded hover:text-white py-2 mb-2 ">
                <a href="#" class="px-3">
                  <ImLab class="inline-block w-4 h-4 -mt-1 mr-3" />
                  Tests
                </a>
              </li>
              <li class="grid hover:shadow  hover:bg-blue-500 hover:rounded hover:text-white py-2 mb-2 ">
                <a href="#" class="px-3">
                  <BsFileEarmarkBarGraph class="inline-block w-4 h-4 -mt-1 mr-3" />
                  Results
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-grow items-center ml-1 justify-end">
          <IoArrowBackCircle className="text-3xl text-gray-400 hover:text-blue-400" />
        </div>
      </aside>

      <div className="flex  h-full  p-5  ml-[240px] gap-8">
      <button className=" w-[275px] border  rounded-lg hover:bg-gray-100 shadow shadow-stone-400" >
        <div className=" flex flex-col items-center justify-center p-4">
        <CiCirclePlus className="text-9xl text-slate-700   "/>
        <span className="text-lg text-slate-700 font-semibold  ">New Test</span>
          </div>
         
        </button>
        <div className="border  items-center rounded-lg w-[275px]">
          <div className="flex flex-col gap-4">
            <div className="flex mt-4 mr-4 ml-4 justify-between items-center text-gray-600">
              <span className="font-semibold">Last Test</span>
              <FaClockRotateLeft></FaClockRotateLeft>
            </div>
            <div className="flex flex-col pt-2 pb-2 ml-4 mr-4 gap-1">
              <span className="text-2xl font-semibold text-slate-700">Az_Load_Test</span>
              
              <div className="flex items-center ">
              <span className="text-xs  text-slate-500 ">05/08/2024 10:00 PM</span>
              <LuDot className="text-slate-700 text-xl"/>
                <IoCheckmarkDoneCircle className="text-green-600 mr-1 text-xl " />
                <span className="text-xs text-slate-500 ">Success</span>
              </div>
            </div>
            <div className="rounded-b-lg mt-1 bg-gray-100 hover:bg-gray-700 ">
              <div className="flex flex-row pt-2 pb-2  ml-4 mr-4 justify-between items-center  text-slate-600 hover:text-white">
              <span className="font-semibold">View Report</span>
              <MdArrowRightAlt className="inline text-xl" />
            </div></div>
            
          </div>
        </div>

        
        <div className="hidden">Hello</div>
      </div>
    
    </div>
    );
}