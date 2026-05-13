import Contact from "../components/Contact"
import Footer from "../components/Footer"
import LayoutHeroNav from "../components/LayoutForTheHeroNav"
import Nav from "../components/Nav"

export default function LearnPath(){
  return(
    <div className=" space-y-6">
      <Nav/>
      <LayoutHeroNav path={"LEARNING PATH"}/>
      <div className="p-4  text-center space-y-4 ">
      <h1 className="text-2xl text-blue-800 tracking-widest">Learning paths</h1>
      <p>Our learning paths help you improve your front-end skills step by step. Each path covers a different topic, guiding you through essential front-end development topics to become a skilled developer</p>
      </div>
      <img src="/images/learning-paths-heroForlearningpage.webp" alt="" />
      <Contact/>
      <Footer/>
    </div>
  )
}