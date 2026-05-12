export default function CommunityTitle({text, name , url , mail}){
  return(
    <div className="bg-white shadow rounded-lg p-4 space-y-8 w-full">
      <p className="text-gray-400">{text}</p>
      <div className="flex gap-4 items-center ">
        <img src={`images/${url}`} alt=""  className="size-10"/>
        <div>
          <h1 className="font-extrabold text-lg text-blue-800">{name}</h1>
          <p className="text-gray-500">@{mail}</p>
        </div>
      </div>

    </div>
  )
}