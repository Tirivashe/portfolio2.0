import { Center, Text } from "@mantine/core";
import React from "react";
import styles from "./styles.module.scss";
import { useScramble } from "use-scramble";
import { scrollToSection } from "@/utils";

type Props = {
  path: string;
};

const NavLinkItem = ({ path }: Props) => {
  const { ref, replay } = useScramble({
    text: path,
    speed: 1,
    tick: 1,
    overflow: true,
    scramble: 5,
    range: [97, 122],
  });

  return (
    // ? TODO: custom width seems hacky but this will do for now
    <Center w={{ md: 60 }}>
      <Text
        ta="center"
        size="sm"
        className={styles["link"]}
        ref={ref}
        onMouseOver={replay}
        onClick={() => scrollToSection(path)}
      />
    </Center>
  );
};

export default NavLinkItem;
