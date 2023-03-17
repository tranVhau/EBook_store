import React from "react";

function BookCard() {
  return (
    <div className="flex : items-center justify-center">
      <div className="bg-white group rounded-xl overflow-hidden shadow-xl hover:scale-105 hover:shadow-2xl transform duration-500 cursor-pointer">
        <div>
          <span className="bg-red-500 py-2 px-4 text-sm font-semibold text-white rounded-br-md rounded-tl-md cursor-pointer">
            -30%
          </span>
          <h2 className="block mt-4 py-1 px-4 text-2xl font-bold hover:underline cursor-pointer">
            Castle in the hill
          </h2>
          <h2 className="mt-2 py-1 px-4 font-sans text-sm hover:underline text-gray-700">
            By Thomas WillSon
          </h2>
        </div>
        <div className="relative">
          <img
            className="w-72 h-96"
            src="https://images.unsplash.com/photo-1571167530149-c1105da4c2c7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=376&q=80"
          />
          <div className="hidden group-hover:block ">
            <div className=" absolute font-tiltwrap border-2 border-gray-800 bottom-2 right-1/2 transform translate-x-1/2 bg-slate-800 text-white py-2 text-center px-6 w-48 rounded-md cursor-pointer hover:text-gray-800 hover:bg-white duration-500">
              Add To Cart
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookCard;
