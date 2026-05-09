export default function Company({url}){
  return(
    <div className="bg-white border-gray-200 border shadow-lg rounded-lg text-center p-8 flex justify-center items-center gap-4">
      <img src={url} alt="" />

    </div>
  )
}