import { useState } from "react";
import { FaGithub, FaUserGraduate, FaUserTie } from "react-icons/fa";
import { FaBook, FaComputer, FaNewspaper } from "react-icons/fa6";
import { IoLockOpenOutline } from "react-icons/io5";
import { PiCodeThin, PiPathLight } from "react-icons/pi";
import { RiArrowDropDownLine } from "react-icons/ri";
import { Link } from "react-router-dom";





export default function Nav(){
    const [isOpen , setIsOpen]=useState(false)
    const [activeMenu ,setActiveMenu]=useState(null)

    function handletoggleMenu(menuName){
      setActiveMenu(activeMenu === menuName?null :menuName)
    }


  return(
    <div className="flex justify-between p-4 relative items-center container-full">
      <div className="flex gap-4  relative items-center transition-transform  lg:w-1/4 w-full">
        {isOpen?(
          <img src="./images/icon-close.svg" alt=""  className="brightness-0 size-6 transition-transform duration-3 lg:hidden"
          onClick={()=>setIsOpen(false)}
          />
        ):(
          <img src="./images/icon-menu.svg" alt="" className="brightness-0 size-6 cursor-pointer transition-transform lg:hidden" onClick={()=>setIsOpen(!isOpen)}/>
        )}


        <div className="absolute  top-full w-full z-50 mt-4 w-full cursor-pointer bg-rose-500 ">
        {isOpen &&(
          <div className=" bg-white shadow-lg p-4 space-y-4  divide-y divide-gray-300  w-full  container-full z-50">
            <div className="flex justify-between items-center" onClick={()=>handletoggleMenu('explore')}>
            <p>EXPLORE</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className={`transition-transform ${activeMenu==='explore' ? 'rotate-90':''} lucide lucide-chevron-right-icon lucide-chevron-right`}><path d="m9 18 6-6-6-6"/></svg>
            </div>

            {activeMenu ==='explore' &&(
              <div className=" list-none space-y-4 divide-y divide-gray-200 ">
                <li >
                  <Link className="flex items-center gap-2" to={"/learn-path"}><PiPathLight className="text-lg"/> LEARNAING PATH</Link>
               </li>
                <li>
                  <Link className="flex items-center gap-2" to={"/challenge"}><FaComputer className="text-lg"/>CHALLENGES</Link>
                </li>
                <li>
                  <Link className="flex items-center gap-2" to={"/solution"}><PiCodeThin className="text-lg"/> SOLUTIONS</Link>
                </li>
                <li>
                  <Link className="flex items-center gap-2" to={"/articles"}><FaNewspaper className="text-lg"/> ARICALS</Link>
                </li>
                <li>
                  <Link className="flex items-center gap-2" to={"/guides"}><FaBook className="text-lg"/>GUIDES</Link>
                </li>
              </div>
            )}

            <div className=" flex justify-between items-center cursor-pointer" onClick={()=>handletoggleMenu('for companies')} >
            <p>FOR COMPANIES</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"  className={`transition-transform ${activeMenu ==='for companies' ?'rotate-90':''} lucide lucide-chevron-right-icon lucide-chevron-right`}><path d="m9 18 6-6-6-6"/></svg>
            </div>
            {activeMenu==='for companies' &&(
              <div className="list-none space-y-4 divide-y divide-gray-200 ">
                <li>
                  <Link className="flex items-center gap-2" to={"/individual"}><FaUserTie />HIRE DEVELOPERS</Link>
                </li>
                <li>
                  <Link className="flex items-center gap-2" to={"/team"}><FaUserGraduate/>TRAIN DEVELOPERS</Link>
                </li>
              </div>
            )}

            <p className="flex items-center gap-2 mt-4">
              <Link to={"/pro"} className="flex items-center gap-2"><IoLockOpenOutline/>UNLOCK <span className=" font-bold text-white rounded px-2 py-1 bg-blue-800">PRO</span></Link>
               </p>

          </div>
        )}
        </div>
        <div className="md:flex md:items-center  gap-4 cursor-pointer">
        <img src="./images/favicon-32x32.png" alt=""  className=""/>
        <h1 className="hidden lg:flex text-2xl ">Frontend Mentor</h1>

        </div>
      </div>
        <div className="lg:flex w-1/2 justify-between  relative  font-bold">
        <ul className="hidden lg:flex justify-center items-center gap-4 cursor-pointer ">
          <li onClick={()=>handletoggleMenu('explore') } className="flex items-center " >EXPLORE <RiArrowDropDownLine className={`size-6 ${activeMenu==='explore' ?"rotate-180":null} transition-transform  duration-300`}  /></li>
          {activeMenu ==='explore' &&(
              <div className=" list-none space-y-4 divide-y divide-gray-200  absolute top-full left-0 mt-2  bg-white shadow-lg p-3 border  rounded-lg  ">
                <li >
                  <Link className="flex items-center gap-2" to={"/learn-path"}><PiPathLight className="text-lg"/> LEARNAING PATH</Link>
               </li>
                <li>
                  <Link className="flex items-center gap-2" to={"/challenge"}><FaComputer className="text-lg"/>CHALLENGES</Link>
                </li>
                <li>
                  <Link className="flex items-center gap-2" to={"/solution"}><PiCodeThin className="text-lg"/> SOLUTIONS</Link>
                </li>
                <li>
                  <Link className="flex items-center gap-2" to={"/articles"}><FaNewspaper className="text-lg"/> ARICALS</Link>
                </li>
                <li>
                  <Link className="flex items-center gap-2" to={"/guides"}><FaBook className="text-lg"/>GUIDES</Link>
                </li>
              </div>
            )}
          <li onClick={()=>handletoggleMenu('for companies')} className="flex items-center">FOR COMPANIES <RiArrowDropDownLine className={`size-6 ${activeMenu==='for companies' ?"rotate-180":null} transition-transform  duration-300`}  /></li>
          {activeMenu==='for companies' &&(
              <div className="list-none space-y-4 divide-y divide-gray-200 top-full absolute  mt-2  bg-white shadow-lg p-3 border  rounded-lg ">
                <li>
                  <Link className="flex items-center gap-2" to={"/individual"}><FaUserTie />HIRE DEVELOPERS</Link>
                </li>
                <li>
                  <Link className="flex items-center gap-2" to={"/team"}><FaUserGraduate/>TRAIN DEVELOPERS</Link>
                </li>
              </div>
            )}


          <li>UNLOCK <span className=" font-bold text-white rounded px-2 py-1 bg-blue-800">PRO</span></li>

        </ul>
      <button className="bg-black p-2 rounded-full text-white font-bold text-sm  text-center flex justify-center  w-full lg:w-1/3 lg:p-4">
       <a href="https://www.frontendmentor.io/home" className="flex gap-4 items-center justify-center"> LOG IN<span className="hidden lg:block">with GitHub</span><FaGithub/></a>
      </button>
        </div>

      </div>
  )
}