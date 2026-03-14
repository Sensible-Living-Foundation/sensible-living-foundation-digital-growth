"use client";
import { useState } from "react";

const AMOUNTS = ["$25", "$50", "$100", "$250", "$500", "Other"];

export default function DonationForm() {
  const [freq, setFreq] = useState<"Give Once" | "Give Monthly">("Give Once");
  const [selected, setSelected] = useState("$50");

  return (
    <div className="card !p-10 sticky top-24">
      <h3 className="font-serif text-2xl font-bold text-slf-charcoal mb-6">Give Now</h3>

      {/* Frequency toggle */}
      <div className="grid grid-cols-2 gap-2 mb-5">
        {(["Give Once", "Give Monthly"] as const).map((opt) => (
          <button
            key={opt}
            onClick={() => setFreq(opt)}
            className="py-3 rounded text-sm font-display font-bold uppercase tracking-wide transition-all"
            style={
              freq === opt
                ? { background: "#FFCA0A", color: "#1A1A1A" }
                : { border: "2px solid #e5e7eb", color: "#6b7280" }
            }>
            {opt}
          </button>
        ))}
      </div>

      {/* Amount grid */}
      <div className="grid grid-cols-3 gap-2 mb-5">
        {AMOUNTS.map((amt) => (
          <button
            key={amt}
            onClick={() => setSelected(amt)}
            className="py-3 text-sm font-bold border-2 rounded transition-colors"
            style={
              selected === amt
                ? { borderColor: "#FFCA0A", background: "#FFFBEA", color: "#1A1A1A" }
                : { borderColor: "#e5e7eb", color: "#374151" }
            }>
            {amt}
          </button>
        ))}
      </div>

      <input type="text" placeholder="Full Name" className="input mb-3" />
      <input type="email" placeholder="Email Address" className="input mb-4" />

      <button className="btn-yellow w-full justify-center !rounded">
        Donate {selected !== "Other" ? selected : ""} {freq === "Give Monthly" ? "/ Month" : ""} →
      </button>
      <p className="text-center text-xs text-gray-400 mt-3">
        Secure · Tax-deductible · No fees via Givebutter
      </p>
    </div>
  );
}
