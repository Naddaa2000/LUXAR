"use client";

import { useState } from "react";

type Status = "idle" | "error" | "success";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const value = email.trim();
    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

    if (!valid) {
      setStatus("error");
      setMessage("INVALID EMAIL :: PLEASE CHECK AND TRY AGAIN");
      return;
    }

    setStatus("success");
    setMessage(`WAITLIST CONFIRMED :: ${value.toUpperCase()}`);
    setEmail("");
  };

  return (
    <div className="w-full">
      <form
        onSubmit={onSubmit}
        className="glass-card p-2 rounded-2xl flex flex-col md:flex-row gap-2"
      >
        <input
          type="email"
          inputMode="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (status !== "idle") setStatus("idle");
          }}
          placeholder="ENTER_YOUR_EMAIL"
          aria-label="Email address"
          className="flex-grow bg-transparent border-none outline-none focus:ring-0 px-6 py-4 font-mono text-sm text-primary-fixed-dim placeholder:text-white/20"
        />
        <button
          type="submit"
          className="btn-hover bg-primary-fixed-dim text-on-primary px-8 py-4 rounded-xl font-mono text-[13px] font-bold tracking-wider transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_25px_rgba(59,130,246,0.4)]"
        >
          JOIN WAITLIST
        </button>
      </form>
      <p
        aria-live="polite"
        className={`mt-4 font-mono text-xs tracking-[0.15em] min-h-[1rem] transition-colors ${
          status === "error"
            ? "text-error"
            : status === "success"
              ? "text-primary-fixed-dim"
              : "text-white/30"
        }`}
      >
        {status === "idle"
          ? "DELIVERIES BEGINNING Q3 2026"
          : message}
      </p>
    </div>
  );
}
