import React from "react";

function MainNaviagtionBar() {
  return (
    <div className="bg-white-600 px-6 flex justify-between items-center font-semibold ">
      <div className="py-3 ">LOGO</div>
      <div className="p-3">
        <span className="px-5 mx-1 cursor-pointer">Home</span>
        <span className="px-5 mx-1 cursor-pointer">Products</span>
        <span className="px-5 mx-1 cursor-pointer">Popular</span>
        <span className="px-5 mx-1 cursor-pointer">Categories</span>
        <span className="px-5 mx-1 cursor-pointer">Authors</span>
        <span className="px-5 mx-1 cursor-pointer">About Us</span>
      </div>
      <div className="p-3">
        <button className="px-2 mx-1 cursor-pointer">Button 1</button>
      </div>
    </div>
  );
}

export default MainNaviagtionBar;
