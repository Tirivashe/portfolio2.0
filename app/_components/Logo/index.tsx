import { Image, MantineStyleProp } from "@mantine/core";
import React from "react";
import { motion } from "framer-motion";

type Props = {
  styles?: MantineStyleProp;
};
const Logo = ({ styles }: Props) => {
  return (
    <Image
      src="/logo.svg"
      alt="mylogo"
      style={{ ...styles }}
      component={motion.img}
      animate={{ rotate: 360 }}
      transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
    />
  );
};

export default Logo;
