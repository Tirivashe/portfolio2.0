import { Space, Stack, Text, Title, Tooltip } from "@mantine/core";
import React, { useRef } from "react";
import styles from "./styles.module.scss";
import { motion, useScroll, useTransform } from "framer-motion";
import Marquee from "react-fast-marquee";
import { technicalSkills } from "@/app/_constants";
import Image from "next/image";

type Props = {};

const TechnicalSkills = (props: Props) => {
  const rootRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: rootRef,
    offset: ["start end", "end start"],
  });

  const leftToRight = useTransform(scrollYProgress, [0, 0.3], ["-100%", "0%"]);
  const rightToLeft = useTransform(scrollYProgress, [0, 0.3], ["100%", "0%"]);

  return (
    <Stack
      className={styles.root}
      align="center"
      my="5rem"
      ref={rootRef}
      gap="10px"
    >
      <Text
        component={motion.p}
        fw="bold"
        fz={{ base: "2rem", sm: "2.5rem", md: "3rem", lg: "3.5rem" }}
        style={{
          x: leftToRight,
        }}
      >
        Technical
      </Text>
      <Text
        component={motion.p}
        fw="bold"
        fz={{ base: "2rem", sm: "2.5rem", md: "3rem", lg: "3.5rem" }}
        style={{
          x: rightToLeft,
        }}
      >
        Skills
      </Text>
      <Space h="20px" />
      <Marquee autoFill>
        {technicalSkills.slice(0, technicalSkills.length / 2).map((skill) => (
          <Tooltip key={skill.id} label={skill.name}>
            <Image
              src={skill.icon}
              alt={skill.name}
              width={100}
              height={100}
              style={{ margin: "0 100px" }}
            />
          </Tooltip>
        ))}
      </Marquee>
      <Space h="20px" />
      <Marquee autoFill direction="right">
        {technicalSkills.slice(technicalSkills.length / 2).map((skill) => (
          <Tooltip key={skill.id} label={skill.name}>
            <Image
              src={skill.icon}
              alt={skill.name}
              width={100}
              height={100}
              style={{ margin: "0 100px" }}
            />
          </Tooltip>
        ))}
      </Marquee>
    </Stack>
  );
};

export default TechnicalSkills;
