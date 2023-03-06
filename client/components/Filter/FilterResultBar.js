import React from "react";

function FilterResultBar() {
  return (
    <div className="w-full h-[6vh] border-b-2 flex px-[15vh] font-tiltwrap justify-start bg-slate-200">
      <p className="text-orange-600"> searched results for: </p>
      <span className="px-2 text-my-deeper-ocean"> 123</span>
      <span className="px-2 text-my-deeper-ocean"> noval</span>
    </div>
  );
}

export default FilterResultBar;
