import { Box, Typography, Grid, Paper } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import StorageIcon from '@mui/icons-material/Storage';
import CloudIcon from '@mui/icons-material/Cloud';

const skills = [
  {
    title: 'Frontend Development',
    icon: <CodeIcon fontSize="large" />,
    items: ['React', 'Next.js', 'TypeScript', 'Material-UI'],
  },
  {
    title: 'Backend Development',
    icon: <StorageIcon fontSize="large" />,
    items: ['Node.js', 'Express', 'PostgreSQL', 'REST APIs'],
  },
  {
    title: 'DevOps & Cloud',
    icon: <CloudIcon fontSize="large" />,
    items: ['AWS', 'CI/CD', 'Docker', 'Kubernetes'],
  },
];

export default function Skills() {
  return (
    <Box sx={{ py: 8 }}>
      <Typography variant="h3" component="h2" align="center" gutterBottom>
        Skills
      </Typography>
      <Grid container spacing={4} sx={{ mt: 2 }}>
        {skills.map((skill) => (
          <Grid item xs={12} md={4} key={skill.title}>
            <Paper
              sx={{
                p: 3,
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              {skill.icon}
              <Typography variant="h6" component="h3" sx={{ mt: 2, mb: 2 }}>
                {skill.title}
              </Typography>
              {skill.items.map((item) => (
                <Typography key={item} color="text.secondary">
                  {item}
                </Typography>
              ))}
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}