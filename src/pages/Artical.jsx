import ArticalCard from "../components/ArticalsCardComponent"
import Contact from "../components/Contact"
import Footer from "../components/Footer"
import LayoutHeroNav from "../components/LayoutForTheHeroNav"
import Nav from "../components/Nav"




export default function ArticalPage(){
  return(
    <div className="space-y-6">
      <Nav/>
      <LayoutHeroNav path={"Articals"}/>
      <ArticalCard/>
      <Contact/>
      <Footer/>
    </div>

  )
}