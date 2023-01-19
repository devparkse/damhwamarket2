import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import required modules
import { Autoplay, Navigation, Pagination, Keyboard } from "swiper";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <div className="">
      <Swiper
        cssMode={true}
        navigation={true}
        slidesPerView={1}
        spaceBetween={0}
        // loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        keyboard={true}
        modules={[Autoplay, Navigation, Pagination, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            src={require("../banner/4EtJ-1672807714377-main banner_pc.jpg")}
            alt="banner2"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={require("../banner/1Jia-1655775946349-main_new.png")}
            alt="banner1"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={require("../banner/5ab3-1673850772616-damhwabox-PC.jpg")}
            alt="banner3"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={require("../banner/qL5p-1655775957715-main_review.png")}
            alt="banner4"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={require("../banner/tqgf-1670989021870-PC_MAIN_BANNER2.jpg")}
            alt="banner5"
          />
        </SwiperSlide>
      </Swiper>

      <div className="flex gap-10 justify-center mt-10">
        <Link to="#" className="box-border h-55 w-40 bg-green-300">
          전체보기
        </Link>
        <Link to="#" className="box-border h-55 w-40 bg-green-300">
          탁주
          <img src={require("../banner/icon_takju.png")} alt="takju" />
        </Link>
        <Link to="#" className="box-border h-55 w-40 bg-green-300">
          청주
          <img src={require("../banner/icon_cheongju.png")} alt="cheongju" />
        </Link>
        <Link to="#" className="box-border h-55 w-40 bg-green-300">
          증류주
          <img
            src={require("../banner/icon_jeungryuju.png")}
            alt="jeungryuju"
          />
        </Link>
        <Link to="#" className="box-border h-55 w-40 bg-green-300">
          과실주
          <img src={require("../banner/icon_gwashilju.png")} alt="gwashilju" />
        </Link>
      </div>
    </div>
  );
};

export default Main;
