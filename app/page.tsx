import { Header } from "@/components/Header/Header";
import MainContent from "@/components/MainContent/MainContent";
import Projects from "@/components/Projects/Projects";
import { Box } from "@mantine/core";

export default function Home() {
  return (
    <Box>
      <Header />
      <MainContent />
      <Projects />
    </Box>
  );
}
