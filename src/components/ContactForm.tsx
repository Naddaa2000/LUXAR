"use client";

import { useState } from "react";

type Fields = {
  name: string;
  email: string;
  company: string;
  seats: string;
  message: string;
};

const EMPTY: Fields = {
  name: "",
  email: "",
  company: "",
  seats: "10-50",
  message: "",
};

export default function ContactForm() {
  const [fields, setFields] = useState<Fields>(EMPTY);
  const [errors, setErrors] = useState<Partial<Record<keyof Fields, string>>>(
    {},
  );
  const [submitted, setSubmitted] = useState(false);

  const update =
    (key: keyof Fields) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >,
    ) => {
      setFields((prev) => ({ ...prev, [key]: e.target.value }));
      setErrors((prev) => ({ ...prev, [key]: undefined }));
    };

  const validate = () => {
    const next: Partial<Record<keyof Fields, string>> = {};
    if (!fields.name.trim()) next.name = "Required";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email.trim()))
      next.email = "Enter a valid email";
    if (!fields.company.trim()) next.company = "Required";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="glass-card rounded-2xl p-10 max-w-2xl mx-auto text-center">
        <div className="text-primary-fixed-dim text-4xl mb-4">◈</div>
        <h3 className="font-display text-2xl font-semibold mb-3">
          REQUEST RECEIVED
        </h3>
        <p className="font-body text-on-surface-variant mb-6">
          Thanks {fields.name.split(" ")[0] || "there"} — our fleet team will
          reach out at {fields.email} within one business day.
        </p>
        <button
          type="button"
          onClick={() => {
            setFields(EMPTY);
            setSubmitted(false);
          }}
          className="btn-hover font-mono text-[13px] tracking-wider text-primary-fixed-dim border border-primary-fixed-dim/40 rounded-xl px-6 py-3 hover:bg-primary-fixed-dim/10 transition-colors"
        >
          SEND_ANOTHER
        </button>
      </div>
    );
  }

  const inputBase =
    "w-full bg-white/[0.03] border border-white/10 rounded-lg px-4 py-3 font-body text-sm text-on-surface outline-none transition-all focus:border-primary-fixed-dim focus:shadow-[0_0_20px_rgba(0,219,233,0.15)] placeholder:text-white/25";

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="glass-card rounded-2xl p-6 md:p-8 max-w-2xl mx-auto flex flex-col gap-5"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <label className="flex flex-col gap-2">
          <span className="font-mono text-[11px] tracking-widest uppercase text-on-surface-variant">
            Name
          </span>
          <input
            className={inputBase}
            value={fields.name}
            onChange={update("name")}
            placeholder="Ada Lovelace"
          />
          {errors.name && (
            <span className="font-mono text-[11px] text-error">
              {errors.name}
            </span>
          )}
        </label>

        <label className="flex flex-col gap-2">
          <span className="font-mono text-[11px] tracking-widest uppercase text-on-surface-variant">
            Work Email
          </span>
          <input
            type="email"
            className={inputBase}
            value={fields.email}
            onChange={update("email")}
            placeholder="ada@fleet.io"
          />
          {errors.email && (
            <span className="font-mono text-[11px] text-error">
              {errors.email}
            </span>
          )}
        </label>

        <label className="flex flex-col gap-2">
          <span className="font-mono text-[11px] tracking-widest uppercase text-on-surface-variant">
            Company
          </span>
          <input
            className={inputBase}
            value={fields.company}
            onChange={update("company")}
            placeholder="Analytical Engines Ltd"
          />
          {errors.company && (
            <span className="font-mono text-[11px] text-error">
              {errors.company}
            </span>
          )}
        </label>

        <label className="flex flex-col gap-2">
          <span className="font-mono text-[11px] tracking-widest uppercase text-on-surface-variant">
            Fleet Size
          </span>
          <select
            className={`${inputBase} appearance-none`}
            value={fields.seats}
            onChange={update("seats")}
          >
            <option value="10-50">10 – 50</option>
            <option value="50-250">50 – 250</option>
            <option value="250-1000">250 – 1,000</option>
            <option value="1000+">1,000+</option>
          </select>
        </label>
      </div>

      <label className="flex flex-col gap-2">
        <span className="font-mono text-[11px] tracking-widest uppercase text-on-surface-variant">
          Message
        </span>
        <textarea
          rows={4}
          className={`${inputBase} resize-none`}
          value={fields.message}
          onChange={update("message")}
          placeholder="Tell us about your deployment..."
        />
      </label>

      <button
        type="submit"
        className="btn-hover w-full bg-primary-fixed-dim text-on-primary px-8 py-4 rounded-xl font-mono text-[13px] font-bold tracking-wider transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_25px_rgba(0,219,233,0.4)]"
      >
        TRANSMIT REQUEST
      </button>
    </form>
  );
}
