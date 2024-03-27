import styles from "./styles.module.scss";
import InfiniteScrollingText from "@/app/_components/InfiniteScrollingText";
import { Space } from "@mantine/core";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

type Props = {};

const About = (props: Props) => {
  const { scrollYProgress } = useScroll();
  const width = useTransform(scrollYProgress, [0, 1], ["85%", "100%"]);

  return (
    <motion.section
      className={styles.root}
      style={{ width, background: "white" }}
    >
      <Space h="100px" />
      <InfiniteScrollingText
        text="About Me"
        textSize="100px"
        iconSize="2.5rem"
        color="#00000088"
      />
      <Space h="100px" />
    </motion.section>
  );
};

export default About;
