import Link from "next/link";

const services = [
  {
    number: "01",
    title: "Lorem Ipsum",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor.",
    areas: [
      "Lorem Ipsum",
      "Lorem Ipsum",
      "Lorem Ipsum",
      "Lorem Ipsum",
      "Lorem Ipsum",
      "Lorem Ipsum",
    ],
  },
  {
    number: "02",
    title: "Lorem Ipsum",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor.",
    areas: [
      "Lorem Ipsum",
      "Lorem Ipsum",
      "Lorem Ipsum",
      "Lorem Ipsum",
      "Lorem Ipsum",
      "Lorem Ipsum",
    ],
  },
  {
    number: "03",
    title: "Lorem Ipsum",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor.",
    areas: [
      "Lorem Ipsum",
      "Lorem Ipsum",
      "Lorem Ipsum",
      "Lorem Ipsum",
      "Lorem Ipsum",
      "Lorem Ipsum",
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="pt-20">
      {/* Page header */}
      <section className="bg-[#F0F7FA] py-16 px-6 text-center border-b border-[#D6EAF2]">
        <p className="text-[#5BA3BF] text-sm uppercase tracking-[0.25em] mb-3 font-medium">
          What We Offer
        </p>
        <h1 className="font-[family-name:var(--font-cormorant)] text-5xl md:text-6xl font-light text-[#1A3A47]">
          Our Services
        </h1>
      </section>

      {/* Services */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-5xl mx-auto divide-y divide-[#EAF4F9]">
          {services.map((service) => (
            <div key={service.number} className="py-16 first:pt-0 last:pb-0 flex flex-col md:flex-row gap-12 items-start">
              {/* Number + Title */}
              <div className="md:w-56 shrink-0">
                <h2 className="font-[family-name:var(--font-cormorant)] text-3xl font-semibold text-[#1A3A47]">
                  {service.title}
                </h2>
              </div>

              {/* Description + areas */}
              <div className="flex-1 pt-1">
                <p className="text-[#4A6070] leading-relaxed mb-6 text-base">{service.description}</p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {service.areas.map((area, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-[#4A6070]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#8BBFD4] shrink-0" />
                      {area}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#F0F7FA] py-16 px-6 text-center border-t border-[#D6EAF2]">
        <h2 className="font-[family-name:var(--font-cormorant)] text-4xl font-light text-[#1A3A47] mb-4">
          Not Sure Which Service Applies to You?
        </h2>
        <p className="text-[#4A6070] mb-8 max-w-xl mx-auto text-base">
          Book a confidential consultation and we&apos;ll help you understand your options and chart the best path forward.
        </p>
        <Link
          href="/contact"
          className="inline-block px-10 py-3.5 bg-[#2C5F6E] hover:bg-[#1A3A47] text-white text-sm uppercase tracking-widest font-medium transition-colors rounded-sm"
        >
          Get in Touch
        </Link>
      </section>
    </div>
  );
}
