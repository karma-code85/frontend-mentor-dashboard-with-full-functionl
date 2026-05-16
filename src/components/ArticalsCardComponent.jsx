import { articalData } from "../dataArtical"



export default function ArticalCard({url , title,filterDate, paragraph, profile, username, date}){
  return (
    <div className="rounded-lg space-y-6 p-4">
      {articalData.map((artical)=>(
      <div key={artical} className="">

      <img src={`/images/imagesSolutions/${artical.url}`} alt="" className="object-cover rounded-t-lg"/>
      <div className="p-4 space-y-6">
        <div className="bg-sky-100 rounded-full p-1 text-blue-500 font-bold text-lg p-4 text-center">
          {artical.filterDate.map((art)=>(
            <div key={art}>
              {art}
            </div>
          ))}
        </div>
        <h1 className="text-xl text-blue-800">{artical.title}</h1>
        <p>{artical.paragrph}</p>
        <div className="flex w-[80%] gap-4 items-center">
          <img src={`/images/${artical.profile}`} alt="" className="rounded-full size-10 " />
          <p>{artical.username}</p>
          <span>.</span>
          <p>{artical.date}</p>
        </div>
      </div>
        </div>
      ))}

    </div>
  )
}