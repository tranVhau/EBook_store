import DiscountCarousel from "@/components/Carousel/DiscountCarousel";
import BookCard from "@/components/product/BookCard";
import Carousel from "../components/Carousel/Carousel";

export default function Home() {
  return (
    <>
      {/* Introduce Panel  */}
      <Carousel />
      {/* Discount List */}
      <DiscountCarousel />
      {/* Book Items */}
      <div className="grid grid-cols-4 px-28 gap-y-16 bg-gray-100">
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
      </div>

      <h1 className="bg-red-500">Content here ...</h1>
    </>
  );
}
