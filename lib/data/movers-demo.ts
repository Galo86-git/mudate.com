export type Mover = {
  id: string;
  name: string;
  zones: string[];
  services: string[];
  priceHint?: string;
  isVerified?: boolean;
};

export const moversDemo: Mover[] = [
  {
    id: "1",
    name: "Mudanzas Zona Norte",
    zones: ["San Isidro", "Martínez", "Acassuso"],
    services: ["Flete", "Embalaje"],
    priceHint: "Desde $180.000",
    isVerified: true,
  },
  {
    id: "2",
    name: "Fletes Martínez Express",
    zones: ["Martínez", "Beccar"],
    services: ["Flete", "Desarme/Montaje"],
    priceHint: "A coordinar",
    isVerified: true,
  },
  {
    id: "3",
    name: "Mudanzas Beccar Pro",
    zones: ["Beccar", "Villa Adelina"],
    services: ["Flete", "Embalaje", "Escalera"],
    priceHint: "Desde $200.000",
    isVerified: false,
  },
  {
    id: "4",
    name: "Mudanzas Acassuso Team",
    zones: ["Acassuso", "San Isidro"],
    services: ["Flete"],
    priceHint: "A coordinar",
    isVerified: false,
  },
  {
    id: "5",
    name: "Fletes Boulogne Norte",
    zones: ["Boulogne", "Villa Adelina", "San Isidro"],
    services: ["Flete", "Embalaje"],
    priceHint: "Desde $160.000",
    isVerified: true,
  },
  {
    id: "6",
    name: "Mudanzas Villa Adelina Plus",
    zones: ["Villa Adelina", "Martínez"],
    services: ["Flete", "Desarme/Montaje"],
    priceHint: "A coordinar",
    isVerified: false,
  },
  {
    id: "7",
    name: "Mudanzas San Isidro Premium",
    zones: ["San Isidro", "Acassuso", "Martínez"],
    services: ["Flete", "Embalaje", "Escalera"],
    priceHint: "Desde $220.000",
    isVerified: true,
  },
  {
    id: "8",
    name: "Fletes Zona Norte 24hs",
    zones: ["San Isidro", "Beccar", "Boulogne"],
    services: ["Flete"],
    priceHint: "A coordinar",
    isVerified: false,
  },
  {
    id: "9",
    name: "Mudanzas Martínez Hogar",
    zones: ["Martínez", "San Isidro"],
    services: ["Flete", "Embalaje"],
    priceHint: "Desde $190.000",
    isVerified: true,
  },
  {
    id: "10",
    name: "Fletes Norte Familiar",
    zones: ["Beccar", "Villa Adelina", "Boulogne"],
    services: ["Flete"],
    priceHint: "A coordinar",
    isVerified: false,
  },
];
