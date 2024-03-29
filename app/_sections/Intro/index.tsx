"use client";
import React from "react";
import { motion } from "framer-motion";
import { useScramble } from "use-scramble";
import styles from "./styles.module.scss";
import { Text } from "@mantine/core";
import Loader from "@/app/_components/Loader";

const Intro = () => {
  //! TODO: Fix the loading intro please!!
  const { ref } = useScramble({
    text: "LOADING THE WEBSITE",
    scramble: 20,
  });
  return (
    <motion.div
      className={styles.intro}
      initial={{ top: 0, left: 0 }}
      animate={{ top: "-100%" }}
      transition={{ duration: 0.5, delay: 2 }}
    >
      <div className={styles.container}>
        <Loader />
        <Text
          size="md"
          fw={500}
          c="white"
          style={{ letterSpacing: "0.3em" }}
          ref={ref}
        />
      </div>
    </motion.div>
  );
};

export default Intro;
