import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules"; // Import Pagination and Navigation module
import "swiper/css";
import "swiper/css/pagination"; // Import Pagination styles
import "swiper/css/navigation"; // Import Navigation styles
import "../styles/portfolio.css";

import port1 from "../../public/images/IMG_9603.JPEG";
import port2 from "../../public/images/IMG_1256.JPEG";
import port3 from "../../public/images/IMG_5852.JPEG";

// Image data with labels
const imageData = [
  { src: port1, label: "Τετραόροφη Οικοδομή" },
  { src: port2, label: "Τετραόροφη Οικοδομή" },
  { src: port3, label: "Τετραόροφη Οικοδομή" },
];

export default function Portfolio() {
  return (
    <section className="py-16 bg-white text-gray-800" id="erga">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold">Τα Έργα μας</h2>
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          pagination={{ clickable: true }} // Enable dots
          modules={[Pagination, Navigation]} // Add Pagination and Navigation module
          className="mt-8"
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
        >
          {imageData.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full sm:w-[800px] sm:h-[500px] h-72 mx-auto overflow-hidden">
                {/* Label on top right */}
                <span className="absolute top-4 right-4 bg-black bg-opacity-70 text-white text-sm px-3 py-1 rounded-lg shadow-md z-10">
                  {item.label}
                </span>
                {/* Image */}
                <Image 
                  src={item.src}
                  alt="Project"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg shadow-lg"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* Swiper Navigation Arrows (visible only on larger screens) */}
        <div className="absolute top-1/2 left-0 transform -translate-y-1/2 md:block">
          <button className="swiper-button-prev text-3xl text-gray-600 hover:text-gray-900">
            &#8249;
          </button>
        </div>
        <div className="absolute top-1/2 right-0 transform -translate-y-1/2 md:block">
          <button className="swiper-button-next text-3xl text-gray-600 hover:text-gray-900">
            &#8250;
          </button>
        </div>
      </div>
    </section>
  );
}
