/* Add real logos: { name: "Acme", logo: "/logos/acme.svg" } */
export const clients = Array.from({ length: 30 }, (_, i) => ({ name: "Client Logo " + String(i + 1).padStart(2, "0") }));
