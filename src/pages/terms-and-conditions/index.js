import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FaWhatsapp } from "react-icons/fa";
import { WHATSAPP_URL } from "@/data/siteLinks";

const TermsAndConditions = () => {
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
            Terms &amp; Conditions
          </h1>
          <p className="text-gray-500 text-sm mb-8">Last updated: September 2026</p>

          <p className="text-gray-600 mb-10 leading-relaxed text-justify">
            Welcome to{" "}
            <span className="font-semibold text-black">
              Fit Body Culture (FBC Academy)
            </span>
            . These Terms &amp; Conditions govern your use of our website,
            coaching programs, eBooks, digital products, and related services
            offered by Ankush S. Bhaskar and the FBC Academy team. By accessing
            or using our website or services, you agree to these terms.
          </p>

          <div className="mb-10">
            <h2 className="text-xl md:text-2xl font-semibold mb-4">
              Who We Are
            </h2>
            <p className="text-gray-600 leading-relaxed text-justify">
              Fit Body Culture (FBC Academy) provides fitness education,
              coaching programs (including transformation and coach-education
              offerings), digital resources, and related content for busy
              professionals and aspiring coaches. Our services are based in
              Mumbai, India, and may be delivered online to clients in India and
              internationally.
            </p>
          </div>

          <div className="mb-10">
            <h2 className="text-xl md:text-2xl font-semibold mb-4">
              Use of the Website
            </h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-600 leading-relaxed">
              <li>
                You agree to use this website only for lawful purposes and in a
                way that does not harm the site, our users, or our reputation.
              </li>
              <li>
                You must not attempt to gain unauthorised access to any systems,
                accounts, or data connected to this website.
              </li>
              <li>
                Content on this site is for general information and education. It
                is not a substitute for personalised medical advice.
              </li>
            </ul>
          </div>

          <div className="mb-10">
            <h2 className="text-xl md:text-2xl font-semibold mb-4">
              Programs, Purchases &amp; Access
            </h2>
            <p className="text-gray-600 leading-relaxed text-justify mb-3">
              Enrolment in paid programs, eBooks, or memberships is subject to
              the specific offer details shown at checkout and any onboarding
              instructions we provide. You are responsible for providing
              accurate contact and payment information.
            </p>
            <p className="text-gray-600 leading-relaxed text-justify">
              Access to digital content or coaching may begin immediately after
              purchase or enrolment. Refunds and cancellations are governed by
              our{" "}
              <a href="/RefundPolicy" className="text-[#1142D4] hover:underline">
                Refund &amp; Cancellation Policy
              </a>
              .
            </p>
          </div>

          <div className="mb-10">
            <h2 className="text-xl md:text-2xl font-semibold mb-4">
              Client Responsibilities
            </h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-600 leading-relaxed">
              <li>
                You are responsible for disclosing relevant health conditions
                and seeking medical clearance where appropriate before starting
                exercise or nutrition changes.
              </li>
              <li>
                Results vary. Progress depends on consistency, individual
                circumstances, and adherence to guidance.
              </li>
              <li>
                You agree not to share, resell, or publicly redistribute paid
                program materials, coaching plans, or eBooks without written
                permission.
              </li>
            </ul>
          </div>

          <div className="mb-10">
            <h2 className="text-xl md:text-2xl font-semibold mb-4">
              Intellectual Property
            </h2>
            <p className="text-gray-600 leading-relaxed text-justify">
              All branding, logos, text, images, videos, program frameworks,
              eBooks, and other materials on this website are owned by or
              licensed to Fit Body Culture (FBC Academy), unless otherwise
              stated. You may not copy, modify, or commercially exploit this
              content without prior written consent.
            </p>
          </div>

          <div className="mb-10">
            <h2 className="text-xl md:text-2xl font-semibold mb-4">
              Third-Party Links &amp; Tools
            </h2>
            <p className="text-gray-600 leading-relaxed text-justify">
              Our website may link to third-party platforms (for example payment
              pages, app stores, social media, or booking tools). We are not
              responsible for the content, policies, or practices of those
              third parties. Your use of them is at your own risk and subject to
              their terms.
            </p>
          </div>

          <div className="mb-10">
            <h2 className="text-xl md:text-2xl font-semibold mb-4">
              Limitation of Liability
            </h2>
            <p className="text-gray-600 leading-relaxed text-justify">
              To the fullest extent permitted by law, Fit Body Culture (FBC
              Academy), Ankush S. Bhaskar, and our team are not liable for any
              indirect, incidental, or consequential loss arising from your use
              of the website or services. Coaching and educational content are
              provided in good faith; you remain responsible for how you apply
              the guidance. Nothing in these terms excludes liability that
              cannot be excluded under applicable Indian law.
            </p>
          </div>

          <div className="mb-10">
            <h2 className="text-xl md:text-2xl font-semibold mb-4">
              Governing Law
            </h2>
            <p className="text-gray-600 leading-relaxed text-justify">
              These terms are governed by the laws of India. Any disputes shall
              be subject to the exclusive jurisdiction of the courts in Mumbai,
              Maharashtra, unless otherwise required by law.
            </p>
          </div>

          <div className="mb-10">
            <h2 className="text-xl md:text-2xl font-semibold mb-4">
              Changes to These Terms
            </h2>
            <p className="text-gray-600 leading-relaxed text-justify">
              We may update these Terms &amp; Conditions periodically. Changes
              will be posted on this page. Continued use of the website or
              services after updates constitutes acceptance of the revised
              terms.
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
            Thank you for being part of{" "}
            <span className="font-semibold">Fit Body Culture (FBC Academy)</span>
            .
          </p>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default TermsAndConditions;
