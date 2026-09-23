import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FaWhatsapp } from "react-icons/fa";
import { WHATSAPP_URL } from "@/data/siteLinks";

const PrivacyPolicy = () => {
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
            Privacy Policy
          </h1>
          <p className="text-gray-500 text-sm mb-8">Last updated: September 2026</p>

          <p className="text-gray-600 mb-10 leading-relaxed text-justify">
            This Privacy Policy explains how{" "}
            <span className="font-semibold text-black">
              Fit Body Culture (FBC Academy)
            </span>
            , operated by Ankush S. Bhaskar (&quot;we&quot;, &quot;us&quot;, or
            &quot;our&quot;), collects, uses, and protects your information when
            you visit our website, contact us, download resources, or enrol in
            our coaching programs, eBooks, or related services.
          </p>

          <div className="mb-10">
            <h2 className="text-xl md:text-2xl font-semibold mb-4">
              Information We Collect
            </h2>
            <p className="text-gray-600 leading-relaxed text-justify mb-3">
              We may collect information you provide directly, including:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-600 leading-relaxed">
              <li>Name, email address, phone number, and city</li>
              <li>
                Details shared through enquiry, lead, or purchase forms
              </li>
              <li>
                Program preferences, goals, and health-related information you
                choose to share for coaching
              </li>
              <li>
                Payment and order details processed through third-party
                checkout partners (we do not store full card numbers on our
                servers)
              </li>
              <li>
                Basic usage data such as pages visited, device type, and
                approximate location, for site performance and improvement
              </li>
            </ul>
          </div>

          <div className="mb-10">
            <h2 className="text-xl md:text-2xl font-semibold mb-4">
              How We Use Your Information
            </h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-600 leading-relaxed">
              <li>To respond to enquiries and provide coaching or product support</li>
              <li>To deliver programs, eBooks, resources, and app access</li>
              <li>To process purchases and send related confirmations</li>
              <li>
                To send program updates, reminders, and relevant communications
                (you may opt out of marketing messages anytime)
              </li>
              <li>To improve our website, app experience, and services</li>
              <li>To comply with legal obligations where required</li>
            </ul>
          </div>

          <div className="mb-10">
            <h2 className="text-xl md:text-2xl font-semibold mb-4">
              Sharing of Information
            </h2>
            <p className="text-gray-600 leading-relaxed text-justify">
              We do not sell your personal information. We may share limited data
              with trusted service providers who help us operate (for example
              payment processors, email tools, hosting, or analytics), only as
              needed to deliver our services. We may also disclose information
              if required by law or to protect our rights, users, or safety.
            </p>
          </div>

          <div className="mb-10">
            <h2 className="text-xl md:text-2xl font-semibold mb-4">
              Cookies &amp; Tracking
            </h2>
            <p className="text-gray-600 leading-relaxed text-justify">
              Our website may use cookies or similar technologies to remember
              preferences and understand how the site is used. You can control
              cookies through your browser settings. Disabling cookies may affect
              some site features.
            </p>
          </div>

          <div className="mb-10">
            <h2 className="text-xl md:text-2xl font-semibold mb-4">
              Data Security &amp; Retention
            </h2>
            <p className="text-gray-600 leading-relaxed text-justify">
              We take reasonable steps to protect personal information. No
              method of transmission over the internet is fully secure. We retain
              information only as long as needed for the purposes described in
              this policy, coaching delivery, legal requirements, or dispute
              resolution.
            </p>
          </div>

          <div className="mb-10">
            <h2 className="text-xl md:text-2xl font-semibold mb-4">Your Choices</h2>
            <p className="text-gray-600 leading-relaxed text-justify">
              You may request access, correction, or deletion of your personal
              information, or ask us to stop marketing communications, by
              contacting us using the details below. We will respond within a
              reasonable time, subject to applicable law.
            </p>
          </div>

          <div className="mb-10">
            <h2 className="text-xl md:text-2xl font-semibold mb-4">
              Children&apos;s Privacy
            </h2>
            <p className="text-gray-600 leading-relaxed text-justify">
              Our services are intended for adults. We do not knowingly collect
              personal information from children under 18. If you believe a
              child has provided us information, please contact us so we can
              delete it.
            </p>
          </div>

          <div className="mb-10">
            <h2 className="text-xl md:text-2xl font-semibold mb-4">
              Changes to This Policy
            </h2>
            <p className="text-gray-600 leading-relaxed text-justify">
              We may update this Privacy Policy from time to time. The updated
              version will be posted on this page with a revised date. Continued
              use of our website or services after changes means you accept the
              updated policy.
            </p>
          </div>

          <div className="mb-10">
            <h2 className="text-xl md:text-2xl font-semibold mb-4">Contact Us</h2>
            <p className="text-gray-600 leading-relaxed">
              Fit Body Culture (FBC Academy)
              <br />
              Mumbai, India
              <br />
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
            </p>
          </div>

          <p className="text-[#1142D4] mt-12 text-center font-bold font-playfair leading-relaxed text-xl sm:text-2xl">
            Thank you for trusting{" "}
            <span className="font-semibold">Fit Body Culture (FBC Academy)</span>
            .
          </p>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default PrivacyPolicy;
