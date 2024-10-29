"use client";
import {
  Container,
  Group,
  Burger,
  Text,
  Button,
  Drawer,
  Stack,
  Title,
  Flex,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import classes from "./Header.module.css";
import { ThemeToggle } from "../ThemeToggle/ThemeToggle";
import Link from "next/link";
import { IconTools, IconPhone, IconFileDescription } from "@tabler/icons-react";

export function Header() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <header className={classes.header}>
      <Container size="md" className={classes.inner}>
        <Link href="/" passHref>
          <Text fw={700}>Justin Jue</Text>
        </Link>
        {/* Group for desktop links */}
        <Group gap={16} visibleFrom="xs">
        <Link href="https://drive.google.com/file/d/1khx8bB25q_A4n29uxfMA8C2m1X0vonxp/view?usp=sharing" passHref>
            <Button variant="subtle" color="green">
              Resume
            </Button>
          </Link>
          <Link href="#Projects" passHref>
            <Button variant="subtle" color="green">
              Projects
            </Button>
          </Link>
          <Link href="#Contact" passHref>
            <Button variant="subtle" color="green">
              Contact
            </Button>
          </Link>
          <ThemeToggle />
        </Group>
        <Group hiddenFrom="xs">
          <ThemeToggle />
          <Burger opened={opened} onClick={open} size="sm" />
          <Drawer
            opened={opened}
            onClose={close}
            padding="md"
            size="xs"
            position="top"
            title="Menu"
          >
            <Stack py={16} style={{borderTop: "1px solid white"}}>
              <Link href="#Projects" passHref onClick={close}>
                <Flex gap={16} align="center">
                  <IconTools size={24} />
                  <Title order={3}>Projects</Title>
                </Flex>
              </Link>
              <Link href="#Contact" passHref onClick={close}>
                <Flex gap={16} align="center">
                  <IconPhone size={24} />
                  <Title order={3}>Contact</Title>
                </Flex>
              </Link>
              <Link href="https://drive.google.com/file/d/1khx8bB25q_A4n29uxfMA8C2m1X0vonxp/view?usp=sharing" passHref onClick={close}>
                <Flex gap={16} align="center">
                  <IconFileDescription size={24} />
                  <Title order={3}>Resume</Title>
                </Flex>
              </Link>
            </Stack>
          </Drawer>
        </Group>
      </Container>
    </header>
  );
}
