"use client";

import { useEffect, useMemo, useState, type FormEvent } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { firma, wizardSteps } from "@/lib/content";
import { cutClass } from "@/lib/styles";
import { wizardIconMap } from "@/components/kontakt/wizardIcons";

const fieldClass =
  "w-full border-2 border-[#2a2a2a] bg-[#0e0e0e] px-4 py-3 text-base text-white placeholder:text-[#6a6a6a] focus:border-[#4493f8] focus:outline-none";
const labelClass = "mb-2 block text-sm font-bold uppercase tracking-wide";

const totalSteps = wizardSteps.length + 1;

export function ContactWizard() {
  const searchParams = useSearchParams();
  const paketParam = searchParams.get("paket");

  const presetPaket = useMemo(
    () => wizardSteps[0].options.find((o) => o.value === paketParam)?.value,
    [paketParam],
  );

  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  // Apply a preselected package after mount to avoid a hydration mismatch
  // (search params are not available during server prerendering).
  useEffect(() => {
    if (!presetPaket) return;
    setAnswers((prev) => ({ ...prev, paket: presetPaket }));
    setStep((s) => (s === 0 ? 1 : s));
  }, [presetPaket]);

  const isContactStep = step === wizardSteps.length;

  function choose(stepId: string, value: string) {
    setAnswers((prev) => ({ ...prev, [stepId]: value }));
    setStep((s) => Math.min(s + 1, wizardSteps.length));
  }

  function back() {
    setStep((s) => Math.max(s - 1, 0));
  }

  if (submitted) {
    return (
      <div className="mx-auto max-w-2xl text-center">
        <div className="mx-auto flex h-20 w-20 items-center justify-center bg-[#4493f8] text-[#0e0e0e]">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="h-10 w-10" aria-hidden="true">
            <path d="m5 13 4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h1 className="mt-8 text-4xl font-extrabold uppercase leading-[0.95] sm:text-5xl">
          Vielen Dank
        </h1>
        <p className="mx-auto mt-5 max-w-md text-lg text-[#b5b5b5]">
          Ihre Anfrage ist bei uns eingegangen. Wir melden uns zeitnah bei Ihnen
          zurück. Bei dringenden Anliegen erreichen Sie uns telefonisch.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={firma.telefonHref}
            className={`bg-[#4493f8] px-8 py-4 text-base font-extrabold uppercase text-[#0e0e0e] transition-colors hover:bg-[#6cb4ff] ${cutClass}`}
          >
            {firma.telefon}
          </a>
          <Link href="/" className="px-8 py-4 text-base font-extrabold uppercase text-[#b5b5b5] hover:text-white">
            Zur Startseite
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-2xl">
      {/* Progress */}
      <div className="mx-auto mb-10 max-w-md">
        <div className="flex items-center justify-between text-xs font-bold uppercase tracking-widest text-[#6a6a6a]">
          <span>
            Schritt {step + 1} von {totalSteps}
          </span>
          <span>{Math.round(((step + 1) / totalSteps) * 100)} %</span>
        </div>
        <div className="mt-3 h-1.5 w-full bg-[#2a2a2a]">
          <div
            className="h-full bg-[#4493f8] transition-all duration-300"
            style={{ width: `${((step + 1) / totalSteps) * 100}%` }}
          />
        </div>
      </div>

      {!isContactStep && (
        <WizardQuestion
          step={step}
          selected={answers[wizardSteps[step].id]}
          onChoose={choose}
        />
      )}

      {isContactStep && (
        <ContactStep
          answers={answers}
          onSubmit={() => setSubmitted(true)}
        />
      )}

      {step > 0 && (
        <div className="mt-10 text-center">
          <button
            type="button"
            onClick={back}
            className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-[#6a6a6a] hover:text-white"
          >
            <span aria-hidden>←</span> Zurück
          </button>
        </div>
      )}
    </div>
  );
}

function WizardQuestion({
  step,
  selected,
  onChoose,
}: {
  step: number;
  selected?: string;
  onChoose: (stepId: string, value: string) => void;
}) {
  const current = wizardSteps[step];

  return (
    <div className="text-center">
      <h1 className="text-3xl font-extrabold uppercase leading-[0.95] sm:text-4xl">
        {current.frage}
      </h1>
      <p className="mt-4 text-base text-[#b5b5b5]">{current.untertitel}</p>

      <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {current.options.map((option) => {
          const Icon = wizardIconMap[option.icon];
          const isSelected = selected === option.value;
          return (
            <button
              key={option.value}
              type="button"
              onClick={() => onChoose(current.id, option.value)}
              className={`group flex flex-col items-center gap-3 border-2 p-6 text-center transition-colors ${
                isSelected
                  ? "border-[#4493f8] bg-[#4493f8]/10"
                  : "border-[#2a2a2a] hover:border-[#4493f8]"
              }`}
            >
              <span
                className={`flex h-16 w-16 items-center justify-center transition-colors ${
                  isSelected ? "text-[#4493f8]" : "text-white group-hover:text-[#4493f8]"
                }`}
              >
                {Icon ? <Icon className="h-9 w-9" /> : null}
              </span>
              <span className="text-base font-extrabold uppercase">{option.label}</span>
              {option.beschreibung && (
                <span className="text-sm text-[#b5b5b5]">{option.beschreibung}</span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function ContactStep({
  answers,
  onSubmit,
}: {
  answers: Record<string, string>;
  onSubmit: () => void;
}) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);
    setIsSubmitting(true);

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/api/kontakt", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          telefon: formData.get("telefon"),
          ort: formData.get("ort"),
          nachricht: formData.get("nachricht"),
          ...answers,
        }),
      });

      const data = (await response.json().catch(() => null)) as
        | { error?: string }
        | null;

      if (!response.ok) {
        throw new Error(
          data?.error ??
            "Die Anfrage konnte nicht gesendet werden. Bitte versuchen Sie es erneut.",
        );
      }

      onSubmit();
    } catch (submitError) {
      setError(
        submitError instanceof Error
          ? submitError.message
          : "Die Anfrage konnte nicht gesendet werden. Bitte versuchen Sie es erneut.",
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div>
      <div className="text-center">
        <h1 className="text-3xl font-extrabold uppercase leading-[0.95] sm:text-4xl">
          Ihre Kontaktdaten
        </h1>
        <p className="mt-4 text-base text-[#b5b5b5]">
          Fast geschafft. Wie können wir Sie erreichen?
        </p>
      </div>

      {/* Zusammenfassung */}
      <div className="mt-8 flex flex-wrap justify-center gap-2">
        {wizardSteps.map((s) =>
          answers[s.id] ? (
            <span
              key={s.id}
              className="border border-[#2a2a2a] px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-[#b5b5b5]"
            >
              {answers[s.id]}
            </span>
          ) : null,
        )}
      </div>

      <form onSubmit={handleSubmit} className="mt-8">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="name" className={labelClass}>
              Name *
            </label>
            <input id="name" name="name" required className={fieldClass} placeholder="Ihr Name" />
          </div>
          <div>
            <label htmlFor="email" className={labelClass}>
              E-Mail *
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className={fieldClass}
              placeholder="name@beispiel.de"
            />
          </div>
          <div>
            <label htmlFor="telefon" className={labelClass}>
              Telefon *
            </label>
            <input
              id="telefon"
              name="telefon"
              type="tel"
              required
              className={fieldClass}
              placeholder="Ihre Telefonnummer"
            />
          </div>
          <div>
            <label htmlFor="ort" className={labelClass}>
              Ort *
            </label>
            <input
              id="ort"
              name="ort"
              required
              className={fieldClass}
              placeholder="Ihr Wohnort"
            />
          </div>
        </div>

        <div className="mt-5">
          <label htmlFor="nachricht" className={labelClass}>
            Nachricht
          </label>
          <textarea
            id="nachricht"
            name="nachricht"
            rows={4}
            className={fieldClass}
            placeholder="Optional – z. B. Hersteller, Modell oder konkrete Fragen"
          />
        </div>

        <label className="mt-5 flex items-start gap-3 text-sm text-[#b5b5b5]">
          <input type="checkbox" required className="mt-1 h-4 w-4 accent-[#4493f8]" />
          <span>
            Ich habe die{" "}
            <Link href="/datenschutz" className="text-[#4493f8] underline">
              Datenschutzerklärung
            </Link>{" "}
            gelesen und stimme der Verarbeitung meiner Daten zu. *
          </span>
        </label>

        {error && (
          <p className="mt-5 rounded border border-red-500/40 bg-red-500/10 px-4 py-3 text-sm text-red-200">
            {error}
          </p>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className={`mt-7 w-full bg-[#4493f8] px-8 py-4 text-base font-extrabold uppercase text-[#0e0e0e] transition-colors hover:bg-[#6cb4ff] disabled:cursor-not-allowed disabled:opacity-60 ${cutClass}`}
        >
          {isSubmitting ? "Wird gesendet …" : "Anfrage senden"}
        </button>
      </form>
    </div>
  );
}
