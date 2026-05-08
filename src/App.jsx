import { useState } from "react";
import Nav from "./components/Nav";


export default function App(){
  return(
    <div className="min-h-screen max-sm p-4 space-y-6 ">
      <Nav/>
      <div className="space-y-6">
      <h1 className="font-semibold text-lg tracking-widest">FOR LEARNING</h1>
      <p className="font-semibold text-2xl text-blue-900 tracking-widest leading-9 ">Front-end and full-stack coding challenges that build real skills and help get you hired</p>
      <p className="text-gray-500">Frontend Mentor provides professional design-to-code challenges that mirror real-world development work. Join <span className="text-blue-900 font-bold">1,158,938</span> developers building portfolio projects that impress employers.</p>
      <div className="flex flex-col  space-y-4">
        <button className="text-white p-2 font-bold text-sm bg-rose-500 rounded-full w-3/4 text-center">START BUILDING FREE</button>
        <button className="font-bold w-3/5 bg-white shadow-lg  text-sm rounded-full p-2 text-center">BROWSER CHALLENGES</button>
      </div>
      </div>


    </div>
  )
}