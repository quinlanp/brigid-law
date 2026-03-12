const services = [
  {
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
    <div className="pt-20 relative min-h-screen">
      {/* Background image */}
      <div
        className="fixed inset-0 bg-cover bg-center bg-no-repeat -z-10"
        style={{ backgroundImage: "url('/brigid_law_bg.jpg')" }}
      />
      <div className="fixed inset-0 bg-gradient-to-b from-[#1A3A47]/60 via-[#2C5F6E]/40 to-[#1A3A47]/60 -z-10" />

      <div className="max-w-3xl mx-auto px-6 py-12 space-y-4">
        {services.map((service, i) => (
          <div key={i} className="bg-white/90 rounded-lg shadow-md p-6 md:p-8">
            <h2 className="font-[family-name:var(--font-cormorant)] text-2xl font-semibold text-[#1A3A47] mb-3">
              {service.title}
            </h2>
            <div className="w-8 h-px bg-[#8BBFD4] mb-4" />
            <p className="text-[#4A6070] leading-relaxed mb-4 text-sm">{service.description}</p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
              {service.areas.map((area, j) => (
                <li key={j} className="flex items-center gap-2 text-sm text-[#4A6070]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#8BBFD4] shrink-0" />
                  {area}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
