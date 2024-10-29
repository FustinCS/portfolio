import { Container, Group, Text } from '@mantine/core';
import { IconMail, IconFileDescription } from '@tabler/icons-react';
import classes from './Footer.module.css';
import Link from 'next/link';
import { GitHubLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons';

export function Footer() {
  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
      <Text fw={700} p={16}>Justin Jue</Text>
      <Group justify="center" align="center">
          <Link
            href="https://www.linkedin.com/in/justinjue/"
            className={classes.linkedin}
            target="_blank"
            passHref
          >
            <LinkedInLogoIcon className="h-8 w-8" />
          </Link>
          <Link
            href="https://github.com/FustinCS"
            className={classes.github}
            target="_blank"
            passHref
          >
            <GitHubLogoIcon className="h-8 w-8" />
          </Link>
          <Link
            href="mailto:justinjue03@gmail.com"
            className={classes.mail}
            target="_blank"
            passHref
          >
            <IconMail className="h-8 w-8" />
          </Link>
          <Link
            href="https://drive.google.com/file/d/1khx8bB25q_A4n29uxfMA8C2m1X0vonxp/view?usp=sharing"
            className={classes.resume}
            target="_blank"
            passHref
          >
            <IconFileDescription className="h-8 w-8" />
          </Link>
        </Group>
      </Container>
    </div>
  );
}