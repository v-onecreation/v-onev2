import { gallery } from "@/data/gallery";
export default function CreativeGallery() {
  return (
    <>
      <section id="gal">
        <h2 className="h">Made to<br /><span className="ac">be seen.</span></h2>
        <div className="gg" id="gg">
          {gallery.map((g) => (
            <div className={`gi ${g.span}`} data-n={g.label} data-cursor="VIEW" key={g.label}>
              <div style={{ background: g.bg }}><span>{g.label}</span></div>
            </div>
          ))}
        </div>
      </section>
      <div id="lb"><button id="lx">Close ✕</button><div className="v" id="lv" /><div className="lbl" id="lt" /></div>
    </>
  );
}
