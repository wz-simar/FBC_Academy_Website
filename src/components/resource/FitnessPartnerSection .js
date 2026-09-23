import Image from "next/image";
import { motion } from "framer-motion";
import { APP_STORE_URL, PLAY_STORE_URL } from "@/data/siteLinks";

const features = [
  "Personalised diet plans",
  "Structured workout programming",
  "Habits and goal tracking",
  "Daily progress logging",
  "Celebrate every win",
];

const FitnessPartnerSection = () => {
  return (
    <section className="py-16 md:py-24 bg-[#F3F3F7] overflow-hidden font-manrope">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-10 md:mb-14"
        >
          <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#1142D4] mb-3">
            FBC Academy App
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-playfair font-semibold text-black mb-4">
            Your Digital{" "}
            <span className="text-[#67bc2a]">Fitness Partner.</span>
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            The same system VIP clients use — diet, training, habits, and
            progress in one place.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center"
        >
          <div className="order-2 lg:order-1 space-y-6">
            <ul className="space-y-3">
              {features.map((label) => (
                <li
                  key={label}
                  className="flex items-center gap-3 bg-white border border-gray-200 border-l-4 border-l-[#1142D4] rounded-lg px-4 py-3.5 shadow-sm"
                >
                  <span className="flex h-2 w-2 shrink-0 rounded-full bg-[#67bc2a]" />
                  <span className="text-gray-900 font-medium text-sm sm:text-base">
                    {label}
                  </span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a
                href={APP_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-black text-white px-6 py-3.5 rounded-md font-semibold hover:bg-gray-900 transition w-full sm:w-auto"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor" aria-hidden>
                  <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 21.99 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.1 21.99C7.79 22.03 6.8 20.68 5.96 19.47C4.25 16.97 2.94 12.45 4.7 9.39C5.57 7.87 7.13 6.91 8.82 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z" />
                </svg>
                App Store
              </a>
              <a
                href={PLAY_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#1142D4] text-white px-6 py-3.5 rounded-md font-semibold hover:bg-blue-800 transition w-full sm:w-auto"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor" aria-hidden>
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                </svg>
                Google Play
              </a>
            </div>
          </div>

          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative w-full max-w-md md:max-w-lg aspect-[4/3]">
              <Image
                src="/client-assets/fbc-app-mockup.png"
                alt="FBC Academy app on three phones — home, meals, and branding"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 480px"
                priority={false}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FitnessPartnerSection;
