import { Swiper, SwiperSlide } from "swiper/react";
import CountDown from "../CountDown/CountDown";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { Autoplay, EffectCoverflow, Pagination } from "swiper";
import DiscountCarouselItem from "./DiscountCarouselItem";

const DiscountCarousel = function ({ ebooks }) {
  return (
    <div className="py-10">
      <div className="">
        <div className="text-3xl font-tiltwrap text-center text-my-deeper-ocean">
          Weekly Discount
        </div>
        <CountDown />
      </div>
      <div className="py-10">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={3}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 60,
            modifier: 5,
            slideShadows: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          loop={true}
          pagination={{
            dynamicBullets: true,
          }}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          className=""
        >
          {ebooks.map((ebook) => (
            <SwiperSlide key={ebook._id}>
              <DiscountCarouselItem ebook={ebook} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default DiscountCarousel;
