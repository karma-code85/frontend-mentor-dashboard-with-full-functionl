import Footer from "../components/Footer"
import Nav from "../components/Nav"
import LayoutHeroNav from "../components/LayoutForTheHeroNav"
import Contact from "../components/Contact"
import { IoCheckmarkOutline } from "react-icons/io5";
// import { challenges } from "../dataChallenges";






export default function Challenges({img, title, id, classRange,technologies,text}){
  return(
    <div className="p-4 space-y-4">
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
        <p>Work in team ? <span>Upgrade your team to Pro</span></p>

      </div>
      <Contact/>
      <Footer/>
    </div>
  )
}