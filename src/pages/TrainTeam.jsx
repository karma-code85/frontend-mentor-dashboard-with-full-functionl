import { useState } from "react";
import { IoMdMenu ,IoMdClose} from "react-icons/io";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { MdOutlineQuestionMark } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { TbCurrencyDollar } from "react-icons/tb";
import { BiMessage } from "react-icons/bi";
import { FaUserTie } from "react-icons/fa";
import { GoSignOut } from "react-icons/go";
import HowItswork from "../components/HowItsWorkFunction";










export default function  TrianPage(){
  const [menuOpen , setMenuOpen]=useState(false)
  return(
    <div className="">
      <div className="flex justify-between item-center items-center relative p-4" >
      <div className="flex gap-2 items-center">
      <img src="./images/favicon-32x32.png" alt="" />
      <h1>TEAMS</h1>
      </div>
      <div  onClick={()=>setMenuOpen(!menuOpen)} className="text-2xl transition-transform duration-900">
      {menuOpen ?(
        <div>
          <IoMdClose />
          <div>

          </div>
        </div>
      ):(
        <IoMdMenu/>
      )}
      </div>
      <div className="absolute top-full right-0 bg-white shadow-lg   w-full z-20">
      {menuOpen &&(
        <div className="">
          <ul className="divide-y p-4">
            <li>
              <Link className="flex gap-2 items-center p-4 text-lg font-bold">
              <MdOutlineQuestionMark/><span>WHY US</span>
               </Link>
            </li>
            <li>
              <Link className="flex gap-2 items-center p-4 text-lg font-bold">
              <CiSearch/><span>USE CASES</span>
               </Link>
            </li>

            <div>
              <ul className="pl-8">
            <li>
              <Link className="flex gap-2 items-center p-4 text-lg font-bold">
              <FaUserTie/><span>Companies</span>
               </Link>
            </li>
               <li>
              <Link className="flex gap-2 items-center p-4 text-lg font-bold">
              <FaUserTie/><span>Coding Schools</span>
               </Link>
            </li>
                <li>
              <Link className="flex gap-2 items-center p-4 text-lg font-bold">
              <FaUserTie/><span>Internship program</span>
               </Link>
            </li>
                <li>
              <Link className="flex gap-2 items-center p-4 text-lg font-bold">
              <FaUserTie/><span>ApprentShip program</span>
               </Link>
            </li>
              </ul>
            </div>
             <li>
              <Link className="flex gap-2 items-center p-4 text-lg font-bold">
              <TbCurrencyDollar/><span>PRICING</span>
               </Link>
            </li>
              <li>
              <Link className="flex gap-2 items-center p-4 text-lg font-bold">
              <BiMessage/><span>Contact</span>
               </Link>
            </li>
            <li>
              <Link className="flex gap-2 items-center p-4 text-lg font-semibold text-rose-500">
              <GoSignOut/><span>Sign out</span>
               </Link>
            </li><hr />
          <button className="w-full bg-blue-800 text-white text-center p-2 rounded-full font-bold text-lg ">Get Started</button>
          </ul>
        </div>
      )}
      </div>
      </div>
      <div className="p-4 space-y-6">
      <h1 className="tracking-widest font-semibold text-2xl text-blue-900">Upskill junior developers faster with hands-on, real-world practice</h1>
      <p className="text-neutral-500">Reduce time-to-productivity and close skill gaps with industry-standard projects that build production-ready skills. Get your juniors coding confidently in your exact tech stack, without the endless video courses.</p>
      <button className="bg-rose-500 font-bold p-2 rounded-full text-white w-3/4">CREATE A TEAM ACCOUNT</button>
      <HowItswork />
      </div>

     <Contact/>
     <Footer/>
    </div>
  )
}