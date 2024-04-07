"use client";
import InfiniteScrollingText from "@/app/_components/InfiniteScrollingText";
import { Space } from "@mantine/core";
import React from "react";
import "react-vertical-timeline-component/style.min.css";
import styles from "./styles.module.scss";
import Timeline from "@/app/_components/Timeline";

type Props = {};

const Experience = (props: Props) => {
  return (
    <section className={styles.root} id="history">
      <Space h={100} />
      <InfiniteScrollingText text="Work History" textStrokeColor="#ffffff50" />
      <Space h={100} />
      <Timeline />
    </section>
  );
};

export default Experience;
