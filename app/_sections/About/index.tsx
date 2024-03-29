import { summary } from "@/app/_constants";
import styles from "./styles.module.scss";
import InfiniteScrollingText from "@/app/_components/InfiniteScrollingText";
import { Container, Grid, Space, Stack, Text, Title } from "@mantine/core";
import { Variants, motion, useScroll, useTransform } from "framer-motion";
import TechnicalSkills from "../TechnicalSkills";
import CustomButton from "@/app/_components/CustomButton";

type Props = {};

const About = (props: Props) => {
  const { scrollYProgress } = useScroll();
  const width = useTransform(scrollYProgress, [0, 0.2], ["85%", "100%"]);

  const summaryTextVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.section className={styles.root} style={{ width }}>
      <Space h="100px" />
      <InfiniteScrollingText text="About Me" textStrokeColor="#00000090" />
      <Space h="100px" />
      <Container className={styles.container}>
        <Title order={4} py="md" fz="16px" c="dimmed">
          GLAD YOU ARE HERE!
        </Title>
        <Grid gutter={{ base: "md", md: "5rem" }}>
          <Grid.Col span={{ base: 12, md: 8 }}>
            <Text
              fz={{ base: "1.8rem", sm: "2rem", md: "2.2rem", lg: "2.7rem" }}
              fw="bold"
              style={{ lineHeight: "1.2" }}
              component={motion.p}
              initial="hidden"
              whileInView="visible"
              transition={{ staggerChildren: 0.02 }}
              viewport={{ once: true }}
            >
              {summary.split(" ").map((word) => (
                <motion.span
                  style={{ display: "inline-block", marginLeft: "0.3em" }}
                  variants={summaryTextVariants}
                  key={word}
                >
                  {word}
                </motion.span>
              ))}
            </Text>
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 4 }}>
            <Stack align="flex-end" gap="md">
              <Text ta="center" fz="18px">
                Main experience in frontend web development. Also experienced in
                mobile development in React Native and native Android
                development, and backend development in Go and TypeScript. Web3
                student and enthusiast
              </Text>
              <CustomButton text="Let's Chat" />
            </Stack>
          </Grid.Col>
        </Grid>
      </Container>
      <Space h="4rem" />
      <TechnicalSkills />
    </motion.section>
  );
};

export default About;
