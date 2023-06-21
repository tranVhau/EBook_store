import React from "react";

function FilterResultBar({ filters }) {
  return (
    <div className="w-full h-[6vh] flex px-[15vh] font-tiltwrap justify-start bg-slate-100">
      <p className="text-my-deeper-ocean"> searched results for: </p>
      {Object.entries(filters).map(([key, value]) => {
        if (Array.isArray(value)) {
          return value.map((value) => (
            <span key={value} className="px-2 text-orange-600">
              {value}
            </span>
          ));
        } else {
          return (
            <span key={key} className="px-2 text-orange-600">
              {value}
            </span>
          );
        }
      })}
    </div>
  );
}

export default FilterResultBar;
