"use client";

import type { Mover } from "@/lib/data/movers-demo";
import { useSelectionStore } from "@/lib/store/useSelectionStore";

export default function MoverCard({ mover }: { mover: Mover }) {
  const { selectedIds, toggle } = useSelectionStore();
  const checked = selectedIds.includes(mover.id);

  return (
    <div className="card p-6 flex gap-5 relative">
      {mover.isVerified && (
        <span className="badge absolute top-3 left-3">Verificada</span>
      )}

      <div className="w-28 h-24 bg-gray-100 rounded-xl shrink-0" />

      <div className="flex-1">
        <div className="flex items-start justify-between gap-3">
          <div className="pr-2">
            <h3 className="font-semibold text-lg leading-tight">{mover.name}</h3>
            <p className="text-sm text-gray-500 mt-1">
              {mover.zones.join(" · ")}
            </p>
          </div>

          <div className="text-sm font-semibold text-right whitespace-nowrap">
            {mover.priceHint ?? "A coordinar"}
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mt-3">
          {mover.services.map((s) => (
            <span key={s} className="chip">
              {s}
            </span>
          ))}
        </div>

        <label className="flex items-center gap-2 mt-4 text-sm">
          <input
            type="checkbox"
            checked={checked}
            onChange={() => toggle(mover.id)}
          />
          Seleccionar
        </label>
      </div>
    </div>
  );
}
