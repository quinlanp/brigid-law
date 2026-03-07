"use client";

import { useState, FormEvent } from "react";

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" },
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  const inputClass =
    "w-full px-4 py-3 bg-white border border-[#D6EAF2] rounded-sm text-[#1A3A47] placeholder-[#9BBDCC] focus:outline-none focus:border-[#5BA3BF] focus:ring-1 focus:ring-[#5BA3BF] transition text-sm";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs uppercase tracking-widest text-[#2C5F6E] mb-1.5 font-medium">
            First Name <span className="text-[#5BA3BF]">*</span>
          </label>
          <input
            name="firstName"
            type="text"
            required
            placeholder="Jane"
            className={inputClass}
          />
        </div>
        <div>
          <label className="block text-xs uppercase tracking-widest text-[#2C5F6E] mb-1.5 font-medium">
            Last Name <span className="text-[#5BA3BF]">*</span>
          </label>
          <input
            name="lastName"
            type="text"
            required
            placeholder="Smith"
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label className="block text-xs uppercase tracking-widest text-[#2C5F6E] mb-1.5 font-medium">
          Email <span className="text-[#5BA3BF]">*</span>
        </label>
        <input
          name="email"
          type="email"
          required
          placeholder="jane@example.com"
          className={inputClass}
        />
      </div>

      <div>
        <label className="block text-xs uppercase tracking-widest text-[#2C5F6E] mb-1.5 font-medium">
          Phone
        </label>
        <input
          name="phone"
          type="tel"
          placeholder="(000) 000-0000"
          className={inputClass}
        />
      </div>

      <div>
        <label className="block text-xs uppercase tracking-widest text-[#2C5F6E] mb-1.5 font-medium">
          Area of Inquiry
        </label>
        <select name="area" className={inputClass}>
          <option value="">Select an area...</option>
          <option>Family Law</option>
          <option>Estate Planning & Probate</option>
          <option>Civil Litigation</option>
          <option>General Inquiry</option>
          <option>Other</option>
        </select>
      </div>

      <div>
        <label className="block text-xs uppercase tracking-widest text-[#2C5F6E] mb-1.5 font-medium">
          Message <span className="text-[#5BA3BF]">*</span>
        </label>
        <textarea
          name="message"
          required
          rows={5}
          placeholder="Please briefly describe your situation..."
          className={inputClass}
        />
      </div>

      <p className="text-xs text-[#7A9AAA] leading-relaxed">
        All communications are confidential. This form does not establish a solicitor-client relationship.
      </p>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full py-3.5 bg-[#2C5F6E] hover:bg-[#1A3A47] disabled:bg-[#8BBFD4] text-white text-sm uppercase tracking-widest font-medium transition-colors rounded-sm"
      >
        {status === "submitting" ? "Sending..." : "Send Message"}
      </button>

      {status === "success" && (
        <div className="p-4 bg-[#EAF4F9] border border-[#8BBFD4] rounded-sm text-[#2C5F6E] text-sm text-center">
          Thank you — your message has been received. We will be in touch shortly.
        </div>
      )}
      {status === "error" && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-sm text-red-700 text-sm text-center">
          Something went wrong. Please try again or email us directly at{" "}
          <a href="mailto:lorem@ipsum.com" className="underline">
            lorem@ipsum.com
          </a>.
        </div>
      )}
    </form>
  );
}
