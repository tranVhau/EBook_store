import React from "react";
import TopScroll from "@/public/svgs/to_top.svg";

function TopScroller({ goToTop, isVisible }) {
  return (
    isVisible && (
      <div
        onClick={goToTop}
        className=" fixed z-30 right-4 bottom-4 hover:animate-bounce"
      >
        <TopScroll className="fill-slate-500" />
      </div>
    )
  );
}

export default TopScroller;
