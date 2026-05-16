
export default function GuidesCard({icon :IconComponent, title,paragrph}){
  // const icons=[FaClipboard, FaCode, FaFlagCheckered, FaRocket, FaRoute]
  return(
    <div className="rounded-lg border border-gray-100 shadow space-y-4 cursor-pointer">
      <div className="p-8 bg-gray-200 w-full text-center flex justify-center">
        {typeof IconComponent==='function' ?<IconComponent className="text-blue-500 "/>:IconComponent}
      </div>
      <div className="space-y-2 p-4">
        <h1>{title}</h1>
        <p>{paragrph}</p>
      </div>

    </div>
  )
}