import { useEffect, useRef, useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { STORY_POSTERS } from "@/data/transformations"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

export default function StoryPosters() {
  const swiperRef = useRef(null)
  const [active, setActive] = useState(null)
  const story = active === null ? null : STORY_POSTERS[active]

  useEffect(() => {
    const swiper = swiperRef.current
    if (!swiper?.autoplay) return
    if (active === null) swiper.autoplay.start()
    else swiper.autoplay.stop()
  }, [active])

  useEffect(() => {
    if (active === null) return

    const onKey = (event) => {
      if (event.key === "Escape") setActive(null)
      if (event.key === "ArrowRight") {
        setActive((index) => (index + 1) % STORY_POSTERS.length)
      }
      if (event.key === "ArrowLeft") {
        setActive((index) => (index - 1 + STORY_POSTERS.length) % STORY_POSTERS.length)
      }
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"
    window.addEventListener("keydown", onKey)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener("keydown", onKey)
    }
  }, [active])

  const stepStory = (direction) => {
    setActive((index) => (index + direction + STORY_POSTERS.length) % STORY_POSTERS.length)
  }

  return (
    <section className="overflow-hidden bg-gray-50 py-10 md:py-14">
      <div className="mx-auto max-w-7xl px-4 text-center">
        <div className="relative px-0 sm:px-8">
          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            spaceBetween={16}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            navigation
            pagination={{ clickable: true }}
            breakpoints={{
              640: { slidesPerView: 1, spaceBetween: 20 },
              768: { slidesPerView: 2, spaceBetween: 24 },
              1024: { slidesPerView: 4, spaceBetween: 24 },
            }}
            onSwiper={(swiper) => {
              swiperRef.current = swiper
            }}
            className="story-swiper pb-12"
          >
            {STORY_POSTERS.map((item, index) => (
              <SwiperSlide key={item.src} className="pb-8">
                <button
                  type="button"
                  onClick={() => setActive(index)}
                  className="w-full text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1142D4] focus-visible:ring-offset-4 rounded-xl"
                  aria-label={`View ${item.name}'s transformation story`}
                >
                  <span className="block overflow-hidden rounded-xl border border-gray-100 bg-white p-2 shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                    <img
                      src={item.src}
                      alt=""
                      className="aspect-[819/1024] w-full bg-white object-contain"
                    />
                  </span>
                </button>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {story && (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-[#0b1220]/80 p-4 md:p-8"
          role="dialog"
          aria-modal="true"
          aria-label={`${story.name} transformation story`}
          onClick={() => setActive(null)}
        >
          <button
            type="button"
            onClick={() => setActive(null)}
            className="absolute top-4 right-4 flex h-11 w-11 items-center justify-center rounded-full bg-white text-xl leading-none text-gray-900 shadow-lg md:top-6 md:right-6"
            aria-label="Close story"
          >
            ×
          </button>

          {STORY_POSTERS.length > 1 && (
            <>
              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation()
                  stepStory(-1)
                }}
                className="absolute left-4 top-1/2 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white text-2xl leading-none text-[#1142D4] shadow-lg sm:flex"
                aria-label="Previous story"
              >
                ‹
              </button>
              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation()
                  stepStory(1)
                }}
                className="absolute right-4 top-1/2 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white text-2xl leading-none text-[#1142D4] shadow-lg sm:flex"
                aria-label="Next story"
              >
                ›
              </button>
            </>
          )}

          <figure
            className="w-full max-w-[640px]"
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={story.src}
              alt={`${story.name} transformation story`}
              className="mx-auto block max-h-[78vh] w-auto max-w-full rounded-xl shadow-2xl sm:max-h-[86vh]"
            />
            <figcaption className="mt-3 flex items-center justify-center gap-4 text-center font-playfair text-sm text-white/90">
              {STORY_POSTERS.length > 1 && (
                <button
                  type="button"
                  onClick={() => stepStory(-1)}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-xl leading-none text-[#1142D4] sm:hidden"
                  aria-label="Previous story"
                >
                  ‹
                </button>
              )}
              <span>
                {story.name}
                <span className="ml-3 font-manrope text-white/60">
                  {String(active + 1).padStart(2, "0")} / {String(STORY_POSTERS.length).padStart(2, "0")}
                </span>
              </span>
              {STORY_POSTERS.length > 1 && (
                <button
                  type="button"
                  onClick={() => stepStory(1)}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-xl leading-none text-[#1142D4] sm:hidden"
                  aria-label="Next story"
                >
                  ›
                </button>
              )}
            </figcaption>
          </figure>
        </div>
      )}

      <style jsx global>{`
        .story-swiper .swiper-button-next,
        .story-swiper .swiper-button-prev {
          color: #67bc2a !important;
          background-color: white;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
        }
        .story-swiper .swiper-button-next:after,
        .story-swiper .swiper-button-prev:after {
          font-size: 16px !important;
          font-weight: bold;
        }
        .story-swiper .swiper-pagination-bullet-active {
          background-color: #1142d4 !important;
        }
        @media (max-width: 639px) {
          .story-swiper .swiper-button-next,
          .story-swiper .swiper-button-prev {
            display: none !important;
          }
        }
      `}</style>
    </section>
  )
}
