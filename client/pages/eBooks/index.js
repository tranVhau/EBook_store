import React from "react";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

import BookCard from "@/components/product/BookCard";
import FilterBar from "@/components/Filter/FilterBar";
import FilterResultBar from "@/components/Filter/FilterResultBar";

import filterAPIs from "@/services/api/filter.api";
import ebookAPIs from "@/services/api/ebook.api";
import EmptyResult from "@/components/ui/empty/EmptyResult";
import Pagination from "@/components/ui/buttons/Pagination";

export const getServerSideProps = async (context) => {
  context.res.setHeader(
    "Cache-Control",
    "s-maxage=60",
    "stale-while-revalidate=120"
  );

  const authors = await filterAPIs.getAuthors();
  const genres = await filterAPIs.getGenres();
  const ebooks = await ebookAPIs.getEbooks(context.query);

  return {
    props: {
      authors: authors.data,
      genres: genres.data,
      ebooks: ebooks.data.data,
      pagination: ebooks.data.pagination,
    },
  };
};

function EBooks({ authors, genres, ebooks, pagination }) {
  const [filters, setFilter] = useState({});
  const router = useRouter();

  useEffect(() => {
    setFilter((prev) => ({ ...prev, ...router.query }));
  }, []);

  useEffect(() => {
    router.push({
      pathname: "/eBooks",
      query: filters,
    });
  }, [filters]);

  return (
    <div>
      <FilterBar authors={authors} genres={genres} setFilter={setFilter} />
      <FilterResultBar filters={filters} />
      <div
        className={` bg-no-repeat bg-center bg-contain  ${
          ebooks[0] ? "bg-my-bg " : "bg-my-bg-discount"
        } `}
      >
        {ebooks[0] ? (
          <div className="px-4 sm:px-10 md:px-8 lg:px-8 xl:px-32">
            <div className="grid justify-items-center sm:grid-cols-2 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-2 md:gap-2 lg:gap-6 ">
              {ebooks.map((ebook) => (
                <BookCard key={ebook._id} ebook={ebook} />
              ))}
            </div>
          </div>
        ) : (
          <EmptyResult />
        )}
        {
          ebooks[0] && (
            <Pagination pagination={pagination} setFilter={setFilter} />
          )
          /* <div className="flex justify-center font-semibold text-lg p-4 cursor-pointer ">
            <div className="bg-slate-800 px-4 py-2 rounded-full text-center text-slate-50 hover:shadow-lg hover:translate-x-1 hover:bg-slate-700 ease-linear duration-300">
              See More <ShowMoreIcon className="inline fill-white" />
            </div>
          </div> */
        }
      </div>
    </div>
  );
}

export default EBooks;
