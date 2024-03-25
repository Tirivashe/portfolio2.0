"use client";
import {
  Button,
  Stack,
  StackProps,
  Text,
  Title,
  createPolymorphicComponent,
} from "@mantine/core";
import React from "react";
import { Variants, motion } from "framer-motion";
import Logo from "../Logo";
import styles from "./styles.module.scss";
import ParticlesComponent from "../Particles";
const PStack = createPolymorphicComponent<"div", StackProps>(Stack);

const Hero = () => {
  const rootContainerVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 2.3,
        ease: "easeOut",
        when: "beforeChildren",
      },
    },
  };
  return (
    <section className={styles.container}>
      <ParticlesComponent />
      <div className={`${styles.glow} ${styles.glow1}`} />
      <div className={`${styles.glow} ${styles.glow2}`} />
      <PStack
        justify="center"
        align="center"
        gap="xs"
        px="md"
        w="100%"
        h="100%"
        component={motion.div}
        variants={rootContainerVariants}
        initial="hidden"
        animate="visible"
      >
        <Text ta="center" fz={{ base: 40, lg: 80, sm: 70, xs: 60 }}>
          I'm{" "}
          <Text
            span
            fz={{ base: 40, lg: 80, sm: 70, xs: 60 }}
            c="cyan"
            fw="bolder"
            ta="center"
          >
            Tirivashe
          </Text>
        </Text>
        <Text
          fz={{ base: 40, lg: 80, sm: 70, xs: 60 }}
          fw="bolder"
          ta="center"
          variant="gradient"
          gradient={{ from: "cyan", to: "rgba(255, 255, 255, 1)", deg: 180 }}
        >
          Software Developer
        </Text>
        <Text
          fz={{ base: 15, md: 20, sm: 18 }}
          ta="center"
          w={{ md: "50%", xs: "60%" }}
          c="dimmed"
        >
          I develop innovative solutions by identifying the problem that needs
          addressing and creating a meaningful experience that meets the needs
          of end-users, aligning it with the context in which the product will
          be used.
        </Text>
      </PStack>
    </section>
  );
};

export default Hero;
