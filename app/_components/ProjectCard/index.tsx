import {
  ActionIcon,
  Badge,
  Box,
  Group,
  Image,
  Stack,
  Text,
  Title,
  Tooltip,
} from "@mantine/core";
import React from "react";
import styles from "./styles.module.scss";
import { IconArrowUpRight, IconBrandGithub } from "@tabler/icons-react";
import { Variants, motion } from "framer-motion";
import { useMediaQuery } from "@mantine/hooks";

type Props = {
  project: {
    id: number;
    title: string;
    description: string;
    git_url: string;
    deployed_url: string;
    image_url: string;
    techs: string[];
  };
};

const ProjectCard = ({
  project: { image_url, title, description, git_url, deployed_url, techs },
}: Props) => {
  const isMobile = useMediaQuery("(max-width: 458px)");
  const showDescription = useMediaQuery("(max-width: 900px)");
  const buttonHoverVariants: Variants = {
    whileHover: {
      scale: 1.3,
      borderRadius: "50%",
      transition: {
        type: "spring",
        duration: 0.3,
        stiffness: 300,
      },
    },
  };
  return (
    <Box
      w={{ base: "auto", sm: 400, lg: 500 }}
      h={{ base: "auto", sm: 400, lg: 500 }}
      m="md"
      className={styles["card"]}
    >
      <Image
        src={image_url}
        width="100%"
        height="100%"
        alt="title"
        radius="lg"
        className={styles["image"]}
      />
      <Stack className={styles["overlay"]} p="lg">
        <Title order={2} ta="center">
          {title}
        </Title>
        <Stack flex={1} p="lg" gap="md">
          {!isMobile && (
            <Text lineClamp={showDescription ? 3 : 0}>{description}</Text>
          )}
          {!isMobile && <Text>Tech Stack:</Text>}
          {!isMobile && (
            <Group wrap="wrap" gap="sm">
              {techs.map((tech) => (
                <React.Fragment key={tech}>
                  <Badge
                    size="sm"
                    variant="gradient"
                    gradient={{ from: "blue", to: "cyan", deg: 90 }}
                  >
                    {tech}
                  </Badge>
                </React.Fragment>
              ))}
            </Group>
          )}
        </Stack>
        <Group justify="space-evenly" align="center">
          <Tooltip label="Open Github">
            <ActionIcon
              variant="gradient"
              size="xl"
              aria-label="Gradient action icon"
              gradient={{ from: "blue", to: "cyan", deg: 90 }}
              component={motion.a}
              variants={buttonHoverVariants}
              whileHover="whileHover"
              href={git_url}
              target="_blank"
            >
              <IconBrandGithub />
            </ActionIcon>
          </Tooltip>
          <Tooltip label="View Live">
            <ActionIcon
              variant="gradient"
              size="xl"
              aria-label="Gradient action icon"
              gradient={{ from: "blue", to: "cyan", deg: 90 }}
              component={motion.a}
              variants={buttonHoverVariants}
              whileHover="whileHover"
              href={deployed_url}
              target="_blank"
            >
              <IconArrowUpRight />
            </ActionIcon>
          </Tooltip>
        </Group>
      </Stack>
    </Box>
  );
};

export default ProjectCard;
