import { Swiper, SwiperSlide } from "swiper/react";
import CountDown from "../CountDown/CountDown";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { Autoplay, EffectCoverflow, Pagination } from "swiper";
import DiscountCarouselItem from "./DiscountCarouselItem";

const DiscountCarousel = function () {
  return (
    <div className="py-10">
      <div className="text-3xl font-tiltwrap text-center">Weekly Discount</div>
      <CountDown></CountDown>
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
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop={true}
          pagination={{
            dynamicBullets: true,
          }}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          className=""
        >
          <SwiperSlide>
            <div>
              <DiscountCarouselItem image="https://images.unsplash.com/photo-1571167530149-c1105da4c2c7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=376&q=80" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <DiscountCarouselItem image="https://images.unsplash.com/photo-1571167530149-c1105da4c2c7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=376&q=80" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <DiscountCarouselItem image="https://images.unsplash.com/photo-1571167530149-c1105da4c2c7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=376&q=80" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <DiscountCarouselItem image="https://images.unsplash.com/photo-1571167530149-c1105da4c2c7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=376&q=80" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <DiscountCarouselItem image="https://images.unsplash.com/photo-1571167530149-c1105da4c2c7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=376&q=80" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <DiscountCarouselItem image="https://images.unsplash.com/photo-1571167530149-c1105da4c2c7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=376&q=80" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <DiscountCarouselItem image="https://images.unsplash.com/photo-1571167530149-c1105da4c2c7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=376&q=80" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <DiscountCarouselItem image="https://images.unsplash.com/photo-1571167530149-c1105da4c2c7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=376&q=80" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default DiscountCarousel;
