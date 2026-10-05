import { clients } from "@/data/clients";
const row = [...clients, ...clients];
const Row = ({ id }) => (
  <div className="mt2" id={id}>
    {row.map((c, i) => (
      <div className="lg" key={i}>{c.logo ? <img src={c.logo} alt={c.name} loading="lazy" /> : c.name}</div>
    ))}
  </div>
);
export default function ClientCarousel() {
  return (
    <section id="clients" className="dark">
      <h2 className="h">Trusted by <span className="ac">30+</span> brands</h2>
      <div className="mq"><Row id="m1" /></div>
      <div className="mq r"><Row id="m2" /></div>
    </section>
  );
}
