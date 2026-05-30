import { FaGithub } from "react-icons/fa6";


export default function JoinCard(){
  return(
    <div className="flex flex-col justify-center items-center bg-gray-50 shadow border border-1 rounded-lg p-4 space-y-6 text-center">
      <h1 className="tracking-widest  text-2xl ">Join 1,160,660 people building portfolio-worthy projects</h1>
      <p className="text-center leading-6 text-gray-500">Our highly supportive, positive community is here to help you improve your skills. We all try to help each other out wherever possible. We’d love to welcome you to our community!</p>
      <button className="font-bold bg-rose-500 text-lg rounded-full text-center p-2  text-white shadow border border-1 "><button className="flex gap-4 items-center">LOGIN<span><FaGithub/></span></button></button>

    </div>
  )

}