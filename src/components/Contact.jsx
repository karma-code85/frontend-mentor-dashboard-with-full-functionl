import { FaDiscord, FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
// import ProPage from "../pages/Pro";





export default function Contact(){
  return(
    <div className="space-y-8 p-4">
      <div className="space-y-6">
      <div className="flex items-center ">
        <img src="/images/favicon-32x32.png" alt="" />
        <h1 className="font-bold text-2xl">Frontend mentor</h1>
      </div>
      <div className="flex gap-4 text-sky-500 text-2xl">
        <a href="https://discord.com/invite/UAfh3qzhYb"><FaDiscord/></a>
        <a href="https://x.com/frontendmentor"><FaSquareXTwitter/></a>
        <a href="https://www.linkedin.com/company/frontend-mentor"><FaLinkedin/></a>
        <a href="https://m.facebook.com/login/?next=https%3A%2F%2Fwww.facebook.com%2Ffrontendmentor"><FaFacebook/></a>
      </div>
      </div>


      <div className="space-y-6">
        <h1 className="text-xl text-blue-800">Stay up to date</h1>
        <p>with the new challenges , featured solution, selected articles, and our latest new</p>
        <input type="email" placeholder="email@example.com"  className="p-2 w-full rounded-lg border border-1 shadow-lg outline-none "/>
        <button className="bg-rose-600 text-white p-3 font-bold w-1/3 rounded-full text-center">SUBSCRIBE</button>
      </div>


      <div className="flex flex-col gap-4">
        <h1 className="font-bold text-xl ">FRONTEND MENTOR</h1>
        <ul className="text-gray-500 space-y-2">
          <li>
            <Link to={"/pro"} >Unlock Pro</Link>
          </li>
          <li>
            <Link to={"/contact"}>Contact us</Link>

          </li>
          <li>
            <Link to={"/faqs"}>FAQs</Link>
          </li>
          <li>
            <Link to={"/become-a-partner"}>Become a partner</Link>
          </li>
          <li>
            <Link to={"/use-case"}>Use case</Link>
          </li>
        </ul>
      </div>


      <div className="flex flex-col gap-4">
        <h1 className="font-bold text-xl ">EXPLORE</h1>
        <ul className="text-gray-500 space-y-2">
          <li>
            <Link to={"/learn-path"} ele>Learning path</Link>
          </li>
          <li>
            <Link to={"/challenge"}>Challenges</Link>
          </li>
          <li>
            <Link to={"/solutions"}>Solutions</Link>
          </li>
          <li>
            <Link to={"/articals"}>Articals</Link>
          </li>
          <li>
            <Link to={"/guides"}>Guides</Link>
          </li>
        </ul>
      </div>

      <div className="flex flex-col gap-4">
        <h1 className="font-bold text-xl ">Community</h1>
        <ul className="text-gray-500 space-y-2">
          <li>
            <Link to={"/discord"}>Discord</Link>
          </li>
          <li>
            <Link to={"guidelines"}>Guidelines</Link>
          </li>

        </ul>
      </div>


          <div className="flex flex-col gap-4">
        <h1 className="font-bold text-xl ">For Companies</h1>
        <ul className="text-gray-500 space-y-2">
          <li>
            <Link to={"hire-developer"}>Hire develpers</Link>
          </li>
          <li>
            <Link to={"trin-developr"}>Train developer</Link>
          </li>

        </ul>
      </div>

    </div>
  )
}