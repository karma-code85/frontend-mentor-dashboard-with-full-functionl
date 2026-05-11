import { ImCheckboxChecked } from "react-icons/im";


export default function Payment({subDate, deletedDate, datePerMonth, describtion ,listVal}){
  return(
    <div className="bg-white rounded-lg shadow-2xl space-y-6 p-4 text-center border border-1">
      <p>{subDate}</p>
      <p className="text-gray-400 font-bold"><del>$ {deletedDate}/ Month</del></p>
      <h1 className="font-semibold text-lg tracking-wider">${datePerMonth}/mo</h1>
      <div>
      <p>{describtion}</p>
      <div className="rounded-lg bg-gray-100 p-2 font-bold ">
        🇷🇼    Country discount <span className="text-blue-900">50% off </span> <span className="bg-green-100 p-1 rounded-lg text-sm text-green-800">Applied</span>
      </div>
      </div>
      <button className="bg-rose-600 text-white text-center p-2 w-full rounded-full font-bold">LEARN MORE</button>
      <ul>
        {listVal.map((val)=>(
          <div className="flex gap-4 items-end space-y-4">
            <ImCheckboxChecked className="rounded-full text-blue-800 "/>
            <li key={val} >{val}</li>
          </div>
        ))}
      </ul>


    </div>
  )
}