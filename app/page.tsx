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
