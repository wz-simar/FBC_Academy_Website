import { EBOOKS, EBOOK_PURCHASE_URLS, TBR_AMAZON_URL } from "@/data/siteLinks"

const ProvenBlueprints = () => {
  return (
    <section className="w-full bg-white py-20">
      <div className="text-center space-y-4 mb-12 px-4">
        <h2 className="text-3xl md:text-5xl font-playfair font-semibold">
          Proven Blueprints for Busy Professionals
        </h2>
        <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto">
          Premium eBooks by Ankush S. Bhaskar.
        </p>
      </div>

      <div className="max-w-3xl mx-auto px-4 md:px-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
          {EBOOKS.map((ebook) => (
            <article
              key={ebook.id}
              className="bg-[#F3F3F7] rounded-2xl overflow-hidden shadow-sm flex flex-col"
            >
              <div className="bg-[#e8e8ed] flex items-center justify-center h-64">
                <img
                  src={ebook.image}
                  alt={ebook.title}
                  className="h-full w-auto max-w-full object-contain"
                />
              </div>
              <div className="p-5 space-y-3 flex-1 flex flex-col">
                <h3 className="text-base md:text-lg font-semibold leading-snug">
                  {ebook.title}
                </h3>
                <p className="text-sm text-gray-600 flex-1">{ebook.description}</p>
                <p className="text-xs font-medium text-[#1142D4]">{ebook.badge}</p>
                <a
                  href={EBOOK_PURCHASE_URLS[ebook.id]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-[#1142D4] text-white text-sm font-semibold px-5 py-2.5 rounded-md hover:bg-blue-800 transition w-fit"
                >
                  Get This eBook
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 bg-gray-950 rounded-2xl p-6 md:p-8 grid grid-cols-1 md:grid-cols-[auto_1fr_auto] gap-6 items-center">
          <img
            src="/images/ebooks/tbr_promo.jpg"
            alt="Total Body Re-Set book, available on Amazon"
            className="w-36 md:w-44 rounded-lg shadow-lg mx-auto"
          />
          <div className="text-center md:text-left">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#67bc2a] mb-2">
              Published Book · Released Worldwide
            </p>
            <h3 className="text-2xl md:text-3xl font-playfair font-semibold text-white">
              Total Body Re-Set
            </h3>
            <p className="text-white/70 text-sm md:text-base mt-2 max-w-xl">
              A simplified fitness guide for busy professionals to own a high
              performing mind and body. A complete fitness course in a book:
              exercise, nutrition, recovery, and lifestyle habits for real
              life.
            </p>
          </div>
          <a
            href={TBR_AMAZON_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-[#67bc2a] text-white text-sm font-semibold px-5 py-2.5 rounded-md hover:bg-green-600 transition mx-auto md:mx-0 w-fit"
          >
            Buy on Amazon
          </a>
        </div>
      </div>
    </section>
  )
}

export default ProvenBlueprints
