import { Route, Routes } from "react-router-dom";
import ArticalPage from "./pages/Artical";
import Challenges from "./pages/Challenges";
import GuidesPage from "./pages/Guides";
import Home from "./pages/Home";
import LearnPath from "./pages/LearnPathPage";
import ProPage from "./pages/Pro";
import SolutionPage from "./pages/Solutions";
import TrianPage from "./pages/TrainTeam";






export default function App(){
  return(
    <Routes >
        <Route path="/" element={<Home/>}/>
        <Route path="/learn-path" element={<LearnPath/>}/>
        <Route path="/challenge" element={<Challenges/>}/>
        <Route path="/solution" element={<SolutionPage/>}/>
        <Route path="/articles" element={<ArticalPage/>}/>
        <Route path="/guides" element={<GuidesPage/>}/>
        <Route path="/team" element={<TrianPage/>}/>
        <Route path="/pro" element={<ProPage/>}/>
    </Routes>
  )
}