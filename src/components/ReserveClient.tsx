"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import ProductImage from "@/components/ProductImage";
import { MODELS, getModelById, type LuxarModel } from "@/lib/models";

export default function ReserveClient() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const paramId = searchParams.get("model");

  const resolveModel = useCallback(
    () => getModelById(paramId ?? "") ?? MODELS[0],
    [paramId],
  );

  const [active, setActive] = useState<LuxarModel>(resolveModel);
  const [reserved, setReserved] = useState(false);

  useEffect(() => {
    setActive(resolveModel());
    setReserved(false);
  }, [resolveModel]);

  const selectModel = (m: LuxarModel) => {
    setActive(m);
    setReserved(false);
    router.replace(`/reserve?model=${m.id}`, { scroll: false });
  };

  const onReserve = () => {
    setReserved(true);
    window.setTimeout(() => setReserved(false), 3000);
  };

  return (
    <div className="max-w-2xl mx-auto">
      {/* Hero image — updates per model */}
      <div className="relative rounded-2xl overflow-hidden min-h-[240px] md:min-h-[360px] mb-6 group">
        <ProductImage
          key={active.id}
          src={active.image}
          alt={`LUXAR ${active.title}`}
          priority
          sizes="(max-width: 768px) 100vw, 672px"
          className="transition-all duration-500 group-hover:scale-[1.03]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
        <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
          <div>
            <p className="font-mono text-[11px] tracking-widest text-secondary-fixed-dim uppercase mb-1">
              {active.tag}
            </p>
            <h2 className="font-display text-2xl md:text-3xl font-extrabold">
              {active.title}
            </h2>
          </div>
          <span className="font-mono text-lg text-primary-fixed-dim font-bold">
            {active.price}
          </span>
        </div>
      </div>

      {/* Model picker — image thumbnails */}
      <div className="flex gap-3 overflow-x-auto pb-2 mb-8 scrollbar-hide">
        {MODELS.map((m) => (
          <button
            key={m.id}
            type="button"
            onClick={() => selectModel(m)}
            className={`shrink-0 w-28 rounded-lg overflow-hidden border-2 transition-all ${
              active.id === m.id
                ? "border-primary-fixed-dim scale-105 shadow-[0_0_20px_rgba(59,130,246,0.3)]"
                : "border-white/10 opacity-50 hover:opacity-100 hover:border-white/30"
            }`}
          >
            <div className="relative aspect-[4/3]">
              <ProductImage src={m.image} alt={m.title} sizes="112px" />
            </div>
            <p
              className={`font-mono text-[10px] tracking-wider py-2 text-center ${
                active.id === m.id
                  ? "text-primary-fixed-dim bg-primary-fixed-dim/10"
                  : "text-on-surface-variant bg-white/[0.03]"
              }`}
            >
              {m.title}
            </p>
          </button>
        ))}
      </div>

      <div className="glass-card rounded-2xl p-6 md:p-8">
        <div className="grid grid-cols-3 gap-4 mb-8">
          <div className="text-center p-4 rounded-lg bg-white/[0.03] border border-white/10">
            <p className="font-mono text-[10px] text-white/40 uppercase tracking-widest mb-1">
              Price
            </p>
            <p className="font-display text-lg font-bold text-primary-fixed-dim">
              {active.price}
            </p>
          </div>
          <div className="text-center p-4 rounded-lg bg-white/[0.03] border border-white/10">
            <p className="font-mono text-[10px] text-white/40 uppercase tracking-widest mb-1">
              Range
            </p>
            <p className="font-display text-lg font-bold">{active.range}</p>
          </div>
          <div className="text-center p-4 rounded-lg bg-white/[0.03] border border-white/10">
            <p className="font-mono text-[10px] text-white/40 uppercase tracking-widest mb-1">
              Power
            </p>
            <p className="font-display text-lg font-bold">{active.power}</p>
          </div>
        </div>

        <p className="font-body text-sm text-on-surface-variant mb-6">
          {active.body}
        </p>

        <p className="font-mono text-xs text-white/40 tracking-widest uppercase mb-3">
          $2,500 refundable deposit · {active.label}
        </p>

        <button
          type="button"
          onClick={onReserve}
          className={`btn-hover w-full px-8 py-4 rounded-xl font-mono text-sm font-bold tracking-wider transition-all ${
            reserved
              ? "bg-primary-fixed text-on-primary"
              : "bg-primary-fixed-dim text-on-primary hover:scale-[1.02] hover:shadow-[0_0_25px_rgba(59,130,246,0.4)]"
          }`}
        >
          {reserved
            ? "RESERVATION PLACED ✓"
            : `RESERVE ${active.title}`}
        </button>
      </div>
    </div>
  );
}
