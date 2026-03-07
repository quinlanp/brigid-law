import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background image — replace URL with your own water/nature photo */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/brigid_law_bg.jpg')" }}
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1A3A47]/60 via-[#2C5F6E]/40 to-[#EAF4F9]/80" />

        {/* Content */}
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <h1 className="font-[family-name:var(--font-cormorant)] text-7xl md:text-9xl font-light italic text-white leading-tight tracking-wide">
            Brigid Law
          </h1>
        </div>
      </section>

      {/* Intro band */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl font-light text-[#1A3A47] mb-6 leading-snug">
            Thoughtful Guidance for Life&apos;s Legal Moments
          </h2>
          <div className="section-divider" />
          <p className="text-[#4A6070] text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
            Most legal problems don&apos;t begin with the law itself — they begin with unanswered questions, shifting priorities, or uncertainty about what comes next. At Brigid Law, I take the time to listen carefully and offer clear, practical guidance so you can make important decisions with confidence.
          </p>
        </div>
      </section>

      {/* Three pillars */}
      <section className="bg-[#F0F7FA] py-20 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Expert Representation",
              body: "Decades of courtroom and negotiation experience ensuring your interests are fiercely protected.",
            },
            {
              title: "Personalised Approach",
              body: "No two situations are alike. We tailor our strategy to your unique circumstances and goals.",
            },
            {
              title: "Transparent Communication",
              body: "Clear, honest advice at every stage — no surprises, no jargon. Just straightforward counsel.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-sm p-8 border border-[#D6EAF2] hover:border-[#8BBFD4] hover:shadow-md transition-all"
            >
              <div className="w-8 h-px bg-[#8BBFD4] mb-5" />
              <h3 className="font-[family-name:var(--font-cormorant)] text-2xl font-semibold text-[#1A3A47] mb-3">
                {item.title}
              </h3>
              <p className="text-[#4A6070] text-sm leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA banner */}
      <section className="bg-[#2C5F6E] py-16 px-6 text-center">
        <h2 className="font-[family-name:var(--font-cormorant)] text-4xl font-light text-white mb-4">
          Ready to Take the First Step?
        </h2>
        <p className="text-[#8BBFD4] mb-8 text-base max-w-xl mx-auto">
          I offer a free 30-minute consultation — no charge, no commitment, and fully confidential.
        </p>
        <Link
          href="/contact"
          className="inline-block px-10 py-3.5 bg-white text-[#2C5F6E] hover:bg-[#D6EAF2] text-sm uppercase tracking-widest font-medium transition-colors rounded-sm"
        >
          Contact Us
        </Link>
      </section>
    </>
  );
}
