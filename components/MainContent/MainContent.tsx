"use client";
import { Box, Group, Stack, Text, Title } from "@mantine/core";
import Typewriter from "typewriter-effect";
import classes from "./MainContent.module.css";
import { LinkedInLogoIcon, GitHubLogoIcon } from "@radix-ui/react-icons";
import { IconFileDescription, IconMail } from "@tabler/icons-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function MainContent() {
  return (
    
    <Box h={500} className="flex items-center justify-center p-8">
      <motion.div
      initial={{ opacity: 0, y: 20 }}  // Start faded out and below position
      animate={{ opacity: 1, y: 0 }}   // Fade in and move up to default position
      transition={{ duration: 0.5, ease: "easeOut" }}  // Customize the transition
    >
      <Stack gap={0}>
        <Title mb={16} className={classes.mainTitle}>
          Hi, I&apos;m{" "}
          <Text
            component="span"
            size="xl"
            fw={900}
            variant="gradient"
            gradient={{
              from: "rgba(172, 255, 117, 1)",
              to: "rgba(190, 255, 168, 1)",
              deg: 90,
            }}
            className={classes.mainTitle}
          >
            Justin Jue
          </Text>{" "}
          👋
        </Title>
        <Text className={classes.secondaryText}>
          I&apos;m a software engineer with an interest in
        </Text>
        <Text component="div" h={50} className={classes.secondaryText}>
        <Typewriter
  onInit={(typewriter) => {
    typewriter
      .changeDelay(30) // Speed up typing; 50ms delay between characters
      .typeString("full-stack web development")
      .start();
  }}
/>
        </Text>

        {/* All Contact Options*/}
        <Group justify="center" align="center" mt={16}>
          <Link
            href="https://www.linkedin.com/in/justinjue/"
            className={classes.linkedin}
            target="_blank"
          >
            <LinkedInLogoIcon className="h-8 w-8" />
          </Link>
          <Link
            href="https://github.com/FustinCS"
            className={classes.github}
            target="_blank"
          >
            <GitHubLogoIcon className="h-8 w-8" />
          </Link>
          <Link
            href="mailto:justinjue03@gmail.com"
            className={classes.mail}
            target="_blank"
          >
            <IconMail className="h-8 w-8" />
          </Link>
          <Link
            href="https://drive.google.com/file/d/1khx8bB25q_A4n29uxfMA8C2m1X0vonxp/view?usp=sharing"
            className={classes.resume}
            target="_blank"
          >
            <IconFileDescription className="h-8 w-8" />
          </Link>
        </Group>
      </Stack>
      </motion.div>
    </Box>
  );
}
