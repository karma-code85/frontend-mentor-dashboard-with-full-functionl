import { FaDiscord ,FaLinkedin,FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";




export default function Contact(){
  return(
    <div className="space-y-8">
      <div className="space-y-6">
      <div className="flex items-center ">
        <img src="/images/favicon-32x32.png" alt="" />
        <h1 className="font-bold text-2xl">Frontend mentor</h1>
      </div>
      <div className="flex gap-4 text-sky-500 text-2xl">
        <FaDiscord/>
        <FaSquareXTwitter/>
        <FaLinkedin/>
        <FaFacebook/>
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
            <a href="">Unlock Pro</a>
          </li>
          <li>
            <a href="">Contact us</a>
          </li>
          <li>
            <a href="">FAQs</a>
          </li>
          <li>
            <a href="">Become a partner</a>
          </li>
          <li>
            <a href="">Use case</a>
          </li>
        </ul>
      </div>


      <div className="flex flex-col gap-4">
        <h1 className="font-bold text-xl ">EXPLORE</h1>
        <ul className="text-gray-500 space-y-2">
          <li>
            <a href="">Learning path</a>
          </li>
          <li>
            <a href="">Challenges</a>
          </li>
          <li>
            <a href="">Solutions</a>
          </li>
          <li>
            <a href="">Articals</a>
          </li>
          <li>
            <a href="">Guides</a>
          </li>
        </ul>
      </div>

      <div className="flex flex-col gap-4">
        <h1 className="font-bold text-xl ">Community</h1>
        <ul className="text-gray-500 space-y-2">
          <li>
            <a href="">Discord</a>
          </li>
          <li>
            <a href="">Guidelines</a>
          </li>

        </ul>
      </div>


          <div className="flex flex-col gap-4">
        <h1 className="font-bold text-xl ">For Companies</h1>
        <ul className="text-gray-500 space-y-2">
          <li>
            <a href="">Hire develpers</a>
          </li>
          <li>
            <a href="">Train developer</a>
          </li>

        </ul>
      </div>

    </div>
  )
}