import React, { useState } from "react";
import MainNavBar from "./MainNavBar";
import MainDashboardComponent from "./MainDashboardComponent";
import MainSideBar from "./MainSideBar";
import MainNewTest from "./MainNewTest";

import MainFormControl from "./MainFormControl";


export default function MainDashboard() {
  const [currentStep, setCurrentStep] = useState(1);

  

  const steps = [
    "Configure Environment",
    "Design Test",
    "Configure Load Generators",
    "Upload Test Suite",
    "Test Preview"
  ];

  

const handleClick=(direction)=>{
let newStep=currentStep;

direction=="next"?newStep++:newStep--;

newStep>0&&newStep<= steps.length && setCurrentStep(newStep); 
}

  return (
    <div className="flex flex-col">
      <MainNavBar />
      <MainSideBar />
      <MainNewTest steps={steps} currentStep={currentStep} handleClick={handleClick}/>
      
     
      <div className="flex justify-end mr-8 p-10 ">
        {currentStep != steps.length &&
        <MainFormControl  steps={steps} currentStep={currentStep} handleClick={handleClick}/>}</div>
      
    </div>
  );
}
