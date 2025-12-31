import SearchBar from "../components/SearchBar";

export default function Home() {
  return (
    <div className="py-10">
      <section className="text-center">
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
          Mudate.com
        </h1>
        <p className="text-gray-500 mt-3">
          Compará mudanceras y pedí presupuestos a varias en minutos.
        </p>

        <div className="mt-8 flex justify-center">
          <SearchBar />
        </div>

        <p className="text-xs text-gray-400 mt-4">
          Contacto recién al pedir presupuesto · Seleccioná 3 a 7
        </p>
      </section>

      <section className="mt-12 grid md:grid-cols-3 gap-4">
        {[
          { t: "Buscá", d: "Elegí origen y destino" },
          { t: "Seleccioná", d: "Marcá 3 a 7 mudanceras" },
          { t: "Enviá", d: "WhatsApp con mensaje armado" },
        ].map((x) => (
          <div key={x.t} className="card p-6 text-left">
            <p className="font-semibold">{x.t}</p>
            <p className="text-sm text-gray-500 mt-1">{x.d}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
