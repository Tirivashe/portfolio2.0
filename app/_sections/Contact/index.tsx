import React, { useEffect, useMemo, useRef, useState } from "react";
import styles from "./styles.module.scss";
import {
  Avatar,
  Center,
  Flex,
  Grid,
  Group,
  Space,
  Stack,
  Text,
} from "@mantine/core";
import InfiniteScrollingText from "@/app/_components/InfiniteScrollingText";
import { socials } from "@/app/_constants";
import { motion, useScroll, useTransform } from "framer-motion";
import ContactForm from "@/app/_components/ContactForm";
import MagneticElement from "@/app/_components/MagneticElement";
import Link from "next/link";
import { useScramble } from "use-scramble";

type Props = {};

const Contact = (props: Props) => {
  const titles = useMemo(
    () => ["Connect", "Chat", "Engage", "Collaborate"],
    []
  );
  const [currentTitle, setCurrentTitle] = useState(titles[0]);
  const { ref } = useScramble({
    text: currentTitle,
    speed: 1,
    scramble: 50,
    seed: 0,
    tick: 1,
    overflow: true,
    chance: 0.9,
    ignore: [" ", "!", "?", "_", "-", "{", "}"],
  });
  const rootRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: rootRef,
    offset: ["start end", "start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-680, 0]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentTitle === titles[titles.length - 1]) {
        setCurrentTitle(titles[0]);
      } else {
        setCurrentTitle(titles[titles.indexOf(currentTitle) + 1]);
      }
    }, 8000);
    return () => clearInterval(interval);
  }, [titles, currentTitle]);
  return (
    <motion.footer
      className={styles["root"]}
      ref={rootRef}
      style={{ y }}
      id="contact"
    >
      <Space h={20} />
      <InfiniteScrollingText
        text="Get in touch"
        textStrokeColor="#00000080"
        textSize="5rem"
      />
      <Space h={30} />
      <div className={styles["glow"]} />
      <Grid px={{ base: "1rem", md: "5rem" }} py="1rem" gutter="lg">
        <Grid.Col span={{ base: 12, md: 6 }}>
          <Stack gap="3rem">
            <Stack gap="0.5rem">
              <Group gap="lg" align="center">
                <Text span size="3.8rem" fw="bold">
                  Let&apos;s
                </Text>
                <MagneticElement>
                  <Avatar
                    component={motion.div}
                    src="/images/headshot.jpg"
                    size="xl"
                    whileHover={{
                      scale: 1.5,
                      transition: {
                        type: "spring",
                        stiffness: 800,
                        damping: 10,
                        duration: 0.2,
                      },
                    }}
                  />
                </MagneticElement>
              </Group>
              <Group>
                <Text
                  span
                  size="3.5rem"
                  fw="bold"
                  className={styles["connect-text"]}
                  ref={ref}
                ></Text>
              </Group>
            </Stack>
            <Text
              size="xl"
              ta={{ base: "center", xs: "start" }}
              w={{ base: "100%", xs: "max-content" }}
              href="mailto:shaymusts@gmail.com"
              component={motion.a}
              style={{
                cursor: "pointer",
              }}
              whileHover={{
                color: "#64bbcd",
                transition: {
                  duration: 0.5,
                },
              }}
            >
              shaymusts@gmail.com
            </Text>
            <Flex
              direction="row"
              gap="lg"
              justify={{ base: "center", xs: "start" }}
              align="center"
            >
              {socials.map((social) => (
                <MagneticElement key={social.name}>
                  <Center
                    key={social.name}
                    component={Link}
                    href={social.url}
                    target="_blank"
                    className={styles["icon"]}
                  >
                    <social.icon size="1.5rem" />
                  </Center>
                </MagneticElement>
              ))}
            </Flex>
          </Stack>
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 6 }}>
          <ContactForm />
        </Grid.Col>
      </Grid>
    </motion.footer>
  );
};

export default Contact;
