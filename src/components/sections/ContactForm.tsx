"use client";

import { useState } from "react";
import { ArrowUpRight, Loader2 } from "lucide-react";
import { useT } from "@/lib/i18n/client";

type FormState = "idle" | "submitting" | "success" | "error";

const fieldClass =
  "w-full bg-transparent border-0 border-b border-black/[0.15] focus:border-[var(--navy)] focus:outline-none px-0 py-3 text-[var(--navy)] placeholder:text-black/35 transition-colors";

export function ContactForm() {
  const { t } = useT();
  const [state, setState] = useState<FormState>("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setState("submitting");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Failed");
      setState("success");
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    } catch {
      setState("error");
    }
  }

  if (state === "success") {
    return (
      <div className="border border-black/[0.08] p-12 text-center">
        <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-[var(--aqua)] mb-4">
          {t("form.successEyebrow")}
        </p>
        <h3 className="font-heading font-[700] text-3xl text-[var(--navy)] mb-3 tracking-[-0.01em]">
          {t("form.successTitle")}
        </h3>
        <p className="text-[var(--navy)]/60 mb-6 max-w-md mx-auto">
          {t("form.successBody")}
        </p>
        <button
          onClick={() => setState("idle")}
          className="text-sm font-[600] text-[var(--navy)] underline underline-offset-[6px] decoration-[var(--aqua)] decoration-2 hover:decoration-[var(--navy)] transition-colors"
        >
          {t("form.sendAnother")}
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="grid sm:grid-cols-2 gap-x-10 gap-y-6">
        <div>
          <label
            htmlFor="name"
            className="font-mono text-[11px] tracking-[0.18em] uppercase text-black/50 block mb-1"
          >
            {t("form.fullName")} {t("form.required")}
          </label>
          <input
            id="name"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder={t("form.namePlaceholder")}
            className={fieldClass}
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="font-mono text-[11px] tracking-[0.18em] uppercase text-black/50 block mb-1"
          >
            {t("form.email")} {t("form.required")}
          </label>
          <input
            id="email"
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder={t("form.emailPlaceholder")}
            className={fieldClass}
          />
        </div>
        <div>
          <label
            htmlFor="phone"
            className="font-mono text-[11px] tracking-[0.18em] uppercase text-black/50 block mb-1"
          >
            {t("form.phone")}
          </label>
          <input
            id="phone"
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            placeholder={t("form.phonePlaceholder")}
            className={fieldClass}
          />
        </div>
        <div>
          <label
            htmlFor="subject"
            className="font-mono text-[11px] tracking-[0.18em] uppercase text-black/50 block mb-1"
          >
            {t("form.subject")} {t("form.required")}
          </label>
          <input
            id="subject"
            required
            value={formData.subject}
            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
            placeholder={t("form.subjectPlaceholder")}
            className={fieldClass}
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="message"
          className="font-mono text-[11px] tracking-[0.18em] uppercase text-black/50 block mb-1"
        >
          {t("form.message")} {t("form.required")}
        </label>
        <textarea
          id="message"
          required
          rows={5}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder={t("form.messagePlaceholder")}
          className={`${fieldClass} resize-none`}
        />
      </div>

      {state === "error" && (
        <p className="text-red-500 text-sm">
          {t("form.errorBody")}
        </p>
      )}

      <div>
        <button
          type="submit"
          disabled={state === "submitting"}
          className="inline-flex items-center gap-2 px-5 py-3 bg-[var(--navy)] text-white text-sm font-[600] hover:bg-black transition-colors disabled:opacity-60"
        >
          {state === "submitting" ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              {t("form.sending")}
            </>
          ) : (
            <>
              {t("form.submit")}
              <ArrowUpRight className="w-4 h-4" />
            </>
          )}
        </button>
      </div>
    </form>
  );
}
