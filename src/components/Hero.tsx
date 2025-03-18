"use client";

import { Box, Typography, Container, Button } from "@mui/material";
import { useColorMode } from "@/components/theme-provider";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { useTheme } from "@mui/material/styles";

export default function Hero() {
  const theme = useTheme();
  const { toggleColorMode } = useColorMode();

  return (
    <Box
      sx={{
        bgcolor: 'background.default',
        pt: 8,
        pb: 6,
        position: 'relative',
      }}
    >
      <Button
        onClick={toggleColorMode}
        sx={{ position: 'absolute', top: 16, right: 16 }}
      >
        {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
      </Button>
      <Container maxWidth="sm">
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
        >
          John Doe
        </Typography>
        <Typography variant="h5" align="center" color="text.secondary" paragraph>
          Freelance Software Engineer
        </Typography>
        <Typography variant="body1" align="center" color="text.secondary" paragraph>
          Specialized in building exceptional digital experiences. With expertise in
          full-stack development, I help businesses transform their ideas into reality.
        </Typography>
      </Container>
    </Box>
  );
}
