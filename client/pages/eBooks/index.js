import React from "react";

import BookCard from "@/components/product/BookCard";
import FilterBar from "@/components/Filter/FilterBar";
import ShowMoreIcon from "@/public/svgs/show-more.svg";
import FilterResultBar from "@/components/Filter/FilterResultBar";

function EBooks() {
  return (
    <div>
      <FilterBar />
      <FilterResultBar />
      <div className="grid grid-cols-4 px-20 py-6 gap-y-16 bg-gray-100 transition duration-700 ease-in-out">
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
      </div>
      <div className="flex justify-center font-semibold text-lg p-4 cursor-pointer ">
        <div className="bg-slate-800 px-4 py-2 rounded-full text-center text-slate-50 hover:shadow-lg hover:translate-x-1 hover:bg-slate-700 ease-linear duration-300">
          See More <ShowMoreIcon className="inline fill-white" />
        </div>
      </div>
    </div>
  );
}

export default EBooks;
