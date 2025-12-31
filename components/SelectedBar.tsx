"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useSelectionStore } from "@/lib/store/useSelectionStore";

export default function SelectedBar() {
  const router = useRouter();
  const sp = useSearchParams();
  const { selectedIds } = useSelectionStore();

  if (selectedIds.length === 0) return null;

  const disabled = selectedIds.length < 3;

  const origin = sp.get("origin") ?? "";
  const dest = sp.get("dest") ?? "";
  const homeType = sp.get("homeType") ?? "";

  function goContact() {
    const qs = new URLSearchParams({ origin, dest, homeType }).toString();
    router.push(`/contacto?${qs}`);
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 border-t bg-white">
      <div className="container-app py-3 flex items-center justify-between">
        <div className="text-sm">
          <b>Seleccionadas:</b> {selectedIds.length} (min 3 · max 7)
        </div>

        <button
          className="btn-primary disabled:opacity-50"
          disabled={disabled}
          onClick={goContact}
        >
          Pedir presupuestos
        </button>
      </div>
    </div>
  );
}
