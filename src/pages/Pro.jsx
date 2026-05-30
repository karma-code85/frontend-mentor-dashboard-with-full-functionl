import { FaBook, FaCode, FaRegComment } from "react-icons/fa"
import Contact from "../components/Contact"
import FastTrack from "../components/FastTrackPro"
import Footer from "../components/Footer"
import Nav from "../components/Nav"





export default function ProPage(){
  return(
    <div>
      <Nav/>
      <div className="space-y-6 p-4">{/*for the fast-track PRO */}
              <h1 className="text-center text-2xl tracking-widest">Fast-track your develper career with <button className="bg-blue-900 font-semibold text-white rounded-lg px-2 py-1">PRO</button></h1>
              <p className="max-w-prose  text-neutral-500 text-lg">Get AI-powered feedback on every solution, build portfolio-worthy projects, and master professional workflows with complete Figma files—everything you need to level up faster.</p>
              <FastTrack
              icon={<FaRegComment className="size-10 mx-auto"/>}
              title={"Level up faster with AI-powered feedback"}
              paragraph={"Our AI-enhanced reports spot up to 3x more improvement opportunities on every submission, giving you personalized insights that help you level up faster."}
              />

              <FastTrack
              icon={<FaBook className="size-10 mx-auto"/>}
              title={"Build portfolio projects that get you hired"}
              paragraph={"Create multi-page websites, interactive dashboards, and full-stack applications with premium challenges that make your portfolio stand out to employers."}
              />

              <FastTrack
              icon={<FaCode className="size-10 text-center mx-auto"/>}
              title={"Master the design-to-code workflow pros use"}
              paragraph={"Learn to translate Figma designs into pixel-perfect code using the same detailed specs and professional workflow that developers use in real teams."}
              />
            </div>
            <Contact/>
            <Footer/>

    </div>
  )
}