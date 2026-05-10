export default function Payment({subDate, deletedDate, datePerMonth, describtion ,listVal}){
  return(
    <div className="bg-white rounded-lg shadow p-4 text-center">
      <p>{subDate}</p>
      <p className="text-gray-400"><del>{deletedDate}</del></p>
      <h1>${datePerMonth}/mo</h1>
      <p>{describtion}</p>
      <div className="rounded-lg bg-gray-100 p-2 ">
        🇷🇼 Country discount <span>50% off </span><span>Applied</span>
      </div>
      <button className="bg-rose-600 text-white text-center p-2 w-full">LEARN MORE</button>
      {/* <ul>
        {listVal.map((val)=>(
          <div>
            <li key={val}>{val}</li>
          </div>
        ))}
      </ul> */}


    </div>
  )
}