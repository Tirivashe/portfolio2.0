import React, { useRef } from "react";
import styles from "./styles.module.scss";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  IconBuilding,
  IconCalendar,
  IconMapPin,
  IconPoint,
} from "@tabler/icons-react";
import { experience } from "@/app/_constants";
import { Group, Text, Title } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

type Props = {};

const Timeline = (props: Props) => {
  const isMobile = useMediaQuery("(max-width: 768px)");

  if (isMobile) {
    return <MobileTimeline {...props} />;
  }

  return <FullScreenTimeline {...props} />;
};
const FullScreenTimeline = (props: Props) => {
  const rootRef = useRef<HTMLDivElement>(null);
  const whiteLineHeight = rootRef.current
    ? ((rootRef.current.clientHeight - 2 * 16 - 300) /
        rootRef.current.clientHeight) *
      100
    : "0";
  const { scrollYProgress } = useScroll({
    target: rootRef,
    offset: ["150px end", "end"],
  });

  const lineHeight = useTransform(
    scrollYProgress,
    [0, 1],
    ["0", `${whiteLineHeight}%`]
  );

  return (
    <div className={styles["root"]} ref={rootRef}>
      <div className={styles["line"]}></div>
      <motion.div
        style={{ height: lineHeight }}
        className={styles["line2"]}
      ></motion.div>
      <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
        {experience.map((exp, idx) => (
          <div
            key={exp.id}
            style={{
              display: "flex",
              justifyContent: "apart",
              gap: "0.5rem",
              flexDirection: idx % 2 === 0 ? "row" : "row-reverse",
            }}
          >
            <motion.div
              style={{
                height: "300px",
                width: "100%",
                background: "transparent",
                display: "flex",
                flexDirection: "column",
                alignItems: idx % 2 === 0 ? "flex-end" : "flex-start",
                gap: "0.1rem",
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, ease: "easeIn" }}
              viewport={{ margin: "-200px" }}
            >
              <Group gap="sm">
                <IconCalendar size="1rem" color="#ffffff50" />
                <Text size="xs" c="dimmed">
                  {exp.date}
                </Text>
              </Group>
              <Title order={2}>{exp.title}</Title>
              <Group gap="sm">
                <IconBuilding size="1rem" />
                <Text>{exp.company}</Text>
              </Group>
              <Group gap="sm" justify="space-between">
                <IconMapPin size="1rem" />
                <Text>{exp.location}</Text>
              </Group>
            </motion.div>
            <div
              style={{
                position: "relative",
                zIndex: 2,
                width: "fit-content",
                height: "fit-content",
                borderRadius: "50%",
                background: "#0b0b0b",
                padding: "0.5rem",
              }}
            >
              <motion.div
                initial={{ opacity: 0.05 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                viewport={{ margin: "-200px", once: true }}
              >
                <exp.icon size="2.5rem" />
              </motion.div>
            </div>
            <div style={{ width: "100%" }}></div>
          </div>
        ))}
      </div>
    </div>
  );
};
const MobileTimeline = (props: Props) => {
  const rootRef = useRef<HTMLDivElement>(null);
  return (
    <div className={styles["mobile-root"]} ref={rootRef}>
      <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
        {experience.map((exp, idx) => (
          <div
            key={exp.id}
            style={{
              display: "flex",
              justifyContent: "apart",
              gap: "0.5rem",
              flexDirection: "row-reverse",
            }}
          >
            <motion.div
              style={{
                height: "300px",
                width: "100%",
                background: "transparent",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "0.1rem",
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, ease: "easeIn" }}
              viewport={{ margin: "-200px" }}
            >
              <Group gap="sm">
                <IconCalendar size="1rem" color="#ffffff50" />
                <Text size="xs" c="dimmed">
                  {exp.date}
                </Text>
              </Group>
              <Title order={2}>{exp.title}</Title>
              <Group gap="sm">
                <IconBuilding size="1rem" />
                <Text>{exp.company}</Text>
              </Group>
              <Group gap="sm" justify="space-between">
                <IconMapPin size="1rem" />
                <Text>{exp.location}</Text>
              </Group>
            </motion.div>
            <div
              style={{
                position: "relative",
                zIndex: 2,
                width: "fit-content",
                height: "fit-content",
                borderRadius: "50%",
                background: "#0b0b0b",
                padding: "5px",
              }}
            >
              <motion.div
                initial={{ opacity: 0.5 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                viewport={{ margin: "-200px", once: true }}
              >
                <IconPoint size="1.5rem" color="#fff" />
              </motion.div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
