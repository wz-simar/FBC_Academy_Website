import Image from "next/image";
import Link from "next/link";
import { APP_STORE_URL, PLAY_STORE_URL } from "@/data/siteLinks";

export const metadata = {
  title: "Download FBC Academy App | Fit Body Culture",
  description:
    "Get the FBC Academy app — diet, workouts, habits, and progress tracking for Fit Body Culture clients.",
};

export default function AppLandingPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#0a0f1c] text-white font-manrope">
      {/* Brand atmosphere */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% -10%, rgba(17,66,212,0.45), transparent 55%), radial-gradient(ellipse 60% 40% at 85% 80%, rgba(103,188,42,0.18), transparent 50%), radial-gradient(ellipse 50% 35% at 10% 70%, rgba(17,66,212,0.2), transparent 45%)",
        }}
      />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-5 py-12 sm:px-8 md:py-16 lg:px-10">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-12">
          {/* Copy */}
          <div className="order-2 flex flex-col items-center text-center lg:order-1 lg:items-start lg:text-left">
            <Link href="/" className="mb-6 inline-flex items-center gap-2.5">
              <Image
                src="/logo-mark.png"
                alt=""
                width={44}
                height={44}
                className="h-10 w-10 object-contain sm:h-11 sm:w-11"
              />
              <Image
                src="/logo-wordmark.png"
                alt="FBC Academy"
                width={160}
                height={36}
                className="h-7 w-auto object-contain sm:h-8"
              />
            </Link>

            <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.2em] text-[#67bc2a]">
              Fit Body Culture
            </p>
            <h1 className="mb-4 max-w-lg font-playfair text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
              Your coaching system,{" "}
              <span className="text-[#67bc2a]">in your pocket.</span>
            </h1>
            <p className="mb-8 max-w-md text-sm leading-relaxed text-white/70 sm:text-base">
              Diet plans, workouts, habits, and progress — the FBC Academy app
              keeps you locked into the same system VIP clients use.
            </p>

            <div className="flex w-full max-w-sm flex-col gap-3 sm:max-w-none sm:flex-row sm:justify-center lg:justify-start">
              <a
                href={APP_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center transition hover:opacity-90"
              >
                <Image
                  src="/appStore.png"
                  alt="Download on the App Store"
                  width={160}
                  height={48}
                  className="h-12 w-auto object-contain"
                />
              </a>
              <a
                href={PLAY_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center transition hover:opacity-90"
              >
                <Image
                  src="/playstore.png"
                  alt="Get it on Google Play"
                  width={160}
                  height={48}
                  className="h-12 w-auto object-contain"
                />
              </a>
            </div>

            <p className="mt-8 text-xs text-white/40">
              <Link href="/" className="underline-offset-2 hover:text-white/70 hover:underline">
                ← Back to FBC Academy
              </Link>
            </p>
          </div>

          {/* Mockup — never crop */}
          <div className="order-1 flex justify-center lg:order-2">
            <div className="relative w-full max-w-md sm:max-w-lg lg:max-w-xl aspect-[4/3]">
              <Image
                src="/client-assets/fbc-app-mockup.png"
                alt="FBC Academy app screens on three phones"
                fill
                priority
                className="object-contain drop-shadow-2xl"
                sizes="(max-width: 1024px) 90vw, 520px"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
