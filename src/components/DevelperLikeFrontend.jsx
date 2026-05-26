export default function DeveloperLikeFrontend({url , head, paragrph}){
  return(
    <div>
      <div className="gap-6 lg:flex lg:flex-row-reverse">
          <div>
            <img src={url} alt="" />
          </div>
          <div className="space-y-6 lg:flex lg:flex-col justify-center itemsc-center">
            <h1  className=" font-secondary text-2xl">{head}</h1>
            <p className="text-gray-400 ">{paragrph}</p>
          </div>
        </div>
    </div>
  )
}