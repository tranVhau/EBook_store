import React, { useRef } from "react";
import DiscountCarousel from "@/components/Carousel/DiscountCarousel";
import IntroduceSection from "@/components/introduce/IntroduceSection";
import BookCard from "@/components/product/BookCard";

import ShowMoreIcon from "../public/svgs/show-more.svg";

import ebookAPIs from "@/services/api/ebook.api";
import Link from "next/link";

export const getStaticProps = async () => {
  const topDiscountEbook = await ebookAPIs.getEbooks({
    discount: true,
    limit: 14,
  });
  return {
    props: { ebooks: topDiscountEbook.data.data },
  };
};

export default function Home({ ebooks }) {
  const discountSectionRef = useRef(null);

  const scrollToDiscountHandler = () => {
    if (discountSectionRef.current) {
      discountSectionRef.current.scrollIntoView({
        behavior: "smooth",
      });
    }
  };
  return (
    <>
      {/* Introduce Panel  */}
      {/* <Carousel /> */}
      {/* Introduce */}

      <IntroduceSection scrollToDiscountHandler={scrollToDiscountHandler} />

      {/* Discount List */}
      <div ref={discountSectionRef}>
        <DiscountCarousel ebooks={ebooks.slice(0, 6)} />
      </div>
      {/* Book Items */}
      <div className="px-4 sm:px-10 md:px-16 lg:px-16 xl:px-32">
        <div className="grid justify-items-center sm:grid-cols-2 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-2 md:gap-2 lg:gap-6 bg-my-bg bg-no-repeat bg-center bg-contain  ">
          {ebooks.slice(6, 14)?.map((ebook) => (
            <BookCard key={ebook._id} ebook={ebook} />
          ))}
        </div>
        <div className="flex justify-center font-semibold text-lg p-4 cursor-pointer ">
          <Link
            href={"/eBooks"}
            className="bg-slate-800 px-4 py-2 rounded-full text-center text-slate-50 hover:shadow-lg hover:translate-x-1 hover:bg-slate-700 ease-linear duration-300"
          >
            See More <ShowMoreIcon className="inline fill-white" />
          </Link>
        </div>
      </div>
    </>
  );
}
