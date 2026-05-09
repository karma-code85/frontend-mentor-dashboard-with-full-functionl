export default function SummaryDeailes({number, text}){

  return(
    <div className="bg-white shadow-lg rounded-lg p-4  space-y-6">
     <button className="flex justify-center items-center gap-4  ">
      <p className="bg-cyan-500 rounded-full px-3 p-1 text-white text-center">{number}</p>
      <p className="font-bold">{text}</p>
     </button>
    </div>
  )
}