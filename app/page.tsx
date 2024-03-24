"use client";
import { Stack, StackProps, createPolymorphicComponent } from "@mantine/core";
import Intro from "./_components/Intro";
import Hero from "./_components/Hero";
const PStack = createPolymorphicComponent<"div", StackProps>(Stack);

export default function Home() {
  return (
    <main style={{ position: "relative" }}>
      <Intro />
      {/* <Hero /> */}
    </main>
  );
}
