export default function FastTrack({icon, title, paragraph}){
  return(
    <div className="p-8 bg-white shadow-lg rounded-lg border space-y-6 ">
      <div className="p-2 rounded-lg bg-blue-100  text-blue-800 w-1/4 text-center">{icon}</div>
      <h1 className="text-xl font-semibold">{title}</h1>
      <p>{paragraph}</p>
    </div>
  )
}