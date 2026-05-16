import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import LearnPath from "./pages/LearnPathPage";
import Challenges from "./pages/Challenges";
import SolutionPage from "./pages/Solutions";
import ArticalPage from "./pages/Artical";
import GuidesPage from "./pages/Guides";





export default function App(){
  return(
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/learn-path" element={<LearnPath/>}/>
        <Route path="/challenge" element={<Challenges/>}/>
        <Route path="/solution" element={<SolutionPage/>}/>
        <Route path="/articles" element={<ArticalPage/>}/>
        <Route path="guides" element={<GuidesPage/>}/>

    </Routes>
  )
}