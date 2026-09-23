// src/components/TransformationSection.js
import { motion } from "framer-motion";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

export default function TransformationSection() {
  return (
    <section id="choose-path" className="w-full flex flex-col lg:flex-row scroll-mt-16">

      {/* Path A: I Want to Get Fit */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex-1 flex flex-col md:flex-row bg-[#0b1220]"
      >
        <div className="relative w-full md:w-[42%] shrink-0 h-[240px] sm:h-[280px] md:h-auto md:min-h-[320px] bg-[#111827] flex items-center justify-center">
          <Image
            src="/choose_path_a.jpg"
            alt="Get Fit — physique and professional presence"
            width={2187}
            height={2448}
            sizes="(max-width: 768px) 100vw, 25vw"
            className="max-h-[240px] sm:max-h-[280px] md:max-h-[360px] max-w-full w-auto h-auto object-contain p-3"
          />
        </div>

        <div className="flex flex-col justify-center text-left px-6 py-7 md:px-8 md:py-8">
          <div className="bg-[#1142D4] text-white rounded-full px-4 py-1.5 text-xs font-bold w-fit mb-3 uppercase tracking-wider">
            Option A
          </div>
          <h2 className="text-2xl sm:text-3xl font-playfair font-bold text-white mb-2">
            I Want to Get Fit
          </h2>
          <h3 className="text-[#67bc2a] font-bold text-base sm:text-lg mb-3">
            The Total Body Re-Set Transformation
          </h3>

          <p className="text-gray-300 text-sm mb-2 leading-relaxed">
            <strong className="text-white">What it is:</strong> A total transition from a &quot;Weight Loss&quot; obsession to Owning a High Performing Mind &amp; Body that supports your high demanding daily life. You&apos;ll move from the all-or-nothing trap to a doable regime that optimizes your Sleep, Energy, Hormones and Mental Focus
          </p>
          <p className="text-gray-300 text-sm mb-5 leading-relaxed">
            <strong className="text-white">Who it is for:</strong> Busy professionals seeking lasting results through sustainable habits that allow for a flexible social life and staying fit 365 days a year.
          </p>

          <a
            href="/plans/get-fit"
            className="bg-[#1142D4] hover:bg-blue-800 font-playfair px-5 py-2.5 rounded-md text-white font-semibold flex items-center justify-center gap-2 transition w-full sm:w-fit text-sm sm:text-base"
          >
            Explore Transformation Programs <FaArrowRight />
          </a>
        </div>
      </motion.div>

      {/* Path B: Become a Coach */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex-1 flex flex-col md:flex-row bg-[#1a1f1e]"
      >
        <div className="relative w-full md:w-[42%] shrink-0 h-[240px] sm:h-[280px] md:h-auto md:min-h-[320px] bg-[#2a2f2e] flex items-center justify-center">
          <Image
            src="/choose_path_b.png"
            alt="Coach — teaching and mentoring on the whiteboard"
            width={780}
            height={1146}
            sizes="(max-width: 768px) 100vw, 25vw"
            className="max-h-[240px] sm:max-h-[280px] md:max-h-[360px] max-w-full w-auto h-auto object-contain p-3"
          />
        </div>

        <div className="flex flex-col justify-center text-left px-6 py-7 md:px-8 md:py-8">
          <div className="bg-[#67bc2a] text-white rounded-full px-4 py-1.5 text-xs font-bold w-fit mb-3 uppercase tracking-wider">
            Option B
          </div>
          <h2 className="text-2xl sm:text-3xl font-playfair font-bold text-white mb-2">
            I Want to Become a Highly Skilled Coach
          </h2>
          <h3 className="text-[#67bc2a] font-bold text-base sm:text-lg mb-3">
            The Fitness Coach Launchpad
          </h3>

          <p className="text-gray-300 text-sm mb-2 leading-relaxed">
            <strong className="text-white">What it is:</strong> The bridge between textbook theory learnt in certifications and real-world practical implementation. You&apos;ll master a proven &quot;Confident Coach System&quot; derived from Ankush&apos;s 12 years of practical experience.
          </p>
          <p className="text-gray-300 text-sm mb-5 leading-relaxed">
            <strong className="text-white">Who it is for:</strong> Aspiring or certified trainers ready to skip years of trial-and-error to achieve high career growth and practical skill mastery.
          </p>

          <a
            href="/plans/elite-coach"
            className="bg-[#67bc2a] hover:bg-green-600 font-playfair px-5 py-2.5 rounded-md text-white font-semibold flex items-center justify-center gap-2 transition w-full sm:w-fit text-sm sm:text-base"
          >
            Explore Fitness Coach Launchpad <FaArrowRight />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
