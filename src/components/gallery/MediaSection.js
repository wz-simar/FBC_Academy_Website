"use client";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const mediaItems = [
  {
    src: "/images/media/media_1.jpg",
    outlet: "Times of India",
  },
  {
    src: "/images/media/media_9.webp",
    outlet: "The Print",
  },
  {
    src: "/images/media/media_7.webp",
    outlet: "mid-day",
  },
  {
    src: "/images/media/media_11.jpg",
    outlet: "Lokmat Times",
  },
];

function MediaCard({ item }) {
  return (
    <article className="group relative mx-2.5 sm:mx-3 w-[220px] sm:w-[280px] md:w-[320px] shrink-0 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:shadow-xl">
      <div className="relative w-full aspect-[3/4]">
        <Image
          src={item.src}
          alt={`${item.outlet} feature`}
          fill
          sizes="320px"
          className="object-cover object-top transition duration-500 group-hover:scale-[1.03]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
        <div className="absolute top-3 left-3">
          <span className="inline-flex items-center rounded-full bg-white/95 px-3 py-1 text-xs font-bold uppercase tracking-wide text-[#1142D4] shadow-sm">
            {item.outlet}
          </span>
        </div>
      </div>
    </article>
  );
}

export default function MediaSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center mb-10 sm:mb-12">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1142D4] mb-3">
          Press Features
        </p>
        <h2 className="text-3xl md:text-5xl font-playfair font-bold mb-4">
          As Seen In <span className="text-[#67bc2a]">Media</span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Coverage across national publications featuring Fit Body Culture and
          Ankush S. Bhaskar.
        </p>
      </div>

      <div className="relative w-full sm:w-[80%] max-w-6xl mx-auto overflow-hidden">
        {/* Soft edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-6 sm:w-12 bg-gradient-to-r from-gray-50 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-6 sm:w-12 bg-gradient-to-l from-white to-transparent" />

        <Marquee
          gradient={false}
          speed={36}
          pauseOnHover
          className="py-2"
        >
          {/* Duplicate for seamless loop; 80% track keeps two identical cards off-screen */}
          {[...mediaItems, ...mediaItems].map((item, i) => (
            <MediaCard key={`${item.src}-${i}`} item={item} />
          ))}
        </Marquee>
      </div>
    </section>
  );
}
