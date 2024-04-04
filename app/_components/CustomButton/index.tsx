import { Button, ButtonProps } from "@mantine/core";
import React from "react";
import styles from "./styles.module.scss";
import { motion } from "framer-motion";

type Props = ButtonProps & {
  text: string;
};

const CustomButton = ({
  text,
  ...rest
}: Props & React.ComponentPropsWithoutRef<"button">) => {
  return (
    <Button
      component={motion.button}
      {...(rest as any)}
      style={{ backgroundColor: "var(--mantine-color-gray-9)" }}
      classNames={{
        root: styles.root,
        label: styles.label,
        inner: styles.inner,
      }}
      whileHover={{
        backgroundColor: "#64bbcd",
        scale: 1.1,
        transition: {
          duration: 0.1,
          ease: "easeInOut",
        },
      }}
      whileTap={{
        scale: 0.9,
      }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      {text}
    </Button>
  );
};

export default CustomButton;
