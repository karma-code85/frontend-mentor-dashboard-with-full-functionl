import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import LearnPath from "./pages/LearnPathPage";
import Challenges from "./pages/Challenges";





export default function App(){
  return(
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/learn-path" element={<LearnPath/>}/>
        <Route path="/challenge" element={<Challenges/>}/>

    </Routes>
  )
}