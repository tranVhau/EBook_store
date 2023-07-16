import Link from "next/link";
import React, { useEffect, useState } from "react";

function paginationSetup(c, m) {
  var current = c,
    last = m,
    delta = 2,
    left = current - delta,
    right = current + delta + 1,
    range = [],
    rangeWithDots = [],
    l;

  for (let i = 1; i <= last; i++) {
    if (i == 1 || i == last || (i >= left && i < right)) {
      range.push(i);
    }
  }

  for (let i of range) {
    if (l) {
      if (i - l === 2) {
        rangeWithDots.push(l + 1);
      } else if (i - l !== 1) {
        rangeWithDots.push("...");
      }
    }
    rangeWithDots.push(i);
    l = i;
  }

  return rangeWithDots;
}
function Pagination({ pagination, setFilter }) {
  const [paginationArr, setPaginationArr] = useState([]);

  useEffect(() => {
    setPaginationArr(paginationSetup(pagination.page, pagination.total));
  }, [pagination]);

  const nextBtnHandler = () => {
    if (pagination.page < pagination.total) {
      setFilter((prev) => ({ ...prev, page: pagination.page + 1 }));
    }
  };

  const previousBtnHandler = () => {
    if (pagination.page > 1) {
      setFilter((prev) => ({ ...prev, page: pagination.page - 1 }));
    }
  };

  return (
    <nav className="w-full flex justify-center p-6 font-tiltwrap text-my-deeper-ocean select-none">
      <ul className="list-style-none flex">
        <li>
          <div
            onClick={previousBtnHandler}
            className={`${
              pagination.page > 1
                ? "cursor-pointer transition-all duration-300 hover:bg-neutral-200 text-neutral-600"
                : ""
            }  relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-500 `}
          >
            Previous
          </div>
        </li>
        {paginationArr.map((paginate) => (
          <li key={paginate} className="mx-1">
            <div
              onClick={() => {
                setFilter((prev) => ({ ...prev, page: paginate }));
              }}
              className={` ${
                paginate == pagination.page
                  ? "font-medium text-orange-400 !bg-my-deeper-ocean"
                  : " text-neutral-600 hover:bg-neutral-100 "
              } relative block rounded bg-transparent px-3 py-1.5  transition-all duration-300 cursor-pointer`}
            >
              {paginate}
            </div>
          </li>
        ))}
        <li>
          <div
            onClick={nextBtnHandler}
            className={`${
              pagination.page < pagination.total
                ? "cursor-pointer transition-all duration-300 hover:bg-neutral-200 text-neutral-600"
                : ""
            }  relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-500 `}
          >
            Next
          </div>
        </li>
      </ul>
    </nav>
  );
}

export default Pagination;
