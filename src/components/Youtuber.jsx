
import { FaQuoteRight } from "react-icons/fa";

export default function Youtube({text , url , name, jop}){
  return(
    <div className="p-4 md:p-8 rounded-lg bg-white shadow-lg border space-y-6">
      <p>{text}</p>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
        <img src={url} alt="profile"  className="shadow-2xl size-12 rounded-full"/>
        <div className="flex flex-col">
          <p className="font-bold text-blue-900">{name}</p>
          <p className="text-gray-400">{jop}</p>
        </div>
        </div>
        <FaQuoteRight className="text-gray-300 size-10"/>

      </div>
    </div>
  )
}