export default function ForCompainesCard({url ,text,title, subtitle, btn}){
  return(
    <div className="space-y-6">
      <img src={`/images/${url}`} alt="" />
      <h1 className="text-semibold text-blue-700 text-lg">{subtitle}</h1>
      <h1 className="text-2xl">{title}</h1>
      <p className="text-gray-400">{text}</p>
      <button className="bg-rose-500 text-center rounded-full p-2 text-white w-1/2 font-bold">{btn}</button>
    </div>
  )
}