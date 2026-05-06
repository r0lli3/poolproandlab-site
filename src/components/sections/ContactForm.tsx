"use client";

import { useState } from "react";
import { Send, CheckCircle2, Loader2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useT } from "@/lib/i18n/client";

type FormState = "idle" | "submitting" | "success" | "error";

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
      <div className="bg-white rounded-2xl border border-[var(--border)] p-12 text-center">
        <CheckCircle2 className="w-14 h-14 text-[var(--aqua)] mx-auto mb-4" />
        <h3 className="font-heading text-xl font-[700] text-[var(--navy)] mb-2">
          {t("form.successTitle")}
        </h3>
        <p className="text-[var(--navy)]/60 mb-6">{t("form.successBody")}</p>
        <button
          onClick={() => setState("idle")}
          className="text-sm font-heading font-[700] text-[var(--aqua)] hover:underline"
        >
          {t("form.sendAnother")}
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-2xl border border-[var(--border)] p-8 space-y-5"
    >
      <div className="grid sm:grid-cols-2 gap-5">
        <div className="space-y-1.5">
          <label htmlFor="name" className="text-sm font-heading font-[600] text-[var(--navy)]">
            {t("form.fullName")} <span className="text-red-400">{t("form.required")}</span>
          </label>
          <Input
            id="name"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder={t("form.namePlaceholder")}
            className="rounded-xl border-[var(--border)] focus-visible:ring-[var(--aqua)]"
          />
        </div>
        <div className="space-y-1.5">
          <label htmlFor="email" className="text-sm font-heading font-[600] text-[var(--navy)]">
            {t("form.email")} <span className="text-red-400">{t("form.required")}</span>
          </label>
          <Input
            id="email"
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder={t("form.emailPlaceholder")}
            className="rounded-xl border-[var(--border)] focus-visible:ring-[var(--aqua)]"
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div className="space-y-1.5">
          <label htmlFor="phone" className="text-sm font-heading font-[600] text-[var(--navy)]">
            {t("form.phone")}
          </label>
          <Input
            id="phone"
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            placeholder={t("form.phonePlaceholder")}
            className="rounded-xl border-[var(--border)] focus-visible:ring-[var(--aqua)]"
          />
        </div>
        <div className="space-y-1.5">
          <label htmlFor="subject" className="text-sm font-heading font-[600] text-[var(--navy)]">
            {t("form.subject")} <span className="text-red-400">{t("form.required")}</span>
          </label>
          <Input
            id="subject"
            required
            value={formData.subject}
            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
            placeholder={t("form.subjectPlaceholder")}
            className="rounded-xl border-[var(--border)] focus-visible:ring-[var(--aqua)]"
          />
        </div>
      </div>

      <div className="space-y-1.5">
        <label htmlFor="message" className="text-sm font-heading font-[600] text-[var(--navy)]">
          {t("form.message")} <span className="text-red-400">{t("form.required")}</span>
        </label>
        <Textarea
          id="message"
          required
          rows={5}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder={t("form.messagePlaceholder")}
          className="rounded-xl border-[var(--border)] focus-visible:ring-[var(--aqua)] resize-none"
        />
      </div>

      {state === "error" && (
        <p className="text-red-500 text-sm text-center">{t("form.errorBody")}</p>
      )}

      <Button
        type="submit"
        disabled={state === "submitting"}
        className="w-full bg-[var(--aqua)] hover:opacity-90 text-white font-heading font-[700] rounded-xl py-3 h-auto transition-opacity"
      >
        {state === "submitting" ? (
          <>
            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
            {t("form.sending")}
          </>
        ) : (
          <>
            <Send className="w-4 h-4 mr-2" />
            {t("form.submit")}
          </>
        )}
      </Button>
    </form>
  );
}
