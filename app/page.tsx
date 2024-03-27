"use client";

import Header from "./_components/Header";
import ParticlesComponent from "./_components/Particles";
import About from "./_sections/About";
import Hero from "./_sections/Hero";
import Intro from "./_sections/Intro";
import styles from "./styles.module.scss";

export default function Home() {
  return (
    <main style={{ position: "relative", overflow: "hidden" }}>
      <ParticlesComponent />
      <div className={`${styles.glow} ${styles.glow1}`} />
      <div className={`${styles.glow} ${styles.glow2}`} />
      <Header />
      <Intro />
      <Hero />
      <About />
    </main>
  );
}
