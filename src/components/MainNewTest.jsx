import React, { useEffect, useState, createContext } from "react";
import MainConfigEnv from "./NewTestForm/MainConfigEnv";
import MainDesignTest from "./NewTestForm/MainDesignTest";
import MainConfigLG from "./NewTestForm/MainConfigLG";
import MainUploadTestSuite from "./NewTestForm/MainUploadTestSuite";
import MainTestPreview from "./NewTestForm/MainTestPreview";

export const context = createContext();

const MainNewTest = ({ steps, currentStep }) => {
  const [selectedEnv, setSelectedEnv] = useState('');
  const [selectedCloudProvider, setSelectedCloudProvider] = useState('');
  const [instanceType, setInstanceType] = useState('');
  const [users, setUsers] = useState(0);
  const [rampUp, setRampUp] = useState(0);
  const [duration, setDuration] = useState(0);
  const [lgConfigurations, setLgConfigurations] = useState([
    {
      id: 1,
      region: "us-east-2",
      trafficPercent: 100,
      users: 1,
      deletable: false,
    },
  ]);

  const displayStep = (step) => {
    switch (step) {
      case 1:
        return <MainConfigEnv />;
      case 2:
        return <MainDesignTest />;
      case 3:
        return <MainConfigLG />;
      case 4:
        return <MainUploadTestSuite />;
      case 5:
        return <MainTestPreview />;
      default:
        return <MainConfigEnv />; // Default to first step if step is invalid
    }
  };

  const [newStep, setNewStep] = useState([]);

  const updateStep = (stepNumber, steps) => {
    const newSteps = [...steps];
    for (let count = 0; count < newSteps.length; count++) {
      if (count === stepNumber) {
        newSteps[count] = {
          ...newSteps[count],
          highlighted: true,
          selected: true,
          completed: count < stepNumber, // Completed for all steps before the current one
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
    if (steps && steps.length > 0 && currentStep > 0) {
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
      <div className="relative flex flex-col items-center py-3">
        <div className={`rounded-full transition duration-500 ease-in-out border-2 h-12 w-12 flex items-center justify-center py-3 ${step.selected ? "text-white font-bold border-blue-500 bg-blue-500" : "border-gray-300"} ${step.highlighted ? "text-gray-900" : "text-gray-400"}`}>
          {index + 1}
        </div>
        <div className={`absolute top-0 text-center mt-16 w-32 text-xs uppercase font-medium ${step.highlighted ? "text-gray-900" : "text-gray-500"}`}>
          {step.description}
        </div>
      </div>
      <div className={`flex-auto border-t-2 transition duration-500  ${step.completed ? "border-blue-500 border-4" : "border-gray-300"}`}></div>
    </div>
  ));

  return (
    <context.Provider
      value={{
        selectedEnv,
        setSelectedEnv,
        selectedCloudProvider,
        setSelectedCloudProvider,
        instanceType,
        setInstanceType,
        users,
        setUsers,
        rampUp,
        setRampUp,
        duration,
        setDuration,
        lgConfigurations,
        setLgConfigurations,
      }}
    >
      <div className="flex flex-col h-full p-5 ml-[240px] gap-8 ">
        <div className=" mt-4 text-2xl text-left font-semibold text-[#31456A] ">
          <span className=" justify-start bg-gray-200 p-4 rounded-2xl"> New Test</span>
        </div>
        <div className="flex relative col-span-full basis-full flex-col">
          <div className="flex justify-between items-center ml-6 mr-6 mb-5">
            {displaySteps}
          </div>
        </div>
        <div className="flex flex-row gap-9">
          <div className={'flex  bg-gray-200 border rounded-3xl gap-5 ${currentStep === steps.length ? basis-full : basis-9/12 }'}>
            <div className="w-full ">
              {displayStep(currentStep)}
            </div>
          </div>
        </div>
      </div>
    </context.Provider>
  );
};

export default MainNewTest;
