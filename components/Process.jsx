import { steps } from "@/data/stats";
export default function Process() {
  return (
    <section id="process" className="dark">
      <div className="lbl">( Process )</div>
      <div className="pr" id="pr">
        {steps.map((s, i) => (
          <div className="ps" key={s}><b>{String(i + 1).padStart(2, "0")}</b><h4 className="lbl">{s}</h4></div>
        ))}
      </div>
    </section>
  );
}
