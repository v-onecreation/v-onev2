export default function Navbar() {
  return (
    <>
<nav id="nav"><a className="logo" href="#" data-cursor="">FRAME<i>&amp;</i>CO</a>
<div className="links lbl"><a href="#work">Work</a><a href="#services">Services</a><a href="#about">About</a><a href="#clients">Clients</a><a href="#contact">Contact</a><a className="btn mag" href="#contact" data-cursor="LET'S TALK">Start a project</a></div>
<button className="burger" id="bg" aria-label="Menu"><i></i><i></i></button></nav><div className="menu" id="menu"><a href="#work">Work</a><a href="#services">Services</a><a href="#about">About</a><a href="#clients">Clients</a><a href="#contact" className="ac">Contact</a></div>
    </>
  );
}
