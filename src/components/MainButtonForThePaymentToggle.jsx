import { useState } from "react"
import IndividualCard from "./IndividualForm"
import TeamCard from "./TeamForm"


export default function MainButtonFortheTPaymentToggle(){
  const [activeButtonToggle, setActiveButtonToggle]=useState("forIndividual")


   const monthlyBills=["Free challenges", "AI-powered solution feedback", "5 Figma design files/month", "2 premium challenges/month", "Private solutions","Custom solution domains","View challenges solutions early"]
    const yearlyBills=["Free challenges","AI-powered solution feedback","Unlimited Figma design files","Unlimited premium challenges","Private solutions", "Custom solution domains", "View challenges solutions early"]


  function handleToggledPayment(dateData){
    setActiveButtonToggle(activeButtonToggle===dateData? null :dateData)
  }
  return(
    <div >
      <div className="rounded-full p-1 w-[75%] items-center bg-white shadow border w-sm text-center text-sm  mx-auto mb-6">
        <button className={`rounded-full font-bold text-sm py-2  px-2 w-1/2 transition-all duration-900 ease-in-out ${activeButtonToggle==="forIndividual" ?"bg-blue-900 text-white":"bg-white text-blue-900 "}`} onClick={()=>handleToggledPayment("forIndividual")}>
          FOR INDIVIDUALS
        </button>
        <button className={`rounded-full p-2 font-bold items-start w-1/2 transition-all duration-900 ease-in-out ${activeButtonToggle==="forTeam" ?"bg-blue-900 text-white":"bg-white text-blue-900"}`}  onClick={()=>handleToggledPayment("forTeam")}>
          FOR TEAMS
        </button>
      </div >
      <div className="space-y-6">
        <IndividualCard
        subDate={"monthly"}
        deletedDate={12}
        datePerMonth={6}
        listVal={monthlyBills}
        description={"billed monthly"}
        activeButtonToggle={activeButtonToggle}
        forIndividual={"forIndividual"}
        />
        <IndividualCard
        subDate={"monthly"}
        deletedDate={8}
        datePerMonth={4}
        listVal={yearlyBills}
        description={"$48 billed yearly (save 33% vs month)"}
        forIndividual={"forIndividual"}
        activeButtonToggle={activeButtonToggle}
        />

        <TeamCard
        forTeam={"forTeam"}
        activeButtonToggle={activeButtonToggle}
        />

      </div>
    </div>
  )
}