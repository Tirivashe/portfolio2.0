"use client";
import InfiniteScrollingText from "@/app/_components/InfiniteScrollingText";
import {
  Divider,
  Flex,
  Group,
  Paper,
  Space,
  Stack,
  Text,
  Timeline,
  Title,
} from "@mantine/core";
import React, { LegacyRef, useRef } from "react";
import "react-vertical-timeline-component/style.min.css";
import styles from "./styles.module.scss";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { experience } from "@/app/_constants";
import { motion, useScroll } from "framer-motion";

type Props = {};

const Experience = (props: Props) => {
  const timelineElementRefs = useRef<VerticalTimelineElement[] | null[]>([]);
  const modifiedExperience = experience.map((exp, idx) => ({
    ...exp,
    ref: timelineElementRefs.current[idx] as
      | LegacyRef<VerticalTimelineElement>
      | undefined,
  }));

  return (
    <section className={styles.root}>
      <Space h={100} />
      <InfiniteScrollingText text="Experience" textStrokeColor="#ffffff50" />
      <Space h={100} />
      <VerticalTimeline lineColor="#fff" animate={true}>
        {modifiedExperience.map(
          ({ id, title, company, date, location, icon, ref }, idx) => (
            <React.Fragment key={id}>
              <VerticalTimelineElement
                visible={true}
                contentStyle={{
                  padding: 0,
                  margin: 0,
                  background: "#0b0b0e",
                  color: "white",
                  border: "1px solid #0b0b0e",
                  borderRadius: 0,
                }}
                contentArrowStyle={{
                  display: "none",
                }}
                iconStyle={{ background: "#0b0b0e", color: "#fff" }}
                icon={React.createElement(icon)}
                dateClassName={styles["date"]}
              >
                <Paper
                  w="100%"
                  h="inherit"
                  p="sm"
                  style={{
                    background: "#0b0b0e",
                    color: "#fff",
                    textAlign: idx % 2 === 0 ? "end" : "start",
                  }}
                  component={motion.div}
                  initial={{ opacity: 0, x: idx % 2 === 0 ? -100 : 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ amount: "all", once: true }}
                >
                  <Text fz="xs" m={0} c="dimmed">
                    {date}
                  </Text>
                  <Text fz="h2" fw="bolder" my={0}>
                    {title}
                  </Text>
                  <Text fz="h4" fw="bold" my={0} size="lg">
                    {company}
                  </Text>
                  <Text fz="h5" m={0}>
                    {location}
                  </Text>
                </Paper>
              </VerticalTimelineElement>
            </React.Fragment>
          )
        )}
      </VerticalTimeline>
    </section>
  );
};

export default Experience;

{
  /* <VerticalTimeline lineColor="#fff" animate={true}>
          {experience.map(({ id, title, company, date, location }) => (
            <React.Fragment key={id}>
              <VerticalTimelineElement
                visible={true}
                date={date}
                contentStyle={{
                  background: "rgb(33, 150, 243)",
                  color: "#000",
                }}
                contentArrowStyle={{
                  borderRight: "7px solid  rgb(33, 150, 243)",
                }}
              >
                <h3>{title}</h3>
                <Text fw="bold" size="lg">
                  {company}
                </Text>
                <Text>{location}</Text>
              </VerticalTimelineElement>
            </React.Fragment>
          ))}
        </VerticalTimeline> 
        
        
        
        <Paper shadow="sm" withBorder p="xl">
              <Title>{title}</Title>
              <Text>{company}</Text>
              <Text>{location}</Text>
              <Text>{date}</Text>
            </Paper>

            <div className={styles.timeline}>
        {experience.map(({ id, title, company, date, location }, idx) => (
          <React.Fragment key={id}>
            <Flex
              direction={idx % 2 === 0 ? "row" : "row-reverse"}
              justify="space-between"
              align="center"
              gap={10}
            >
              <Paper style={{ flex: 1 }}>
                <Title>{title}</Title>
                <Text>{company}</Text>
                <Text>{location}</Text>
                <Text>{date}</Text>
              </Paper>
              <Divider orientation="vertical" />
              <div className={styles["empty"]} />
            </Flex>
          </React.Fragment>
        ))}
      </div>
        */
}
