import React, { CSSProperties } from "react";
import styles from "./styles.module.scss";
import { motion } from "framer-motion";

type Props = {
  styles?: CSSProperties;
};

const Loader = ({ styles: loaderStyles = {} }: Props) => {
  return (
    <motion.div
      className={styles.loader}
      style={{ ...loaderStyles }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    />
  );
};
export default Loader;
