import DiscountCarousel from "@/components/Carousel/DiscountCarousel";
import IntroduceSection from "@/components/introduce/IntroduceSection";
import BookCard from "@/components/product/BookCard";
import Carousel from "../components/Carousel/Carousel";

import ShowMoreIcon from "../public/svgs/show-more.svg";

import ebookAPIs from "@/services/api/ebook.api";
import Link from "next/link";

export const getStaticProps = async () => {
  const newestEbooks = await ebookAPIs.getEbooks();
  return {
    props: { ebooks: newestEbooks.data },
  };
};

export default function Home({ ebooks }) {
  return (
    <>
      {/* Introduce Panel  */}
      {/* <Carousel /> */}
      {/* Introduce */}

      <IntroduceSection />

      {/* Discount List */}
      <DiscountCarousel />
      {/* Book Items */}
      <div className="grid grid-cols-4 px-28 py-10 gap-y-16 bg-my-bg ">
        {ebooks?.map((ebook) => (
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
    </>
  );
}
