"use client";
// Vanilla DOM/GSAP motion layer, ported verbatim from the prototype
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { services } from "@/data/services";
import { VIDEO_SRC, VIDEO_POSTER } from "@/data/site";

export default function Motion() {
  useEffect(() => {
    let dead = false;
    const $ = (s) => document.querySelector(s), $$ = (s) => [...document.querySelectorAll(s)];
    /* ===== MOTION ===== */
    const rm = matchMedia("(prefers-reduced-motion:reduce)").matches, fine = matchMedia("(hover:hover) and (min-width:901px)").matches;
    gsap.registerPlugin(ScrollTrigger);
    let l = null, tick = null; if (!rm) {
      l = new Lenis({ lerp: .09 }); l.on("scroll", ScrollTrigger.update); gsap.ticker.add(tick = t => l.raf(t * 1000)); gsap.ticker.lagSmoothing(0);
      $$('a[href^="#"]').forEach(a => a.onclick = e => { const t = a.getAttribute("href"); if (t.length > 1) { e.preventDefault(); l.scrollTo(t) } })
    }
    const nav = $("#nav"); addEventListener("scroll", () => nav.classList.toggle("s", scrollY > 80), { passive: true });
    const bg = $("#bg"), mn = $("#menu"); const tm = () => { bg.classList.toggle("on"); mn.classList.toggle("on"); document.body.style.overflow = mn.classList.contains("on") ? "hidden" : "" };
    bg.onclick = tm; $$("#menu a").forEach((a, i) => { a.style.transitionDelay = (.25 + i * .07) + "s"; a.addEventListener("click", () => mn.classList.contains("on") && tm()) });
    if (!rm) {
      gsap.from("#hero .ln>span", { yPercent: 110, duration: 1.3, ease: "expo.out", stagger: .1, delay: .2 });
      gsap.from(".shape", { scale: 0, duration: 1.4, ease: "elastic.out(1,.6)", stagger: .15, delay: .5 });
      gsap.timeline({ scrollTrigger: { trigger: "#hero", start: "top top", end: "+=100%", scrub: true, pin: true, pinSpacing: false } }).fromTo("#hm", { clipPath: "inset(0% 0% 0% 0% round 0px)" }, { clipPath: "inset(50% 50% 50% 50% round 24px)", ease: "power2.inOut", duration: 1 }, 0).to("#hero .lbl,#h1,.hsub", { y: "-40vh", opacity: 0, ease: "none", stagger: .04, duration: 1 }, 0);
      gsap.timeline({ scrollTrigger: { trigger: "#intro", start: "top top", end: "+=100%", scrub: true, pin: true, pinSpacing: false } })
        .to("#intro", { scale: .32, x: 20, y: 76, borderRadius: 28, transformOrigin: "0% 0%", ease: "power2.inOut", duration: 1 }, 0)
        .fromTo("#services", { scale: .32, x: -20, y: "-40vh", borderRadius: 28, transformOrigin: "100% 0%" }, { scale: 1, x: 0, y: 0, borderRadius: 0, ease: "power2.inOut", duration: 1 }, 0)
        .fromTo("#services", { opacity: 0 }, { opacity: 1, ease: "none", duration: .5 }, .25);
      $$(".shape").forEach(s => gsap.to(s, { y: () => +s.dataset.d * -6, ease: "none", scrollTrigger: { trigger: "#hero", start: "top top", end: "bottom top", scrub: true } }));
      $$("#intro .ln>span,#cta .ln>span").forEach(s => gsap.from(s, { yPercent: 110, duration: 1.1, ease: "expo.out", scrollTrigger: { trigger: s, start: "top 90%" } }));
      $$(".card,.gi,.st div").forEach(e => gsap.from(e, { y: 60, opacity: 0, duration: 1, ease: "power3.out", scrollTrigger: { trigger: e, start: "top 92%" } }));
      gsap.from(".col div", { scaleY: 0, transformOrigin: "bottom", duration: 1.2, stagger: .15, ease: "expo.out", scrollTrigger: { trigger: ".col", start: "top 85%" } });
      gsap.to(".col", { y: -50, ease: "none", scrollTrigger: { trigger: ".col", scrub: true } });
      gsap.fromTo("#vid", { width: "60%", borderRadius: 40 }, { width: "100%", borderRadius: 0, ease: "none", scrollTrigger: { trigger: "#vid", start: "top 85%", end: "top 15%", scrub: true } });
      gsap.to(".big", { xPercent: -8, ease: "none", scrollTrigger: { trigger: "footer", scrub: true } });
    }
    $$("#st b").forEach(b => { const n = +b.dataset.n, o = { v: 0 }; ScrollTrigger.create({ trigger: b, start: "top 90%", once: true, onEnter: () => gsap.to(o, { v: n, duration: rm ? 0 : 2, ease: "power2.out", onUpdate: () => b.textContent = Math.round(o.v) + b.dataset.s }) }) });
    $$(".ps").forEach(p => ScrollTrigger.create({ trigger: p, start: "top 70%", end: "bottom 30%", toggleClass: { targets: p, className: "on" } }));
    /* video placeholder controls */
    let pl = false, pg = 0; const vid = $("#vid"); vid.onclick = () => { pl = !pl; vid.classList.toggle("p", pl); $("#pl").textContent = pl ? "❚❚" : "▶"; $("#vp").textContent = pl ? "PAUSE" : "PLAY" };
    setInterval(() => { if (pl && !document.hidden) { pg = (pg + .5) % 100; $("#vb").style.width = pg + "%" } }, 100);
    /* gallery lightbox */
    const lb = $("#lb"); $$(".gi").forEach(g => g.onclick = () => { $("#lv").style.background = g.firstElementChild.style.background; $("#lt").textContent = g.dataset.n; lb.classList.add("on") });
    $("#lx").onclick = () => lb.classList.remove("on"); addEventListener("keydown", e => e.key === "Escape" && lb.classList.remove("on"));
    /* drag carousel */
    const tr = $("#tr"); let dn = false, sx = 0, sl = 0, vx = 0, lx = 0;
    tr.addEventListener("pointerdown", e => { if (e.pointerType !== "mouse") return; dn = true; sx = e.clientX; sl = tr.scrollLeft; tr.classList.add("d") });
    addEventListener("pointermove", e => { if (!dn) return; vx = e.clientX - lx; lx = e.clientX; tr.scrollLeft = sl - (e.clientX - sx) });
    addEventListener("pointerup", () => { if (!dn) return; dn = false; tr.classList.remove("d"); let v = -vx * 2; (function m() { tr.scrollLeft += v; v *= .93; if (Math.abs(v) > .5) requestAnimationFrame(m) })() });
    tr.addEventListener("dragstart", e => e.preventDefault());
    /* desktop only: cursor, preview, magnetic */
    if (fine) {
      const c = $("#cur"), pv = $("#pv"), cx = gsap.quickTo(c, "x", { duration: .25, ease: "power3" }), cy = gsap.quickTo(c, "y", { duration: .25, ease: "power3" }), px = gsap.quickTo(pv, "x", { duration: .6, ease: "power3" }), py = gsap.quickTo(pv, "y", { duration: .6, ease: "power3" });
      addEventListener("mousemove", e => {
        cx(e.clientX - c.offsetWidth / 2); cy(e.clientY - c.offsetHeight / 2); px(e.clientX + 30); py(e.clientY - 120);
        if (scrollY < innerHeight) $$(".shape").forEach(s => gsap.to(s, { x: (e.clientX / innerWidth - .5) * +s.dataset.d * 2, duration: 1.2, overwrite: "auto" }))
      });
      document.addEventListener("mouseover", e => { const t = e.target.closest("[data-cursor]"); const l = t ? t.dataset.cursor : ""; c.textContent = l; c.classList.toggle("b", !!l) });
      $$(".sv").forEach(r => { r.onmouseenter = () => { const s = services[r.dataset.i]; pv.style.background = s.bg; pv.textContent = s.title; gsap.to(pv, { opacity: 1, scale: 1, duration: .5, ease: "expo.out" }) }; r.onmouseleave = () => gsap.to(pv, { opacity: 0, scale: .6, duration: .3 }) });
      $$(".mag").forEach(b => { const x = gsap.quickTo(b, "x", { duration: .4, ease: "power3" }), y = gsap.quickTo(b, "y", { duration: .4, ease: "power3" }); b.onmousemove = e => { const r = b.getBoundingClientRect(); x((e.clientX - r.left - r.width / 2) * .35); y((e.clientY - r.top - r.height / 2) * .35) }; b.onmouseleave = () => { x(0); y(0) } })
    }
    /* ===== HERO BACKGROUND + PIXEL DISSOLVE ===== */
    (function () {
      const hero = $("#hero"), v = $("#hv"), fc = $("#hc"), fx = fc.getContext("2d");
      if (VIDEO_SRC) { v.poster = VIDEO_POSTER; v.src = VIDEO_SRC; v.onerror = () => v.remove(); v.play().catch(() => { }) } else v.remove();
      let vis = true; new IntersectionObserver(e => { vis = e[0].isIntersecting; if (v.isConnected) vis ? v.play().catch(() => { }) : v.pause() }).observe(hero);
      /* fallback animation (shows when no video is set) */
      fc.width = 320; fc.height = 180; const cols = ["255,77,31", "232,184,74", "255,138,99"];
      (function f(t) {
        if (dead) return; requestAnimationFrame(f); if (!vis || rm || document.hidden) return; fx.fillStyle = "#1b1b1a"; fx.fillRect(0, 0, 320, 180);
        cols.forEach((c, i) => { const x = 160 + Math.sin(t / 2200 + i * 2) * 120, y = 90 + Math.cos(t / 1800 + i * 3) * 55, g = fx.createRadialGradient(x, y, 0, x, y, 95); g.addColorStop(0, "rgba(" + c + ",.5)"); g.addColorStop(1, "rgba(" + c + ",0)"); fx.fillStyle = g; fx.fillRect(0, 0, 320, 180) })
      })(0);

    })();

    return () => { dead = true; tick && gsap.ticker.remove(tick); l && l.destroy(); ScrollTrigger.getAll().forEach((t) => t.kill(true)); };
  }, []);
  return null;
}
