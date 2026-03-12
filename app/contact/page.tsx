import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <div className="pt-20 relative min-h-screen">
      {/* Background image */}
      <div
        className="fixed inset-0 bg-cover bg-center bg-no-repeat -z-10"
        style={{ backgroundImage: "url('/brigid_law_bg.jpg')" }}
      />
      <div className="fixed inset-0 bg-gradient-to-b from-[#1A3A47]/60 via-[#2C5F6E]/40 to-[#1A3A47]/60 -z-10" />

      <div className="max-w-5xl mx-auto px-6 py-12 space-y-6">
        {/* Page header card */}
        <div className="bg-white/90 rounded-lg shadow-md px-8 py-10 text-center">
          <p className="text-[#5BA3BF] text-sm uppercase tracking-[0.25em] mb-3 font-medium">
            Get in Touch
          </p>
          <h1 className="font-[family-name:var(--font-cormorant)] text-5xl md:text-6xl font-light text-[#1A3A47]">
            Taking the first step can feel daunting — this one doesn&apos;t have to be.
          </h1>
        </div>

        {/* Main content card */}
        <div className="bg-white/90 rounded-lg shadow-md p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            {/* Left: Form */}
            <div>
              <h2 className="font-[family-name:var(--font-cormorant)] text-3xl font-light text-[#1A3A47] mb-2">
                Send a Message
              </h2>
              <div className="w-10 h-px bg-[#8BBFD4] mb-6" />
              <ContactForm />
            </div>

            {/* Right: info */}
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
        </div>
      </div>
    </div>
  );
}
