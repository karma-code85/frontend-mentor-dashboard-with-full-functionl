export default function Company({url, link}){
  return(
    <div className="bg-white border-gray-200 border shadow-lg rounded-lg text-center p-8 flex justify-center items-center gap-4">
      <a href={link}><img src={url} alt="" /></a>

    </div>
  )
}