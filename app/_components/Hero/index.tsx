"use client";
import {
  Button,
  Stack,
  StackProps,
  Text,
  createPolymorphicComponent,
} from "@mantine/core";
import React from "react";
import { motion } from "framer-motion";
import Logo from "../Logo";
import styles from "./styles.module.scss";
import ParticlesComponent from "../Particles";
const PStack = createPolymorphicComponent<"div", StackProps>(Stack);

const Hero = () => {
  return (
    <section className={styles.container}>
      <ParticlesComponent />
      <Text c="white">I am some text</Text>
      <div className={`${styles.glow} ${styles.glow1}`} />
      <div className={`${styles.glow} ${styles.glow2}`} />
    </section>
  );
};

export default Hero;
