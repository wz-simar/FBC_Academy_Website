import { useRouter } from "next/router";
import Link from "next/link";
import { blogsData } from "@/data/blogs";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Head from "next/head";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { WHATSAPP_URL } from "@/data/siteLinks";

const renderContent = (content) => {
  return content.split("\n").map((line, index) => {
    if (line.startsWith("### ")) {
      return (
        <h3
          key={index}
          className="text-xl md:text-2xl font-playfair font-bold mt-10 mb-4 text-gray-900 border-l-4 border-[#67bc2a] pl-4"
        >
          {line.replace("### ", "")}
        </h3>
      );
    }
    if (line.startsWith("#### ")) {
      return (
        <h4
          key={index}
          className="text-lg md:text-xl font-playfair font-semibold mt-7 mb-3 text-[#1142D4]"
        >
          {line.replace("#### ", "")}
        </h4>
      );
    }
    if (line.startsWith("* **")) {
      const text = line.replace("* **", "").replace("**:", ":");
      return (
        <li key={index} className="ml-5 list-disc mb-2 font-semibold text-gray-800">
          {text}
        </li>
      );
    }
    if (line.startsWith("* ")) {
      return (
        <li key={index} className="ml-5 list-disc mb-2 text-gray-700">
          {line.replace("* ", "")}
        </li>
      );
    }
    if (line.startsWith("**")) {
      return (
        <p key={index} className="font-bold mt-5 mb-2 text-gray-900">
          {line.replace(/\*\*/g, "")}
        </p>
      );
    }
    if (line.trim() === "") {
      return <br key={index} />;
    }
    const parts = line.split("**");
    return (
      <p key={index} className="mb-4 text-gray-700 leading-relaxed text-[15px] md:text-base">
        {parts.map((part, i) =>
          i % 2 === 1 ? <strong key={i}>{part}</strong> : part
        )}
      </p>
    );
  });
};

export default function BlogPost() {
  const router = useRouter();
  const { slug } = router.query;
  const post = blogsData.find((p) => p.id === slug);
  const related = blogsData.filter((p) => p.id !== slug).slice(0, 2);

  if (!post) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center pt-20 font-manrope">
          <h1 className="text-2xl font-playfair text-gray-800">
            Loading or Post Not Found...
          </h1>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Head>
        <title>{post.title} | Fit Body Culture</title>
      </Head>
      <Navbar />

      <main className="pt-24 pb-16 bg-[#F3F3F7] min-h-screen overflow-x-hidden font-manrope">
        <div className="max-w-4xl mx-auto px-4 md:px-6 mb-6">
          <Link
            href="/resources#blogs"
            className="inline-flex items-center text-sm font-semibold text-[#1142D4] hover:text-blue-800 transition"
          >
            ← Back to Resources
          </Link>
        </div>

        <motion.article
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="max-w-4xl mx-auto px-4 sm:px-6 md:px-10 bg-white py-8 md:py-12 rounded-2xl shadow-sm border border-gray-200"
        >
          <header className="mb-8 text-center">
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#1142D4] mb-3">
              {post.category} · {post.date}
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-playfair font-bold leading-tight mb-5 text-gray-900">
              {post.title}
            </h1>
            <p className="text-sm text-gray-500">
              By{" "}
              <span className="font-semibold text-gray-800">{post.author}</span>
            </p>
          </header>

          <div className="relative w-full aspect-square max-h-[420px] md:max-h-[480px] mx-auto mb-10 rounded-xl overflow-hidden bg-[#F3F3F7] border border-gray-100">
            <img
              src={post.image}
              alt={post.title}
              className="absolute inset-0 w-full h-full object-contain object-center"
            />
          </div>

          <div className="max-w-none text-gray-800">{renderContent(post.content)}</div>

          <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
            <p className="text-sm text-gray-600">
              Ready to apply this in real life?
            </p>
            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#67bc2a] text-white px-5 py-2.5 rounded-md font-semibold text-sm hover:bg-green-600 transition"
              >
                <FaWhatsapp className="w-4 h-4" /> Talk to us
              </a>
              <Link
                href="/plans"
                className="inline-flex items-center justify-center bg-[#1142D4] text-white px-5 py-2.5 rounded-md font-semibold text-sm hover:bg-blue-800 transition"
              >
                View Programs
              </Link>
            </div>
          </div>
        </motion.article>

        {related.length > 0 && (
          <section className="max-w-4xl mx-auto px-4 md:px-6 mt-12">
            <h2 className="text-2xl font-playfair font-bold text-gray-900 mb-6">
              More from the <span className="text-[#67bc2a]">Blog</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {related.map((item) => (
                <Link
                  key={item.id}
                  href={`/resources/blog/${item.id}`}
                  className="bg-white border border-gray-200 border-l-4 border-l-[#1142D4] rounded-xl p-5 hover:shadow-md transition"
                >
                  <p className="text-[11px] font-bold uppercase tracking-wider text-[#1142D4] mb-2">
                    {item.date}
                  </p>
                  <h3 className="font-playfair font-semibold text-gray-900 line-clamp-2 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 line-clamp-2">{item.excerpt}</p>
                </Link>
              ))}
            </div>
          </section>
        )}
      </main>

      <Footer />
    </>
  );
}
