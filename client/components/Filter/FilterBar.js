import React, { useState } from "react";

import DropDownIcon from "@/public/svgs/drop-down.svg";
import SearchIcon from "@/public/svgs/search.svg";
import TrashIcon from "@/public/svgs/trash.svg";

let genreList = [];

function FilterBar({ authors, genres, setFilter }) {
  const [isDropDown, setDropDown] = useState(false);

  const sortHandler = (e) => {
    setFilter((prev) => ({ ...prev, sort: e.target.value }));
  };

  const searchHandler = (e) => {
    if (e.key === "Enter") {
      setFilter((prev) => ({ ...prev, keyword: e.target.value, page: null }));
    }
  };

  const selectAuthorHandler = (e) => {
    setFilter((prev) => ({
      ...prev,
      author: e.target.value,
      page: null,
    }));
  };

  const genresSelectHanlder = (e) => {
    if (!genreList.includes(e.target.value)) {
      // setGenreList((prev) => [...prev, e.target.value]);
      genreList.push(e.target.value);
    } else {
      genreList = genreList.filter((genre) => genre != e.target.value);
    }
    setFilter((prev) => ({
      ...prev,
      genres: genreList,
      page: null,
    }));
  };

  const clearFilterHandler = () => {
    setFilter({});
    genreList = [];
  };

  return (
    <div className="flex flex-wrap items-center justify-center md:h-[10vh] space-y-4 md:space-y-0 md:space-x-4 font-tiltwrap">
      {/* Sort button */}
      <div className="relative ">
        <div className=" flex items-center space-x-2 bg-gray-50 border border-gray-300 text-gray-900  text-sm rounded-xl p-2 px-4 focus:ring-2 focus:outline-none focus:ring-blue-300">
          <p className="text-my-deeper-ocean">price:</p>
          <select
            onChange={sortHandler}
            className="bg-transparent text-gray-800 text-sm focus:outline-none"
          >
            <option value="dsc">high to low</option>
            <option value="asc">low to high</option>
          </select>
        </div>
      </div>

      {/* Search button */}
      <div className="relative flex items-center">
        <div className="absolute inset-y-0 flex items-center pl-3 pointer-events-none">
          <SearchIcon />
        </div>
        <input
          type="text"
          className="ml-1 text-gray-900 text-sm bg-white border rounded-xl focus:ring-2 focus:outline-none focus:ring-blue-300 pl-8 py-2"
          placeholder="Search"
          onKeyDown={searchHandler}
        />
      </div>

      {/* Choose author */}
      <div className="relative">
        <select
          onChange={selectAuthorHandler}
          className="bg-gray-50 text-my-deeper-ocean text-sm focus:outline-none border rounded-xl focus:ring-2 focus:ring-blue-300 pl-2 py-2 "
        >
          <option value="" disabled>
            Choose Author
          </option>
          {authors.map((author) => (
            <option key={author._id} value={author.name}>
              {author.name}
            </option>
          ))}
        </select>
      </div>

      {/* Choose genres */}
      <div className="px-2 font-tiltwrap text-my-deeper-ocean ">
        <button
          className="inline-flex items-center px-4 py-2 text-sm text-center bg-gray-50 border border-gray-300 rounded-xl focus:ring-2 focus:outline-none focus:ring-blue-300"
          type="button"
          onClick={() => {
            setDropDown(!isDropDown);
          }}
        >
          Choose Genres
          <DropDownIcon className="pl-1 font-bolder fill-gray-600 mx-1" />
        </button>
        <div
          className={
            isDropDown ? "z-20 bg-white rounded-lg shadow relative" : "hidden"
          }
        >
          <div className="absolute bg-slate-100 top-2 left-0 w-full">
            <ul className="h-48 px-3 pb-3 overflow-y-scroll text-sm text-gray-700 ">
              {genres.map((genre) => (
                <li key={genre._id}>
                  <div className="flex items-center p-2 rounded hover:bg-gray-100 ">
                    <input
                      type="checkbox"
                      value={genre.name}
                      onClick={genresSelectHanlder}
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <label className="w-full ml-2 text-sm font-medium text-gray-900 rounded ">
                      {genre.name}
                    </label>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Clear Filters button */}
      <div className="group">
        <button
          onClick={clearFilterHandler}
          className="flex items-center text-md font-medium text-my-deeper-ocean hover:underline"
        >
          <TrashIcon className="fill-my-deeper-ocean group-hover:fill-orange-500 stroke-2" />
          <div className="group-hover:text-orange-500 ml-1">Clear Filters</div>
        </button>
      </div>
    </div>
  );
}

export default FilterBar;
