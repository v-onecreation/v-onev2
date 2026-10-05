import { stats } from "@/data/stats";
export default function Stats() {
  return (
    <section id="stats">
      <div className="st" id="st">
        {stats.map((s) => (
          <div key={s.label}><b data-n={s.value} data-s={s.suffix}>{"0" + s.suffix}</b><span className="lbl">{s.label}</span></div>
        ))}
      </div>
    </section>
  );
}
