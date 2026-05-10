import { useState } from "react";
import Nav from "./components/Nav";
import { FaBook, FaCode, FaRegComment, FaGithub } from "react-icons/fa";
import Youtube from "./components/Youtuber";
import Company from "./components/CompanyAddress";
import SummaryDeailes from "./components/SummaryDetails";
import DeveloperLikeFrontend from "./components/DevelperLikeFrontend";
import FastTrack from "./components/FastTrackPro";
import Payment from "./components/paymentSubscrbation";









export default function App(){
  const [isOpen , setIsOpen]=useState(false)
  const [imageOpen, setImageOpen]=useState(1)

  const images=["home-how-it-works-3.webp","home-how-it-works-4 (1).webp","home-how-it-works-3.webp", "home-how-it-works-4 (1).webp"]



  return(
    <div className="min-h-screen max-sm space-y-10 p-6">
      <Nav/>

      <div className="space-y-6">
      <h1 className="font-semibold text-lg tracking-widest">FOR LEARNING</h1>
      <p className="font-semibold text-2xl text-blue-900 tracking-widest leading-9 ">Front-end and full-stack coding challenges that build real skills and help get you hired</p>
      <p className="text-gray-500 tracking-wider leading-8 text-lg">Frontend Mentor provides professional design-to-code challenges that mirror real-world development work. Join <span className="text-blue-900 font-bold">1,158,938</span> developers building portfolio projects that impress employers.</p>
      <div className="flex flex-col  space-y-4">
        <button className="text-white  py-3 font-bold text-sm bg-rose-600 rounded-full w-3/4 text-center flex items-center justify-center gap-4">START BUILDING FREE <FaGithub /></button>
        <button className="font-bold w-3/5 bg-white shadow-lg  text-sm rounded-full p-2 text-center border border-1 border-gray-200">BROWSE CHALLENGES</button>
      </div>
      <div>
        <img src="/images/home-hero.webp" alt="desktop code editor image" />
      </div>
      <div className="rounded-lg p-4 space-y-6 bg-blue-900">{/*for the blue container under edtior img */}
        <h1 className="font-bold text-white">Get AI-powered feedback on every solution submission</h1>
        <p className="text-gray-400">Join thousands of developers getting personalized insights with every submission to level up faster. </p>
        <button className="bg-white p-2 rounded-full text-blue-800 text-center w-full">LEARN ABOUT PRO</button>
      </div>
      <div>{/*the youtuber container */}
        <Youtube text={"I highly recommend Frontend Mentor. Skip the search for project ideas and dive into ready-made challenges that help you level up as a developer."}
        url="/images/image-avatar.png"
        name={"Kevin Powell"}
        jop={"Web Developer & YouTuber"}
        />
      </div>
       <div>{/*the youtuber container */}
        <Youtube text={"Frontend Mentor is a win-win. You can sharpen your skills building websites and add finished projects to your portfolio to help land a job!"}
        url="/images/home-hero.webp"
        name={"Jessica Chan"}
        jop={"Web Developer & YouTuber"}
        />
      </div>
      <p className="text-center font-extrabold text-lg ">AS FEATURED ON ....</p>
      <div className="space-y-6">
        <Company url={"/images/logo-css-tricks.svg"} />
        <Company url={"/images/logo-stack-overflow.svg"}/>
        <Company url={"/images/logo-product-hunt.svg"}/>
      </div>
      <div className="bg-gray-100 rounded-lg p-4  space-y-6">{/*for the how it work containr  */}
        <h1 className="text-lg font-semibold">HOW IT'S WORK</h1>
        <div className="space-y-6">
          <img src={`/images/${images[imageOpen-1]}`} alt="" />

          <details>
            <summary>
             <SummaryDeailes number={1} text={"Choose you challenges"}
             onclick={()=>setImageOpen(1)}
             />
            </summary>

          </details>
          <SummaryDeailes number={2} text={"Code the design"} onclick={()=>setImageOpen}/>
          <SummaryDeailes number={3} text={"Submit and improve"}/>
          <SummaryDeailes number={3} text={"Help other grow"}/>
        </div>
      </div>
      <div className="space-y-8">{/*for the why developer like frontend mentor */}
        <h1 className="text-center text-2xl">Why developers choose Frontend Mentor</h1>
        <DeveloperLikeFrontend
        url={"/images/home-why-1111.webp"}
        head={"Move beyond passive learning"}
        paragrph={"Stop watching and start creating. Build professional-quality projects that develop genuine coding skills through hands-on practice."}
        />
        <DeveloperLikeFrontend
        url={"/images/home-why-2222.webp"}
        head={"Create a portfolio that gets you hired"}
        paragrph={"Build impressive projects with professional designs. Recruiters tell us these portfolio pieces consistently wow them in interviews by demonstrating real-world capabilities."}
        />
        <DeveloperLikeFrontend
        url={"/images/home-why-33333.webp"}
        head={"Master AI-powered development workflows"}
        paragrph={"Practice with AI tools that 76% of developers use daily. Learn to work effectively with Cursor, GitHub Copilot, ChatGPT, and other assistants while maintaining code quality and problem-solving skills."}
        />
        <DeveloperLikeFrontend
        url={"/images/home-why-44444.webp"}
        head={"Join a supportive developer community"}
        paragrph={"Connect with peers for code reviews, career advice, and friendship. Beat imposter syndrome alongside developers who understand your journey, guided by mentors who've walked this path."}
        />
      </div>
      <div className="space-y-6">{/*for the fast-track PRO */}
        <h1>Fast-track your develper career with <button>PRO</button></h1>
        <p>Get AI-powered feedback on every solution, build portfolio-worthy projects, and master professional workflows with complete Figma files—everything you need to level up faster.</p>
        <FastTrack
        icon={<FaRegComment className="size-10 "/>}
        title={"Level up faster with AI-powered feedback"}
        paragraph={"Our AI-enhanced reports spot up to 3x more improvement opportunities on every submission, giving you personalized insights that help you level up faster."}
        />

        <FastTrack
        icon={<FaBook className="size-10"/>}
        title={"Build portfolio projects that get you hired"}
        paragraph={"Create multi-page websites, interactive dashboards, and full-stack applications with premium challenges that make your portfolio stand out to employers."}
        />

        <FastTrack
        icon={<FaCode className="size-10 text-center"/>}
        title={"Master the design-to-code workflow pros use"}
        paragraph={"Learn to translate Figma designs into pixel-perfect code using the same detailed specs and professional workflow that developers use in real teams."}
        />
      </div>
      <div className="rounded-full p-1 w-[75%] flex items-center bg-white shadow border w-sm justify-between text-sm ">
        <button className="bg-blue-900 text-white font-bold rounded-full p-2">
          FOR INDIVIDUALS
        </button>
        <button className="p-2 font-bold items-start">
          FOR TEAMS
        </button>
      </div>
      <Payment
      subDate={"monthly"}
      deletedDate={12}
      datePerMonth={6}
      describtion={"buildMonthly"}
      
      />
      </div>

    </div>
  )
}