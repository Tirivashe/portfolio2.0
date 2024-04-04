"use client";
import {
  Stack,
  StackProps,
  Text,
  createPolymorphicComponent,
} from "@mantine/core";
import React, { useEffect, useMemo, useState } from "react";
import { Variants, motion, useScroll, useTransform } from "framer-motion";
import Logo from "../../_components/Logo";
import styles from "./styles.module.scss";
import CustomButton from "@/app/_components/CustomButton";
import { IconArrowUpRight } from "@tabler/icons-react";
import { useScramble } from "use-scramble";
const PStack = createPolymorphicComponent<"div", StackProps>(Stack);

const Hero = () => {
  const titles = useMemo(
    () => ["Software", "Web", "Mobile", "Front-end", "Full-stack"],
    []
  );
  const [currentTitle, setCurrentTitle] = useState(titles[0]);
  const { scrollY } = useScroll();
  const scale = useTransform(scrollY, [0, 800], [1, 0.6]);
  const { ref } = useScramble({
    text: currentTitle,
    speed: 0.8,
    scramble: 20,
  });
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
        delay: 2.6,
        ease: "easeOut",
        when: "beforeChildren",
      },
    },
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentTitle === titles[titles.length - 1]) {
        setCurrentTitle(titles[0]);
      } else {
        setCurrentTitle(titles[titles.indexOf(currentTitle) + 1]);
      }
    }, 4000);
    return () => clearInterval(interval);
  }, [titles, currentTitle]);

  return (
    <motion.section className={styles.container}>
      <PStack
        align="center"
        justify="center"
        gap="xs"
        px="md"
        pos="fixed"
        top={0}
        h="100vh"
        component={motion.div}
        variants={rootContainerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          style={{
            scale,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text ta="center" fz={{ base: 40, lg: 80, sm: 70, xs: 60 }}>
            Hi, I&apos;m{" "}
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
            <Text fw="inherit" ta="inherit" fz="inherit" span ref={ref} />{" "}
            Developer
          </Text>
          <Text
            fz={{ base: 15, md: 20, sm: 18 }}
            ta="center"
            w={{ md: "50%", xs: "60%" }}
            c="dimmed"
          >
            Passionate developer with experience in building user-friendly
            applications. Proficient in web, mobile and fullstack development
            and eager to tackle complex challenges. Let&apos;s create something
            amazing together!
          </Text>
          <CustomButton
            text="View Résumé"
            my="md"
            rightSection={<IconArrowUpRight />}
            size="xl"
            onClick={() => {
              window.open("/resume.pdf", "_blank");
            }}
          />
        </motion.div>
      </PStack>
    </motion.section>
  );
};

export default Hero;
