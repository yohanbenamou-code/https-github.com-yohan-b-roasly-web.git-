"use client";

import { useState, type FormEvent } from "react";
import type { SiteContent } from "@/lib/content/types";
import { contact } from "@/lib/content";

type Status = "idle" | "sending" | "success" | "error";

export default function ContactForm({ content }: { content: SiteContent }) {
  const [status, setStatus] = useState<Status>("idle");
  const { form } = content.finalCta;

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const formData = new FormData(e.currentTarget);
    formData.append(
      "access_key",
      process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ?? ""
    );
    formData.append("subject", "Nouveau lead Roasly");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      if (data.success) {
        setStatus("success");
        e.currentTarget.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  const inputClasses =
    "w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-paper placeholder:text-paper/40 outline-none transition-colors focus:border-blue-soft focus:bg-white/10";

  return (
    <form onSubmit={handleSubmit} className="mt-10 grid gap-4 text-start sm:grid-cols-2">
      <input type="text" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />

      <input
        type="text"
        name="name"
        required
        placeholder={form.name}
        className={inputClasses}
      />
      <input
        type="email"
        name="email"
        required
        placeholder={form.email}
        className={inputClasses}
      />
      <input
        type="tel"
        name="phone"
        placeholder={form.phone}
        className={`${inputClasses} sm:col-span-2`}
      />
      <textarea
        name="message"
        rows={4}
        placeholder={form.messagePlaceholder}
        className={`${inputClasses} resize-none sm:col-span-2`}
      />

      <div className="sm:col-span-2">
        <button
          type="submit"
          disabled={status === "sending"}
          className="w-full rounded-full bg-gradient-to-r from-blue-bright to-blue-soft px-7 py-3.5 text-sm font-semibold text-white shadow-[0_16px_40px_-14px_rgba(59,110,246,0.7)] transition-transform hover:scale-[1.02] disabled:opacity-60 disabled:hover:scale-100 sm:w-auto"
        >
          {status === "sending" ? form.sending : form.submit}
        </button>

        {status === "success" && (
          <p className="mt-4 text-sm text-signal">{form.success}</p>
        )}
        {status === "error" && (
          <p className="mt-4 text-sm text-amber">
            {form.error}{" "}
            <a href={`mailto:${contact.email}`} className="underline">
              {contact.email}
            </a>
          </p>
        )}
      </div>
    </form>
  );
}
