import React from "react";
import styles from "./styles.module.scss";
import Marquee from "react-fast-marquee";
import { MantineSize, Text } from "@mantine/core";
import { IconComponents } from "@tabler/icons-react";

type Props = {
  text: string;
  textSize?: (string & {}) | MantineSize | undefined;
  iconSize?: string;
  color?: string | undefined;
};

const InfiniteScrollingText = ({
  text,
  textSize = "md",
  iconSize = "3rem",
  color = "white",
}: Props) => {
  return (
    <Marquee autoFill style={{ overflow: "hidden" }}>
      <Text
        className={styles.text}
        size={textSize}
        style={{
          WebkitTextStroke: "1px",
          WebkitTextStrokeColor: color,
        }}
      >
        {text}
      </Text>
      <IconComponents
        size={iconSize}
        color={color}
        style={{ margin: "0 30px", opacity: "0.5" }}
      />
    </Marquee>
  );
};

export default InfiniteScrollingText;
