import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "./Slider.css";

const Slider = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <>
      <div className=" h-[70vh]">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 4500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          onAutoplayTimeLeft={onAutoplayTimeLeft}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src="https://i.ibb.co.com/60SZBBxx/slider3.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://i.ibb.co.com/LXGBGPRM/slider.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://i.ibb.co.com/7tVMHvxw/slider2.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://i.ibb.co.com/fVgbVvT4/slider4.jpg" alt="" />
          </SwiperSlide>

          <div className="autoplay-progress" slot="container-end">
            <svg viewBox="0 0 48 48" ref={progressCircle}>
              <circle cx="24" cy="24" r="20"></circle>
            </svg>
            <span ref={progressContent}></span>
          </div>
        </Swiper>
      </div>
    </>
  );
};

export default Slider;
