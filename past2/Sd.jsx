import { BiCategory } from "react-icons/bi";
import { BsFileEarmarkBarGraph } from "react-icons/bs";

import { ImLab } from "react-icons/im";
export default function SideBar()
{
    return(
        <div class=" w-[240px] h-full fixed bg-[#E0E5EC]  px-4 py-2 drop-shadow ">
            
            <div class="m-2 " >
            <a href="#">
                <svg   width="200" height="55" viewBox="0 0 114 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.8115 12.0856V6.25293H23.3784V12.0856C23.3784 14.2563 24.2484 15.5116 26.3458 15.5116C28.4432 15.5116 29.3147 14.2563 29.3147 12.1006V6.25293H31.9108V12.1006C31.9108 15.6153 29.9898 17.8356 26.3458 17.8356C22.7018 17.8356 20.8115 15.6333 20.8115 12.0856Z" fill="#0096FF"></path><path d="M91.6768 5.76123L98.121 17.6852H95.3193L91.6553 10.5792L88.0144 17.6852H85.1621L91.6768 5.76123Z" fill="#0096FF"></path><path d="M46.5986 6.25293H49.161L49.1472 15.4033H55.0528V17.6853H46.5986V6.25293Z" fill="#0096FF"></path><path d="M57.0088 6.25293H59.5726V17.6853H57.0088V6.25293Z" fill="#0096FF"></path><path d="M67.8075 8.54992H62.0845V6.25293H72.0407L66.0047 15.3898H72.1128L72.0836 17.6853H61.8037L67.8075 8.54992Z" fill="#0096FF"></path><path d="M74.422 6.25293H83.6279V8.53339H76.9675V10.5327L81.6441 10.5448V12.7516H76.9675V15.4033H83.6418V17.6868H74.4189L74.422 6.25293Z" fill="#0096FF"></path><path d="M38.8555 5.76123L45.2997 17.6852H42.498L38.8341 10.5792L35.1931 17.6852H32.3408L38.8555 5.76123Z" fill="#0096FF"></path><path d="M99.6221 6.25293H102.184L102.171 15.4033H108.076V17.6853H99.6221V6.25293Z" fill="#0096FF"></path><path d="M13.2277 6.2168C12.2121 6.21663 11.2139 6.47509 10.331 6.96684C9.44807 7.45859 8.71076 8.16674 8.19138 9.02184C7.67199 9.87693 7.38837 10.8496 7.36833 11.8445C7.34828 12.8393 7.5925 13.8222 8.07703 14.6967L9.94124 12.8582C9.7675 12.2476 9.77454 11.6011 9.96156 10.9942C10.1486 10.3873 10.5079 9.84502 10.9975 9.43059C11.4871 9.01615 12.0869 8.74666 12.727 8.65353C13.367 8.5604 14.0208 8.64748 14.6123 8.90461C15.2037 9.16174 15.7083 9.57831 16.0673 10.1058C16.4263 10.6332 16.6248 11.2498 16.6397 11.8836C16.6546 12.5173 16.4852 13.1422 16.1514 13.6853C15.8176 14.2284 15.3331 14.6673 14.7544 14.9508L15.2316 17.356C16.5257 16.8938 17.6124 15.9999 18.3008 14.831C18.9893 13.6621 19.2356 12.293 18.9964 10.9639C18.7573 9.63485 18.0481 8.43076 16.9932 7.56296C15.9383 6.69516 14.6052 6.21909 13.2277 6.2183V6.2168Z" fill="#0096FF"></path><path d="M14.6006 17.7032H12.1456L11.6853 15.4483L9.39613 17.7032H5.97461L13.1859 10.6138L14.6006 17.7032Z" fill="#F53E5A"></path></svg></a>
            <vl />
            </div>

                <ul class="mt-4 font-bold text-[#31456A]">
                    <li class="grid  hover:shadow  hover:bg-blue-500 hover:rounded hover:text-[#E0E5EC] py-2 mb-2 "><a href="#" class="px-3"><BiCategory  class="inline-block w-5 h-5 -mt-1 mr-2 "/>
                    Dashboard</a>
                       
                    </li>
                    <li class="grid hover:shadow  hover:bg-blue-500 hover:rounded hover:text-[#E0E5EC] py-2 mb-2 "><a href="#" class="px-3"><ImLab class="inline-block w-4 h-4 -mt-1 mr-3"/>
                        Tests</a>
                    </li>
                    <li class="grid hover:shadow  hover:bg-blue-500 hover:rounded hover:text-[#E0E5EC] py-2 mb-2 "><a href="#" class="px-3"><BsFileEarmarkBarGraph class="inline-block w-4 h-4 -mt-1 mr-3"/>
                        Results</a>
                    </li>
                    
                </ul>

        </div>
    );
}