import { useState } from "react";
import { FaGithub } from "react-icons/fa";

export default function Nav(){
    const [isOpen , setIsOpen]=useState(false)
    const [activeMenu ,setActiveMenu]=useState(null)

    function handletoggleMenu(menuName){
      setActiveMenu(activeMenu === menuName?null :menuName)
    }


  return(
    <div className="flex justify-between ">
      <div className="flex gap-4  items-center relative w-full transition-transform ">
        {isOpen?(
          <img src="./images/icon-close.svg" alt=""  className="brightness-0 size-6 transition-transform duration-3"
          onClick={()=>setIsOpen(false)}
          />
        ):(
          <img src="./images/icon-menu.svg" alt="" className="brightness-0 size-6 cursor-pointer transition-transform" onClick={()=>setIsOpen(!isOpen)}/>
        )}


        <div className="absolute  top-full w-full z-20 mt-4 w-full cursor-pointer">
        {isOpen &&(
          <div className=" bg-white shadow-lg p-4 space-y-4  divide-y divide-gray-300  ">
            <div className="flex justify-between items-center" onClick={()=>handletoggleMenu('explore')}>
            <p>EXPLORE</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className={`transition-transform ${activeMenu==='explore' ? 'rotate-90':''} lucide lucide-chevron-right-icon lucide-chevron-right`}><path d="m9 18 6-6-6-6"/></svg>
            </div>
            {activeMenu==='explore' &&(
              <div className="p-4 list-none space-y-4 divide-y divide-gray-200">
                <li>  LEARNAING PATH </li>
                <li>CHALLENGES</li>
                <li>SOLUTIONS</li>
                <li>ARICALS</li>
                <li>GUIDES</li>
              </div>
            )}

            <div className=" flex justify-between items-center cursor-pointer" onClick={()=>handletoggleMenu('for companies')} >
            <p>FOR COMPANIES</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"  className={`transition-transform ${activeMenu ==='for companies' ?'rotate-90':''} lucide lucide-chevron-right-icon lucide-chevron-right`}><path d="m9 18 6-6-6-6"/></svg>
            </div>
            {activeMenu==='for companies' &&(
              <div className="p-4 list-none space-y-4 divide-y divide-gray-200 ">
                <li>HIRE DEVELOPERS</li>
                <li>TRAIN DEVELOPERS</li>
              </div>
            )}
            <p className="flex items-center gap-2 mt-4"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-lock-keyhole-open-icon lucide-lock-keyhole-open"><circle cx="12" cy="16" r="1"/><rect width="18" height="12" x="3" y="10" rx="2"/><path d="M7 10V7a5 5 0 0 1 9.33-2.5"/></svg>UNLOCK <span className=" font-bold text-white rounded px-2 py-1 bg-blue-800">PRO</span></p>

          </div>
        )}
        </div>
        <img src="./images/favicon-32x32.png" alt="" />
      </div>
      <button className="bg-black p-2 rounded-full text-white font-bold text-sm w-1/2 flex gap-4 items-center justify-center">
        LOG IN <FaGithub/>
      </button>
    </div>
  )
}