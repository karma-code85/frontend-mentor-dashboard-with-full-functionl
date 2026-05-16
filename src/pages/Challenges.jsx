import Footer from "../components/Footer"
import Nav from "../components/Nav"
import LayoutHeroNav from "../components/LayoutForTheHeroNav"
import Contact from "../components/Contact"
import { IoCheckmarkOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
// import { challenges } from "../dataChallenges";
import { CiSearch } from "react-icons/ci";
import { HiOutlineFilter } from "react-icons/hi";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { challenges } from "../dataChallenges";



export default function Challenges({img, title, id, classRange,technologies,text}){
  const [isFilter, setIsFilter]=useState(false)
  const [challengeCard, setChallengeCard]=useState(challenges)
  const [searchTerm, setSearchTerm]=useState("")


  const [selectedFilter, setSelectedFilter]=useState({
    format:[],
    pricing:[],
    difficulty:[],
    status:[],
    language:[]
  })

  function handleReset(){
    setSelectedFilter({
      format:[],
      pricing:[],
      difficulty:[],
      status:[],
      language:[]
    })
    setSearchTerm("")
  }

  const filterChallenges=challenges.filter((challenge)=>{
    const matchTitle=challenge.title?.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())

    return matchTitle
  })

  return(
    <div className="p-4 space-y-4 relative min-h-screen ">
      <Nav/>
      <LayoutHeroNav path={"Challenges"}/>
      <div className="bg-gray-100 rounded-lg p-4 space-y-4">
        <h1>Unlock full access</h1>
        <ul >
          <li className="flex  gap-4 items-center"><IoCheckmarkOutline className="text-emerald-500"/>AI powered solution reviews</li>
          <li className="flex  gap-4 items-center"><IoCheckmarkOutline className="text-emerald-500"/>+50 Portfolio-ready permium projects</li>
          <li className="flex  gap-4 items-center"><IoCheckmarkOutline className="text-emerald-500"/>Profiessional figma design</li>
          <li className="flex  gap-4 items-center"><IoCheckmarkOutline className="text-emerald-500"/>And more</li>
        </ul>
        <button className="font-bold p-2 rounded-full text-white hover:bg-rose-700 bg-rose-500">UPGRADE NOW</button>
        <p>Work in team ? <Link className="text-blue-800 underline hover:underline-none hover:text-blue-700">Upgrade your team to Pro</Link></p>
      </div>
      <div className="flex justify-between items-center p-2 rounded border focus-within:border-emerald-200 relative">
        <input type="text"
        placeholder="Search challenges....."
        className="outline-none w-full h-full"
        onChange={(e)=>setSearchTerm(e.target.value)}
        value={searchTerm}
        />
        <CiSearch className="absolute right-4" />
      </div>
      <div className="flex gap-2 w-full">
        <div className="flex gap-2 justify-center items-center bg-white shadow rounded border p-2 w-1/2 " onClick={()=>setIsFilter(true)}>
        <HiOutlineFilter/><span>Filter</span>
        </div>
        <div className="flex gap-2 justify-center items-center bg-white shadow rounded border p-2 w-1/2">
          <span>new to old</span>
        </div>
        {isFilter && (
          <div className="fixed inset-y-0 right-0 bg-gray-50 w-[90%] md:w-[400px] p-6 shadow-2xl z-50 overflow-y-auto flex flex-col "
          onClick={(e)=>e.stopPropagation()}
          >
            <div className="flex justify-between items-center border-gray-200  border-b-2  ">
              <h1 className="text-2xl font-bold">Filter</h1>
              <div className="flex gap-2 items-center ">
                <span className="text-neutral-500 text-2xl hover:underline">Rest</span>
                <IoMdClose className="text-2xl font-bold cursor-pointer" onClick={(e)=>{setIsFilter(false);
                  e.stopPropagation()
                }}/>
              </div>
            </div>
            <div className="divide-y divide-gray-200 flex-1 pb-10">{/*for the under element */}
            <div className="space-y-4 mt-4 ">
              <h1 className="text-2xl font-semibold">Format</h1>
              {["Desing", "Product"].map((item)=>(
              <div className="flex gap-4 items-center  " key={item}>
                <input type="checkbox"   className="bg-rose-500 border-blue-800 w-6 h-6 rounded accent-rose-500" />
                <p className="text-semibold text-2xl group-hover:text-rose-500 " >{item}</p>
              </div>
              ))}
            </div>

            <div className="space-y-4 mt-4">
              <h1 className="text-2xl font-semibold">Pricing</h1>
              {['Free', 'Free+' ,'Premium'].map((item)=>(
                <div className="flex gap-4 items-center" key={item}>
                <input type="checkbox"   className="bg-rose-500 border-blue-800 w-6 h-6 rounded accent-rose-500"/>
                <p className="text-semibold text-2xl">{item}</p>
              </div>

              ))}
            </div>

            <div className="space-y-4 mt-4">
              <h1 className="text-2xl font-semibold">Difficulty</h1>
              {['Newbie','Junior','Intermediate','Advance','Guru'].map((item)=>(
                <div className="flex gap-4 items-center" key={item}>
                <input type="checkbox"   className="bg-rose-500 border-blue-800 w-6 h-6 rounded accent-rose-500"/>
                <p className="text-semibold text-2xl ">{item}</p>
              </div>

              ))}
            </div>


             <div className="space-y-4 mt-4">
              <h1 className="text-2xl font-semibold">Status</h1>
              {['Not started', 'In progress', 'Completed'].map((item)=>(
                <div className="flex gap-4 items-center" key={item}>
                <input type="checkbox"   className="bg-rose-500 border-blue-800 w-6 h-6 rounded  accent-rose-500"/>
                <p className="text-semibold text-2xl">{item}</p>
              </div>

              ))}
            </div>

             <div className="space-y-4 mt-4">
              <h1 className="text-2xl font-semibold">Language</h1>
              {["HTML &CSs","JS","API"].map((item)=>(
                 <div className="flex gap-4 items-center" key={item}>
                <input type="checkbox"   className="bg-rose-500 border-blue-800 w-6 h-6 rounded accent-rose-500"/>
                <p className="text-semibold text-2xl">{item}</p>
              </div>

              ))}
            </div>

            </div>
          </div>
        )}
      </div>
      <div className="flex justify-between text-sm">
        <span className="text-neutral-500">Showing 127 of 127 challenges </span> <span className="text-blue-800 underline">Try our learn path</span>
      </div>
      {/* <div className="shadow-xl rounded pb-8 p-4"> */}
     {challengeCard.map((challenge)=>(
      <div key={challenge.id} className="space-y-8 bg-white rounded shadow-xl mb-4 ">
        <img src={`/images/imagesChallenge/${challenge.img}`} alt={challenge.title}  className="rounded-t-lg object-cover "/>
        <div className="space-y-6 p-4">
          <h1>{challenge.title}</h1>
          <div >
            <div className="flex justify-between">
            <div className="flex gap-3">
              {challenge.technologies.map((tech, index)=>(
                <ul key={index}>
                  <li>{tech}</li>
                </ul>
              ))}
            </div>
          <h1>{challenge.classRange}</h1>
            </div>

          <p>{challenge.text}</p>
          </div>

        </div>

      </div>
     ))}
      {/* </div> */}
      <Contact/>
      <Footer/>
    </div>
  )
}