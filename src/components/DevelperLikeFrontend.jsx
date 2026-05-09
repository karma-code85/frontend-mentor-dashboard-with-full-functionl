export default function DeveloperLikeFrontend({url , head, paragrph}){
  return(
    <div>
      <div className="space-y-6">
          <div>
            <img src={url} alt="" />
          </div>
          <div className="space-y-6">
            <h1  className=" font-secondary text-xl">{head}</h1>
            <p className="text-gray-400">{paragrph}</p>
          </div>
        </div>
    </div>
  )
}