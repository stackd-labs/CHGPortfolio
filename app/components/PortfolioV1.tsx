// V1: the original scrolling portfolio, kept so we can switch back.
// Served at /v1. To make it the home page again, render it from app/page.tsx.
import Nav from "./Nav";
import Hero from "./Hero";
import Marquee from "./Marquee";
import About from "./About";
import Work from "./Work";
import Services from "./Services";
import TechStack from "./TechStack";
import Contact from "./Contact";
import Footer from "./Footer";
import ScrollProgress from "./ScrollProgress";
import CursorFollower from "./CursorFollower";
import Grain from "./Grain";

export function PortfolioV1() {
  return (
    <>
      <Grain />
      <CursorFollower />
      <main className="relative">
        <ScrollProgress />
        <Nav />
        <Hero />
        <Marquee />
        <About />
        <Work />
        <Services />
        <TechStack />
        <Contact />
        <Footer />
      </main>
    </>
  );
}


