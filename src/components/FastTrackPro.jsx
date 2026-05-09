export default function FastTrack({icon, title, paragraph}){
  return(
    <div className="p-2 bg-white shadow-lg rounded-lg border space-y-6 ">
      <div className="p-2 rounded-lg bg-gray-100 text-blue-900 w-1/4 text-center">{icon}</div>
      <h1 className="text-xl font-semibold">{title}</h1>
      <p>{paragraph}</p>

    </div>
  )
}