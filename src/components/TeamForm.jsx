import { useState } from "react";
import { ImCheckboxChecked } from "react-icons/im";




export default function TeamCard({forTeam, activeButtonToggle}){
  return(
    <div>
      {activeButtonToggle===forTeam &&(
        <div className="bg-white rounded-lg shadow-2xl space-y-6 p-4 text-center border border-1">
            <p>Frontend Mentor for Team</p>
            <p>Onboard new hires faster and train team members more effectively through hands-on practice. All team members gain unlimited Pro access, and admins can easily oversee and manage the team.</p>
            <button className="bg-rose-500 rounded-full text-white  hover:bg-rose-700 text-center p-2">LEARN MORE</button>
            <div className="w-full border border-1 "></div>
            <h1>Teams</h1>
            <del>$12.50/seat/mo</del>
            <h1>$6.25/seat/mo</h1>
            <p>$75 per seat, billed yearly</p>
            <ul>
              <li>
                 <ImCheckboxChecked className="rounded-full text-blue-800 "/>
                 <span>Unlimited Pro access for team members</span>
              </li>
              <li>
                 <ImCheckboxChecked className="rounded-full text-blue-800 "/>
                 <span>Unified billing</span>
              </li>
              <li>
                 <ImCheckboxChecked className="rounded-full text-blue-800 "/>
                 <span>Team management</span>
              </li>
              <li>
                 <ImCheckboxChecked className="rounded-full text-blue-800 "/>
                 <span>Team branding</span>
              </li>
              <li>
                <ImCheckboxChecked className="rounded-full text-blue-800 "/>
                <span>Bulk discount</span>
              </li>
            </ul>
          </div>

      )}

    </div>
  )

}