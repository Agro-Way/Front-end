import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "../assets/css/CategorySlider.css"; // onde você pode adicionar estilos customizados

const categories = [
  "Frutas",
  "Legumes",
  "Vegetais",
  "Frutos",
  "Grãos",
  "Sementes",
  "Fertilizantes",
  "Insecticidas",
  "Entretenimento",
];

const CategorySlider = () => {
  return (
    <div className="header-category">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={20}
        slidesPerView={3} 
        loop={true}
        autoplay={{ delay: 0, disableOnInteraction: false }}
        speed={6000}
        grabCursor={true}
        allowTouchMove={false} // para rolar sozinho, sem interferência
        breakpoints={{
          0: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
        className="category-slider"
      >
        {categories.map((category, index) => (
          <SwiperSlide key={index} className="swiper-slide slide">
            <Link to="#">{category}</Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CategorySlider;