"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const ZONAS = ["San Isidro", "Martínez", "Acassuso", "Beccar", "Boulogne", "Villa Adelina"];
const TIPOS = ["1 amb", "2 amb", "3 amb", "Casa"];

export default function SearchBar() {
  const router = useRouter();
  const [origin, setOrigin] = useState("San Isidro");
  const [dest, setDest] = useState("Martínez");
  const [homeType, setHomeType] = useState("2 amb");

  function onSearch() {
    const qs = new URLSearchParams({ origin, dest, homeType }).toString();
    router.push(`/resultados?${qs}`);
  }

  return (
    <div className="search-pill w-full max-w-4xl">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-2 p-2">
        <select className="search-field" value={origin} onChange={(e) => setOrigin(e.target.value)}>
          {ZONAS.map((z) => (
            <option key={z} value={z}>{`Origen: ${z}`}</option>
          ))}
        </select>

        <select className="search-field" value={dest} onChange={(e) => setDest(e.target.value)}>
          {ZONAS.map((z) => (
            <option key={z} value={z}>{`Destino: ${z}`}</option>
          ))}
        </select>

        <select className="search-field" value={homeType} onChange={(e) => setHomeType(e.target.value)}>
          {TIPOS.map((t) => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>

        <button onClick={onSearch} className="btn-primary w-full">
          Buscar
        </button>
      </div>
    </div>
  );
}
