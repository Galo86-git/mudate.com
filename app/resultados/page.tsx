import { moversDemo } from "@/lib/data/movers-demo";
import MoverCard from "@/components/MoverCard";
import SelectedBar from "@/components/SelectedBar";

type Props = {
  searchParams?: { origin?: string; dest?: string; homeType?: string };
};

export default function Resultados({ searchParams }: Props) {
  const origin = searchParams?.origin ?? "San Isidro";
  const dest = searchParams?.dest ?? "Martínez";

  // filtro simple: solo mudanceras que cubren origen y destino
  const filtered = moversDemo.filter(
    (m) => m.zones.includes(origin) && m.zones.includes(dest)
  );

  // ranking simple: verificadas primero, luego las que tienen precio "Desde ..."
  const ranked = [...filtered].sort((a, b) => {
    const av = a.isVerified ? 1 : 0;
    const bv = b.isVerified ? 1 : 0;
    if (bv !== av) return bv - av;

    const ap = a.priceHint && a.priceHint !== "A coordinar" ? 1 : 0;
    const bp = b.priceHint && b.priceHint !== "A coordinar" ? 1 : 0;
    return bp - ap;
  });

  return (
    <div className="pb-24">
      <div className="flex items-end justify-between gap-4 mb-6">
        <div>
          <h1 className="text-2xl font-semibold">
            Mudanzas: {origin} → {dest}
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Seleccioná entre 3 y 7 mudanceras y pedí presupuestos por WhatsApp.
          </p>
        </div>

        <div className="hidden md:block text-sm text-gray-500">
          Orden: verificadas primero
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-4">
          {ranked.length === 0 ? (
            <div className="card p-6">
              <p className="font-semibold">No hay mudanceras para ese trayecto</p>
              <p className="text-sm text-gray-500 mt-1">
                Probá otra combinación de origen/destino.
              </p>
            </div>
          ) : (
            ranked.map((m) => <MoverCard key={m.id} mover={m} />)
          )}
        </div>

        <aside className="lg:col-span-1">
          <div className="card p-4 sticky top-24">
            <div className="h-64 bg-gray-100 rounded-xl flex items-center justify-center text-sm text-gray-500">
              Mapa (próximamente)
            </div>
            <p className="text-xs text-gray-400 mt-3">
              MVP: primero listamos y conectamos por WhatsApp.
            </p>
          </div>
        </aside>
      </div>

      <SelectedBar />
    </div>
  );
}
