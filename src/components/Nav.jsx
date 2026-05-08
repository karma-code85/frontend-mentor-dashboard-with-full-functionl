import { useState } from "react";

export default function Nav(){
  return(
    <div className="flex justify-between">
      <div className="flex gap-4 justify-center items-center">
        <img src="./images/icon-menu.svg" alt="" className="brightness-0 size-6"/>
        <img src="./images/favicon-32x32.png" alt="" />
      </div>
      <button className="p-3 bg-black text-white rounded-full ">
        LOG in
      </button>
    </div>
  )
}