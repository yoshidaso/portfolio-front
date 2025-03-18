import { Box, Container } from '@mui/material';
import Hero from '@/components/Hero';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <Box component="main">
      <Hero />
      <Container maxWidth="lg">
        <Skills />
        <Projects />
        <Contact />
      </Container>
    </Box>
  );
}
