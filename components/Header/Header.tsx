'use client'
import { Container, Group, Burger, Text, Button} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import classes from './Header.module.css';
import { ThemeToggle } from '../ThemeToggle/ThemeToggle';
import Link from 'next/link';

export function Header() {
  const [opened, { toggle }] = useDisclosure(false);

  return (
    <header className={classes.header}>
      <Container size="md" className={classes.inner}>
        <Text fw={700}>Justin Jue</Text>
        <Group gap={5} visibleFrom="xs">
          <Link href="#Projects">
            <Button variant="subtle" color="green">Projects</Button>
          </Link>
          <ThemeToggle /> 
        </Group>
        <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
      </Container>
    </header>
  );
}