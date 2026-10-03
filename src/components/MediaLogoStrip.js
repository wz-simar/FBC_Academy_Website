import Marquee from "react-fast-marquee";

const mediaLogos = [
  { src: "/thetimesofindia.png", alt: "The Times of India" },
  { src: "/mid-day.png", alt: "mid-day" },
  { src: "/zee5.png", alt: "ZEE5" },
  { src: "/theprint.png", alt: "The Print" },
];

export default function MediaLogoStrip() {
  return (
    <div className="flex-1 w-full min-w-0 overflow-hidden flex items-center">
      <span className="text-gray-500 font-medium whitespace-nowrap mr-4 sm:mr-6 shrink-0 text-sm sm:text-base">
        As Featured In:
      </span>
      <Marquee
        autoFill
        gradient
        gradientColor={[244, 247, 246]}
        speed={40}
        className="flex items-center"
      >
        {mediaLogos.map((logo) => (
          <img
            key={logo.alt}
            src={logo.src}
            alt={logo.alt}
            className="mx-8 h-10 sm:h-12 w-auto shrink-0 object-contain"
          />
        ))}
      </Marquee>
    </div>
  );
}
