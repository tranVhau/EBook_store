import React from "react";
// import Image from "next/image";
import Link from "next/link";

function NavLinks({ isSearch, menuData, toBottomHandler }) {
  return (
    <>
      <li
        className=" px-3 mx-1 inline-block
                  relative
                  cursor-pointer
                  transition-all
                  duration-500
                  before:content-['']
                  before:absolute
                  before:-bottom-2
                  before:left-1/2
                  before:-translate-x-1/2
                  before:w-0
                  before:h-0.5
                  before:transition-all
                  before:duration-500
                  before:bg-blue-500
                  hover:before:w-16
                  hover:text-cyan-50"
      >
        <Link href={"/"}>Home</Link>
      </li>
      <li
        className=" px-3 mx-1 inline-block
                  relative
                  cursor-pointer
                  transition-all
                  duration-500
                  before:content-['']
                  before:absolute
                  before:-bottom-2
                  before:left-1/2
                  before:-translate-x-1/2
                  before:w-0
                  before:h-0.5
                  before:transition-all
                  before:duration-500
                   before:bg-blue-500
                  hover:before:w-16
                  hover:text-cyan-50"
      >
        <Link href={"eBooks"}>Ebooks</Link>
      </li>

      <li
        className=" group px-3 mx-1 inline-block
                  relative
                  cursor-pointer
                  transition-all
                  duration-500
                  before:content-['']
                  before:absolute
                  before:-bottom-2
                  before:left-1/2
                  before:-translate-x-1/2
                  before:w-0
                  before:h-0.5
                  before:transition-all
                  before:duration-500
                   before:bg-blue-500
                  hover:before:w-16
                  hover:text-cyan-50"
      >
        Genres
        <ul className="absolute z-50 rounded hidden font-tiltwrap text-md text-my-deep-ocean pt-6 group-hover:block ">
          {menuData.genres?.map((genre) => (
            <li key={genre._id} className="">
              <Link
                href={`eBooks?genres=${genre.name}`}
                className=" bg-slate-200  hover:bg-my-soft-blue py-2 px-4 block whitespace-no-wrap"
              >
                {genre.name}
              </Link>
            </li>
          ))}
        </ul>
      </li>

      <li
        className="group px-3 mx-1 inline-block
                  relative
                  cursor-pointer
                  transition-all
                  duration-500
                  before:content-['']
                  before:absolute
                  before:-bottom-2
                  before:left-1/2
                  before:-translate-x-1/2
                  before:w-0
                  before:h-0.5
                  before:transition-all
                  before:duration-500
                   before:bg-blue-500
                  hover:before:w-16
                  hover:text-cyan-50"
      >
        Authors
        <ul className="absolute z-50 w-max hidden font-tiltwrap text-md text-my-deep-ocean  pt-6 group-hover:block ">
          {menuData.authors?.map((author) => (
            <li key={author._id} className="">
              <Link
                href={`eBooks?author=${author.name}`}
                className="bg-slate-200  hover:bg-my-soft-blue py-2 px-4 block whitespace-no-wrap"
              >
                {author.name}
              </Link>
            </li>
          ))}
        </ul>
      </li>
      <li
        className="px-3 mx-1 inline-block
                  relative
                  cursor-pointer
                  transition-all
                  duration-500
                  before:content-['']
                  before:absolute
                  before:-bottom-2
                  before:left-1/2
                  before:-translate-x-1/2
                  before:w-0
                  before:h-0.5
                  before:transition-all
                  before:duration-500
                   before:bg-blue-500
                  hover:before:w-16
                  hover:text-cyan-50"
        onClick={toBottomHandler}
      >
        About Us
      </li>
    </>
  );
}

export default NavLinks;
