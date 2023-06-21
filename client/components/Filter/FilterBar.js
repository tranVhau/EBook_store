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
      setFilter((prev) => ({ ...prev, keyword: e.target.value }));
    }
  };

  const selectAuthorHandler = (e) => {
    setFilter((prev) => ({
      ...prev,
      author: e.target.value,
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
    }));
  };

  const clearFilterHandler = () => {
    setFilter({});
    genreList = [];
  };

  return (
    <div className=" h-[10vh] flex items-center justify-center">
      {/* sort button  */}
      <div className="px-2 font-tiltwrap text-my-deeper-ocean ">
        <div className="flex items-center justify-between">
          <div className="bg-gray-50 border border-gray-300 text-gray-900  text-sm rounded-xl p-2 px-4 focus:ring-2 focus:outline-none focus:ring-blue-300 block">
            <p className="inline">price:</p>
            <select
              onChange={sortHandler}
              className="focus:outline-none bg-transparent px-1 inline"
            >
              <option className="text-md text-indigo-800 px-2" value={"dsc"}>
                high to low
              </option>
              <option className="text-md text-indigo-800 px-2" value={"asc"}>
                low to high
              </option>
            </select>
          </div>
        </div>
      </div>
      {/* search button */}
      <div className="relative">
        <div className="absolute inset-y-0 flex items-center pl-3 pointer-events-none">
          <SearchIcon />
        </div>
        <input
          type="text"
          className=" text-gray-900 text-sm bg-white border border-gray-300 rounded-xl focus:ring-2 focus:outline-none focus:ring-blue-300 block pl-10 p-2"
          placeholder="Search"
          onKeyDown={searchHandler}
        />
      </div>
      {/* Choose author */}
      <div className="ml-2 bg-gray-50 border border-gray-300 text-gray-900  text-sm rounded-xl p-2 px-2 focus:ring-2 focus:outline-none focus:ring-blue-300 block">
        <select
          onChange={selectAuthorHandler}
          className="focus:outline-none bg-transparent ml-1 px-1 inline font-tiltwrap text-my-deeper-ocean"
        >
          <option defaultValue disabled className="">
            Choose Author
          </option>
          {authors.map((author) => (
            <option
              key={author._id}
              value={author.name}
              className="text-md text-my-deeper-ocean px-2 py-4"
            >
              {author.name}
            </option>
          ))}
        </select>
      </div>
      {/* choose genres */}
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
      <div className=" group px-1 py-1 box-border font-tiltwrap text-my-deeper-ocean rounded-xl ">
        <button
          onClick={clearFilterHandler}
          className="text-md  flex content-center text-center font-medium hover:underline  "
        >
          <TrashIcon
            className={
              "fill-my-deeper-ocean group-hover:fill-orange-500 stroke-2"
            }
          />
          <div className="group-hover:text-orange-500">Clear Filters</div>
        </button>
      </div>
    </div>
  );
}

export default FilterBar;
