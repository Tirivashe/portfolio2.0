import InfiniteScrollingText from "@/app/_components/InfiniteScrollingText";
import { Group, Space, Stack, Text, Title } from "@mantine/core";
import React, { useRef } from "react";
import styles from "./styles.module.scss";
import { useScroll, useTransform, motion, Variants } from "framer-motion";
import { projects } from "@/app/_constants";
import ProjectCard from "@/app/_components/ProjectCard";

type Props = {};

const Projects = (props: Props) => {
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-50%"]);

  const textVariants: Variants = {
    initial: {
      opacity: 0,
      y: 30,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section className={styles["root"]}>
      <Space h={200} />
      <InfiniteScrollingText text="My Projects" textStrokeColor="#ffffff50" />
      <Space h={100} />
      <div
        style={{
          height: "200vh",
        }}
        ref={scrollRef}
      >
        <div
          style={{
            position: "sticky",
            top: 0,
            height: "100vh",
            display: "flex",
            alignItems: "center",
            overflow: "hidden",
          }}
        >
          <Group px="lg">
            <motion.div
              style={{
                x,
                display: "flex",
                gap: "10rem",
                width: "max-content",
              }}
            >
              <Stack maw="500px">
                <Text
                  mb={-20}
                  fz="70px"
                  component={motion.span}
                  initial="initial"
                  whileInView="animate"
                  transition={{ staggerChildren: 0.05 }}
                >
                  {"Current".split("").map((char, index) => (
                    <motion.span
                      key={char + index}
                      style={{ display: "inline-block" }}
                      variants={textVariants}
                    >
                      {char}
                    </motion.span>
                  ))}
                </Text>
                <Text
                  mt={-20}
                  fz="70px"
                  component={motion.span}
                  initial="initial"
                  whileInView="animate"
                  transition={{ staggerChildren: 0.1, delay: 0.5 }}
                >
                  {"Works".split("").map((char, index) => (
                    <motion.span
                      key={char + index}
                      style={{ display: "inline-block" }}
                      variants={textVariants}
                    >
                      {char}
                    </motion.span>
                  ))}
                </Text>
                <Text
                  c="dimmed"
                  component={motion.span}
                  initial="initial"
                  whileInView="animate"
                  transition={{ staggerChildren: 0.02, delay: 0.5 }}
                >
                  {"Here's a section with a curated list of projects showcasing my expertise in web/software development."
                    .split(" ")
                    .map((char, index) => (
                      <motion.span
                        key={char + index}
                        style={{ display: "inline-block", margin: "0 2px" }}
                        variants={textVariants}
                      >
                        {char}
                      </motion.span>
                    ))}
                </Text>
              </Stack>
              {projects.map((project) => (
                <React.Fragment key={project.id}>
                  <ProjectCard project={project} />
                </React.Fragment>
              ))}
            </motion.div>
          </Group>
        </div>
      </div>
      <div style={{ height: "50vh" }}></div>
    </section>
  );
};

/**\
 * 
 * 
 * <Stack w="25%" mr="lg">
          <Text mb={-20} fz="70px">
            Current
          </Text>
          <Text mt={-20} fz="70px">
            Works
          </Text>
          <Text c="dimmed">
            I&apos;ve played a key role in developing impactful projects.
            Here&apos;s a curated selection showcasing my expertise and the
            achieved results.
          </Text>
        </Stack>
 */

export default Projects;
