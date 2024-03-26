"use client";

import Header from "./_components/Header";
import About from "./_sections/About";
import Hero from "./_sections/Hero";
import Intro from "./_sections/Intro";

export default function Home() {
  return (
    <main style={{ position: "relative", overflowX: "hidden" }}>
      <Header />
      <Intro />
      <Hero />
      <About />
    </main>
  );
}
