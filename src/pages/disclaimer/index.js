import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FaWhatsapp } from "react-icons/fa";
import { WHATSAPP_URL } from "@/data/siteLinks";

const Disclaimer = () => {
  return (
    <>
      <Navbar />

      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed right-4 bottom-12 bg-[#25D366] text-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform z-50"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp className="w-6 h-6" />
      </a>

      <main className="pt-20">
        <section className="max-w-4xl mx-auto px-4 md:px-10 py-16">
          <h1 className="text-3xl md:text-5xl font-playfair font-semibold mb-4">
            Disclaimer
          </h1>
          <p className="text-gray-500 text-sm mb-8">Last updated: September 2026</p>

          <p className="text-gray-600 mb-10 leading-relaxed text-justify">
            The information, coaching guidance, educational content, eBooks, and
            resources provided by{" "}
            <span className="font-semibold text-black">
              Fit Body Culture (FBC Academy)
            </span>{" "}
            and Ankush S. Bhaskar are for general fitness education and
            lifestyle support. Please read this disclaimer carefully before using
            our website or services.
          </p>

          <div className="mb-10">
            <h2 className="text-xl md:text-2xl font-semibold mb-4">
              Not Medical Advice
            </h2>
            <p className="text-gray-600 leading-relaxed text-justify">
              Nothing on this website or in our programs constitutes medical
              diagnosis, treatment, or prescription. Our coaching focuses on
              exercise, nutrition habits, and lifestyle systems for busy
              professionals. Always consult a qualified physician or healthcare
              professional before starting any new exercise, diet, or lifestyle
              program — especially if you have existing medical conditions,
              injuries, are pregnant, or take medication.
            </p>
          </div>

          <div className="mb-10">
            <h2 className="text-xl md:text-2xl font-semibold mb-4">
              Individual Results Vary
            </h2>
            <p className="text-gray-600 leading-relaxed text-justify">
              Client stories, case studies, testimonials, and transformation
              examples on this site reflect individual experiences. They are not
              guarantees of similar outcomes. Results depend on many factors,
              including consistency, starting point, health status, and how
              closely guidance is followed.
            </p>
          </div>

          <div className="mb-10">
            <h2 className="text-xl md:text-2xl font-semibold mb-4">
              Personal Responsibility
            </h2>
            <p className="text-gray-600 leading-relaxed text-justify">
              By using our website, programs, or content, you accept full
              responsibility for your own health decisions and for how you apply
              any information provided. Fit Body Culture (FBC Academy) and its
              coaches are not liable for injury, illness, or loss arising from
              misuse of information or failure to seek appropriate medical
              advice.
            </p>
          </div>

          <div className="mb-10">
            <h2 className="text-xl md:text-2xl font-semibold mb-4">
              Website Content Accuracy
            </h2>
            <p className="text-gray-600 leading-relaxed text-justify">
              We aim to keep website content accurate and up to date, but we do
              not warrant that all information is complete, current, or free from
              error. Content may change without notice. External links are
              provided for convenience; we are not responsible for third-party
              sites or services.
            </p>
          </div>

          <div className="mb-10">
            <h2 className="text-xl md:text-2xl font-semibold mb-4">
              Professional Coaching Scope
            </h2>
            <p className="text-gray-600 leading-relaxed text-justify">
              Where lifestyle markers such as blood sugar, blood pressure, PCOS,
              cholesterol, or similar topics are mentioned, this refers to
              supportive fitness and lifestyle coaching within our scope — not
              clinical medical management. Work with your doctor for diagnosis
              and medical treatment.
            </p>
          </div>

          <div className="mb-10">
            <h2 className="text-xl md:text-2xl font-semibold mb-4">
              Related Policies
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Please also review our{" "}
              <a
                href="/terms-and-conditions"
                className="text-[#1142D4] hover:underline"
              >
                Terms &amp; Conditions
              </a>
              ,{" "}
              <a href="/privacy-policy" className="text-[#1142D4] hover:underline">
                Privacy Policy
              </a>
              , and{" "}
              <a href="/RefundPolicy" className="text-[#1142D4] hover:underline">
                Refund &amp; Cancellation Policy
              </a>
              .
            </p>
          </div>

          <div className="mb-10">
            <h2 className="text-xl md:text-2xl font-semibold mb-4">Contact Us</h2>
            <p className="text-gray-600 leading-relaxed">
              Email:{" "}
              <a
                href="mailto:enquiry.teamfbc@gmail.com"
                className="text-[#1142D4] hover:underline"
              >
                enquiry.teamfbc@gmail.com
              </a>
              <br />
              Phone:{" "}
              <a href="tel:+919923646881" className="text-[#1142D4] hover:underline">
                +91 99236 46881
              </a>
              <br />
              Mumbai, India
            </p>
          </div>

          <p className="text-[#1142D4] mt-12 text-center font-bold font-playfair leading-relaxed text-xl sm:text-2xl">
            Train smart. Stay consistent. Own your health with{" "}
            <span className="font-semibold">Fit Body Culture</span>.
          </p>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Disclaimer;
