import React from "react";
import styles from "./styles.module.css";
import { motion } from "framer-motion";

const Loader = () => {
  return (
    <motion.div
      className={styles.loader}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    />
  );
};

export default Loader;
