import React from "react";
import styles from "./styles.module.scss";
import Marquee from "react-fast-marquee";
import { MantineSize, Text } from "@mantine/core";
import { IconComponents } from "@tabler/icons-react";

type Props = {
  text: string;
  textSize?: (string & {}) | MantineSize | undefined;
  iconSize?: string;
  textStrokeColor?: string | undefined;
  direction?: "left" | "right" | "up" | "down" | undefined;
};

const InfiniteScrollingText = ({
  text,
  textSize = "100px",
  iconSize = "2.5rem",
  textStrokeColor = "white",
  direction = "left",
}: Props) => {
  return (
    <Marquee autoFill style={{ height: "150px" }} direction={direction}>
      <Text
        className={styles.text}
        size={textSize}
        style={{
          WebkitTextStroke: "1px",
          WebkitTextStrokeColor: textStrokeColor,
        }}
      >
        {text}
      </Text>
      <IconComponents
        size={iconSize}
        color={textStrokeColor}
        style={{ margin: "0 30px", opacity: "0.5" }}
      />
    </Marquee>
  );
};

export default InfiniteScrollingText;
