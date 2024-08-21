const MainFormControl = ({ steps, currentStep, handleClick }) => {
    return (
      <div className="flex gap-32">
        <button
          onClick={() => handleClick("back")}
          className={`bg-gray-100 text-slate-950 pt-1 pb-1 pl-4 pr-4 mb-2 rounded ${currentStep === 1 ? "opacity-50 cursor-not-allowed" : ""}`}
          disabled={currentStep === 1}
        >
          Back
        </button>
        <button
          onClick={() => handleClick("next")}
          className="bg-blue-500 text-white pt-1 pb-1 pl-4 pr-4 mb-2 rounded "
        >
          {currentStep === steps.length ? "hidden" : "Next"}
        </button>
      </div>
    );
  };
  
  export default MainFormControl;
  