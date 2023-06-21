import React from "react";

function EmptyResult() {
  return (
    <div className="flex justify-center items-center z-40 bg-cover bg-center min-h-screen font-tiltwrap">
      <div>
        <div className="block p-1 text-4xl text-my-deeper-ocean">Opps...</div>
        <div className="block p-1 text-2xl text-my-deep -ocean">
          No results found :(
        </div>
      </div>
    </div>
  );
}

export default EmptyResult;
