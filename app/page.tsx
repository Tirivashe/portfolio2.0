"use client";
import Intro from "./_components/Intro";
import Hero from "./_components/Hero";
import Header from "./_components/Header";

export default function Home() {
  return (
    <main style={{ position: "relative", overflowX: "hidden" }}>
      <Header />
      <Intro />
      <Hero />
    </main>
  );
}
