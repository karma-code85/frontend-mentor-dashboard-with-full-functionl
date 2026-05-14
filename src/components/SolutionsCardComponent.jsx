import { FaComment } from "react-icons/fa";
import { FcLike } from "react-icons/fc";
import { CiBookmark } from "react-icons/ci";
import { solutionData } from "../dataSolution";


export default function SolutionCardComponent({url, title, profile, username,submittedDate,paragrph, comments,point,likes}){
  return(
    <div className=" shadow rounded-lg  w-full  ">
      {solutionData.map((data)=>(
        <div key={data} className="space-y-6 ">
      <img src={`/images/imagesSolutions/${data.url}`} alt="" className="rounded-t-lg object-cover" />
      <div className="divide-y space-y-6">
      <h1>{data.title}</h1>
      <div className="flex gap-4">
      <img src={data.profile} alt="profile" />
      <div>
        <h1 className="flex gap-2"><span>{data.username}</span> . <span>{data.point}</span></h1>
        <p>{data.submittedDate}</p>
      </div>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex">
          <h1 className="flex">
            <FaComment/>
            {data.comments}
            <span>comments</span>
          </h1>

          <h1 className="flex">
            <FcLike/>
            {data.likes}
            <span>likes</span>
          </h1>
        </div>
        <CiBookmark/>
      </div>

      </div>
        </div>

      ))}


    </div>
  )
}