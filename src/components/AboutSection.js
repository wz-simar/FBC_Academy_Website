// src/components/AboutSection.js
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

const pillars = [
  {
    n: "01",
    title: "The Global Perspective",
    body: "12 years of hands-on coaching with diverse cultures and lifestyles in India, the USA, Canada, Dubai, and the Philippines.",
  },
  {
    n: "02",
    title: "Medical & Performance Results",
    body: 'Beyond just "looking better," I help clients manage lifestyle markers like Type 2 Diabetes, Hypertension (High BP), PCOS, and Cholesterol.',
  },
  {
    n: "03",
    title: "Athlete's Foundation, Professional's Strategy",
    body: "Elite knowledge as a former National Athlete, simplified into a practical regime that survives a demanding professional schedule.",
  },
  {
    n: "04",
    title: "An Author's Logic",
    body: "As author of the Total Body Re-Set and founder of Fit Body Culture, I help you stop failing from misinformation and unrealistic systems.",
  },
];

export default function AboutSection() {
  return (
    <section className="bg-[#f4f6f8] py-16 md:py-24 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.55 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* LEFT — photo + quote + metrics (Stitch stack) */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            <div className="relative w-full overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm aspect-[4/4.2]">
              <motion.img
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.5 }}
                src="/images/Client/client_2.jpg"
                alt="Ankush S. Bhaskar"
                className="absolute inset-0 w-full h-full object-cover object-top"
              />
              <div className="absolute bottom-4 left-4 right-4 sm:right-auto">
                <span className="inline-block bg-white/95 backdrop-blur-sm text-gray-800 text-[11px] font-semibold uppercase tracking-[0.12em] rounded-full px-4 py-2 border border-gray-200 shadow-sm">
                  Ankush S. Bhaskar · Founder
                </span>
              </div>
            </div>

            <blockquote className="rounded-xl bg-white border border-gray-200 border-l-4 border-l-[#67bc2a] px-5 py-4 shadow-sm">
              <p className="font-playfair italic text-lg md:text-xl text-gray-900 leading-snug">
                &quot;I believe fitness should support your life, not fight it.&quot;
              </p>
              <p className="mt-2 text-xs font-semibold uppercase tracking-[0.12em] text-gray-500">
                Ankush S. Bhaskar · Fitness Educator &amp; Author
              </p>
            </blockquote>
          </div>

          {/* RIGHT — narrative + 2x2 pillars */}
          <div className="lg:col-span-7 flex flex-col">
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#1142D4] mb-3">
              About the Founder
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-playfair leading-tight text-gray-900 mb-5">
              One Mission:{" "}
              <span className="text-[#67bc2a]">Fitness Literacy.</span>
            </h2>

            <div className="space-y-4 text-gray-700 text-base leading-relaxed mb-8">
              <p>
                I&apos;m <strong>Ankush S. Bhaskar</strong>, an internationally
                accredited Fitness Coach, Author, and Mentor. My journey in the
                fitness industry isn&apos;t just about sets and reps — it&apos;s
                about building systems that survive the real world.
              </p>
              <p>
                Since 2014, I&apos;ve coached clients across India and globally
                from the USA, Canada, Philippines to Dubai, helping busy
                professionals, CEOs, and actors reclaim their health.
              </p>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold font-playfair text-gray-900 mb-4">
              Why My Approach is Different
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {pillars.map((p) => (
                <div
                  key={p.n}
                  className="rounded-xl bg-white border border-gray-200 p-4 shadow-sm"
                >
                  <span className="inline-flex items-center justify-center h-7 min-w-7 px-2 rounded-md bg-[#1142D4]/10 text-[#1142D4] text-xs font-bold tracking-wider mb-2">
                    {p.n}
                  </span>
                  <h4 className="font-semibold text-gray-900 text-sm mb-1.5 leading-snug">
                    {p.title}
                  </h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {p.body}
                  </p>
                </div>
              ))}
            </div>

            <div className="rounded-xl border border-gray-200 border-l-4 border-l-[#1142D4] bg-white px-5 py-4 mb-6 shadow-sm">
              <p className="font-semibold text-gray-900 text-base md:text-lg">
                I don&apos;t sell motivation. I build systems that work in real
                life.
              </p>
            </div>

            <a
              href="/about-founder"
              className="inline-flex items-center justify-center gap-2 bg-[#1142D4] text-white px-7 py-3 rounded-md font-semibold hover:bg-blue-800 transition w-full sm:w-fit"
            >
              Read My Full Story <FaArrowRight />
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
