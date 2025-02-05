import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "./index.css";

interface CarouselProps {
  imgs: string[]
}

export function Carousel({ imgs } : CarouselProps) {
  const images = imgs || [
    "https://media.istockphoto.com/id/517188688/pt/foto/paisagem-de-montanha.jpg?s=612x612&w=0&k=20&c=uFGUrUT6gA8FrTWhE10YYzngWPlDLssKxJiDs1Qw2Qs=",
    "https://ciclovivo.com.br/wp-content/uploads/2018/10/iStock-536613027.jpg",
    "https://burst.shopifycdn.com/photos/perfect-yellow-flower.jpg?width=1000&format=pjpg&exif=0&iptc=0",
  ];
  return (
    <div className="container-carousel">

    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000 }}
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
