import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";

function Slider() {
  return (
    <div className="py-10 max-sm:mx-4">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        <SwiperSlide className="w-full">
          <img
            className="rounded-xl"
            src="https://i.ibb.co/FDbcVD7/slider1.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="rounded-xl"
            src="https://i.ibb.co/Hr3tBF3/slider2.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="rounded-xl"
            src="https://i.ibb.co/5j0mvrv/slider3.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="rounded-xl"
            src="https://i.ibb.co/TtGQRMw/slider4.png"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Slider;
