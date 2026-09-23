import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { blogsData } from "@/data/blogs";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Link from "next/link";

import "swiper/css";
import "swiper/css/navigation";

const LatestResearch = () => {
  return (
    <section
      id="blogs"
      className="bg-[#F3F3F7] py-16 md:py-20 relative scroll-mt-20 overflow-hidden font-manrope"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-10">
        <div className="text-center mb-10 md:mb-14">
          <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#1142D4] mb-3">
            Insights &amp; Education
          </p>
          <h2 className="text-3xl md:text-5xl font-playfair font-semibold text-gray-900">
            From the <span className="text-[#67bc2a]">FBC Blog</span>
          </h2>
          <p className="mt-3 text-gray-600 text-sm md:text-base max-w-xl mx-auto">
            Practical fitness literacy for busy professionals — no hype, just
            systems that survive real life.
          </p>
        </div>

        <div className="relative px-0 sm:px-2">
          <div className="swiper-button-prev-custom hidden md:flex absolute left-0 md:left-[-12px] top-1/2 -translate-y-1/2 z-10 cursor-pointer bg-white shadow-md border border-gray-100 p-2.5 rounded-full text-[#1142D4] hover:bg-[#1142D4] hover:text-white transition items-center justify-center">
            <IoIosArrowBack size={22} />
          </div>

          <div className="swiper-button-next-custom hidden md:flex absolute right-0 md:right-[-12px] top-1/2 -translate-y-1/2 z-10 cursor-pointer bg-white shadow-md border border-gray-100 p-2.5 rounded-full text-[#1142D4] hover:bg-[#1142D4] hover:text-white transition items-center justify-center">
            <IoIosArrowForward size={22} />
          </div>

          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            navigation={{
              prevEl: ".swiper-button-prev-custom",
              nextEl: ".swiper-button-next-custom",
            }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="w-full py-2"
          >
            {blogsData.map((item) => (
              <SwiperSlide key={item.id} className="h-auto">
                <article className="flex flex-col bg-white border border-gray-200 border-l-4 border-l-[#1142D4] rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow h-full">
                  <div className="relative w-full aspect-square bg-[#F3F3F7] overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="absolute inset-0 w-full h-full object-contain object-center"
                      loading="lazy"
                    />
                  </div>

                  <div className="p-5 sm:p-6 flex flex-col flex-1">
                    <p className="text-[#1142D4] text-[11px] uppercase tracking-[0.14em] font-bold mb-2">
                      {item.category} · {item.date}
                    </p>

                    <h3 className="text-lg sm:text-xl font-playfair font-semibold leading-snug mb-3 text-gray-900 line-clamp-2">
                      {item.title}
                    </h3>

                    <p className="text-sm text-gray-600 leading-relaxed mb-6 flex-1 line-clamp-3">
                      {item.excerpt}
                    </p>

                    <Link
                      href={`/resources/blog/${item.id}`}
                      className="mt-auto inline-flex items-center justify-center bg-[#1142D4] text-white px-5 py-2.5 rounded-md font-semibold text-sm hover:bg-blue-800 transition w-full"
                    >
                      Read More
                    </Link>
                  </div>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default LatestResearch;
