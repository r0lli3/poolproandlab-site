"use client";

import { useState } from "react";
import { Send, CheckCircle2, Loader2, MapPin, Truck } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useT } from "@/lib/i18n/client";
import { BRANCH_NAMES } from "@/lib/branches";
import { cn } from "@/lib/utils";

type Mode = "branch" | "onsite";
type PoolType = "concrete" | "liner" | "fiberglass" | "other";
type PoolEnv = "outdoor" | "indoor";
type SymptomKey =
  | "cloudy"
  | "algae"
  | "stains"
  | "chlorine"
  | "irritation"
  | "salt"
  | "equipment"
  | "other";

const SYMPTOMS: SymptomKey[] = [
  "cloudy",
  "algae",
  "stains",
  "chlorine",
  "irritation",
  "salt",
  "equipment",
  "other",
];

type FormState = "idle" | "submitting" | "success" | "error";

const initialData = {
  name: "",
  email: "",
  phone: "",
  mode: "branch" as Mode,
  branch: "",
  address: "",
  poolType: "" as PoolType | "",
  poolEnv: "" as PoolEnv | "",
  poolVolume: "",
  preferredDate: "",
  notes: "",
};

export function LabTestForm() {
  const { t } = useT();
  const [state, setState] = useState<FormState>("idle");
  const [symptoms, setSymptoms] = useState<Set<SymptomKey>>(new Set());
  const [data, setData] = useState(initialData);

  const labelClass = "text-sm font-heading font-[600] text-[var(--navy)]";
  const inputClass =
    "rounded-xl border-[var(--border)] focus-visible:ring-[var(--aqua)]";

  function toggleSymptom(key: SymptomKey) {
    setSymptoms((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setState("submitting");
    try {
      const payload = {
        ...data,
        symptoms: Array.from(symptoms),
      };
      const res = await fetch("/api/lab-test", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Failed");
      setState("success");
      setData(initialData);
      setSymptoms(new Set());
    } catch {
      setState("error");
    }
  }

  if (state === "success") {
    return (
      <div className="bg-white rounded-2xl border border-[var(--border)] p-12 text-center">
        <CheckCircle2 className="w-14 h-14 text-[var(--aqua)] mx-auto mb-4" />
        <h3 className="font-heading text-xl font-[700] text-[var(--navy)] mb-2">
          {t("labBooking.successTitle")}
        </h3>
        <p className="text-[var(--navy)]/60">{t("labBooking.successBody")}</p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-2xl border border-[var(--border)] p-6 md:p-10 space-y-8"
    >
      {/* Mode */}
      <fieldset className="space-y-3">
        <legend className={labelClass}>{t("labBooking.modeLabel")}</legend>
        <div className="grid sm:grid-cols-2 gap-3">
          <ModeCard
            active={data.mode === "branch"}
            icon={<MapPin className="w-5 h-5" />}
            title={t("labBooking.modeBranch")}
            hint={t("labBooking.modeBranchHint")}
            onClick={() => setData({ ...data, mode: "branch" })}
          />
          <ModeCard
            active={data.mode === "onsite"}
            icon={<Truck className="w-5 h-5" />}
            title={t("labBooking.modeOnsite")}
            hint={t("labBooking.modeOnsiteHint")}
            onClick={() => setData({ ...data, mode: "onsite" })}
          />
        </div>
      </fieldset>

      {/* Branch or address */}
      {data.mode === "branch" ? (
        <div className="space-y-1.5">
          <label htmlFor="branch" className={labelClass}>
            {t("labBooking.branchLabel")} <span className="text-red-400">*</span>
          </label>
          <select
            id="branch"
            required
            value={data.branch}
            onChange={(e) => setData({ ...data, branch: e.target.value })}
            className="w-full rounded-xl border border-[var(--border)] bg-white px-3 h-11 text-sm focus:outline-none focus:ring-3 focus:ring-[var(--aqua)]/40 focus:border-[var(--aqua)]"
          >
            <option value="" disabled>
              {t("labBooking.branchPlaceholder")}
            </option>
            {BRANCH_NAMES.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </select>
        </div>
      ) : (
        <div className="space-y-1.5">
          <label htmlFor="address" className={labelClass}>
            {t("labBooking.addressLabel")} <span className="text-red-400">*</span>
          </label>
          <Textarea
            id="address"
            required
            rows={2}
            value={data.address}
            onChange={(e) => setData({ ...data, address: e.target.value })}
            placeholder={t("labBooking.addressPlaceholder")}
            className={cn(inputClass, "resize-none")}
          />
        </div>
      )}

      {/* Pool details */}
      <div className="grid md:grid-cols-2 gap-6">
        <fieldset className="space-y-3">
          <legend className={labelClass}>{t("labBooking.poolTypeLabel")}</legend>
          <div className="grid grid-cols-2 gap-2">
            {(["concrete", "liner", "fiberglass", "other"] as const).map((opt) => (
              <RadioPill
                key={opt}
                active={data.poolType === opt}
                label={t(`labBooking.poolType${opt[0].toUpperCase()}${opt.slice(1)}`)}
                onClick={() => setData({ ...data, poolType: opt })}
              />
            ))}
          </div>
        </fieldset>

        <fieldset className="space-y-3">
          <legend className={labelClass}>{t("labBooking.poolEnvLabel")}</legend>
          <div className="grid grid-cols-2 gap-2">
            {(["outdoor", "indoor"] as const).map((opt) => (
              <RadioPill
                key={opt}
                active={data.poolEnv === opt}
                label={t(`labBooking.poolEnv${opt[0].toUpperCase()}${opt.slice(1)}`)}
                onClick={() => setData({ ...data, poolEnv: opt })}
              />
            ))}
          </div>
        </fieldset>
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        <div className="space-y-1.5">
          <label htmlFor="poolVolume" className={labelClass}>
            {t("labBooking.poolVolumeLabel")}
          </label>
          <Input
            id="poolVolume"
            type="number"
            min={0}
            inputMode="decimal"
            value={data.poolVolume}
            onChange={(e) => setData({ ...data, poolVolume: e.target.value })}
            placeholder={t("labBooking.poolVolumePlaceholder")}
            className={inputClass}
          />
        </div>
        <div className="space-y-1.5">
          <label htmlFor="preferredDate" className={labelClass}>
            {t("labBooking.preferredDateLabel")}
          </label>
          <Input
            id="preferredDate"
            type="date"
            value={data.preferredDate}
            onChange={(e) => setData({ ...data, preferredDate: e.target.value })}
            className={inputClass}
          />
          <p className="text-xs text-[var(--navy)]/50">
            {t("labBooking.preferredDateHint")}
          </p>
        </div>
      </div>

      {/* Symptoms */}
      <fieldset className="space-y-3">
        <legend className={labelClass}>{t("labBooking.symptomsLabel")}</legend>
        <div className="flex flex-wrap gap-2">
          {SYMPTOMS.map((key) => {
            const active = symptoms.has(key);
            return (
              <button
                key={key}
                type="button"
                onClick={() => toggleSymptom(key)}
                aria-pressed={active}
                className={cn(
                  "px-3.5 py-2 rounded-full text-sm font-heading font-[600] border transition-colors",
                  active
                    ? "bg-[var(--aqua)] text-white border-[var(--aqua)]"
                    : "bg-white text-[var(--navy)]/80 border-[var(--border)] hover:border-[var(--aqua)] hover:text-[var(--aqua)]"
                )}
              >
                {t(`labBooking.symptoms.${key}`)}
              </button>
            );
          })}
        </div>
      </fieldset>

      {/* Contact details */}
      <div className="border-t border-[var(--border)] pt-8 space-y-5">
        <div className="grid sm:grid-cols-2 gap-5">
          <div className="space-y-1.5">
            <label htmlFor="name" className={labelClass}>
              {t("form.fullName")} <span className="text-red-400">*</span>
            </label>
            <Input
              id="name"
              required
              value={data.name}
              onChange={(e) => setData({ ...data, name: e.target.value })}
              placeholder={t("form.namePlaceholder")}
              className={inputClass}
            />
          </div>
          <div className="space-y-1.5">
            <label htmlFor="email" className={labelClass}>
              {t("form.email")} <span className="text-red-400">*</span>
            </label>
            <Input
              id="email"
              type="email"
              required
              value={data.email}
              onChange={(e) => setData({ ...data, email: e.target.value })}
              placeholder={t("form.emailPlaceholder")}
              className={inputClass}
            />
          </div>
        </div>

        <div className="space-y-1.5">
          <label htmlFor="phone" className={labelClass}>
            {t("form.phone")} <span className="text-red-400">*</span>
          </label>
          <Input
            id="phone"
            type="tel"
            required
            value={data.phone}
            onChange={(e) => setData({ ...data, phone: e.target.value })}
            placeholder={t("form.phonePlaceholder")}
            className={inputClass}
          />
        </div>

        <div className="space-y-1.5">
          <label htmlFor="notes" className={labelClass}>
            {t("labBooking.notesLabel")}
          </label>
          <Textarea
            id="notes"
            rows={4}
            value={data.notes}
            onChange={(e) => setData({ ...data, notes: e.target.value })}
            placeholder={t("labBooking.notesPlaceholder")}
            className={cn(inputClass, "resize-none")}
          />
        </div>
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
            {t("labBooking.submitting")}
          </>
        ) : (
          <>
            <Send className="w-4 h-4 mr-2" />
            {t("labBooking.submit")}
          </>
        )}
      </Button>
    </form>
  );
}

function ModeCard({
  active,
  icon,
  title,
  hint,
  onClick,
}: {
  active: boolean;
  icon: React.ReactNode;
  title: string;
  hint: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={cn(
        "text-left rounded-xl border-2 p-4 transition-all",
        active
          ? "border-[var(--aqua)] bg-[var(--aqua)]/5 shadow-sm"
          : "border-[var(--border)] bg-white hover:border-[var(--aqua)]/40"
      )}
    >
      <div className="flex items-center gap-2.5 mb-1">
        <span
          className={cn(
            "w-8 h-8 rounded-lg flex items-center justify-center",
            active
              ? "bg-[var(--aqua)] text-white"
              : "bg-[var(--aqua)]/10 text-[var(--aqua)]"
          )}
        >
          {icon}
        </span>
        <span className="font-heading font-[700] text-[var(--navy)] text-sm">
          {title}
        </span>
      </div>
      <p className="text-xs text-[var(--navy)]/60 leading-relaxed">{hint}</p>
    </button>
  );
}

function RadioPill({
  active,
  label,
  onClick,
}: {
  active: boolean;
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={cn(
        "h-10 rounded-lg border text-sm font-heading font-[600] transition-colors",
        active
          ? "bg-[var(--aqua)] text-white border-[var(--aqua)]"
          : "bg-white text-[var(--navy)]/80 border-[var(--border)] hover:border-[var(--aqua)] hover:text-[var(--aqua)]"
      )}
    >
      {label}
    </button>
  );
}
