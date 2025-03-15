import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "./index.css";

//Images
import banner1 from "../../assets/banner1.jpg"
import cop30 from "../../assets/cop-30.jpg"
import banner3 from "../../assets/COOPERBRAG3.jpg"
import banner4 from "../../assets/COOPERBRAG4.jpg"
import banner5 from "../../assets/COOPERBRAG5.jpg"

interface CarouselProps {
  imgs?: string[];
}

export function Carousel({ imgs }: CarouselProps) {
  const images = imgs || [
    banner1,
    banner5,
    banner4,
    banner3,
    cop30,
  ];
  return (
    <div className="container-carousel">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000 }}
      >
        {images.map((src: string, index: number) => (
          <SwiperSlide key={index}>
            <img src={src} alt={`Slide ${index + 1}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
