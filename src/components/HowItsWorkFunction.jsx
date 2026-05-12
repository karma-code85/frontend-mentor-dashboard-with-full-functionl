import { useState } from "react"


export default function HowItswork(){
  const [isActive, setIsActive]=useState(0)

  const steps=[
    {
      id:1,
      title:"Choose your challenge",
      image:"home-how-it-works-3.webp",
      description:"Pick from 100+ professionally designed projects across five skill levels—from HTML/CSS basics to full-stack applications"

    }
    ,{
      id:2,
      title:"Code the design",
      image:"home-how-it-works-4 (1).webp",
      description:"Build responsive websites and web apps using the provided designs as your guide. Practice with any tools, frameworks, or AI assistants you want to master.",
    }
    ,{
      id:3,
      title:"Submit and improve",
      image:"home-how-it-works-3.webp",
      description:'Get automated feedback, community code reviews, and compare your solution to the design. Refine your approach and level up with each project.'

    }
    ,{
      id:4,
      title:"Help others grow",
      image:"home-how-it-works-4 (1).webp",
      description:"Review other developers code to sharpen your skills and build connections in our supportive community",
    }
  ]
  return(
    <div className="space-y-4">
      <img src={`/images/${steps[isActive].image}`} alt="" />
      <div  className="space-y-4">
        {steps.map((step,index)=>(
          <div key={step.id} className={`transition-transform  p-4 rounded-lg border border-1 shadow  ${isActive===index ?
            "bg-blue-900 text-white":"bg-white"
          }`}
          onClick={()=>setIsActive(index)}
          >
            <button className="flex gap-4"> <span className={`bg-sky-500  px-3 p-1 rounded-full ${isActive===index?"bg-white text-blue-800":"bg-sky-500 text-white"}`}>{step.id}</span>
            <h1 className=" text-2xl">{step.title}</h1>
            </button>
            {isActive === index &&(
              <p className="mt-4 text-gray-400">{step.description}</p>
            )}
          </div>
        ))}
      </div>

    </div>
  )
}