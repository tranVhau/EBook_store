import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";

import CarouselItem from "./CarouselItem";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Carousel = function () {
  return (
    <Swiper
      pagination={{
        dynamicBullets: true,
      }}
      loop={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      modules={[Pagination, Autoplay]}
      className="mySwiper"
    >
      <SwiperSlide>
        {" "}
        <CarouselItem />{" "}
      </SwiperSlide>
      <SwiperSlide>
        {" "}
        <CarouselItem />{" "}
      </SwiperSlide>
      <SwiperSlide>
        {" "}
        <CarouselItem />{" "}
      </SwiperSlide>
      <SwiperSlide>
        {" "}
        <CarouselItem />{" "}
      </SwiperSlide>
      <SwiperSlide>
        {" "}
        <CarouselItem />{" "}
      </SwiperSlide>
      <SwiperSlide>
        {" "}
        <CarouselItem />{" "}
      </SwiperSlide>
      <SwiperSlide>
        {" "}
        <CarouselItem />{" "}
      </SwiperSlide>
      <SwiperSlide>
        {" "}
        <CarouselItem />{" "}
      </SwiperSlide>
      <SwiperSlide>
        {" "}
        <CarouselItem />{" "}
      </SwiperSlide>
    </Swiper>
  );
};

export default Carousel;
