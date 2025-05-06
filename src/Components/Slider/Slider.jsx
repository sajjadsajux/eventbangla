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
      <div className=" md:h-[70vh] relative">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 7500,
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
            <img src="https://i.ibb.co.com/fVgbVvT4/slider4.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://i.ibb.co.com/WT33LfH/fanush.jpg" alt="" className="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://i.ibb.co.com/TDp113h0/conf.jpg" alt="" className="object-bottom" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://i.ibb.co.com/q3RHn4Mj/photo-1676156786479-46a5b1715f41-q-80-w-2071-auto-format-fit-crop-ixlib-rb-4-1.jpg" alt="" />
          </SwiperSlide>

          <div className="autoplay-progress" slot="container-end">
            <svg viewBox="0 0 48 48" ref={progressCircle}>
              <circle cx="24" cy="24" r="20"></circle>
            </svg>
            <span ref={progressContent}></span>
          </div>
        </Swiper>
        {/* <div className="absolute top-20 right-2/5 z-2">
          <div className="hero-content text-neutral-content text-center">
            <div className="max-w-md">
              <h1 className="mb-5 lg:text-5xl font-bold">Find Your Next Celebration, Right Here in Bangladesh!</h1>
              <p className="mb-5 text-sm md:text-base">Whether it’s a colorful festival, a tech conference, a foodie gathering, or a soulful music night — we bring you the best events happening across Bangladesh. Stay updated, book your spot, and make every weekend count!</p>
              <button className="btn btn-primary">Get Started</button>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default Slider;
