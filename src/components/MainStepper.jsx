import React, { useEffect, useState } from "react";

const MainStepper = ({ steps, currentStep }) => {
  const [newStep, setNewStep] = useState([]);

  const updateStep = (stepNumber, steps) => {
    const newSteps = [...steps];
    for (let count = 0; count < newSteps.length; count++) {
      if (count === stepNumber) {
        newSteps[count] = {
          ...newSteps[count],
          highlighted: true,
          selected: true,
          completed: true,
        };
      } else if (count < stepNumber) {
        newSteps[count] = {
          ...newSteps[count],
          highlighted: false,
          selected: true,
          completed: true,
        };
      } else {
        newSteps[count] = {
          ...newSteps[count],
          highlighted: false,
          selected: false,
          completed: false,
        };
      }
    }
    return newSteps;
  };

  useEffect(() => {
    if (steps && steps.length > 0 && currentStep >= 0) {
      const stepsState = steps.map((step, index) => ({
        description: step,
        completed: false,
        highlighted: index === 0,
        selected: index === 0,
      }));
      const current = updateStep(currentStep - 1, stepsState);
      setNewStep(current);
    }
  }, [steps, currentStep]);

  const displaySteps = newStep.map((step, index) => (
    <div
      key={index}
      className={
        index !== newStep.length - 1
          ? "w-full flex items-center"
          : "flex items-center"
      }
    >
      <div className="relative flex flex-col items-center ml-2 py-3">
        <div className="rounded-full transition duration-500 ease-in-out border-2 border-gray-300 h-12 w-12 flex items-center justify-center py-3">
          {index + 1}
        </div>
        <div className="absolute top-0 text-center mt-16 w-32 text-sm uppercase font-medium">
          {step.description}
        </div>
      </div>
      <div className="flex-auto border-t-2 transition duration-500"></div>
    </div>
  ));

  return (
        <div className="flex justify-between items-center">{displaySteps}</div>)
     
};

export default MainStepper;
