import { useState } from "react";

export default function Nav(){
    const [isOpen , setIsOpen]=useState(false)
    const [activeMenu ,setActiveMenu]=useState(null)

    function handletoggleMenu(menuName){
      setActiveMenu(activeMenu === menuName?null :menuName)
    }


  return(
    <div className="flex justify-between ">
      <div className="flex gap-4  items-center relative w-full">
        {isOpen?(
          <img src="./images/icon-close.svg" alt=""  className="brightness-0 size-6"
          onClick={()=>setIsOpen(false)}
          />
        ):(
          <img src="./images/icon-menu.svg" alt="" className="brightness-0 size-6 cursor-pointer" onClick={()=>setIsOpen(!isOpen)}/>
        )}


        <div className="absolute  top-full w-full z-20 mt-4 w-full ">
        {isOpen &&(
          <div className=" bg-white shadow-lg p-4 space-y-4  ">
            <div className="flex justify-between items-center" onClick={()=>handletoggleMenu('explore')}>
            <p>EXPLORE</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className={`transition-transform ${activeMenu==='explore' ? 'rotate-90':''} lucide lucide-chevron-right-icon lucide-chevron-right`}><path d="m9 18 6-6-6-6"/></svg>
            </div>
            {activeMenu==='explore' &&(
              <div className="p-4 list-none space-y-4">
                <li>  LEARNAING PATH </li>
                <li>CHALLENGES</li>
                <li>SOLUTIONS</li>
                <li>ARICALS</li>
                <li>GUIDES</li>
              </div>
            )}

            <div className=" flex justify-between items-center" onClick={()=>handletoggleMenu('for companies')} >
            <p>FOR COMPANIES</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"  className={`transition-transform ${activeMenu ==='for companies' ?'rotate-90':''} lucide lucide-chevron-right-icon lucide-chevron-right`}><path d="m9 18 6-6-6-6"/></svg>
            </div>
            {activeMenu==='for companies' &&(
              <div className="p-4 list-none space-y-4">
                <li>HIRE DEVELOPERS</li>
                <li>TRAIN DEVELOPERS</li>
              </div>
            )}
            <p>UNLOCK <span>PRO</span></p>

          </div>
        )}
        </div>
        <img src="./images/favicon-32x32.png" alt="" />
      </div>
      <button className="size-6 rounded-full ">
       <img src="/logo192.png" alt="" />
      </button>
    </div>
  )
}