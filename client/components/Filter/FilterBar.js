import React, { useState } from "react";

import DropDownIcon from "@/public/svgs/drop-down.svg";
import SearchIcon from "@/public/svgs/search.svg";

function FilterBar() {
  const [isDropDown, setDropDown] = useState(false);

  return (
    <div className=" h-[10vh] border-b-2 flex items-center justify-center">
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <SearchIcon />
        </div>
        <input
          type="text"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block pl-10 p-2.5  "
          placeholder="Search"
        />
      </div>

      <button className="p-2.5 ml-1 mr-4 text-sm font-medium text-white bg-blue-600 rounded-lg border border-orbg-blue-600 hover:bg-blue-800 focus:ring-2 focus:outline-none focus:ring-blue-300 ">
        <SearchIcon className="fill-white" />
      </button>

      <div className="px-2 ">
        <select className="bg-gray-50 border border-gray-300 text-gray-900  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 ">
          <option disabled defaultValue className="font-bold">
            Choose a Author
          </option>
          <option value="US">United States</option>
          <option value="CA">Canada</option>
          <option value="FR">France</option>
          <option value="DE">Germany</option>
        </select>
      </div>

      <div className="px-2">
        <button
          className="inline-flex items-center px-4 py-2 text-sm font-medium text-center bg-blue-600 rounded-lg focus:ring-2 focus:outline-none focus:ring-blue-300 text-white"
          type="button"
          onClick={() => {
            setDropDown(!isDropDown);
          }}
        >
          Choose Categories
          <DropDownIcon className="pl-1 fill-white" />
        </button>

        <div
          className={
            isDropDown ? "z-20 bg-white rounded-lg shadow relative" : "hidden"
          }
        >
          <div className="absolute bg-slate-100 top-2 left-0 ">
            <ul
              className="h-48 px-3 pb-3 overflow-y-scroll text-sm text-gray-700 "
              aria-labelledby="dropdownSearchButton"
            >
              <li>
                <div className="flex items-center p-2 rounded hover:bg-gray-100 ">
                  <input
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 "
                  />
                  <label className="w-full ml-2 text-sm font-medium text-gray-900 rounded ">
                    Bonnie Green
                  </label>
                </div>
              </li>
              <li>
                <div className="flex items-center p-2 rounded hover:bg-gray-100 ">
                  <input
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-bg/ray-500"
                  />
                  <label className="w-full ml-2 text-sm font-medium text-gray-900 rounded ">
                    Jese Leos
                  </label>
                </div>
              </li>
              <li>
                <div className="flex items-center p-2 rounded hover:bg-gray-100 ">
                  <input
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 "
                  />
                  <label className="w-full ml-2 text-sm font-medium text-gray-900 rounded ">
                    Michael Gough
                  </label>
                </div>
              </li>
              <li>
                <div className="flex items-center p-2 rounded hover:bg-gray-100">
                  <input
                    id="checkbox-item-14"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 "
                  />
                  <label className="w-full ml-2 text-sm font-medium text-gray-900 rounded ">
                    Robert Wall
                  </label>
                </div>
              </li>
              <li>
                <div className="flex items-center p-2 rounded hover:bg-gray-100 ">
                  <input
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 "
                  />
                  <label className="w-full ml-2 text-sm font-medium text-gray-900 rounded ">
                    Joseph Mcfall
                  </label>
                </div>
              </li>
              <li>
                <div className="flex items-center p-2 rounded hover:bg-gray-100 ">
                  <input
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 "
                  />
                  <label className="w-full ml-2 text-sm font-medium text-gray-900 rounded ">
                    Leslie Livingston
                  </label>
                </div>
              </li>
              <li>
                <div className="flex items-center p-2 rounded hover:bg-gray-100 ">
                  <input
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 "
                  />
                  <label className="w-full ml-2 text-sm font-medium text-gray-900 rounded ">
                    Roberta Casas
                  </label>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FilterBar;
