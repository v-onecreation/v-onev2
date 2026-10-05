import { projects } from "@/data/projects";
export default function FeaturedWork() {
  return (
    <section id="work">
      <div className="whead"><h2 className="h">Selected<br />work</h2><span className="lbl">Drag / swipe →</span></div>
      <div className="track" id="tr" data-cursor="DRAG">
        {projects.map((p, i) => (
          <article className="card" data-cursor="DRAG" key={p.title}>
            <div className="im">
              <div style={{ background: p.bg }}>{String(i + 1).padStart(2, "0")}</div>
              <div className="ov">{p.desc} →</div>
            </div>
            <div className="mt">
              <div><span className="lbl">{p.category} · {p.year}</span><h3>{p.title}</h3></div>
              <span className="lbl">{p.client}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
