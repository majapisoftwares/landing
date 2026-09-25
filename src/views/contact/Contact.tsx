import { motion, useReducedMotion } from "motion/react";
import { useState } from "react";
import { useTranslation } from "../../intl/useTranslation";

const fieldClassName =
  "font-dm w-full rounded-[10px] border border-white/[0.07] bg-[#1b1b1e] px-3.5 text-sm text-zinc-100 outline-none transition-[border-color,box-shadow] duration-150 placeholder:text-zinc-500 focus:border-white/25 focus:shadow-[0_0_0_3px_rgba(255,255,255,0.06)]";

export default function Contact() {
  const t = useTranslation();
  const shouldReduceMotion = useReducedMotion();
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  const isComplete = Object.values(form).every(
    (value) => value.trim().length > 0,
  );
  const entrance = shouldReduceMotion
    ? { initial: false as const }
    : { initial: { opacity: 0, y: 20 } };

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        throw new Error("Unable to send contact form");
      }

      setForm({ firstName: "", lastName: "", email: "", message: "" });
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className="contact-page relative isolate min-h-dvh overflow-hidden bg-[#000003] px-4 pt-36 pb-24 sm:px-8 sm:pt-44 lg:px-12">
      <div
        aria-hidden="true"
        className="contact-grid absolute inset-x-0 top-0 h-[430px]"
      />

      <motion.div
        {...entrance}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: shouldReduceMotion ? 0 : 0.6, ease: "easeOut" }}
        className="relative mx-auto flex w-full max-w-[855px] flex-col"
      >
        <div className="mx-auto max-w-[650px] text-center">
          <h1 className="font-tight text-[38px] leading-[1.08] tracking-[-1.9px] text-white sm:text-[52px] sm:tracking-[-2.6px] lg:text-[48px] lg:tracking-[-2.4px]">
            {t("Ready to take your brand to new heights?")}
          </h1>
          <p className="font-dm mx-auto mt-5 max-w-[590px] text-sm leading-5 text-zinc-400 sm:text-base sm:leading-6">
            {t("Send us a message and let's talk about how we can bring your vision to life.")}
          </p>
        </div>

        <motion.form
          {...entrance}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.55,
            delay: shouldReduceMotion ? 0 : 0.12,
            ease: "easeOut",
          }}
          className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2"
          onSubmit={handleSubmit}
        >
          <label className="font-dm flex flex-col gap-2 text-xs text-zinc-200">
            {t("First name")}
            <input
              autoComplete="given-name"
              className={`${fieldClassName} h-[39px]`}
              name="firstName"
              onChange={(event) =>
                setForm((current) => ({
                  ...current,
                  firstName: event.target.value,
                }))
              }
              placeholder={t("First name")}
              required
              value={form.firstName}
            />
          </label>
          <label className="font-dm flex flex-col gap-2 text-xs text-zinc-200">
            {t("Last name")}
            <input
              autoComplete="family-name"
              className={`${fieldClassName} h-[39px]`}
              name="lastName"
              onChange={(event) =>
                setForm((current) => ({
                  ...current,
                  lastName: event.target.value,
                }))
              }
              placeholder={t("Last name")}
              required
              value={form.lastName}
            />
          </label>
          <label className="font-dm col-span-full flex flex-col gap-2 text-xs text-zinc-200">
            {t("Email")}
            <input
              autoComplete="email"
              className={`${fieldClassName} h-[39px]`}
              name="email"
              onChange={(event) =>
                setForm((current) => ({
                  ...current,
                  email: event.target.value,
                }))
              }
              placeholder={t("you@company.com")}
              required
              type="email"
              value={form.email}
            />
          </label>
          <label className="font-dm col-span-full flex flex-col gap-2 text-xs text-zinc-200">
            {t("What services are you interested in?")}
            <textarea
              className={`${fieldClassName} min-h-[78px] resize-y py-3`}
              name="message"
              onChange={(event) =>
                setForm((current) => ({
                  ...current,
                  message: event.target.value,
                }))
              }
              placeholder={t("Tell us a little about your project")}
              required
              value={form.message}
            />
          </label>
          <motion.button
            className={`font-dm col-span-full mt-1 h-[39px] rounded-[4px] text-xs font-medium transition-[background-color,color,box-shadow] duration-150 focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-black focus-visible:outline-none ${
              isComplete
                ? "bg-zinc-100 text-zinc-900 shadow-[0_8px_22px_rgba(255,255,255,0.23)] hover:bg-white hover:shadow-[0_10px_28px_rgba(255,255,255,0.32)]"
                : "cursor-not-allowed bg-zinc-800 text-zinc-500"
            }`}
            disabled={!isComplete || status === "sending"}
            type="submit"
            whileHover={
              shouldReduceMotion || !isComplete || status === "sending"
                ? undefined
                : { scale: 1.01, y: -1 }
            }
            whileTap={
              shouldReduceMotion || !isComplete || status === "sending"
                ? undefined
                : { scale: 0.96 }
            }
          >
            {status === "sending" ? t("Sending...") : t("Submit")}
          </motion.button>
          <p
            aria-live="polite"
            className={`font-dm col-span-full text-center text-xs ${
              status === "error" ? "text-red-400" : "text-zinc-400"
            }`}
          >
            {status === "success" && t("Message sent successfully.")}
            {status === "error" && t("We couldn't send your message. Please try again.")}
          </p>
        </motion.form>
      </motion.div>
    </section>
  );
}
