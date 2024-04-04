import { Center, Text } from "@mantine/core";
import React from "react";
import styles from "./styles.module.scss";
import { useScramble } from "use-scramble";

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

  const scrollToSection = () => {
    const sectionId = path.toLowerCase();
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({ behavior: "smooth", top: section.offsetTop });
    }
  };
  return (
    // ? TODO: custom width seems hacky but this will do for now
    <Center w={{ md: 60 }}>
      <Text
        ta="center"
        size="sm"
        className={styles["link"]}
        ref={ref}
        onMouseOver={replay}
        onClick={scrollToSection}
      />
    </Center>
  );
};

export default NavLinkItem;
