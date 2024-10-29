import { Box, Stack, Title, Text, AspectRatio, Flex } from "@mantine/core";
import classes from "./Projects.module.css";
import Image from "next/image";
import { IconExternalLink } from "@tabler/icons-react";
import Link from "next/link";

export default function Projects() {
  return (
    <Box mih={750} className={classes.mainContainer} mt={96}>
      <Stack align="center">
        <Title className={classes.mainTitle} id="Projects">
          Projects
        </Title>
        <Box className={classes.projectsContainer}>
          <Box className={classes.textContainer}>
            <Flex align="center" gap={12} my={12}>
              <Title order={2}>Fusion Bot</Title>
              <Link
                href="https://github.com/FustinCS/fusion-bot-web"
                passHref
                target="_blank"
              >
                <IconExternalLink size={24} />
              </Link>
            </Flex>
            <Text>
              Fusion Bot is a Discord Bot as well as a website that allows users
              to track their currently watching shows and movies. Users can then
              rate the shows after they are done. This was my first experience
              with creating a scalable backend that allowed me to use it for
              separate frontends. For example, in this project, I used Discord
              as a functional front end along with having a web variant as well.
              I implemented Discord Oauth with NextAuth as a way to allow users
              to modify their lists on both frontends.
            </Text>
          </Box>
          <Box className={classes.imageContainer}>
            <AspectRatio ratio={1 / 1}>
              <Image
                height={500}
                width={300}
                className={classes.projectImage}
                src="/fusion2.jpg"
                alt="Fusion Bot"
              />
            </AspectRatio>
          </Box>
        </Box>
        <Box className={classes.projectsContainer}>
          <Box className={classes.textContainer}>
          <Flex align="center" gap={12} my={12}>
              <Title order={2}>PrepPal</Title>
              <Link
                href="https://github.com/FustinCS/PrepPal"
                passHref
                target="_blank"
              >
                <IconExternalLink size={24} />
              </Link>
            </Flex>
            <Text>
              PrepPal is a web application that allows users generate meals
              based on the ingredients they input. This was my final project for
              my fellowship at Headstarter AI. Headstarter was my first time I
              used Next.js and I was able to learn a lot from this experience.
              It was also my first experience incorporating LLMs like OpenAI and
              Gemini to my projects! Overall, I am happy about this project, but
              looking back, it could have been way more polished.
            </Text>
          </Box>
          <Box className={classes.imageContainer}>
            <AspectRatio ratio={1 / 1}>
              <Image
                height={500}
                width={300}
                className={classes.projectImage}
                src="/preppal.jpg"
                alt="PrepPal"
              />
            </AspectRatio>
          </Box>
        </Box>
        <Box className={classes.projectsContainer}>
          <Box className={classes.textContainer}>
          <Flex align="center" gap={12} my={12}>
              <Title order={2}>Search Engine</Title>
              <Link
                href="https://github.com/FustinCS"
                passHref
                target="_blank"
              >
                <IconExternalLink size={24} />
              </Link>
            </Flex>
            <Text>
              My search engine was one of my class projects for UC Irvine. We
              built a search engine completely from scratch using Python. There
              was a lot of hurdles on the way in terms of technical
              difficulties, but I was able to learn a lot from this project. It
              was one of my first experiences with web scraping and working on a
              project of this caliber. I think this was one of the projects that
              really solidfied my skills and knowledge in programming.
            </Text>
          </Box>
          <Box className={classes.imageContainer}>
            <AspectRatio ratio={1 / 1}>
              <Image
                height={500}
                width={300}
                className={classes.projectImage}
                src="/searchengine.jpg"
                alt="Search Engine"
              />
            </AspectRatio>
          </Box>
        </Box>
      </Stack>
    </Box>
  );
}
