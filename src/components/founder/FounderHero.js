import React from "react";
import MediaLogoStrip from "@/components/MediaLogoStrip";

export default function FounderHero() {
  return (
    <section className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse md:flex-row gap-8 md:gap-12 py-16 items-center">
          {/* Left Section: Text */}
          <div className="flex-1 flex flex-col justify-center text-center md:text-left space-y-6">
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#1142D4]">
              Executive Performance Coach
            </p>
            <h1 className="text-3xl sm:text-6xl lg:text-7xl font-bold leading-tight font-playfair text-gray-900">
              The Visionary
              <br />
              <span className="text-[#67bc2a]">Behind FBC</span>
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-gray-700 max-w-lg mx-auto md:mx-0 leading-relaxed">
              Ankush S. Bhaskar empowering high-stakes professionals through a
              unique fusion of elite fitness storytelling and scientific
              authority.
            </p>

            <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-3 sm:space-y-0 justify-center md:justify-start w-full">
              <a
                href="#credentials"
                className="bg-[#1142D4] font-playfair text-white px-6 py-3 rounded-md text-base sm:text-lg font-medium hover:bg-blue-800 transition text-center w-full sm:w-auto"
              >
                View Credentials
              </a>
              <a
                href="/plans"
                className="font-playfair px-6 py-3 rounded-md text-base sm:text-lg font-medium bg-[#67bc2a] text-white hover:bg-green-600 transition text-center w-full sm:w-auto"
              >
                Explore Programs
              </a>
            </div>
          </div>

          {/* Right Section: Image */}
          <div className="flex-1 relative w-full max-w-lg md:max-w-xl">
            <img
              src="/images/founder/visionary-gym.jpg"
              alt="Ankush S. Bhaskar in the gym"
              className="w-full aspect-[4/5] max-h-[520px] rounded-xl shadow-lg object-cover object-[center_20%]"
            />
            <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-black/55 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <p className="text-white text-lg md:text-xl italic font-medium font-playfair">
                &quot;Precision is the foundation.&quot;
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-[#f4f7f6] border-y border-gray-200 py-6 mt-8 sm:mt-12 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <MediaLogoStrip />
        </div>
      </div>
    </section>
  );
}
