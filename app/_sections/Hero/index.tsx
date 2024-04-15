"use client";
import {
  ActionIcon,
  Flex,
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
import { IconArrowUpRight, IconDownload } from "@tabler/icons-react";
import { useScramble } from "use-scramble";
import { useMediaQuery } from "@mantine/hooks";
const PStack = createPolymorphicComponent<"div", StackProps>(Stack);

const Hero = () => {
  const titles = useMemo(
    () => ["Software", "Web", "Mobile", "Frontend", "Fullstack"],
    []
  );
  const isMobile = useMediaQuery("(max-width: 765px)");
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
    <motion.section className={styles.container} id="home">
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
          <Flex
            gap={isMobile ? "0" : "md"}
            direction={isMobile ? "column" : "row"}
          >
            <Text
              fz={{ base: 40, lg: 80, sm: 70, xs: 60 }}
              fw="bolder"
              ta="center"
              variant="gradient"
              gradient={{
                from: "cyan",
                to: "aliceblue",
                deg: 90,
              }}
              ref={ref}
            />{" "}
            <Text
              fz={{ base: 40, lg: 80, sm: 70, xs: 60 }}
              fw="bolder"
              ta="center"
              variant="gradient"
              gradient={{
                from: "cyan",
                to: "aliceblue",
                deg: 270,
              }}
            >
              Developer
            </Text>
          </Flex>
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
          <Flex gap="md" justify="center" align="center" px="xs">
            <CustomButton
              text="View Résumé"
              my="md"
              rightSection={<IconArrowUpRight />}
              size="xl"
              onClick={() => {
                window.open("/resume.pdf", "_blank");
              }}
            />
            <ActionIcon
              size="3.8rem"
              radius="xl"
              component={motion.a}
              whileHover={{
                backgroundColor: "#64bbcd",
                scale: 1.1,
                transition: {
                  duration: 0.1,
                  ease: "easeInOut",
                },
              }}
              whileTap={{
                scale: 0.9,
              }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              style={{ backgroundColor: "var(--mantine-color-gray-9)" }}
              href="/resume.pdf"
              download
            >
              <IconDownload size="1.7rem" />
            </ActionIcon>
          </Flex>
        </motion.div>
      </PStack>
    </motion.section>
  );
};

export default Hero;
