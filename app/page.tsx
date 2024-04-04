"use client";

import { useEffect, useState } from "react";
import Header from "./_components/Header";
import ParticlesComponent from "./_components/Particles";
import About from "./_sections/About";
import Hero from "./_sections/Hero";
import Preloader from "./_sections/Preloader";
import styles from "./styles.module.scss";
import Lenis from "@studio-freight/lenis";
import Experience from "./_sections/Experience";
import Projects from "./_sections/Projects";
import Contact from "./_sections/Contact";
import { AnimatePresence } from "framer-motion";
import { Notifications } from "@mantine/notifications";

export default function Home() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setLoading(false);
      document.body.style.cursor = "default";
      window.scrollTo(0, 0);
    }, 2000);
    return () => clearTimeout(timeOut);
  }, []);

  return (
    <main className={styles.root}>
      <Notifications />
      <AnimatePresence mode="wait">{loading && <Preloader />}</AnimatePresence>
      <ParticlesComponent />
      <Header />
      <div className={styles["glow-container"]}>
        <div className={`${styles.glow} ${styles.glow2}`} />
      </div>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </main>
  );
}
