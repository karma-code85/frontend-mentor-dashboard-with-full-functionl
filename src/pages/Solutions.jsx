import { useState } from "react";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import LayoutHeroNav from "../components/LayoutForTheHeroNav";
import Nav from "../components/Nav";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import SolutionCardComponent from "../components/SolutionsCardComponent";






export default function SolutionPage(){
  const [isRequested ,setIsRequested]=useState(false)
  return(
    <div className="p-4 space-y-6 ">
      <Nav/>
      <LayoutHeroNav path={"Solutions"} tagsone={"solution"} tagstwo={"tags"} tagsthree={"wall of far"}/>
      <div className="bg-white shadow-lg p-3 rounded flex justify-between w-1/2 border items-center relative "
      onClick={()=>setIsRequested(!isRequested)}
      >
        Feedback requested
        <MdOutlineKeyboardArrowDown className={`transition-transform ${ isRequested ? "rotate-180":''} text-sky-500 text-xl` }/>

        {isRequested &&(
          <div className="absolute top-full bg-white  w-full p-2 shadow border rounded left-0 mt-2 ">
            <ul className="divide-y">
              <li>Feedback requested</li>
              <li>All solution</li>
            </ul>
          </div>
        )}
      </div>
        <SolutionCardComponent/>
      <Contact/>
      <Footer/>

    </div>
  )


}