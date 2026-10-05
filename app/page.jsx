import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import Services from "@/components/Services";
import FeaturedWork from "@/components/FeaturedWork";
import ClientCarousel from "@/components/ClientCarousel";
import CreativeGallery from "@/components/CreativeGallery";
import MotionShowcase from "@/components/MotionShowcase";
import Stats from "@/components/Stats";
import About from "@/components/About";
import Process from "@/components/Process";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Motion from "@/components/Motion";

export default function Page() {
  return (
    <>
      <div id="cur" /><div id="pv" />
      <Navbar /><Hero /><Intro /><Services /><FeaturedWork /><ClientCarousel /><CreativeGallery />
      <MotionShowcase /><Stats /><About /><Process /><CTA /><Footer />
      <Motion />
    </>
  );
}
