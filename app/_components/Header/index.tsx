import {
  Button,
  Group,
  GroupProps,
  createPolymorphicComponent,
} from "@mantine/core";
import Logo from "../Logo";
import styles from "./styles.module.scss";
import { motion, useScroll, useTransform } from "framer-motion";
const PGroup = createPolymorphicComponent<"nav", GroupProps>(Group);

type Props = {};

const Header = (props: Props) => {
  const navPaths = ["Home", "About", "Experience", "Projects", "Contact"];
  const { scrollY } = useScroll();

  const bgColor = useTransform(
    scrollY,
    [0, 100],
    ["rgba(0,0,0,0)", "rgba(255, 255, 255, 0.1)"]
  );
  const height = useTransform(scrollY, [0, 100], [100, 40]);
  const paddingHorizontal = useTransform(scrollY, [0, 100], [0, 15]);
  const borderRadius = useTransform(scrollY, [0, 100], [0, 18]);
  const border = useTransform(
    scrollY,
    [0, 100],
    ["none", "1px solid rgba(255, 255, 255, 0.2)"]
  );
  const boxShadow = useTransform(
    scrollY,
    [0, 100],
    ["none", "0 4px 30px rgba(0, 0, 0, 0.4)"]
  );
  const backdropFilter = useTransform(
    scrollY,
    [0, 100],
    ["none", "blur(18px)"]
  );

  return (
    <Group
      component="header"
      justify="space-between"
      align="center"
      px="md"
      pos="relative"
      className={styles.header}
    >
      <Button>Logo</Button>
      <PGroup
        className={styles.nav}
        justify="space-between"
        align="center"
        gap="lg"
        component={motion.nav}
        style={{
          backgroundColor: bgColor as unknown as string,
          height: height as unknown as string,
          paddingLeft: paddingHorizontal as unknown as number,
          paddingRight: paddingHorizontal as unknown as number,
          borderRadius: borderRadius as unknown as number,
          border: border as unknown as string,
          backdropFilter: backdropFilter as unknown as string,
          boxShadow: boxShadow as unknown as string,
        }}
      >
        {navPaths.map((path) => (
          <a key={path} className={styles.link}>
            {path}
          </a>
        ))}
      </PGroup>
      <Button>I am a button</Button>
    </Group>
  );
};

export default Header;
