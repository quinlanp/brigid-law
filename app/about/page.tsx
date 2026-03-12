import Image from "next/image";
import ExpandableCard from "@/components/ExpandableCard";

export default function AboutPage() {
  return (
    <div className="pt-20 relative min-h-screen">
      {/* Background image */}
      <div
        className="fixed inset-0 bg-cover bg-center bg-no-repeat -z-10"
        style={{ backgroundImage: "url('/brigid_law_bg.jpg')" }}
      />
      <div className="fixed inset-0 bg-gradient-to-b from-[#1A3A47]/60 via-[#2C5F6E]/40 to-[#1A3A47]/60 -z-10" />

      <div className="max-w-6xl mx-auto px-6 py-12 space-y-6">
        {/* Founder card */}
        <div className="bg-white/90 rounded-lg shadow-md p-8 md:p-12">
          <blockquote className="mb-10">
            <p className="font-[family-name:var(--font-cormorant)] text-3xl md:text-4xl italic font-light text-black leading-snug">
              &ldquo;Brigid Law is founded in honour of Brigid and Patrick —
              whose resilience and legacy shaped the heart of this
              practice.&rdquo;
            </p>
          </blockquote>
          <div className="flex items-center gap-4 mb-10">
            <div className="flex-1 h-px bg-[#8BBFD4]" />
            <div className="w-1.5 h-1.5 rotate-45 bg-[#8BBFD4]" />
            <div className="flex-1 h-px bg-[#8BBFD4]" />
          </div>

          <div className="flex flex-col md:flex-row gap-12 items-stretch">
            {/* Founder bio */}
            <div className="flex-1 md:order-1">
              <h1 className="font-[family-name:var(--font-cormorant)] text-4xl font-light text-[#1A3A47] mb-2">
                Hi, I&apos;m Kenna Draper
              </h1>
              <div className="w-12 h-px bg-[#8BBFD4] mb-6" />
              <div className="space-y-2 text-[#4A6070] leading-relaxed text-base mb-8">
                <p>
                  Born and raised in Ottawa, I was called to the Ontario Bar in
                  2026 after completing my legal education in Scotland. As a
                  dual Canadian-Irish citizen, my heritage is not simply a
                  lineage, but a lens through which I understand people, family,
                  and moments of change. It has shaped how I listen, how I
                  guide, and how I show up when life feels uncertain. It reminds
                  me that every story is unique, and that every case deserves
                  dedicated care, patience, and compassion.
                </p>
                <p>
                  Most legal problems don&apos;t begin with the law itself, but
                  with unanswered questions, shifting priorities, or uncertainty
                  about what comes next. My role is to slow things down, listen
                  carefully, and offer clear, practical guidance so you can make
                  important decisions with confidence. Whether you are
                  navigating an unexpected change in your life, planning for the
                  future, or simply seeking direction, I am committed to
                  offering thoughtful, personalized support every step of the
                  way.
                </p>
                <p>
                  Outside of work, you&apos;ll often find me playing volleyball
                  or leisurely kayaking on local lakes. These moments keep me
                  grounded, curious, and connected, qualities I bring into every
                  client relationship.
                </p>
                <p>
                  If you are in the midst of a legal issue and could use steady
                  guidance, I invite you to reach out. I would be happy to help
                  you move forward with clarity and confidence.
                </p>
              </div>
            </div>

            {/* Founder image */}
            <div className="w-full md:w-[420px] shrink-0 md:order-2 relative min-h-[400px]">
              <Image
                src="/kenna.jpg"
                alt="Kenna Draper"
                fill
                className="object-cover rounded-lg border border-[#D6EAF2] shadow-md"
              />
            </div>
          </div>
        </div>

        {/* Expandable credential cards */}
        <ExpandableCard title="Education">
          <ul className="space-y-4 text-[#4A6070] text-sm leading-relaxed">
            {[
              {
                degree: "Lorem Ipsum (L.I.)",
                school: "Lorem Ipsum Law School",
                year: "0000",
              },
              {
                degree: "Lorem Ipsum — Lorem Ipsum & Lorem",
                school: "Lorem Ipsum University",
                year: "0000",
              },
              {
                degree: "Lorem Ipsum in Lorem & Lorem Resolution",
                school: "Lorem Ipsum Institute",
                year: "0000",
              },
            ].map((item) => (
              <li key={item.degree} className="flex gap-4 items-start">
                <span className="mt-1 w-2 h-2 rounded-full bg-[#8BBFD4] shrink-0" />
                <span>
                  <strong className="text-[#1A3A47] font-medium">
                    {item.degree}
                  </strong>
                  <br />
                  {item.school} &mdash; {item.year}
                </span>
              </li>
            ))}
          </ul>
        </ExpandableCard>

        <ExpandableCard title="Memberships">
          <ul className="space-y-3 text-[#4A6070] text-sm leading-relaxed">
            {[
              "Law Society of Lorem Ipsum — Called to the Bar, 0000",
              "Lorem Ipsum Bar Association — Member since 0000",
              "Lorem Ipsum Network — Active Member",
              "Pro Bono Lorem Ipsum — Contributing Lawyer",
              "Lorem Ipsum Association — Associate Member",
            ].map((item) => (
              <li key={item} className="flex gap-4 items-start">
                <span className="mt-1 w-2 h-2 rounded-full bg-[#8BBFD4] shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </ExpandableCard>

        <ExpandableCard title="Publications">
          <ul className="space-y-4 text-[#4A6070] text-sm leading-relaxed">
            {[
              {
                title: '"Lorem Ipsum Dolor Sit Amet"',
                pub: "Lorem Ipsum Law Review, Vol. 00",
                year: "0000",
              },
              {
                title: '"Lorem Ipsum Dolor Sit Amet Consectetur"',
                pub: "Lorem Ipsum Legal Forum",
                year: "0000",
              },
              {
                title: '"Lorem Ipsum Dolor Sit Amet Adipiscing"',
                pub: "Lorem Ipsum Bar Association Quarterly",
                year: "0000",
              },
            ].map((item) => (
              <li key={item.title} className="flex gap-4 items-start">
                <span className="mt-1 w-2 h-2 rounded-full bg-[#8BBFD4] shrink-0" />
                <span>
                  <em className="text-[#1A3A47]">{item.title}</em>
                  <br />
                  {item.pub} &mdash; {item.year}
                </span>
              </li>
            ))}
          </ul>
        </ExpandableCard>
      </div>
    </div>
  );
}
