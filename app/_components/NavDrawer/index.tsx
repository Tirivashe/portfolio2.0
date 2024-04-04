import { navPaths } from "@/app/_constants";
import { scrollToSection } from "@/utils";
import { Group, Stack, Text } from "@mantine/core";
import React from "react";

type Props = {
  close: () => void;
};

const NavDrawer = ({ close }: Props) => {
  return (
    <Stack>
      <Stack gap="lg">
        {navPaths.map((path, idx) => (
          <React.Fragment key={path}>
            <Group gap="sm" align="center">
              <Text span fz="1rem" fw="bold" style={{ rotate: "-90deg" }}>{`0${
                idx + 1
              }`}</Text>
              <Text
                size="xl"
                fw="bolder"
                fz="2rem"
                onClick={() => {
                  close();
                  scrollToSection(path);
                }}
              >
                {path}
              </Text>
            </Group>
          </React.Fragment>
        ))}
      </Stack>
    </Stack>
  );
};

export default NavDrawer;
