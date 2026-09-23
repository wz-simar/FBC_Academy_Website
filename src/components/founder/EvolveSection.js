"use client";
import React from "react";
import { WHATSAPP_URL } from "@/data/siteLinks";

export default function EvolveSection() {
  return (
    <section className="w-full px-6 md:px-16 py-16 md:py-20 bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-8">
        <div className="flex flex-col gap-2 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold font-playfair text-gray-900">
            Ready to <span className="text-[#67bc2a]">Evolve</span>?
          </h2>
          <p className="text-base md:text-lg text-gray-600">
            Schedule a private consultation with Ankush.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-end w-full md:w-auto">
          <a
            href="/plans"
            className="bg-[#1142D4] text-white px-6 py-3 rounded-md text-base sm:text-lg font-medium font-playfair hover:bg-blue-800 transition text-center w-full sm:w-auto"
          >
            Apply Now
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#67bc2a] text-white px-6 py-3 rounded-md text-base sm:text-lg font-medium font-playfair hover:bg-green-600 transition text-center w-full sm:w-auto"
          >
            Contact Desk
          </a>
        </div>
      </div>
    </section>
  );
}
