import {
  Burger,
  Button,
  Group,
  GroupProps,
  Text,
  createPolymorphicComponent,
} from "@mantine/core";
import Logo from "../Logo";
import styles from "./styles.module.scss";
import { motion, useScroll, useTransform } from "framer-motion";
import { useScramble } from "use-scramble";
import { socials } from "@/app/_constants";
import Loader from "../Loader";
const PGroup = createPolymorphicComponent<"nav", GroupProps>(Group);

type Props = {};

const Header = (props: Props) => {
  const navPaths = ["Home", "About", "Experience", "Projects", "Contact"];
  const { scrollY } = useScroll();
  const navs = navPaths.map((path) => {
    const { ref, replay } = useScramble({
      text: path,
      speed: 1,
      tick: 1,
      overflow: true,
      scramble: 5,
      chance: 0.5,
      range: [97, 122],
    });
    return { ref, replay, name: path };
  });

  const bgColor = useTransform(
    scrollY,
    [0, 100],
    ["rgba(0,0,0,0)", "rgba(0, 0, 0, 0.6)"]
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
        visibleFrom="sm"
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
        {navs.map((path) => (
          <Text
            span
            key={path.name}
            ref={path.ref}
            onMouseOver={path.replay}
            className={styles.link}
            size="sm"
          />
        ))}
      </PGroup>
      <Group gap="xl" visibleFrom="lg">
        <Group gap="lg">
          <Loader
            styles={{
              width: "8px",
              background: "var(--mantine-color-green-4)",
              animation: "none",
            }}
          />
          <Text c="green.4">Open to work</Text>
        </Group>
        <Group justify="space-between" align="center">
          {socials.map((social) => (
            <a href={social.url} target="_blank" key={social.name}>
              <social.icon
                className={styles.icon}
                data-name={social.name}
                size="2.3rem"
              />
            </a>
          ))}
        </Group>
      </Group>
      <Burger
        opened={false}
        size="md"
        hiddenFrom="sm"
        className={styles.burger}
      />
    </Group>
  );
};

export default Header;
