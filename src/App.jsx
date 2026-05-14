import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import LearnPath from "./pages/LearnPathPage";
import Challenges from "./pages/Challenges";
import SolutionPage from "./pages/Solutions";





export default function App(){
  return(
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/learn-path" element={<LearnPath/>}/>
        <Route path="/challenge" element={<Challenges/>}/>
        <Route path="/solution" element={<SolutionPage/>}/>

    </Routes>
  )
}