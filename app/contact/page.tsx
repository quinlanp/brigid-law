import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <div className="pt-20">
      {/* Page header */}
      <section className="bg-[#F0F7FA] py-16 px-6 text-center border-b border-[#D6EAF2]">
        <p className="text-[#5BA3BF] text-sm uppercase tracking-[0.25em] mb-3 font-medium">
          Get in Touch
        </p>
        <h1 className="font-[family-name:var(--font-cormorant)] text-5xl md:text-6xl font-light text-[#1A3A47]">
          Taking the first step can feel daunting — this one doesn&apos;t have to be.
        </h1>
      </section>

      {/* Main content */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

          {/* Left: Form */}
          <div>
            <h2 className="font-[family-name:var(--font-cormorant)] text-3xl font-light text-[#1A3A47] mb-2">
              Send a Message
            </h2>
            <div className="w-10 h-px bg-[#8BBFD4] mb-6" />
            <ContactForm />
          </div>

          {/* Right: Photo + info */}
          <div className="space-y-8">
            <div className="space-y-5">
              <h3 className="font-[family-name:var(--font-cormorant)] text-2xl font-light text-[#1A3A47]">
                Free Consultation
              </h3>
              <div className="w-10 h-px bg-[#8BBFD4]" />
              <p className="text-sm text-[#4A6070] leading-relaxed">
                I offer a free 30-minute consultation — no charge, no commitment, and fully confidential.
                We&apos;ll talk through what&apos;s been going on, see if we&apos;re a good fit, and explore next steps.
              </p>
              <p className="text-sm text-[#4A6070] leading-relaxed">
                I work with clients virtually and in-person. When you&apos;re ready, I invite you to reach out.
              </p>

              <div className="border-t border-[#D6EAF2] pt-5 space-y-3 text-sm text-[#4A6070]">
                <div>
                  <span className="block text-xs uppercase tracking-widest text-[#2C5F6E] mb-1 font-medium">Email</span>
                  <a href="mailto:lorem@ipsum.com" className="hover:text-[#2C5F6E] transition-colors">
                    lorem@ipsum.com
                  </a>
                </div>
                <div>
                  <span className="block text-xs uppercase tracking-widest text-[#2C5F6E] mb-1 font-medium">Phone</span>
                  <a href="tel:+10000000000" className="hover:text-[#2C5F6E] transition-colors">
                    Lorem Ipsum
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
