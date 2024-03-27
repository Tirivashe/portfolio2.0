import React from "react";
import styles from "./styles.module.scss";
import Marquee from "react-fast-marquee";
import { Text } from "@mantine/core";
import { IconComponents } from "@tabler/icons-react";

type Props = {
  text: string;
};

const InfiniteScrollingText = ({ text }: Props) => {
  return (
    <Marquee autoFill>
      <Text className={styles.text}>{text}</Text>
      <IconComponents
        size="3rem"
        style={{ margin: "0 30px", opacity: "0.5" }}
      />
    </Marquee>
  );
};

export default InfiniteScrollingText;
