import Contact from "../components/Contact";
import Footer from "../components/Footer";
import GuidesCard from "../components/GuidesCardComponent";
import LayoutHeroNav from "../components/LayoutForTheHeroNav";
import Nav from "../components/Nav";
import { FaClipboard, FaCode, FaFlagCheckered, FaRocket, FaRoute } from "react-icons/fa";


export default function GuidesPage(){
  const guidesData = [
    { id: 1, icon: FaRoute, title: "Learning Path", description: "Create your account, navigate your dashboard, pick your first challenge, and understand the difference between free and Pro plans." },
    { id: 2, icon: FaCode, title: "Write Clean Code", description: "PUse your starter files, translate designs into code using JPEGs or Figma, interpret the challenge brief, and host your finished solution." },
    { id: 3, icon: FaClipboard, title: "Submit Solutions", description: "Walk through the submission process, write a great retrospective that attracts quality feedback, and tag your solution with the right technologies." },
    { id: 4, icon: FaRocket, title: "Deploy Project", description: "GEvery submission receives automated reports on accessibility, HTML, CSS, and JavaScript. Learn what each report checks for and how to act on the feedback." },
    { id: 5, icon: FaFlagCheckered, title: "Earn Certificates", description: "Enroll in curated sequences of articles and challenges designed to build your skills progressively, including peer review to solidify your learning." },
  ];
  return(
    <div className="p-4">
      <Nav/>
      <LayoutHeroNav path={"guides"}/>
      <div className="p-6 space-y-4">
        <h2 className="text-xl text-blue-900 font-bold">Frontend Mentor Guides</h2>
        <h1 className="text-3xl font-semibold tracking-widest">Everything you need to learn, build and grow — step by step.</h1>
        <p className="text-neutral-500">Whether you're just getting started or ready to level up, these guides will help you understand the platform, improve your coding skills, and get the most out of every challenge.</p>
        <button className="p-2 rounded-full text-white font-bold bg-blue-800 w-1/2">Gets Started</button>
      </div>
      <div className="space-y-4">
      {guidesData.map((guide)=>(
        <GuidesCard
        key={guide}
        icon={guide.icon}
        title={guide.title}
        paragrph={guide.description}
        />
      ))}
      </div>
      <GuidesCard />
      <Contact/>
      <Footer/>
    </div>
  )

}