import { useState } from "react";
import Nav from "./components/Nav";
import { FaGithub } from "react-icons/fa";



export default function App(){
  const [isOpen , setIsOpen]=useState(false)

  return(
    <div className="min-h-screen max-sm space-y-10 p-6">
      <Nav/>

      <div className="space-y-6">
      <h1 className="font-semibold text-lg tracking-widest">FOR LEARNING</h1>
      <p className="font-semibold text-2xl text-blue-900 tracking-widest leading-9 ">Front-end and full-stack coding challenges that build real skills and help get you hired</p>
      <p className="text-gray-500 tracking-wider leading-8 text-lg">Frontend Mentor provides professional design-to-code challenges that mirror real-world development work. Join <span className="text-blue-900 font-bold">1,158,938</span> developers building portfolio projects that impress employers.</p>
      <div className="flex flex-col  space-y-4">
        <button className="text-white  py-3 font-bold text-sm bg-rose-600 rounded-full w-3/4 text-center flex items-center justify-center gap-4">START BUILDING FREE <FaGithub /></button>
        <button className="font-bold w-3/5 bg-white shadow-lg  text-sm rounded-full p-2 text-center border border-1 border-gray-200">BROWSE CHALLENGES</button>
      </div>
      <div>
        <img src="/images/home-hero.webp" alt="desktop code editor image" />
      </div>
      <div className="rounded-lg p-4 space-y-6 bg-blue-900">{/*for the blue container under edtior img */}
        <h1 className="font-bold text-white">Get AI-powered feedback on every solution submission</h1>
        <p className="text-gray-400">Join thousands of developers getting personalized insights with every submission to level up faster. </p>
        <button className="bg-white p-2 rounded-full text-blue-800 text-center w-full">LEARN ABOUT PRO</button>
      </div>
      </div>



    </div>
  )
}