import { services } from "@/data/services";
export default function Services() {
  return (
    <section id="services" className="dark">
      <div className="lbl" style={{ marginBottom: 40 }}>( What we do )</div>
      <div id="sl">
        {services.map((s, i) => (
          <div className="sv" data-i={i} key={s.title}>
            <b>{String(i + 1).padStart(2, "0")} —</b><h3>{s.title}</h3><small>{s.blurb}</small><em>→</em>
          </div>
        ))}
      </div>
    </section>
  );
}
