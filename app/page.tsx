"use client";

import { useEffect } from "react";
import Header from "./_components/Header";
import ParticlesComponent from "./_components/Particles";
import About from "./_sections/About";
import Hero from "./_sections/Hero";
import Intro from "./_sections/Intro";
import styles from "./styles.module.scss";
import Lenis from "@studio-freight/lenis";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  return (
    <main style={{ position: "relative", overflow: "hidden" }}>
      <ParticlesComponent />
      <div className={`${styles.glow} ${styles.glow2}`} />
      <Header />
      <Intro />
      <Hero />
      <About />
    </main>
  );
}
